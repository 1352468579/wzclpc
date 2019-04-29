<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/31 0031
 * Time: 上午 10:08
 */

namespace app\admin\controller;


use cmf\controller\AdminBaseController;
use app\portal\model\PortalCategoryModel;
use think\exception\ErrorException;
use tree\Tree;
use app\admin\model\RouteModel;
use app\portal\model\PortalPostModel;
use think\Db;
use app\admin\model\LinkModel;
class ClassOptionController extends AdminBaseController
{
    protected $targets = ["_blank" => "新标签页打开", "_self" => "本窗口打开"];
    protected $parentId = '';

    function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        $this->parentId = 17;
    }

    public function index()
    {
        $portalCategoryModel = new PortalCategoryModel();
        $where = ['delete_time' => 0,'path'=>['Like','0-'.$this->parentId.'%']];
        $categories = $portalCategoryModel->order("list_order ASC")->where($where)->select()->toArray();

        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';

        $newCategories = [];
        foreach ($categories as $item) {
            $item['url']     = url('ClassOption/index', ['cid' => $item['id']]);
            $item['src']     = empty($item['more']['src'])?'':$item['more']['src'];
            $item['str_action'] = '<a href="' . url("ClassOption/add", ["parent_id" => $item['id']]) . '">添加子类</a> <a href="' . url("ClassOption/edit", ["id" => $item['id']]) . '">' . lang('EDIT') . '</a>  <a class="js-ajax-delete" href="' . url("ClassOption/delete", ["id" => $item['id']]) . '">' . lang('DELETE') . '</a> ';
            array_push($newCategories, $item);
        }

        $tree->init($newCategories);

        $tpl = "<tr>
                    <td><input name='list_orders[\$id]' type='text' size='3' value='\$list_order' class='input-order'></td>
                    <td>\$id</td>
                    <td>\$spacer <a href='\$url'>\$name</a></td>
                    <td>\$src</td>
                    <td>\$str_action</td>
                </tr>";
        $treeStr = $tree->getTree($this->parentId, $tpl);

        $this->assign('category_tree', $treeStr);
        return $this->fetch();
    }

    /*
     * 课程添加
     */
    public function add()
    {
        $parent_id = $this->request->param('parent_id/d',$this->parentId);
        $portalCategoryModel = new PortalCategoryModel();
        $where = ['delete_time' => 0,'path'=>['Like','0-'.$this->parentId.'%']];
        $categories = $portalCategoryModel->order("list_order ASC")->where($where)->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';

        $newCategories = [];
        foreach ($categories as $item) {
            $item['selected'] = $parent_id == $item['id'] ? "selected" : "";
            array_push($newCategories, $item);
        }

        $tree->init($newCategories);
        $str     = '<option value=\"{$id}\" {$selected}>{$spacer}{$name}</option>';
        $treeStr = $tree->getTree(0, $str);
        $this->assign('categories_tree', $treeStr);
        $this->assign('parentId', $parent_id);
        return $this->fetch();
    }

    /*
     * 课程添加保存
     */
    public function addPost()
    {
        $portalCategoryModel = new PortalCategoryModel();

        $data = $this->request->param();
        $data['is_hot'] = isset($data['is_hot'])&&$data['is_hot']=='on'?1:0;
        $result = $this->validate($data, 'PortalCategory');

        if ($result !== true) {
            $this->error($result);
        }

        $result = $portalCategoryModel->addCategory($data);

        if ($result === false) {
            $this->error('添加失败!');
        }

        $this->success('添加成功!', url('ClassOption/index'));
    }

    /*
     * 课程编辑
     */
    public function edit()
    {
        $id = $this->request->param('id/d',0,'intval');
        if ($id > 0) {
            $category = PortalCategoryModel::get($id)->toArray();
            $portalCategoryModel = new PortalCategoryModel();
            $where = ['delete_time' => 0,'path'=>['Like','0-'.$this->parentId.'%']];
            $categories = $portalCategoryModel->order("list_order ASC")->where($where)->select()->toArray();
            $tree       = new Tree();
            $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
            $tree->nbsp = '&nbsp;&nbsp;';

            $newCategories = [];
            foreach ($categories as $item) {
                $item['selected'] = $category['parent_id'] == $item['id'] ? "selected" : "";
                array_push($newCategories, $item);
            }
            $routeModel = new RouteModel();
            $alias      = $routeModel->getUrl('', ['id' => $id]);

            $category['alias'] = $alias;
            $tree->init($newCategories);
            $str     = '<option value=\"{$id}\" {$selected}>{$spacer}{$name}</option>';
            $treeStr = $tree->getTree(0, $str);

            $this->assign($category);
            $this->assign('categories_tree', $treeStr);
            $this->assign('parentId', $this->parentId);
            return $this->fetch();
        } else {
            $this->error('操作错误!');
        }
    }

    /*
     * 课程编辑保存
     */
    public function editPost()
    {
        $data = $this->request->param();
        $data['is_hot'] = isset($data['is_hot'])&&$data['is_hot']=='on'?1:0;
        $result = $this->validate($data, 'PortalCategory');

        if ($result !== true) {
            $this->error($result);
        }

        $portalCategoryModel = new PortalCategoryModel();

        $result = $portalCategoryModel->editCategory($data);

        if ($result === false) {
            $this->error('保存失败!');
        }

        $this->success('保存成功!');
    }

    /*
     * 课程删除
     */
    public function delete()
    {
        $portalCategoryModel = new PortalCategoryModel();
        $id                  = $this->request->param('id');
        //获取删除的内容
        $findCategory = $portalCategoryModel->where('id', $id)->find();

        if (empty($findCategory)) {
            $this->error('分类不存在!');
        }
//判断此分类有无子分类（不算被删除的子分类）
        $categoryChildrenCount = $portalCategoryModel->where(['parent_id' => $id,'delete_time' => 0])->count();

        if ($categoryChildrenCount > 0) {
            $this->error('此分类有子类无法删除!');
        }

        $categoryPostCount = Db::name('portal_category_post')->where('category_id', $id)->count();

        if ($categoryPostCount > 0) {
            $this->error('此分类有文章无法删除!');
        }

        $data   = [
            'object_id'   => $findCategory['id'],
            'create_time' => time(),
            'table_name'  => 'portal_category',
            'name'        => $findCategory['name']
        ];
        $result = $portalCategoryModel
            ->where('id', $id)
            ->update(['delete_time' => time()]);
        if ($result) {
            Db::name('recycleBin')->insert($data);
            $this->success('删除成功!');
        } else {
            $this->error('删除失败');
        }
    }

    /*
     * 热门课程页
     */
    public function hotClass()
    {
        $linkModel = new LinkModel();
        $where['type'] = 'hotClass';
        try{
            $links     = $linkModel->where($where)->select();

            $this->assign('links', $links);
            return $this->fetch();
        }catch(\Exception $e){
            $this->error($e->getMessage());
        }
    }

    /*
     * 热门课程添加
     */
    public function hotClassAdd()
    {
        $this->assign('targets', $this->targets);
        return $this->fetch();
    }

    /*
     * 热门课程添加保存
     */
    public function hotClassAddPost()
    {
        $data      = $this->request->param();
        $data['type'] = 'hotClass';

        $linkModel = new LinkModel();
        $result    = $linkModel->validate(true)->allowField(true)->save($data);
        if ($result === false) {
            $this->error($linkModel->getError());
        }

        $this->success("添加成功！", url("ClassOption/hotClass"));
    }

    /*
     * 热门课程编辑
     */
    public function hotClassEdit()
    {
        $id        = $this->request->param('id', 0, 'intval');
        $linkModel = new LinkModel();
        try{
            $link = $linkModel->get($id);
            $this->assign('targets', $this->targets);
            $this->assign('link', $link);
            return $this->fetch();
        }catch(\Exception $e){
            throw $e;
        }
    }

    /*
     * 热门课程编辑保存
     */
    public function hotClassEditPost()
    {
        $data      = $this->request->param();
        $data['type'] = 'hotClass';
        $linkModel = new LinkModel();
        $result    = $linkModel->validate(true)->allowField(true)->isUpdate(true)->save($data);
        if ($result === false) {
            $this->error($linkModel->getError());
        }

        $this->success("保存成功！", url("ClassOption/hotClass"));
    }

    public function hotClassDelete()
    {
        $id = $this->request->param('id', 0, 'intval');
        LinkModel::destroy($id);
        $this->success("删除成功！");
    }
}