<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/4 0004
 * Time: 上午 10:57
 */

namespace app\admin\controller;


use cmf\controller\AdminBaseController;
use app\admin\model\FilesModel;
use app\admin\model\FilesCategoryModel;
use tree\Tree;
use app\portal\model\PortalPostModel;

class FilesController extends AdminBaseController
{
    public function index()
    {
        $FilesModel = new FilesModel();
        $keyword = $this->request->param('keyword/s','');
        $where = [];
        empty($keyword)?:$where = ['f.name' => ['Like','%'.$keyword.'%']];
        $categories = $FilesModel->alias('f')->field('f.*,fc.grade,fc.class,fc.parent_id')->join('__FILES_CATEGORY__ fc','fc.id=f.cid')->where($where)->paginate(15);
        $this->assign('categories', $categories->toArray());
        $this->assign('page', $categories->render());
        return $this->fetch();
    }

    /*
     * 文件添加
     */
    public function add()
    {
        $FilesCategoryModel = new FilesCategoryModel();
        $categories_tree = $FilesCategoryModel->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';
        $newCategories = [];
        foreach ($categories_tree as $item) {
            array_push($newCategories, $item);
        }
        $tree->init($newCategories);
        $str     = '<option value=\"{$id}\" >{$spacer}{$grade}/{$class}</option>';
        $treeStr = $tree->getTree(0, $str);
        $this->assign('categories_tree', $treeStr);
        return $this->fetch();
    }

    /*
     * 文件添加保存
     */
    public function addPost()
    {
        $rule = [
            'cid' => 'require',
//            'passwd' => 'require',
//            'name' => 'require',
//            'src' => 'require',
        ];
        $message = [
            'cid.require' => '请选择分类',
//            'passwd.require' => '密码不能为空',
//            'name.require' => '文件名不能为空',
//            'src.require' => '请上传文件',
        ];
        $data = $this->request->param('post/a',[]);
        $Files = new FilesModel();
        $where = [];
        $where['cid'] = $data['cid'];
        empty($data['passwd'])?:$where['passwd'] = $data['passwd'];
        if($Files->where($where)->count()) $this->error('已存在相同记录');
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['admin'] = session('name');
//        $data['size'] = filesize('upload/'.$data['src']);
//        $data['file_type'] = explode('.',$data['src']);
//        $data['file_type'] = empty($data['file_type'])?'':end($data['file_type']);
//        $data['content'] = htmlspecialchars(cmf_replace_content_file_url(htmlspecialchars_decode($data['content']),true));
        $param = $this->request->param();
        if (!empty($param['photo_names']) && !empty($param['photo_urls'])) {
            $data['more']['photos'] = [];
            foreach ($param['photo_urls'] as $key => $url) {
                $photoUrl = cmf_asset_relative_url($url);
                array_push($data['more']['photos'], ["url" => $photoUrl, "name" => $param['photo_names'][$key]]);
            }
        }

        if (!empty($param['file_names']) && !empty($param['file_urls'])) {
            $data['more']['files'] = [];
            foreach ($param['file_urls'] as $key => $url) {
                $fileUrl = cmf_asset_relative_url($url);
                array_push($data['more']['files'], ["url" => $fileUrl, "name" => $param['file_names'][$key]]);
            }
        }
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $Files->isUpdate(false)->create($data);
        $this->success('添加成功','index');
    }

    /*
     * 文件编辑
     */
    public function edit()
    {
        $id = $this->request->param('id/d',0);

        $Files = new FilesModel();
        $file = $Files->where(['id'=>$id])->find()->toArray();
        $FilesCategoryModel = new FilesCategoryModel();
        $categories_tree = $FilesCategoryModel->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';
        $newCategories = [];
        foreach ($categories_tree as $item) {
            $item['selected'] = $file['cid'] == $item['id'] ?'selected':'';
            array_push($newCategories, $item);
        }
        $tree->init($newCategories);
        $str     = '<option value=\"{$id}\" {$selected}>{$spacer}{$grade}/{$class}</option>';
        $treeStr = $tree->getTree(0, $str);
//        $file['content'] = cmf_replace_content_file_url(htmlspecialchars_decode($file['content']));
        $this->assign('categories_tree', $treeStr);
        $this->assign($file);
        return $this->fetch();
    }

    /*
     * 文件编辑保存
     */
    public function editPost()
    {
        $rule = [
            'id' => 'require',
            'cid' => 'require',
//            'passwd' => 'require',
//            'name' => 'require',
//            'src' => 'require',
        ];
        $message = [
            'id.require' => '缺少关键参数',
            'cid.require' => '请选择分类',
//            'passwd.require' => '密码不能为空',
//            'name.require' => '文件名不能为空',
//            'src.require' => '请上传文件',
        ];
        $data = $this->request->param('post/a',[]);
        $check_re = $this->validate($data,$rule,$message);
//        $data['size'] = filesize('upload/'.$data['src']);
//        $data['file_type'] = explode('.',$data['src']);
//        $data['file_type'] = empty($data['file_type'])?'':end($data['file_type']);
//        $data['content'] = htmlspecialchars(cmf_replace_content_file_url(htmlspecialchars_decode($data['content']),true));
        if($check_re!==true) $this->error($check_re);
        $param = $this->request->param();
        if (!empty($param['photo_names']) && !empty($param['photo_urls'])) {
            $data['more']['photos'] = [];
            foreach ($param['photo_urls'] as $key => $url) {
                $photoUrl = cmf_asset_relative_url($url);
                array_push($data['more']['photos'], ["url" => $photoUrl, "name" => $param['photo_names'][$key]]);
            }
        }

        if (!empty($param['file_names']) && !empty($param['file_urls'])) {
            $data['more']['files'] = [];
            foreach ($param['file_urls'] as $key => $url) {
                $fileUrl = cmf_asset_relative_url($url);
                array_push($data['more']['files'], ["url" => $fileUrl, "name" => $param['file_names'][$key]]);
            }
        }
        $Files = new FilesModel();
        $Files->update($data);
        $this->success('保存成功','index');
    }

    /*
     * 文件删除
     */
    public function delete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',0);
        $Files = new FilesModel();
        if(!empty($id) && $Files->where(['id'=>$id,'type' => 'about'])->delete() || !empty($ids) && $Files->where(['id'=>['IN',implode(',',$ids)],'type' => 'about'])->delete())
            $this->success('删除成功','index');
    }

    /*
     * 文件分类
     */
    public function fileCategory()
    {
        $FilesCategoryModel = new FilesCategoryModel();
        $keyword = $this->request->param('keyword/s','');
        $where = ['parent_id'=>0];
        empty($keyword)?:$where['name'] = ['Like','%'.$keyword.'%'];
        $categories = $FilesCategoryModel->where($where)->select()->toArray();
        $this->assign('categories', $categories);
        return $this->fetch();
    }

    /*
     * 文件分类添加
     */
    public function fileCategoryAdd()
    {
        return $this->fetch();
    }

    /*
     * 文件分类添加保存
     */
    public function fileCategoryAddPost()
    {
        $rule = [
            'grade' => 'require',
//            'admin' => 'require',
        ];
        $message = [
            'grade.require' => '年级不能为空',
//            'admin.require' => '请重新登录',
        ];
        $data = [];
        $data['grade'] = $this->request->param('grade/s','');
        $data['admin'] = session('name');
        $data['create_date'] = date('Y-m-d H:i:s');
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $FilesCategory = new FilesCategoryModel();
        if($FilesCategory->where(['grade'=>$data['grade'],'parent_id'=>0])->count())
            $this->error('已存在相同的年级');
        if($FilesCategory->fileCategoryAdd($data)===true)
            $this->success('保存成功','fileCategory');
    }

    /*
     * 文件分类编辑
     */
    public function fileCategoryEdit()
    {
        $id = $this->request->param('id/d',0);
        $FilesCategory = new FilesCategoryModel();
        $data = $FilesCategory->where(['id'=>$id])->find()->toArray();
        $this->assign($data);
        return $this->fetch();
    }

    /*
     * 文件分类编辑保存
     */
    public function fileCategoryEditPost()
    {
        $rule = [
            'id' => 'require',
            'grade' => 'require',
//            'admin' => 'require',
        ];
        $message = [
            'id.require' => '缺少关键参数',
            'grade.require' => '年级不能为空',
//            'admin.require' => '请重新登录',
        ];
        $data = [];
        $data['id'] = $this->request->param('id/d',0);
        $data['grade'] = $this->request->param('grade/s','');
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $FilesCategory = new FilesCategoryModel();
        if($FilesCategory->where(['grade'=>$data['grade'],'parent_id'=>0,'id'=>['neq',$data['id']]])->count())
            $this->error('已存在相同的年级');
        $FilesCategory->update($data);
        $this->success('保存成功','fileCategory');
    }

    /*
     * 文件分类删除
     */
    public function fileCategoryDelete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',[]);
        $FilesCategory = new FilesCategoryModel();
        $Files = new FilesModel();
        if(!empty($id))
        {
            !$Files->where(['cid'=>$id])->count() || $this->error('分类下存在文件');
            if($id && $FilesCategory->where(['parent_id'=>$id])->count())
            {
                $this->error('分类下存在科目');
            }
            if($id && $FilesCategory->where(['id'=>$id])->delete())
            {
                $this->success('删除成功');
            }
        }
        if(!empty($ids))
        {
            !$Files->where(['cid'=>['IN',implode(',',$ids)]])->count() || $this->error('分类下存在文件');
            foreach ($ids as $i)
            {
                !$FilesCategory->where(['parent_id'=>$i])->count() || $this->error('分类下存在科目');
            }
            if($ids && $FilesCategory->where(['id'=>['IN',implode(',',$ids)]])->delete())
            {
                $this->success('删除成功');
            }
        }
    }


    /*
     * 文件科目
     */
    public function fileCategoryClass()
    {
        $param = $this->request->param();
        $FilesCategoryModel = new FilesCategoryModel();
        $keyword = $this->request->param('keyword/s','');
        $where = [];
        empty($keyword)?:$where['name'] = ['Like','%'.$keyword.'%'];
        $where['parent_id'] = empty($param['parent_id'])?['neq',0]:intval($param['parent_id']);
        $categories = $FilesCategoryModel
            ->where($where)
            ->order('id', 'DESC')
            ->paginate(10);

        $categoryId  = empty($param['parent_id'])?0:intval($param['parent_id']);
        $categories->appends($param);

        $categories_tree = $FilesCategoryModel->where(['parent_id'=>0])->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';
        $newCategories = [];
        foreach ($categories_tree as $item) {
            $item['selected'] = $categoryId == $item['id'] ? "selected" : "";
            array_push($newCategories, $item);
        }
        $tree->init($newCategories);
        $str     = '<option value=\"{$id}\" {$selected}>{$spacer}{$grade}</option>';
        $treeStr = $tree->getTree(0, $str);
        $this->assign('categories_tree', $treeStr);
        $this->assign('categories', $categories->items());
        $this->assign('page', $categories->render());
        return $this->fetch();
    }

    /*
     * 文件科目添加
     */
    public function fileCategoryClassAdd()
    {
        $categoryId  = empty($param['parent_id'])?0:intval($param['parent_id']);

        $FilesCategoryModel = new FilesCategoryModel();
        $categories_tree = $FilesCategoryModel->where(['parent_id'=>0])->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';
        $newCategories = [];
        foreach ($categories_tree as $item) {
            $item['selected'] = $categoryId == $item['id'] ? "selected" : "";
            array_push($newCategories, $item);
        }
        $tree->init($newCategories);
        $str     = '<option value=\"{$id}\" {$selected}>{$spacer}{$grade}</option>';
        $treeStr = $tree->getTree(0, $str);
        $this->assign('categories_tree', $treeStr);
        return $this->fetch();
    }

    /*
     * 文件科目添加保存
     */
    public function fileCategoryClassAddPost()
    {
        $rule = [
            'class' => 'require',
            'parent_id' => 'require',
//            'admin' => 'require',
        ];
        $message = [
            'class.require' => '科目不能为空',
            'parent_id.require' => '请选择年级',
//            'admin.require' => '请重新登录',
        ];
        $FilesCategory = new FilesCategoryModel();

        $data = [];
        $data['class'] = $this->request->param('class/s','');
        $data['parent_id'] = $this->request->param('parent_id/d','');
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['admin'] = session('name');
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        if($FilesCategory->where([
            'parent_id'=>$data['parent_id'],
            'class'=>$data['class']
        ])->count())
            $this->error('已存在相同年级科目');
        $data['grade'] = $FilesCategory->where(['id'=>$data['parent_id']])->value('grade');
        if($FilesCategory->fileCategoryAdd($data)===true)
            $this->success('保存成功','fileCategoryClass');
    }

    /*
     * 文件科目编辑
     */
    public function fileCategoryClassEdit()
    {
        $id  = $this->request->param('id/d',0);
        $FilesCategoryModel = new FilesCategoryModel();
        $class = $FilesCategoryModel->where(['id'=>$id])->find()->toArray();
        $this->assign($class);
        return $this->fetch();
    }

    /*
     * 文件科目编辑保存
     */
    public function fileCategoryClassEditPost()
    {
        $rule = [
            'id' => 'require',
            'class' => 'require',
            'grade' => 'require',
//            'admin' => 'require',
        ];
        $message = [
            'id.require' => '缺少关键参数',
            'class.require' => '科目不能为空',
            'grade.require' => '缺少年级',
//            'admin.require' => '请重新登录',
        ];
        $FilesCategory = new FilesCategoryModel();

        $data = [];
        $data['class'] = $this->request->param('class/s','');
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        if($FilesCategory->where([
            'grade'=>$data['grade'],
            'class'=>$data['class']
        ])->count())
            $this->error('已存在相同年级科目');
        if($FilesCategory->update($data))
            $this->success('保存成功','fileCategoryClass');
    }

    /*
     * 文件科目删除
     */
    public function fileCategoryClassDelete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',[]);
        $FilesCategory = new FilesCategoryModel();
        $Files = new FilesModel();
        if($Files->where(['id'=>$id])->count() || $Files->where(['id'=>['IN',implode(',',$ids)]])->count())
        {
            $this->error('分类下存在文件');
        }
        if($id && $FilesCategory->where(['id'=>$id])->delete() ||$ids && $FilesCategory->where(['id'=>['IN',implode(',',$ids)]])->delete())
            $this->success('删除成功');
    }

    /*
     * 学案下载
     */
    public function article()
    {
        $id = $this->request->param('id', 11, 'intval');

        $portalPostModel = new PortalPostModel();
        $post            = $portalPostModel->where('id', $id)->find();
        $this->assign('post', $post);

        return $this->fetch();
    }

    public function articleEditPost()
    {

        if ($this->request->isPost()) {
            $data   = $this->request->param();
            $data['post']['categories'] = 11;
            //需要抹除发布、置顶、推荐的修改。
            unset($data['post']['post_status']);
            unset($data['post']['is_top']);
            unset($data['post']['recommended']);

            $post   = $data['post'];
            $result = $this->validate($post, 'portal/AdminArticle');
            if ($result !== true) {
                $this->error($result);
            }

            $portalPostModel = new PortalPostModel();

            if (!empty($data['photo_names']) && !empty($data['photo_urls'])) {
                $data['post']['more']['photos'] = [];
                foreach ($data['photo_urls'] as $key => $url) {
                    $photoUrl = cmf_asset_relative_url($url);
                    array_push($data['post']['more']['photos'], ["url" => $photoUrl, "name" => $data['photo_names'][$key]]);
                }
            }

            if (!empty($data['file_names']) && !empty($data['file_urls'])) {
                $data['post']['more']['files'] = [];
                foreach ($data['file_urls'] as $key => $url) {
                    $fileUrl = cmf_asset_relative_url($url);
                    array_push($data['post']['more']['files'], ["url" => $fileUrl, "name" => $data['file_names'][$key]]);
                }
            }

            $portalPostModel->adminEditArticle($data['post'], $data['post']['categories']);

            $hookParam = [
                'is_add'  => false,
                'article' => $data['post']
            ];
            hook('portal_admin_after_save_article', $hookParam);

            $this->success('保存成功!');

        }
    }
}