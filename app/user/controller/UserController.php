<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/30 0030
 * Time: 下午 16:09
 */

namespace app\user\controller;
use cmf\controller\HomeBaseController;
use think\Validate;
use app\user\model\UserModel;

class UserController extends HomeBaseController
{
    /**
     * 报单中心
     */
    public function userAdd()
    {
        return $this->fetch();
    }

    /**
     * 报单中心
     */
    public function addPost()
    {
        if ($this->request->isPost()) {

            $result = $this->validate($this->request->param(), 'User');
            if ($result !== true) {
                $this->error($result);
            } else {
                $_POST['user_pass'] = cmf_password($_POST['user_pass']);
                $result             = DB::name('user')->insertGetId($_POST);
                if ($result !== false) {
                    //$role_user_model=M("RoleUser");

                    $this->success("添加成功！", url("user/index"));
                } else {
                    $this->error("添加失败！");
                }
            }
        }
    }
}