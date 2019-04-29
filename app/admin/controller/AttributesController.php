<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/19 0019
 * Time: 下午 16:53
 */

namespace app\admin\controller;

use cmf\controller\AdminBaseController;
use think\Db;
use app\admin\model\AttributesModel;
class AttributesController extends AdminBaseController
{
    public function index()
    {
        $AttributesModel = new AttributesModel();
        $list = $AttributesModel->paginate(10);
        $this->assign('list',$list->items());
        $this->assign('page', $list->render());
        return $this->fetch();
    }

    public function add()
    {
        return $this->fetch();
    }

    public function edit()
    {
        $id = $this->request->param('id/d',0);
        $AttributesModel = new AttributesModel();
        $attr = $AttributesModel->where(['id'=>$id])->find()->toArray();
        $this->assign('attr',$attr);
        return $this->fetch();
    }

    public function addPost()
    {
        $params = [];
        $params = $this->request->param();
        $params['value'] = htmlspecialchars_decode($this->request->param('value'));
        $params['value'] = implode("\r\n",unqiue_empty(explode("\r\n",$params['value'])));
        $check_res = $this->validate($params,'Attributes.add');
        if($check_res !== true)
        {
            $this->error($check_res);
        }
        $AttributesModel = new AttributesModel();
        $AttributesModel->adminAddAttributes($params);
        return $this->success('添加成功');
    }

    public function editPost()
    {
        $params = [];
        $params = $this->request->param();
        $params['value'] = htmlspecialchars_decode($this->request->param('value'));
        $params['value'] = implode("\r\n",unqiue_empty(explode("\r\n",$params['value'])));
        $check_res = $this->validate($params,'Attributes.edit');

        if($check_res !== true)
        {
            $this->error($check_res);
        }

        $AttributesModel = new AttributesModel();
        $AttributesModel->adminEditAttributes($params);
        return $this->success('编辑成功');
    }

    public function delete()
    {
        $params = [];
        $id = $this->request->param('id/d',0);
        $check_res = $this->validate($params,'Attributes.edit');
        //检查该属性下的商品数量 待添加
        if($check_res !== true)
        {
            $this->error($check_res);
        }

        $AttributesModel = new AttributesModel();
        $AttributesModel->adminEditAttributes($params);
        return $this->success('编辑成功');
    }

    public function getAttributesTree()
    {
        $AttributesModel = new AttributesModel();
        $attributes = $AttributesModel->field('remark,id,name,value,more')->order("list_order ASC")->select()->toArray();
        $newAttributes = [];
        foreach ($attributes as $item) {
            $item['sub'] = empty($item['value'])?[]:unqiue_empty(explode("\r\n",$item['value']));
            array_push($newAttributes, $item);
        }
        $data = [];
        $data['datas']['list'] = $newAttributes;
        $data['code'] = $newAttributes?200:403;
        $data['message'] = $newAttributes?'':'暂无数据';
        return json($data);
    }
}