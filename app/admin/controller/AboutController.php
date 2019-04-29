<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/4 0004
 * Time: 上午 9:52
 */

namespace app\admin\controller;


use app\admin\model\AboutModel;
use cmf\controller\AdminBaseController;
use app\admin\model\SchoolAreaModel;
use app\admin\model\AreaModel;
use think\Db;
use app\admin\model\IndexPcModel;
class AboutController extends AdminBaseController
{
    public function index()
    {
        $AboutModel = new AboutModel();
        $where = ['parent_id' => 0,'type' => 'about'];
        $categories = $AboutModel->where($where)->select()->toArray();
        $this->assign('categories', $categories);
        return $this->fetch();
    }

    /*
     * 关于我们模块添加
     */
    public function add()
    {
        return $this->fetch();
    }

    /*
     * 关于我们模块添加保存
     */
    public function addPost()
    {
        $rule = [
            'title' => 'require',
        ];
        $message = [
            'title.require' => '标题不能为空',
        ];
        $data = $this->request->param('post/a',[]);
        $temp = [];
        if(isset($data['more']['append']['name']))
        {
            foreach ($data['more']['append']['name'] as $k=>$n)
            {
                $s = [];
                $s['name'] = $data['more']['append']['name'][$k];
                $s['value'] = $data['more']['append']['value'][$k];
                $s['thumbnail'] = $data['more']['append']['thumbnail'][$k];
                $temp['append'][] = $s;
            }
        }
        if(isset($data['more']['video']))
        {
//            $data['more']['video']['file_urls'] = isset($data['more']['video']['file_urls']) && !empty($data['more']['video']['file_urls'])?:'';
            $temp['video'] = $data['more']['video'];//地址已去头，输出需要加头
        }
        $data['more'] = $temp;
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['type'] = 'about';
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $About = new AboutModel();
        $About->isUpdate(false)->create($data);
        $this->success('添加成功','index');
    }

    /*
     * 关于我们模块编辑
     */
    public function edit()
    {
        $id = $this->request->param('id/d',0);
        $About = new AboutModel();
        $banner = $About->where(['id'=>$id])->find()->toArray();

        $this->assign('post',$banner);
        return $this->fetch();
    }

    /*
     * 关于我们模块编辑保存
     */
    public function editPost()
    {
        $rule = [
            'id' => 'require',
            'title' => 'require',
        ];
        $message = [
            'id.require' => '缺少关键参数',
            'title.require' => '标题不能为空',
        ];
        $data = $this->request->param('post/a',[]);
        $temp = [];
        if(isset($data['more']['append']['name']))
        {
            foreach ($data['more']['append']['name'] as $k=>$n)
            {
                $s = [];
                $s['name'] = $data['more']['append']['name'][$k];
                $s['value'] = $data['more']['append']['value'][$k];
                $s['thumbnail'] = $data['more']['append']['thumbnail'][$k];
                $temp['append'][] = $s;
            }
        }
        if(isset($data['more']['video']))
        {
//            $data['more']['video']['file_urls'] = isset($data['more']['video']['file_urls']) && !empty($data['more']['video']['file_urls'])?:'';
            $temp['video'] = $data['more']['video'];//地址已去头，输出需要加头
        }
        $data['more'] = $temp;
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $About = new AboutModel();
        $About->update($data);
        $this->success('保存成功','index');
    }

    /*
     * 关于我们模块删除
     */
    public function delete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',0);
        $About = new AboutModel();
        if(!empty($id) && $About->where(['id'=>$id,'type' => 'about'])->delete() || !empty($ids) && $About->where(['id'=>['IN',implode(',',$ids)],'type' => 'about'])->delete())
            $this->success('删除成功','index');
    }

    public function schoolList()
    {
        $SchoolArea = new SchoolAreaModel();
        $categories = $SchoolArea->alias('s')->join('__AREA__ a','a.area_id=s.district','LEFT')->paginate(15);
        $this->assign('categories', $categories->toArray());
        $this->assign('page', $categories->render());
        return $this->fetch();
    }
    /************
    *----==== 修改校区logo ====----
    *Created by w 2019/4/17 14:30
    ************/
    public function editAreaLogo(){
        $SchoolArea = new SchoolAreaModel();
        $categories = $SchoolArea
            ->field('s.id,a.*')
            ->alias('s')
            ->group('s.district')
            ->join('__AREA__ a','a.area_id=s.district','LEFT')
            ->paginate(10);
        $this->assign('categories', $categories->toArray());
        $this->assign('page', $categories->render());
        return $this->fetch('editLogo');
    }
    /************
    *----==== 实现图片上传 ====----
    *Created by w 2019/4/17 16:54
    ************/
    public function editAreaLogoDeal(){
        $SchoolArea = new AreaModel();
        $param['area_id'] = $this->request->param('area_id');
        $param['logo'] = $this->request->param('logo');
        $SchoolArea->update($param);
        $this->success('操作成功！');
    }
    /*
     * 关于我们模块添加
     */
    public function schoolAdd()
    {
        $area = Db::name('area')->where('area_id REGEXP \'0000$\'')->select()->toArray();
        $province = '';
        foreach ($area as $item) {
            $province .= '<option value="'.$item['area_id'].'">'.$item['area'].'</option>';
        }
        $this->assign('province',$province);
        return $this->fetch();
    }

    /*
     * 关于我们模块添加保存
     */
    public function schoolAddPost()
    {
        $rule = [
            'title' => 'require',
            'address' => 'require',
            'longitude' => 'require',
            'latitude' => 'require',
            'tel' => 'require',
            'school_logo' => 'require',
            'bus' => 'require',
            'metro' => 'require',
            'province' => 'require|gt:0',
            'city' => 'require|gt:0',
            'district' => 'require|gt:0',
        ];
        $message = [
            'title.require' => '标题不能为空',
            'address.require' => '地址不能为空',
            'longitude.require' => '经度不能为空',
            'latitude.require' => '纬度不能为空',
            'tel.require' => '联系电话不能为空',
            'school_logo.require' => 'LOGO不能为空',
            'bus.require' => '公交路线不能为空',
            'metro.require' => '地铁路线不能为空',
            'province.require' => '请选择省份',
            'province.gt' => '请选择省份',
            'city.require' => '请选择城市',
            'city.gt' => '请选择城市',
            'district.require' => '请选择区域',
            'district.gt' => '请选择区域',
        ];
        $data = $this->request->param('post/a',[]);
        $data['path'] = $data['province'].'-'.$data['city'].'-'.$data['district'];
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        unset($data['province']);
        unset($data['city']);
        $SchoolArea = new SchoolAreaModel();
        $SchoolArea->isUpdate(false)->create($data);
        $this->success('添加成功','schoolList');
    }

    /*
     * 关于我们模块编辑
     */
    public function schoolEdit()
    {
        $id = $this->request->param('id/d',0);
        $SchoolArea = new SchoolAreaModel();
        $banner = $SchoolArea->where(['id'=>$id])->find()->toArray();
        $Area = Db::name('area');
        $area = $Area->where('area_id REGEXP \'0000$\'')->select()->toArray();
        $province = '';
        foreach ($area as $item) {
            $province .= '<option value="'.$item['area_id'].'">'.$item['area'].'</option>';
        }
        $area_str = [];
        if($banner['path']){
            $area_arr = explode('-',$banner['path']);

//        $name = ['province','city','district'];
//        $i=0;
            $province_arr = [];
            $province_id = 0;
            if(!empty($area_arr['0']))
            {
                $province_arr = $Area->where("p_id=0")->select();
            }
            $area_str['province'] = '<option value="0">请选择一项</option>';
            foreach ($province_arr as $pa)
            {
                $area_str['province'] .= '<option value="'.$pa['area_id'].'" '.($pa['area_id']==$area_arr['0']?"selected":'').' >'.$pa['area'].'</option>';
            }

            if(empty($province_arr) && !empty($area_arr['1']))
            {
                $area = $Area->where('area_id REGEXP \'0000$\'')->select()->toArray();
                $area_str['province'] = '';
                foreach ($area as $item) {
                    $area_str['province'] .= '<option value="'.$item['area_id'].'">'.$item['area'].'</option>';
                }
            }else{
                $city_arr = $Area->where("p_id=".$area_arr['0'])->select();
                $area_str['city'] = '<option value="0">请选择一项</option>';
                foreach ($city_arr as $ca)
                {
                    $area_str['city'] .= '<option value="'.$ca['area_id'].'" '.($ca['area_id']==$area_arr['1']?"selected":'').' >'.$ca['area'].'</option>';
                }
            }
            if(!empty($city_arr) && !empty($area_arr['2']))
            {
                $district_arr = $Area->where("p_id=".$area_arr['1'])->select();
                $area_str['district'] = '<option value="0">请选择一项</option>';
                foreach ($district_arr as $da)
                {
                    $area_str['district'] .= '<option value="'.$da['area_id'].'" '.($da['area_id']==$area_arr['2']?"selected":'').' >'.$da['area'].'</option>';
                }

            }
        }

        $this->assign('province',$province);
        $this->assign('area',$area_str);
        $this->assign('post',$banner);
        return $this->fetch();
    }

    /*
     * 关于我们模块编辑保存
     */
    public function schoolEditPost()
    {
        $rule = [
            'id' => 'require',
            'title' => 'require',
            'address' => 'require',
            'longitude' => 'require',
            'latitude' => 'require',
            'tel' => 'require',
            'school_logo' => 'require',
            'bus' => 'require',
            'metro' => 'require',
            'province' => 'require|gt:0',
            'city' => 'require|gt:0',
            'district' => 'require|gt:0',
        ];
        $message = [
            'id.require' => '缺少关键参数',
            'title.require' => '标题不能为空',
            'address.require' => '地址不能为空',
            'longitude.require' => '经度不能为空',
            'latitude.require' => '纬度不能为空',
            'tel.require' => '联系电话不能为空',
            'school_logo.require' => 'LOGO不能为空',
            'bus.require' => '公交路线不能为空',
            'metro.require' => '地铁路线不能为空',
            'province.require' => '请选择省份',
            'province.gt' => '请选择省份',
            'city.require' => '请选择城市',
            'city.gt' => '请选择城市',
            'district.require' => '请选择区域',
            'district.gt' => '请选择区域',
        ];
        $data = $this->request->param('post/a',[]);
        $data['path'] = $data['province'].'-'.$data['city'].'-'.$data['district'];

        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        unset($data['province']);
        unset($data['city']);
        $SchoolArea = new SchoolAreaModel();
        $SchoolArea->update($data);
        $this->success('保存成功','schoolList');
    }

    /*
     * 关于我们模块删除
     */
    public function schoolDelete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',0);
        $SchoolArea = new SchoolAreaModel();
        if(!empty($id) && $SchoolArea->where(['id'=>$id])->delete() || !empty($ids) && $SchoolArea->where(['id'=>['IN',implode(',',$ids)]])->delete())
            $this->success('删除成功','schoolList');
    }


    public function areaList()
    {
        $SchoolArea = new SchoolAreaModel();
        $categories = $SchoolArea->select()->toArray();
        $this->assign('categories', $categories);
        return $this->fetch();
    }

    /*
     * 关于我们模块添加
     */
    public function areaAdd()
    {
        $area = Db::name('area')->where('area_id REGEXP \'0000$\'')->select()->toArray();
        $province = '';
        foreach ($area as $item) {
            $province .= '<option value="'.$item['area_id'].'">'.$item['area'].'</option>';
        }
        $this->assign('province',$province);
        return $this->fetch();
    }

    /*
     * 关于我们模块添加保存
     */
    public function areaAddPost()
    {
        $param = $this->request->param();
        $rule = [
            'name' => 'require',
            'province' => 'require|gt:0',
            'city' => 'require|gt:0',
            'district' => 'require|gt:0',
        ];
        $message = [
            'name.require' => '门店名称不能为空',
            'province.require' => '请选择省份',
            'province.gt' => '请选择省份',
            'city.require' => '请选择城市',
            'city.gt' => '请选择城市',
            'district.require' => '请选择区域',
            'district.gt' => '请选择区域',
        ];
        $check = $this->validate($param,$rule,$message);
        if($check !== true)
        {
            $this->error($check);
        }
        $data = $this->request->param('post/a',[]);

        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $SchoolArea = new SchoolAreaModel();
        $SchoolArea->isUpdate(false)->create($data);
        $this->success('添加成功','areaList');
    }

    /*
     * 关于我们模块编辑
     */
    public function areaEdit()
    {
        $id = $this->request->param('id/d',0);
        $SchoolArea = new SchoolAreaModel();
        $banner = $SchoolArea->where(['id'=>$id])->find()->toArray();

        $this->assign('post',$banner);
        return $this->fetch();
    }

    /*
     * 关于我们模块编辑保存
     */
    public function areaEditPost()
    {
        $param = $this->request->param();
        $rule = [
            'name' => 'require',
            'province' => 'require|gt:0',
            'city' => 'require|gt:0',
            'district' => 'require|gt:0',
        ];
        $message = [
            'name.require' => '门店名称不能为空',
            'province.require' => '请选择省份',
            'province.gt' => '请选择省份',
            'city.require' => '请选择城市',
            'city.gt' => '请选择城市',
            'district.require' => '请选择区域',
            'district.gt' => '请选择区域',
        ];
        $check = $this->validate($param,$rule,$message);
        if($check !== true)
        {
            $this->error($check);
        }
        $data = $this->request->param('post/a',[]);

        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $SchoolArea = new SchoolAreaModel();
        $SchoolArea->update($data);
        $this->success('保存成功','areaList');
    }

    /*
     * 关于我们模块删除
     */
    public function areaDelete()
    {
        $id = $this->request->param('id/d',0);
        $ids = $this->request->param('ids/a',0);
        $SchoolArea = new SchoolAreaModel();
        if(!empty($id) && $SchoolArea->where(['id'=>$id])->delete() || !empty($ids) && $SchoolArea->where(['id'=>['IN',implode(',',$ids)]])->delete())
            $this->success('删除成功','schoolList');
    }

    public function getRegion()
    {
        $id = $this->request->post('id/d',0);
        $area = Db::name('area')->where(['p_id'=>$id])->select()->toArray();
        $province = '';
        foreach ($area as $item) {
            $province .= '<option value="'.$item['area_id'].'">'.$item['area'].'</option>';
        }
        $data = [];
        $data['code'] = 200;
        $data['data'] = $province?$province:'';
        return json($data);
    }

    public function downloadApp()
    {
        $id = $this->request->param('id/d',29);
        $IndexPc = new IndexPcModel();
        $banner = $IndexPc->where(['id'=>$id,'type' => 'appDownload'])->find()->toArray();
        $this->assign('post',$banner);
        return $this->fetch();
    }

    /*
     * app编辑保存
     */
    public function appEditPost()
    {
        $rule = [
            'id' => 'require',
            'title' => 'require',
        ];
        $message = [
            'id.require' => '缺少关键参数',
            'title.require' => '标题不能为空',
        ];
        $data = $this->request->param('post/a',[]);
        $temp = [];
        if(isset($data['more']['append']['name']))
        {
            foreach ($data['more']['append']['name'] as $k=>$n)
            {
                $s = [];
                $s['name'] = $data['more']['append']['name'][$k];
                $s['value'] = $data['more']['append']['value'][$k];
                $s['thumbnail'] = $data['more']['append']['thumbnail'][$k];
                $temp['append'][] = $s;
            }
        }
        if(isset($data['more']['video']))
        {
//            $data['more']['video']['file_urls'] = isset($data['more']['video']['file_urls']) && !empty($data['more']['video']['file_urls'])?:'';
            $temp['video'] = $data['more']['video'];//地址已去头，输出需要加头
        }
        $data['more'] = $temp;
        $check_re = $this->validate($data,$rule,$message);
        if($check_re!==true) $this->error($check_re);
        $IndexPc = new IndexPcModel();
        $IndexPc->update($data);
        $this->success('保存成功','downloadApp');
    }
}