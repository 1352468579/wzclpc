<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/31 0031
 * Time: 上午 10:37
 */

namespace app\admin\controller;


use app\admin\model\BannerModel;
use cmf\controller\AdminBaseController;

class BannerController extends AdminBaseController
{
    /*
     * banner列表
     */
    public function index()
    {
        $Banner = new BannerModel();

        $type = $this->request->param('type','');
        empty($type)?$where = ['type'=>['in',['index','wap']]]:$where = ['type'=>$type];
        $banner = $Banner->where($where)->order('list_order desc')->paginate(10);

        $banner->appends(['type'=>$type]);
        $this->assign('banner',$banner);
        $this->assign('page', $banner->render());
        $this->assign('type', isset($type) ? $type : '');
        return $this->fetch();
    }

    /*
     * banner添加
     */
    public function add()
    {
        return $this->fetch();
    }

    /*
     * banner添加保存
     */
    public function addPost()
    {
        $rule = [
            'thumbnail' => 'require',
            'type' => 'require',
        ];
        $message = [
            'thumbnail.require' => '需要上传图片',
            'type.require' => '请选择banner位置',
        ];
        $data = $this->request->param('post/a',[]);
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['type'] = empty($data['type'])?'':$data['type'];
        $data['admin'] = session('name');
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $Banner = new BannerModel();
        $Banner->isUpdate(false)->create($data);
        $this->success('添加成功','index');
    }

    /*
     * banner编辑
     */
    public function edit()
    {
        $id = $this->request->param('id/d',0);
        $Banner = new BannerModel();
        $banner = $Banner->where(['id'=>$id])->find();
        $this->assign('post',$banner);
        return $this->fetch();
    }

    /*
     * banner编辑保存
     */
    public function editPost()
    {
        $rule = [
            'thumbnail' => 'require',
            'type' => 'require',
        ];
        $message = [
            'thumbnail.require' => '需要上传图片',
            'type.require' => '请选择banner位置',
        ];
        $data = $this->request->param('post/a',[]);
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $Banner = new BannerModel();
        $Banner->update($data);
        $this->success('保存成功','index');
    }

    /*
     * banner删除
     */
    public function delete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',0);
        $Banner = new BannerModel();
        if(!empty($id) && $Banner->where(['id'=>$id])->delete() || !empty($ids) && $Banner->where(['id'=>['IN',implode(',',$ids)],'type'=>'index'])->delete())
            $this->success('删除成功','index');
    }
}