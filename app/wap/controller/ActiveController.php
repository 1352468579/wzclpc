<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/12/7
 * Time: 16:50
 */
namespace app\wap\controller;


use cmf\controller\HomeBaseController;

class ActiveController extends HomeBaseController
{
    //四大教研组
    public function teaching_group () {
        return $this->fetch();
    }
    //五心服务
    public function five_heart() {
        return $this->fetch();
    }
    //新课堂
    public function new_classroom() {
        return $this->fetch();
    }
    //我想对你说
    public function tell_you() {
        return $this->fetch();
    }
}