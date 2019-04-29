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
header('Content-type:text/html;charset=utf-8;');
class SpecialController extends WebBaseController
{
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