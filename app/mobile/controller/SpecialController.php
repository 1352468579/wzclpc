<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/5 0005
 * Time: 下午 17:59
 */
namespace app\mobile\controller;

use cmf\controller\WebBaseController;
use Think\Exception;
use app\portal\model\PortalCategoryModel;
header('Content-type:text/html;charset=utf-8;');
class SpecialController extends WebBaseController
{

    const GRADE_ID = 23;
    /************
     *----==== 初始化函数 ====----
     *Created by w 2019/4/21 15:31
     ************/
    public function _initialize()
    {
        parent::_initialize();
        $portalCategoryModel = new PortalCategoryModel();
        $where = ['delete_time' => 0,'path'=>['Like','0-'.self::GRADE_ID.'%'],'parent_id'=>self::GRADE_ID];
        $categories = $portalCategoryModel->order("list_order ASC")->where($where)->select()->toArray();
        $this->assign('grade', $categories);
        if (!session('my-token')) {
            session('my-token',md5(time()));
        }
        $this->assign('token', session('my-token'));
    }
    /************
    *----==== 春季班 ====----
    *Created by w 2019/4/29 14:56
    ************/
    public function spring(){
        return $this->fetch();
    }
    /************
     *----==== 暑假班 ====----
     *Created by w 2019/4/29 14:56
     ************/
    public function summer(){
        return $this->fetch();
    }
    /************
     *----==== 把脉期中 ====----
     *Created by w 2019/4/29 14:56
     ************/
    public function midterm(){
        return $this->fetch();
    }
    /************
     *----==== 作业清 ====----
     *Created by w 2019/4/29 14:56
     ************/
    public function work(){
        return $this->fetch();
    }
    /************
     *----==== 把脉期中PC ====----
     *Created by w 2019/4/29 14:56
     ************/
    public function midtermPC(){
        return $this->fetch("specialPc/midterm");
    }
    /************
     *----==== 春季班PC ====----
     *Created by w 2019/4/29 14:56
     ************/
    public function springPc(){
        return $this->fetch("specialPc/spring");
    }
    /************
     *----==== 暑假班pc ====----
     *Created by w 2019/4/29 14:56
     ************/
    public function summerPc(){
        return $this->fetch("specialPc/summer");
    }

}