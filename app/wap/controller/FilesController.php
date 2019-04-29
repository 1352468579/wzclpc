<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/12 0012
 * Time: 下午 16:57
 */

namespace app\wap\controller;


use cmf\controller\HomeBaseController;
use app\portal\model\PortalPostModel;
use app\admin\model\FilesCategoryModel;
use tree\Tree;
use app\admin\model\FilesModel;
class FilesController extends HomeBaseController
{
    public function index()
    {
        $id = $this->request->param('id', 11, 'intval');

        $portalPostModel = new PortalPostModel();
        $post            = $portalPostModel->where('id', $id)->find();
        $FilesCategoryModel = new FilesCategoryModel();
        $keyword = $this->request->param('keyword/s','');
        $where = ['parent_id'=>0];
        empty($keyword)?:$where['name'] = ['Like','%'.$keyword.'%'];
        $categories = $FilesCategoryModel->where($where)->select()->toArray();
        foreach ($categories as &$c)
        {
            $c['classes'] = $FilesCategoryModel->where(['parent_id'=>$c['id']])->select()->toArray();
        }
        $this->assign('post', $post->toArray());
        $this->assign('categories', json_encode($categories));
        return $this->fetch();
    }

    public function login()
    {
        $captcha = $this->request->param('captcha');
        if (empty($captcha)) {
            $this->error(lang('CAPTCHA_REQUIRED'));
        }
        //验证码
        if (!cmf_captcha_check($captcha)) {
            $this->error(lang('CAPTCHA_NOT_RIGHT'));
        }
        $pass = $this->request->param("passwd");
        if (empty($pass)) {
            $this->error(lang('PASSWORD_REQUIRED'));
        }
        $Files = new FilesModel();
        $where = [];
        $where['fc.grade'] = $this->request->param('grade/s','');
        $where['fc.class'] = $this->request->param('class/s','');
        $where['f.passwd'] = $this->request->param('passwd/s','');

        if(!$Files->alias('f')->join('__FILES_CATEGORY__ fc','fc.id=f.cid')->where($where)->count())
            $this->error('密码错误');
        $id = $Files->alias('f')->join('__FILES_CATEGORY__ fc','fc.id=f.cid')->where($where)->value('f.id');
        $this->success('',url('/Wap/Files/download',['id'=>$id]));
    }

    public function download()
    {
        $id = $this->request->param('id/d',0);
        $where = ['f.id'=>$id];
        $Files = new FilesModel();
        $file = $Files->alias('f')->field('f.*,fc.class,fc.grade')->join('__FILES_CATEGORY__ fc','fc.id=f.cid')->where($where)->find()->toArray();
//        $file['content'] = cmf_replace_content_file_url(htmlspecialchars_decode($file['content']));
        isset($file['more']['files'])?$file['more']['files']=array_reverse($file['more']['files']):'';
        $this->assign('file',$file);
        return $this->fetch();
    }

    public function downloadDo()
    {
        $id = $this->request->param('id/d',0);
        $Files = new FilesModel();
//        $src = $Files->where(['id'=>$id])->find();
        $Files->where(['id'=>$id])->setInc('download');
        return $this->success('','',[]);
    }
}