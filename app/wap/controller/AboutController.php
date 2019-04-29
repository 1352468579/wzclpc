<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/12 0012
 * Time: 下午 15:52
 */

namespace app\wap\controller;


use cmf\controller\HomeBaseController;
use app\admin\model\AboutModel;
use app\admin\model\SchoolAreaModel;
use app\admin\model\IndexPcModel;

class AboutController extends HomeBaseController
{
    public function index()
    {

        $AboutModel = new AboutModel();
        $where = ['parent_id' => 0, 'type' => 'about'];
        $categories = $AboutModel->where($where)->select()->toArray();
        $banner = $index_1 = $index_2 = $index_3 = $index_4 = $index_5 = $index_6 = [];
        foreach ($categories as $c) {
            $c['descript'] = str_replace("\r","<br/>",$c['descript']);
            $c['descript'] = str_replace(" ","&nbsp;",$c['descript']);
            $c['model_name'] == 'banner' ? $banner = $c : '';
            $c['model_name'] == '模块一' ? $index_1 = $c : '';
            $c['model_name'] == '模块二' ? $index_2 = $c : '';
            $c['model_name'] == '模块三' ? $index_3 = $c : '';
            $c['model_name'] == '模块四' ? $index_4 = $c : '';
            $c['model_name'] == '模块五' ? $index_5 = $c : '';
            $c['model_name'] == '模块六' ? $index_6 = $c : '';
        }
        if (!empty($index_5['more']['append'])) {
            foreach ($index_5['more']['append'] as &$i5) {
                strpos($i5['value'], '||') ? list($i5['value'], $i5['subtitle']) = explode('||', $i5['value']) : '';
            }
        }
        $this->assign('banner', $banner);
        $this->assign('index_1', $index_1);
        $this->assign('index_2', $index_2);
        $this->assign('index_3', $index_3);
        $this->assign('index_4', $index_4);
        $this->assign('index_5', $index_5);
        $this->assign('index_6', $index_6);
        return $this->fetch();
    }

    public function school()
    {
        $SchoolArea = new SchoolAreaModel();
        $arealist = $SchoolArea->alias('sa')->field('distinct(sa.district),a.area')->join('__AREA__ a', 'a.area_id=sa.district')->select()->toArray();
        $district = $this->request->param('district/d', 0);
        $where = $district?['district'=>$district]:[];
        $schoolList = $SchoolArea->where($where)->paginate(5);
        $this->assign('schoolList',$schoolList);
        $this->assign('arealist',$arealist);
        $this->assign('page',$schoolList->render());
        return $this->fetch();
    }

    public function getSchool()
    {
        $district = $this->request->param('district/d', 0);
        $SchoolArea = new SchoolAreaModel();
        $where = $district?['district'=>$district]:[];
        $page = $this->request->param('page/d', 1);
        $page = $page==0?1:$page;
        $list_row = $this->request->param('list_row/d', 5);
//        $schoolList = $SchoolArea->where($where)->limit(($page-1)*$list_row,$list_row)->select()->toArray();
        $schoolList = $SchoolArea->where($where)->select()->toArray();
        $newArr = [];
        foreach ($schoolList as $item) {
            $item['temp']['id'] = $item['id'];
            $item['temp']['lng'] = $item['longitude'];
            $item['temp']['lat'] = $item['latitude'];
            $item['temp']['title'] = $item['title'];
            $item['temp']['content'] = ['地址:'.$item['address'],'电话:'.$item['tel']];
            $newArr[] = $item['temp'];
        }
        $this->success('保存成功','',$newArr);
    }

    public function downloadApp()
    {
        $id = $this->request->param('id/d',29);
        $IndexPc = new IndexPcModel();
        $banner = $IndexPc->where(['id'=>$id,'type' => 'appDownload'])->find()->toArray();
        if(isset($banner['more']['append']))
        {
            foreach ($banner['more']['append'] as &$b)
            {
                 $b['value']=str_replace("\n","<br/>",$b['value']);
            }
        }
        $this->assign('banner',$banner);
        return $this->fetch();
    }
}