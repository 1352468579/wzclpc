<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/5 0005
 * Time: 下午 17:59
 */
namespace app\wap\controller;
use cmf\controller\HomeBaseController;
use think\Db;
header('Content-type:text/html;charset=utf-8;');
class SpecialController extends HomeBaseController
{
    public function winter_vacation()
    {
        return $this->fetch();
    }
    
    public function addname() {

        $name = $this->request->param('student_name');
        $mobile = $this->request->param('phone');
        $vacation = $this->request->param('hdname');
        if(empty($name)) {
            echo json_encode(array('code'=>100,'msg'=>'姓名不能为空'));die;
        }
        if(empty($mobile)) {
            echo json_encode(array('code'=>100,'msg'=>'电话不能为空'));die;
        }
        if(empty($vacation)) {
            echo json_encode(array('code'=>100,'msg'=>''));die;
        }
//        if(preg_match("/^1[34578]\d{9}$/ims",$mobile)) {
//            echo json_encode(array('code'=>100,'msg'=>'请输入正确的电话号码'));die;
//        }
        $insert = array(
            'name'=>$name,
            'mobile'=>$mobile,
            'vacation'=>$vacation,
            'createtime'=>time(),
        );
        if(Db::name('vacation')->insert($insert)) {
            echo json_encode(array('code'=>200));die;
        }
    }
}