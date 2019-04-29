<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author:kane < chengjin005@163.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;

use app\portal\model\PortalTagModel;
use cmf\controller\AdminBaseController;
use think\Db;

/**
 * Class AdminTagController 标签管理控制器
 * @package app\portal\controller
 */
class AdminTagController extends AdminBaseController
{
    /**
     * 文章标签管理
     * @adminMenu(
     *     'name'   => '文章标签',
     *     'parent' => 'portal/AdminIndex/default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '文章标签',
     *     'param'  => ''
     * )
     */
    public function index()
    {
        $portalTagModel = new PortalTagModel();
        $type = $this->request->param('type','');
        $where = [];
        empty($type)?:$where = ['type'=>$type];
        $tags           = $portalTagModel->where($where)->paginate();
        $tags->appends(['type'=>$type]);

        $this->assign("arrStatus", $portalTagModel::$STATUS);
        $this->assign("typeCn", $portalTagModel::$TYPE);
        $this->assign("tags", $tags);
        $this->assign('page', $tags->render());
        $this->assign('type', isset($type) ? $type : '');
        return $this->fetch();
    }

    /**
     * 添加文章标签
     * @adminMenu(
     *     'name'   => '添加文章标签',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '添加文章标签',
     *     'param'  => ''
     * )
     */
    public function add()
    {
        $portalTagModel = new PortalTagModel();
        $this->assign("arrStatus", $portalTagModel::$STATUS);
        return $this->fetch();
    }

    /**
     * 编辑文章标签
     * @adminMenu(
     *     'name'   => '编辑文章标签',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '编辑文章标签',
     *     'param'  => ''
     * )
     */
    public function edit()
    {
        $id = $this->request->param('id/d',0);
        $portalTagModel = new PortalTagModel();
        $portalTag = $portalTagModel->where(['id'=>$id])->find();
        $this->assign("arrStatus", $portalTagModel::$STATUS);
        $this->assign("tag", $portalTag);
        return $this->fetch();
    }

    /**
     * 编辑文章标签提交
     * @adminMenu(
     *     'name'   => '编辑文章标签提交',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '编辑文章标签提交',
     *     'param'  => ''
     * )
     */
    public function editPost()
    {

        $arrData = $this->request->param();
        $portalTagModel = new PortalTagModel();
        $portalTagModel->isUpdate(true)->allowField(true)->save($arrData);

        $this->success(lang("SAVE_SUCCESS"));

    }

    /**
     * 添加文章标签提交
     * @adminMenu(
     *     'name'   => '添加文章标签提交',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '添加文章标签提交',
     *     'param'  => ''
     * )
     */
    public function addPost()
    {

        $arrData = $this->request->param();

        $portalTagModel = new PortalTagModel();
        $portalTagModel->isUpdate(false)->allowField(true)->save($arrData);

        $this->success(lang("SAVE_SUCCESS"));

    }

    /**
     * 更新文章标签状态
     * @adminMenu(
     *     'name'   => '更新标签状态',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '更新标签状态',
     *     'param'  => ''
     * )
     */
    public function upStatus()
    {
        $intId     = $this->request->param("id");
        $intStatus = $this->request->param("status");
        $intStatus = $intStatus ? 1 : 0;
        if (empty($intId)) {
            $this->error(lang("NO_ID"));
        }

        $portalTagModel = new PortalTagModel();
        $portalTagModel->isUpdate(true)->save(["status" => $intStatus], ["id" => $intId]);

        $this->success(lang("SAVE_SUCCESS"));

    }

    /**
     * 更新文章标签状态
     * @adminMenu(
     *     'name'   => '更新标签状态',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '更新标签状态',
     *     'param'  => ''
     * )
     */
    public function setType()
    {
        $intId     = $this->request->param("id");
        $intStatus = $this->request->param("type");
        if (empty($intId)) {
            $this->error(lang("NO_ID"));
        }

        $portalTagModel = new PortalTagModel();
        $portalTagModel->isUpdate(true)->save(["type" => $intStatus], ["id" => $intId]);

        $this->success('变更成功');

    }

    /**
     * 删除文章标签
     * @adminMenu(
     *     'name'   => '删除文章标签',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '删除文章标签',
     *     'param'  => ''
     * )
     */
    public function delete()
    {
        $intId = $this->request->param("id", 0, 'intval');

        if (empty($intId)) {
            $this->error(lang("NO_ID"));
        }
        $portalTagModel = new PortalTagModel();

        $portalTagModel->where(['id' => $intId])->delete();
        Db::name('portal_tag_post')->where('tag_id', $intId)->delete();
        $this->success(lang("DELETE_SUCCESS"));
    }

    /**
     * 文章排序
     * @adminMenu(
     *     'name'   => '文章排序',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '文章排序',
     *     'param'  => ''
     * )
     */
    public function listOrders($model)
    {
        return parent::listOrders(Db::name('portal_tag')); // TODO: Change the autogenerated stub
        $this->success("排序更新成功！", '');
    }

}
