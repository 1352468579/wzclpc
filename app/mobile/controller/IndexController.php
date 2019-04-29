<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/5 0005
 * Time: 下午 17:59
 */
namespace app\mobile\controller;
use cmf\controller\MobileBaseController;
use app\admin\model\ReputationModel;
use app\admin\model\BannerModel;
use app\portal\model\PortalPostModel;
use app\portal\model\PortalCategoryModel;
use app\admin\model\SchoolAreaModel;
use app\admin\model\AreaModel;
use Think\Exception;
use app\admin\model\IndexPcModel;
use think\Db;
header('Content-type:text/html;charset=utf-8;');
class IndexController extends MobileBaseController
{
    const CID = 11;
    const GRADE_ID = 23;
    /************
    *----==== 初始化函数 ====----
    *Created by w 2019/4/21 15:31
    ************/
    public function _initialize()
    {
        parent::_initialize();
        $portalCategoryModel = new PortalCategoryModel();
        $where = ['delete_time' => 0,'path'=>['Like','0-'.self::GRADE_ID.'%'],'parent_id'=>self::GRADE_ID];
        $categories = $portalCategoryModel->order("list_order ASC")->where($where)->select()->toArray();
        $this->assign('grade', $categories);
        if (!session('my-token')) {
            session('my-token',md5(time()));
        }
        $this->assign('token', session('my-token'));
    }
    /************
    *----==== 首页 ====----
    *Created by w 2019/4/19 10:28
    ************/
    public function index()
    {
        /**********=====---- 显示wap-首页banner ----Mod by w 2019/4/21 7:51=====**********/
        $Banner = new BannerModel();
        $type = $this->request->param('type','wap');
        empty($type)?$where = ['type'=>['in',['index','wap']]]:$where = ['type'=>$type];
        $banner = $Banner->where($where)->order('list_order desc')->select();
        /**********=====---- 获取视频文件 ----Mod by w 2019/4/24 15:05=====**********/
        $IndexPcModel = new IndexPcModel();
        $where = ['type' => 'index'];
        $index = $IndexPcModel->where($where)->select()->toArray();
        $index_4 = $index_9 = [];
        foreach ($index as $c)
        {
            $c['model_name'] == '模块四' ?$index_4 = $c:'';
            $c['model_name'] == '模块九' ?$index_9 = $c:'';
        }
        $this->assign('index_4',$index_4);
        $this->assign('index_9',$index_9);
        $this->assign('banner',$banner->toArray());
        return $this->fetch();
    }
    /************
     *----==== 优势 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function advantage(){
        return $this->fetch();
    }
    /************
     *----==== 课程设置 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function courseSet(){
        return $this->fetch('courseSet');
    }
    /************
     *----==== 影响 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function influence(){
        $ReputationModel = new ReputationModel();
        $where = ['parent_id' => 0,'type' => 'reputation_wap'];
        $categories = $ReputationModel->where($where)->select()->toArray();
        $model_1 = $model_2 = $model_3 = [];
        foreach ($categories as $c)
        {
            $c['model_name'] == '小学部' ? $model_1 = $c:'';
            $c['model_name'] == '初中部' ? $model_2 = $c:'';
            $c['model_name'] == '高中部' ? $model_3 = $c:'';
        }
        $this->assign('model_1', $model_1['more']['append']);
        $this->assign('model_2', $model_1['more']['append']);
        $this->assign('model_3', $model_3['more']['append']);
        return $this->fetch();
    }
    /************
     *----==== 新闻 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function news(){
        $categoryId = $this->request->param('cid', self::CID, 'intval');
        if ($this->request->isAjax()) {
            $res = array();
            $res['status'] = false;
            $res['html'] = '';
            if ($this->getNewsList($categoryId)) {
                $res['status'] = true;
                $res['html'] = $this->getNewsList($categoryId);
            }
            return json($res);
        }
        $this->assign('cid', $categoryId);
        $this->assign('article', $this->getNewsList($categoryId));
        return $this->fetch();
    }
    /************
    *----==== 获取文章的条件 ====----
    *Created by w 2019/4/20 14:14
    ************/
    private function _getNewsWhere($categoryId = self::CID){
        $param = $this->request->param();
        $portalCategoryModel = new PortalCategoryModel();
        $where = [
            'a.create_time' => ['>=', 0],
            'a.delete_time' => 0
        ];

        $join = [
            ['__USER__ u', 'a.user_id = u.id']
        ];

        $field = 'a.*,u.user_login,u.user_nickname,u.user_email';

        if (!empty($categoryId)) {
            if($categoryId==self::CID)
            {
                $categoryIds = $portalCategoryModel->where(['path'=>['Like','%'.$categoryId.'%']])->column('id');
                $where['b.category_id'] = ['in', trim(implode(',',$categoryIds),',')];
            }else{
                $where['b.category_id'] = ['eq', $categoryId];
            }
            array_push($join, [
                '__PORTAL_CATEGORY_POST__ b', 'a.id = b.post_id'
            ]);
            array_push($join, [
                '__PORTAL_CATEGORY__ c', 'c.id = b.category_id'
            ]);
            $field = 'a.*,b.id AS post_category_id,b.list_order,b.category_id,u.user_login,u.user_nickname,u.user_email,c.name';
        }

        $startTime = empty($param['start_time']) ? 0 : strtotime($param['start_time']);
        $endTime   = empty($param['end_time']) ? 0 : strtotime($param['end_time']);
        if (!empty($startTime) && !empty($endTime)) {
            $where['a.published_time'] = [['>= time', $startTime], ['<= time', $endTime]];
        } else {
            if (!empty($startTime)) {
                $where['a.published_time'] = ['>= time', $startTime];
            }
            if (!empty($endTime)) {
                $where['a.published_time'] = ['<= time', $endTime];
            }
        }

        $keyword = empty($param['keyword']) ? '' : $param['keyword'];
        if (!empty($keyword)) {
            $where['a.post_title'] = ['like', "%$keyword%"];
        }

        $where['a.post_type'] = 1;
        $where['a.post_status'] = 1;
        $res = array();
        $res['where'] = $where;
        $res['field'] = $field;
        $res['join'] = $join;
        $res['param'] = $param;
        return $res;
    }
    /************
    *----==== 获取新闻列表 ====----
    *Created by w 2019/4/20 11:24
    ************/
    public function getNewsList($categoryId = self::CID){
        $res = self::_getNewsWhere($categoryId);
        $portalPostModel = new PortalPostModel();
        $articles = $portalPostModel->alias('a')->field($res['field'])
            ->join($res['join'])
            ->where($res['where'])
            ->order('update_time', 'DESC')
            ->paginate(8);
        $articles->appends($res['param']);
        $articlesList = $articles->toArray();
        $this->assign('articles', $articlesList['data']);
        $this->assign('page', $articles->render());
        return $this->fetch('getNewsList');
    }
    /************
     *----==== 新闻详情 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function newsInfo(){
        $newId = $this->request->param('id',75, 'intval');
        $newModel = new PortalPostModel();
        $newsInfo = $newModel->find($newId);
        $this->assign('newsInfo',$newsInfo->toArray());
        return $this->fetch('newsInfo');
    }
    /************
     *----==== 儿童学院 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function children(){
        /**********=====---- 获取视频文件 ----Mod by w 2019/4/24 15:05=====**********/
        $IndexPcModel = new IndexPcModel();
        $where = ['type' => 'index'];
        $index = $IndexPcModel->where($where)->select()->toArray();
        $index_4 = $index_9 = [];
        foreach ($index as $c)
        {
            $c['model_name'] == '模块四' ?$index_4 = $c:'';
            $c['model_name'] == '模块九' ?$index_9 = $c:'';
        }
        $this->assign('index_4',$index_4);
        $this->assign('index_9',$index_9);
        return $this->fetch();
    }
    /************
     *----==== 学校地区 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function school(){
        $SchoolArea = new SchoolAreaModel();
        try {
            $area_list = $SchoolArea
                ->field('s.id,a.*')
                ->alias('s')
                ->group('s.district')
                ->join('__AREA__ a','a.area_id=s.district','LEFT')
                ->select();

        }catch (Exception $e) {
            $error = $e->getMessage();
            $this->error($error);
            return;
        }
        $this->assign('area_list',$area_list->toArray());
        return $this->fetch();
    }
    /************
     *----==== 学校列表 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function schoolList(){
        $id = $this->request->param('id');
        if ($this->request->isAjax()) {
            /**********=====---- ajax请求返回相应的学校列表 ----Mod by w 2019/4/20 9:00=====**********/
            $school_html = self::_getSchoolList($id);
            return json($school_html);
        }
        $SchoolArea = new SchoolAreaModel();
        $Area = new AreaModel();
        try {
            $area_list = $SchoolArea
                ->field('a.*,count(s.id) as count')
                ->alias('s')
                ->group('s.district')
                ->join('__AREA__ a','a.area_id=s.district','LEFT')
                ->select();
            /**********=====---- 显示当前的校区 ----Mod by w 2019/4/20 9:29=====**********/
            $current_area = $Area->find($id);

        }catch (Exception $e) {
            $error = $e->getMessage();
            $this->error($error);
            return;
        }
        $this->assign('area_list',$area_list->toArray());
        $this->assign('current_area',$current_area->toArray());
        $this->assign('school_list',self::_getSchoolList($id));
        return $this->fetch('schoolList');
    }
    /************
     *----==== 学校详情 ====----
     *Created by w 2019/4/13 10:59
     ************/
    public function schoolInfo(){
        $id = $this->request->param('id');
        $SchoolArea = new SchoolAreaModel();
        $schoolInfo = $SchoolArea->find($id);
        $this->assign('schoolInfo',$schoolInfo->toArray());
        return $this->fetch('schoolInfo');
    }
    /************
     *----==== 获取学校列表 ====----
     *Created by w 2019/4/14 17:08
     ************/
    private function _getSchoolList($id = 510107){
        /**********=====---- 根据地区ID获取学校列表 ----Mod by w 2019/4/20 8:53=====**********/
        $SchoolArea = new SchoolAreaModel();
        try {
            $school_list = $SchoolArea
                ->field('s.*,a.area')
                ->alias('s')
                ->join('__AREA__ a','a.area_id=s.district','LEFT')
                ->where(['s.district'=>$id])
                ->select();
        }catch (Exception $e) {
            $error = $e->getMessage();
            $this->error($error);
            return;
        }
        $this->assign('schoolList',$school_list->toArray());
        return $this->fetch("getSchoolList");
    }
    /************
    *----==== 学生注册 ====----
    *Created by w 2019/4/21 13:42
    ************/
    public function register(){
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
        if ($param['token'] != session('my-token')) {
            $this->error('禁止重复提交表单');
        }else{
            session('my-token',null);
        }
        Db::name('apply')->insert($data);
        $this->success('保存成功');
    }
    /************
    *----==== Ajax通过年级ID获取科目 ====----
    *Created by w 2019/4/21 14:33
    ************/
    public function getCourseByGrade(){
        $id = $this->request->param('grade');
        $portalCategoryModel = new PortalCategoryModel();
        $categories = array();
        if ($id) {
            $where = ['delete_time' => 0,'path'=>['Like','0-'.self::GRADE_ID.'%'],'parent_id'=>$id];
            $categories = $portalCategoryModel->order("list_order ASC")->where($where)->select()->toArray();
        }
        $html = '<option value="">请选择孩子补习科目</option>';
        if ($categories) {
            $option = <<<start
                <option value="%s">%s</option>
start;
            foreach ($categories as $k=>$v) {
                $new = sprintf($option,$v['name'],$v['name']);
                $html .= $new;
            }

        }
        return json($html);
    }
    /************
    *----==== 专题一（珠心算） ====----
    *Created by w 2019/4/25 14:04
    ************/
    public function count(){
        return $this->fetch();
    }
    /************
    *----==== 专题二（全能口才训练） ====----
    *Created by w 2019/4/25 15:39
    ************/
    public function training(){
        return $this->fetch();
    }
    /************
    *----==== 专题三（高三冲刺） ====----
    *Created by w 2019/4/25 15:40
    ************/
    public function sprint(){
        return $this->fetch();
    }
}