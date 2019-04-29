<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/5 0005
 * Time: 下午 17:59
 */
namespace app\wap\controller;
use cmf\controller\HomeBaseController;
use app\admin\model\IndexPcModel;
use app\admin\model\BannerModel;
header('Content-type:text/html;charset=utf-8;');
class IndexController extends HomeBaseController
{
    public function index()
    {
        $IndexPcModel = new IndexPcModel();
        $where = ['type' => 'index'];
        $index = $IndexPcModel->where($where)->select()->toArray();
        $Banner = new BannerModel();
        $banner = $Banner->where(['type'=>'index'])->order('list_order desc')->select()->toArray();
        $IndexPcModel = new IndexPcModel();
        $where = ['type' => 'object'];
        $object = $IndexPcModel->field('model_name,title,id,parent_id,descript,create_date,more')->where($where)->select()->toArray();
        $index_2 = $index_3 = $index_4 = $index_5 = $index_6 = $index_7 = $index_8 = $index_9 = $index_10 = $index_11 = [];
        foreach ($index as $c)
        {
            $c['model_name'] == '模块二' ?$index_2 = $c:'';
            $c['model_name'] == '模块三' ?$index_3 = $c:'';
            $c['model_name'] == '模块四' ?$index_4 = $c:'';
            $c['model_name'] == '模块五' ?$index_5 = $c:'';
            $c['model_name'] == '模块六' ?$index_6 = $c:'';
            $c['model_name'] == '模块七' ?$index_7 = $c:'';
            $c['model_name'] == '模块八' ?$index_8 = $c:'';
            $c['model_name'] == '模块九' ?$index_9 = $c:'';
            $c['model_name'] == '模块十' ?$index_10 = $c:'';
            $c['model_name'] == '模块十一' ?$index_11 = $c:'';
        }
        $index_9['descript']=str_replace("\n","<br/>",$index_9['descript']);
        $this->assign('banner',$banner);
        $this->assign('index_2',$index_2);
        $this->assign('index_3',$index_3);
        $this->assign('index_4',$index_4);
        $this->assign('index_5',$index_5);
        $this->assign('index_6',$index_6);
        $this->assign('index_7',$index_7);
        $this->assign('index_8',$index_8);
        $this->assign('index_9',$index_9);
        $this->assign('index_10',$index_10);
        $this->assign('index_11',$index_11);
        $this->assign('index',$index);
        $this->assign('object',$object);
        return $this->fetch();
    }

    public function object()
    {
        $IndexPcModel = new IndexPcModel();
        $where = ['type' => 'object'];
        $object = $IndexPcModel->field('model_name,title,id,parent_id,descript,create_date,more')->where($where)->select()->toArray();
        foreach ($object as $o)
        {
            if ($o['parent_id'] == 0){

                $o['temp']['id'] = $o['id'];
                $o['temp']['name'] = $o['title'];
                $o['temp']['enname'] = $o['descript'];
                $o['temp']['subjects'] = $this->getObject($object,$o['id']);
                $new_object[] = $o['temp'];
            }
        }
        if (!empty($new_object))
            $this->success('success','',$new_object);
        $this->error('error');
    }

    protected function getObject($data,$parent_id=0,$t=[],$n=0)
    {
        $new_object = [];
        foreach ($data as $o)
        {
            if ($o['parent_id'] == $parent_id && $o['parent_id'] != 0){
                $o['temp']['name'] = $o['title'];
                $o['temp']['ensubname'] = $o['descript'];
                foreach ($o['more']['append'] as $oma) {
                    $temp = [];
                    $temp['score'] = $oma['name'];
                    $temp['describe'] = empty($oma['value'])?[]:explode("\n",$oma['value']);
                    $o['contents'][] = $temp;
                }
                $o['temp']['contents'] = $o['contents'];
                $new_object[] = $o['temp'];
            }
        }
        return $new_object;
    }
}