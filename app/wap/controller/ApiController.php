<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/11 0011
 * Time: 下午 14:52
 */

namespace app\wap\controller;


use cmf\controller\HomeBaseController;
use FontLib\Table\Type\head;
use think\Db;
use app\portal\model\PortalCategoryModel;

class ApiController extends HomeBaseController
{
    public function register()
    {
        $rule = [
            'name' => 'require|chsAlpha',
            'mobile' => 'require|number',
            'grade' => 'require',
            'weakSubject' => 'require',
        ];
        $message = [
            'name.require' => '请输入姓名',
            'name.chsAlpha' => '请输入姓名只包含汉字字母',
            'mobile.require' => '请输入手机号码',
            'mobile.number' => '请输入正确手机号码',
            'grade.require' => '请选择年级',
            'weakSubject.require' => '请选择科目',
        ];
        $param = $this->request->param();
        $check_re = $this->validate($param,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $data['name'] = $param['name'];
        $data['mobile'] = $param['mobile'];
        $data['grade'] = $param['grade'];
        $data['class'] = $param['weakSubject'];
        $data['create_date'] = date("Y-m-d H:i:s");
        if(Db::name('apply')->where(['mobile'=>$param['mobile']])->count())
            $this->error('该手机号已注册');
        Db::name('apply')->insert($data);
        $this->success('保存成功','object');
    }

    public function unknowRegister()
    {
        $rule = [
            'mobile' => 'require|number',
        ];
        $message = [
            'mobile.require' => '请输入手机号码',
            'mobile.number' => '请输入正确手机号码',
        ];
        $param = $this->request->param();
        $check_re = $this->validate($param,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $data['mobile'] = $param['mobile'];
        $data['create_date'] = date("Y-m-d H:i:s");
        if(Db::name('apply')->where(['mobile'=>$param['mobile']])->count())
            $this->error('该手机号已注册');
        Db::name('apply')->insert($data);
        $this->success('保存成功','object');
    }

    public function exists()
    {
        $rule = [
//            'name' => 'require|chsAlpha',
            'mobile' => 'require|number',
//            'grade' => 'require',
//            'weakSubject' => 'require',
        ];
        $message = [
//            'name.require' => '请输入姓名',
//            'name.chsAlpha' => '请输入姓名只包含汉字字母',
            'mobile.require' => '请输入手机号码',
            'mobile.number' => '请输入正确手机号码',
//            'grade.require' => '请选择年级',
//            'weakSubject.require' => '请选择科目',
        ];
        $param = $this->request->param();
        $check_re = $this->validate($param,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        if(Db::name('apply')->where(['mobile'=>$param['mobile']])->count())
            $this->error('该手机号已注册');
    }


    public function applyClasses()
    {
        $name = $this->request->post('name/s','');
        $id = Db::name('portal_category')->where(['name'=>$name])->value('id');
        $area = Db::name('portal_category')->where(['parent_id'=>$id])->select()->toArray();
        $class = '';
        foreach ($area as $item) {
            $class .= '<option value="'.$item['name'].'" data-id="'.$item['id'].'">'.$item['name'].'</option>';
        }
        $data = [];
        $data['code'] = 200;
        $data['data'] = $class?$class:'';
        return json($data);
    }

    public function getClassOption()
    {
        $parent_id = 17;
        $portalCategoryModel = new PortalCategoryModel();
        $where = ['delete_time' => 0,'path'=>['Like','0-'.$parent_id.'-%']];
        $categories = $portalCategoryModel->order("list_order ASC")->where($where)->select()->toArray();
        $new = [];

        foreach ($categories as $category)
        {
            if($parent_id == $category['parent_id'])
            {

                $category['temp']['id'] = $category['id'];
                $category['temp']['name'] = $category['name'];
                $category['temp']['enname'] = $category['description'];
                $category['temp']['href'] = $category['more']['src']?$category['more']['src']:'';
                $category['temp']['grade'] = $this->getClass($categories,$category['id']);
                $new[] = $category['temp'];
            }
        }
        $data = [];
        $data['code'] = 200;
        $data['data'] = $new?$new:'';
        return json($data);
    }

    protected function getClass($categories,$parent_id=17)
    {
        $new = [];
        foreach ($categories as $category) {
            if($parent_id == $category['parent_id'])
            {
                $category['temp']['id'] = $category['id'];
                $category['temp']['name'] = $category['name'];
                $category['temp']['enname'] = $category['description'];
                $category['temp']['href'] = $category['more']['src']?$category['more']['src']:'';
                $category['temp']['phase'] = $this->getClass($categories,$category['id']);
                $new[] = $category['temp'];
            }
        }
        return $new;
    }
}