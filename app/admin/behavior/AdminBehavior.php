<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/20 0020
 * Time: 上午 9:45
 */
namespace app\admin\behavior;
use think\Request;
use think\Db;
class AdminBehavior
{
    public function __construct(Request $request=null)
    {
        $this->request = is_null($request) ? Request::instance() : $request;
    }

    public function run($params,$extra)
    {
        if(isset($params['code']) && ($params['code'] == 200 || $params['code'] == 1))
        {
            $data['user_id'] = cmf_get_current_admin_id();
            $data['request_method'] = $this->request->method();
            $data['controller_action'] = $this->request->action();
            $data['values'] = json_encode($this->request->param());
            $data['create_time'] = date('Y-m-d H:i:s',$_SERVER['REQUEST_TIME']);
            $data['ip'] = $this->request->ip();
            $data['result'] = $params['code'];
            $data['code'] = $params['code'];
            Db::name('action_log')->insert($data);
        }
    }

}