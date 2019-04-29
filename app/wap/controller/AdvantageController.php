<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/11 0011
 * Time: 上午 11:41
 */

namespace app\wap\controller;


use cmf\controller\HomeBaseController;
use app\admin\model\SchoolAdvantageModel;
class AdvantageController extends HomeBaseController
{
    public function index()
    {
        $SchoolAdvantageModel = new SchoolAdvantageModel();
        $where = ['parent_id' => 0,'type' => 'schoolAdvantage'];
        $categories = $SchoolAdvantageModel->where($where)->select()->toArray();
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
        if(strpos('||',$banner['descript'])===false)
        {
            $temp = explode('||',$banner['descript']);
            foreach ($temp as $tk=>$tv)
            {
                if($tk===0) $banner['descript'] = $tv;
                $banner['descript_'.$tk] = $tv;
            }
        }
        $this->assign('banner', $banner);
        $this->assign('index_1', $index_1);
        $this->assign('index_2', $index_2);
        $this->assign('index_3', $index_3);
        $this->assign('index_4', $index_4);
        $this->assign('index_5', $index_5);
        $this->assign('index_6', $index_6);
        $this->assign('sss', json_encode($index_6));

        return $this->fetch();
    }
}