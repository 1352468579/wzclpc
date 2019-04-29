<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/11 0011
 * Time: 上午 11:50
 */

namespace app\wap\controller;


use cmf\controller\HomeBaseController;
use app\admin\model\ReputationModel;
header('Content-type:text/html;charset=utf-8;');
class ReputationController extends HomeBaseController
{
    public function index()
    {
        $ReputationModel = new ReputationModel();
        $where = ['parent_id' => 0,'type' => 'reputation'];
        $categories = $ReputationModel->where($where)->select()->toArray();
        $banner = $index_1 = $index_2 = $index_3 = $index_4 = $index_5 = $index_6 = [];
        foreach ($categories as $c)
        {
            $c['model_name'] == 'banner' ? $banner = $c:'';
            $c['model_name'] == '模块一' ? $index_1 = $c:'';
            $c['model_name'] == '模块二' ? $index_2 = $c:'';
            $c['model_name'] == '模块三' ? $index_3 = $c:'';
            $c['model_name'] == '模块四' ? $index_4 = $c:'';
            $c['model_name'] == '模块五' ? $index_5 = $c:'';
            $c['model_name'] == '模块六' ? $index_6 = $c:'';
        }
        if(!empty($index_1['more']['append']))
        {
            foreach ($index_1['more']['append'] as &$i1)
            {
                strpos($i1['value'],'||')?list($i1['subtitle'],$i1['value']) = explode('||', $i1['value']):'';
            }
        }
        $this->assign('banner', $banner);
        $this->assign('index_1', $index_1);
        $this->assign('index_2', $index_2);
        $this->assign('index_3', $index_3);
        $this->assign('index_4', $index_4);
        $this->assign('index_5', $index_5);
        $this->assign('index_6', $index_6);
        return $this->fetch();
    }

    public function studentList()
    {

    }
}