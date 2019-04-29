<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/5 0005
 * Time: 下午 17:59
 */
namespace app\wap\controller;
use cmf\controller\HomeBaseController;
header('Content-type:text/html;charset=utf-8;');
class CurriculumController extends HomeBaseController
{
    public function index()
    {

        $id = $this->request->param('id', 0, 'intval');
        $tem = 'curriculum'.$id;
        return $this->fetch($tem);
    }

}