<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/31 0031
 * Time: 上午 10:08
 */

namespace app\admin\controller;

use app\admin\model\IndexPcModel;
use cmf\controller\AdminBaseController;
use tree\Tree;
class IndexPcController extends AdminBaseController
{
    public function index()
    {
        $IndexPcModel = new IndexPcModel();
        $where = ['parent_id' => 0,'type' => 'index'];
        $categories = $IndexPcModel->where($where)->select()->toArray();
        $this->assign('categories', $categories);
        return $this->fetch();
    }

    /*
     * 首页模块添加
     */
    public function add()
    {
        return $this->fetch();
    }

    /*
     * 首页模块添加保存
     */
    public function addPost()
    {
        $rule = [
            'title' => 'require',
        ];
        $message = [
            'title.require' => '标题不能为空',
        ];
        $data = $this->request->param('post/a',[]);
        $temp = [];
        if(isset($data['more']['append']['name']))
        {
            foreach ($data['more']['append']['name'] as $k=>$n)
            {
                $s = [];
                $s['name'] = $data['more']['append']['name'][$k];
                $s['url'] = $data['more']['append']['url'][$k];
                $s['value'] = $data['more']['append']['value'][$k];
                $s['thumbnail'] = $data['more']['append']['thumbnail'][$k];
                $temp['append'][] = $s;
            }
        }
        if(isset($data['more']['video']))
        {
//            $data['more']['video']['file_urls'] = isset($data['more']['video']['file_urls']) && !empty($data['more']['video']['file_urls'])?:'';
            $temp['video'] = $data['more']['video'];//地址已去头，输出需要加头
        }
        $data['more'] = $temp;
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['type'] = 'index';
        $data['admin'] = session('name');
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $IndexPc = new IndexPcModel();
        $IndexPc->isUpdate(false)->create($data);
        $this->success('添加成功','index');
    }

    /*
     * 首页模块编辑
     */
    public function edit()
    {
        $id = $this->request->param('id/d',0);
        $IndexPc = new IndexPcModel();
        $banner = $IndexPc->where(['id'=>$id])->find()->toArray();
        $this->assign('post',$banner);
        return $this->fetch();
    }

    /*
     * 首页模块编辑保存
     */
    public function editPost()
    {
        $rule = [
            'id' => 'require',
            'title' => 'require',
        ];
        $message = [
            'id.require' => '缺少关键参数',
            'title.require' => '标题不能为空',
        ];
        $data = $this->request->param('post/a',[]);
        $temp = [];
        if(isset($data['more']['append']['name']))
        {
            foreach ($data['more']['append']['name'] as $k=>$n)
            {
                $s = [];
                $s['name'] = $data['more']['append']['name'][$k];
                $s['url'] = $data['more']['append']['url'][$k];
                $s['value'] = $data['more']['append']['value'][$k];
                $s['thumbnail'] = $data['more']['append']['thumbnail'][$k];
                $temp['append'][] = $s;
            }
        }
        if(isset($data['more']['video']))
        {
            $data['more']['video']['file_urls'] = isset($data['more']['video']['file_urls']) && !empty($data['more']['video']['file_urls'])?trim($data['more']['video']['file_urls']):'';
            $temp['video'] = $data['more']['video'];//地址已去头，输出需要加头
        }
        $data['more'] = $temp;
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $IndexPc = new IndexPcModel();
        $IndexPc->update($data);
        $this->success('保存成功','index');
    }

    /*
     * 首页模块删除
     */
    public function delete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',0);
        $IndexPc = new IndexPcModel();
        if(!empty($id) && $IndexPc->where(['id'=>$id,'type' => 'index'])->delete() || !empty($ids) && $IndexPc->where(['id'=>['IN',implode(',',$ids)],'type' => 'index'])->delete())
            $this->success('删除成功','index');
    }

    public function object()
    {
        $IndexPcModel = new IndexPcModel();
        $where = ['type' => 'object'];
        $categories = $IndexPcModel->field('model_name,title,id,parent_id,descript,create_date')->where($where)->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';
        $newCategories = [];
        foreach ($categories as $item) {
            $item['str_action'] = $item['parent_id']==0?'<a href="' . url("IndexPc/objectAdd", ["parent_id" => $item['id']]) . '">添加课程</a>':'';
            $item['str_action'] .= ' <a href="' . url("IndexPc/objectEdit", ["id" => $item['id']]) . '">' . lang('EDIT') . '</a>  <a class="js-ajax-delete" href="' . url("IndexPc/objectDelete", ["id" => $item['id']]) . '">' . lang('DELETE') . '</a> ';
            array_push($newCategories, $item);
        }

        $tree->init($newCategories);

        $tpl = "<tr>
                    <td>\$id</td>
                    <td>\$spacer \$model_name</td>
                    <td>\$title</td>
                    <td>\$descript</td>
                    <td>\$create_date</td>
                    <td>\$str_action</td>
                </tr>";
        $treeStr = $tree->getTree(0, $tpl);

        $this->assign('categories_tree', $treeStr);
        $this->assign('categories', $categories);
        return $this->fetch();
    }

    /*
     * 首页模块添加
     */
    public function objectAdd()
    {
        $parent_id = $this->request->param('parent_id/d',0);
        $IndexPcModel = new IndexPcModel();
        $where = ['parent_id' => 0,'type' => 'object'];
        $categories = $IndexPcModel->field('model_name,title,id,parent_id')->where($where)->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';

        $newCategories = [];
        foreach ($categories as $item) {
            $item['selected'] = $item['id'] == $parent_id?'selected':'';
            array_push($newCategories, $item);
        }
        $tree->init($newCategories);

        $tpl = '<option value=\"{$id}\" {$selected}>{$title}</option>';
        $treeStr = $tree->getTree(0, $tpl);

        $this->assign('categories_tree', $treeStr);
        $this->assign('parent_id', $parent_id);
        return $this->fetch();
    }

    /*
     * 首页模块添加保存
     */
    public function objectAddPost()
    {
        $rule = [
            'title' => 'require',
        ];
        $message = [
            'title.require' => '标题不能为空',
        ];
        $data = $this->request->param('post/a',[]);
        $temp = [];
        if(isset($data['more']['append']['name']))
        {
            foreach ($data['more']['append']['name'] as $k=>$n)
            {
                $s = [];
                $s['name'] = $data['more']['append']['name'][$k];
                $s['value'] = $data['more']['append']['value'][$k];
//                $s['thumbnail'] = $data['more']['append']['thumbnail'][$k];
                $temp['append'][] = $s;
            }
        }
        if(isset($data['more']['video']))
        {
            $data['more']['video']['file_urls'] = isset($data['more']['video']['file_urls']) && !empty($data['more']['video']['file_urls'])?trim($data['more']['video']['file_urls']):'';
            $temp['video'] = $data['more']['video'];//地址已去头，输出需要加头
        }
        $data['more'] = $temp;
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['type'] = 'object';
        $data['admin'] = session('name');
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $IndexPc = new IndexPcModel();
        $IndexPc->isUpdate(false)->create($data);
        $this->success('添加成功','object');
    }

    /*
     * 首页模块编辑
     */
    public function objectEdit()
    {
        $id = $this->request->param('id/d',0);
        $IndexPcModel = new IndexPcModel();
        $banner = $IndexPcModel->where(['id'=>$id])->find()->toArray();
        $parent_id = $banner['parent_id'];
        $where = ['id' => $parent_id,'type' => 'object'];
        $categories = $IndexPcModel->field('model_name,title,id,parent_id')->where($where)->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';

        $newCategories = [];
        foreach ($categories as $item) {
            $item['selected'] = $item['id'] == $parent_id?'selected':'';
            array_push($newCategories, $item);
        }
        $tree->init($newCategories);

        $tpl = '<option value=\"{$id}\" {$selected}>{$title}</option>';
        $treeStr = $tree->getTree(0, $tpl);
        $this->assign('categories_tree', $treeStr);
        $this->assign('post',$banner);
        $this->assign('parent_id',$parent_id);
        return $this->fetch();
    }

    /*
     * 首页模块编辑保存
     */
    public function objectEditPost()
    {
        $rule = [
            'id' => 'require',
            'title' => 'require',
        ];
        $message = [
            'id.require' => '缺少关键参数',
            'title.require' => '标题不能为空',
        ];
        $data = $this->request->param('post/a',[]);
        $temp = [];
        if(isset($data['more']['append']['name']))
        {
            foreach ($data['more']['append']['name'] as $k=>$n)
            {
                $s = [];
                $s['name'] = $data['more']['append']['name'][$k];
                $s['value'] = $data['more']['append']['value'][$k];
//                $s['thumbnail'] = $data['more']['append']['thumbnail'][$k];
                $temp['append'][] = $s;
            }
        }
        if(isset($data['more']['video']))
        {
//            $data['more']['video']['file_urls'] = isset($data['more']['video']['file_urls']) && !empty($data['more']['video']['file_urls'])?:'';
            $temp['video'] = $data['more']['video'];//地址已去头，输出需要加头
        }
        $data['more'] = $temp;
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $IndexPc = new IndexPcModel();
        $IndexPc->update($data);
        $this->success('保存成功','object');
    }

    /*
     * 首页模块删除
     */
    public function objectDelete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',0);
        $IndexPc = new IndexPcModel();
        if(!empty($id) && $IndexPc->where(['id'=>$id,'type' => 'object'])->delete() || !empty($ids) && $IndexPc->where(['id'=>['IN',implode(',',$ids)],'type' => 'object'])->delete())
            $this->success('删除成功','object');
    }
}