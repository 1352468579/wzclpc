<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/31 0031
 * Time: 上午 10:09
 */

namespace app\admin\controller;


use cmf\controller\AdminBaseController;
use app\admin\model\ReputationModel;
class ReputationwapController extends AdminBaseController
{
    /*
     * 列表页
     */
    public function index()
    {
        $ReputationModel = new ReputationModel();
        $where = ['parent_id' => 0,'type' => 'reputation_wap'];
        $categories = $ReputationModel->where($where)->select()->toArray();
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
        $data['type'] = 'reputation';
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $Reputation = new ReputationModel();
        $Reputation->isUpdate(false)->create($data);
        $this->success('添加成功','index');
    }

    /*
     * 首页模块编辑
     */
    public function edit()
    {
        $id = $this->request->param('id/d',0);
        $Reputation = new ReputationModel();
        $banner = $Reputation->where(['id'=>$id])->find()->toArray();
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
                $s['school'] = $data['more']['append']['school'][$k];
                $s['is_good'] = $data['more']['append']['is_good'][$k];
                $s['name'] = $data['more']['append']['name'][$k];
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
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $Reputation = new ReputationModel();
        $Reputation->update($data);
        $this->success('保存成功','index');
    }

    /*
     * 首页模块删除
     */
    public function delete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',0);
        $Reputation = new ReputationModel();
        if(!empty($id) && $Reputation->where(['id'=>$id,'type' => 'reputation'])->delete() || !empty($ids) && $Reputation->where(['id'=>['IN',implode(',',$ids)],'type' => 'reputation'])->delete())
            $this->success('删除成功','index');
    }
}