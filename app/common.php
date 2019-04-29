<?php
use think\Db;
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/23 0023
 * Time: 下午 14:24
 */
function unqiue_empty($array=[],&$res=[])
{
    if(!is_array($array)) return false;
    if(empty($array)) return [];
    foreach ($array as $item=>$v) {
        if(is_array($v))
        {
            empty($v)?:$res[$item] = unqiue_empty($v,$res);
        }else{
            $v===''?:$res[$item] = $v;
        }
    }
    return $res;
}

function get_random()
{
    $length = 8;
    $str = null;
    $strPol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    $max = strlen($strPol)-1;
    for($i=0;$i<$length;$i++){
        $str.=$strPol[rand(0,$max)];
    }
    $str .= 'hyxt_'.$str;
    if(Db::name('user')->where(['user_uid'=>$str])->count())
        get_random();
    return $str;
}


function download($src='')
{
    echo ("<script>window.open('".$src."');</script>");exit;
    header("location:".$src);
    if (file_exists($src))
    {
        redirect($src);
    }else{
    }
}

function getNewList($categoryId='',$limit=6,$options=[])
{
    $categoryId = $categoryId ===''?11:$categoryId;
    $portalCategoryModel = new app\portal\model\PortalCategoryModel();
    $portalPostModel = new app\portal\model\PortalPostModel();
    $where = [
        'a.create_time' => ['>=', 0],
        'a.delete_time' => 0
    ];

    $join = [
        ['__USER__ u', 'a.user_id = u.id']
    ];

    $field = 'a.*,u.user_login,u.user_nickname,u.user_email';

    if (!empty($categoryId)) {
        if($categoryId==11) {
            $categoryIds = $portalCategoryModel->where(['path'=>['Like','%'.$categoryId.'%']])->column('id');
            $where['b.category_id'] = ['in', trim(implode(',',$categoryIds),',')];
        }else{
            $where['b.category_id'] = ['eq', $categoryId];
        }
        array_push($join, ['__PORTAL_CATEGORY_POST__ b', 'a.id = b.post_id']);
        $field = 'a.*,b.id AS post_category_id,b.list_order,b.category_id,u.user_login,u.user_nickname,u.user_email';
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
    empty($options)?:$where = array_merge($where,$options);

    $articles        = $portalPostModel->alias('a')->field($field)
        ->join($join)
        ->where($where)
        ->order('update_time', 'DESC')
        ->limit($limit)
        ->select()
        ->toArray();
    return $articles;
}

function bootstrap($id=0,$link=false)
{

    if($id===0)
    {
        $request = \think\Request::instance();
        $id = $request->param('id/d',0);
    }
    $portalPostModel = new app\portal\model\PortalPostModel();
    $join = [
        ['__PORTAL_CATEGORY_POST__ b', 'a.id = b.post_id']
    ];
    array_push($join, ['__PORTAL_CATEGORY__ c', 'c.id = b.category_id']);
    $field = 'a.post_title,b.post_id,b.category_id,c.name';
    $where = [
        'a.create_time' => ['>=', 0],
        'a.delete_time' => 0,
        'a.id' => $id,
    ];
    $res        = $portalPostModel->alias('a')->field($field)
        ->join($join)
        ->where($where)
        ->order('update_time', 'DESC')
        ->find()
        ->toArray();

    if($link===false)
    return '<a href="/">首页</a><i class="arrow"> > </i>'
        .(empty($res['name'])?'':'<a href="'.url('/Wap/News/newList/cid/'.$res['category_id']).'">'.$res['name'].'</a><i class="arrow"> > </i>').
        '<a class="article-current">'.$res['post_title'].'</a>';
}

function hotClass($parentId=17,$limit=15)
{
    $portalCategoryModel = new app\portal\model\PortalCategoryModel();
    $where = ['delete_time' => 0,'path'=>['Like','0-'.$parentId.'-%'],'is_hot'=>1];
    $categories = $portalCategoryModel->field('id,name,parent_id,more')->where($where)->order("list_order ASC")->limit($limit)->select()->toArray();
    foreach ($categories as &$c)
    {
        $c['parent_id']==17?:$c['name']=$portalCategoryModel->where(['id'=>$c['parent_id'],'delete_time' => 0,'path'=>['Like','0-'.$parentId.'-%']])->value('name').$c['name'];
    }
    return $categories;
}
function hotClassNew($type = 'class',$limit = 30)
{
    $LinkModel = new app\admin\model\LinkModel();
    $where = ['type' => $type,'status'=>1];
    $res = $LinkModel->where($where)->order("list_order ASC")->limit($limit)->select()->toArray();

    return $res;
}

function hotClassForArticle($type = 'hotClass',$limit = 4)
{
    $LinkModel = new app\admin\model\LinkModel();
    $where = ['type' => $type,'status'=>1];
    $res = $LinkModel->where($where)->order("list_order ASC")->limit($limit)->select()->toArray();
//    foreach ($res as $c=>$v)
//    {
//        $res[$c]['image'] = empty($v['image'])?'':cmf_get_image_url($v['image']);
//    }
    return $res;
}

function hotTagOld($categoryId='',$limit=20)
{
    $categoryId = $categoryId ===''?11:$categoryId;
    $portalCategoryModel = new app\portal\model\PortalCategoryModel();
    $portalPostModel = new app\portal\model\PortalPostModel();
    $where = [
        'a.create_time' => ['>=', 0],
        'a.delete_time' => 0
    ];

    $join = [
        ['__PORTAL_CATEGORY_POST__ b', 'a.id = b.post_id']
    ];

    $field = 'a.id,a.post_hits,a.post_title,a.post_keywords,a.thumbnail,a.published_time';

    if (!empty($categoryId)) {
        if($categoryId==11) {
            $categoryIds = $portalCategoryModel->where(['path'=>['Like','%'.$categoryId.'%']])->column('id');
            $where['b.category_id'] = ['in', trim(implode(',',$categoryIds),',')];
        }else{
            $where['b.category_id'] = ['eq', $categoryId];
        }
        array_push($join, ['__PORTAL_CATEGORY__ c', 'c.id = b.category_id']);
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
//    empty($options)?:$where = array_merge($where,$options);

    $articles        = $portalPostModel->alias('a')->field($field)
        ->join($join)
        ->where($where)
        ->order('post_hits', 'DESC')
        ->limit($limit)
        ->select()
        ->toArray();
    return $articles;
}

function Links($type='link')
{
    $LinkModel = new app\admin\model\LinkModel();
    $list = $LinkModel->where(['status'=>1,'type'=>$type])->order('list_order')->limit(30)->select()->toArray();
    return $list;
}

function hotSearch($categoryId='',$limit=20)
{
    $categoryId = $categoryId ===''?11:$categoryId;
    $portalCategoryModel = new app\portal\model\PortalCategoryModel();
    $portalPostModel = new app\portal\model\PortalPostModel();
    $where = [
        'a.create_time' => ['>=', 0],
        'a.delete_time' => 0
    ];

    $join = [
        ['__PORTAL_CATEGORY_POST__ b', 'a.id = b.post_id']
    ];

    $field = 'a.id,a.post_hits,a.post_title,a.post_keywords,a.thumbnail,a.published_time';

    if (!empty($categoryId)) {
        if($categoryId==11) {
            $categoryIds = $portalCategoryModel->where(['path'=>['Like','%'.$categoryId.'%']])->column('id');
            $where['b.category_id'] = ['in', trim(implode(',',$categoryIds),',')];
        }else{
            $where['b.category_id'] = ['eq', $categoryId];
        }
        array_push($join, ['__PORTAL_CATEGORY__ c', 'c.id = b.category_id']);
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
//    empty($options)?:$where = array_merge($where,$options);

    $articles        = $portalPostModel->alias('a')->field($field)
        ->join($join)
        ->where($where)
        ->order('post_hits', 'DESC')
        ->limit($limit)
        ->select()
        ->toArray();
    $result = [];
    foreach ($articles as $k=>$v)
    {
        if(count($result)>15) return $result;
        if(empty($v['post_keywords']))
        {
            $v['post_keywords'] = $v['post_title'];
            $v['url'] = url('/Wap/News/search',['keyword'=>mb_substr($v['post_keywords'],0,6)]);
            $result[] = $v;
        }else{
            $result = hotKeywords($v,$result);
        }
    }
    return $result;
}

/*
 * 推荐版块
 */
function recommendBlock($type='news',$limit=20)
{
    $RecommendBlockModel = new app\portal\model\PortalTagModel();
    $Recommend = $RecommendBlockModel->where(['type'=>$type])->limit($limit)->order('list_order')->select();
    return $Recommend?$Recommend:[];
}

/*
 * 推荐版块
 */
function recommendBlock_old($type='list')
{
    $RecommendBlockModel = new app\admin\model\RecommendBlockModel();
    $type = $type == 'list' ?0:1;
    $Recommend = $RecommendBlockModel->where(['type'=>$type])->find();
    return $Recommend['recommended']?explode(',',$Recommend['recommended']):[];
}


function hotKeywords(array $data=[],$articles=[])
{
    $post_keywords = explode(',',$data['post_keywords']);
    $res = [];
    foreach ($post_keywords as $pk=>$pv)
    {
        $res['id'] = $data['id'];
        $res['post_hits'] = $data['post_hits'];
        $res['post_title'] = $data['post_title'];
        $res['post_keywords'] = $pv;
        $res['thumbnail'] = $data['thumbnail'];
        $res['published_time'] = $data['published_time'];
        $res['url'] = url('/Wap/News/search',['keyword'=>$pv]);
        $articles[] = $res;
    }
    return $articles;
}

function uLike($categoryId='',$limit=10,$options=[])
{
    $categoryId = $categoryId ===''?11:$categoryId;
    $portalCategoryModel = new app\portal\model\PortalCategoryModel();
    $portalPostModel = new app\portal\model\PortalPostModel();
    $where = [
        'a.create_time' => ['>=', 0],
        'a.delete_time' => 0
    ];

    $join = [
        ['__USER__ u', 'a.user_id = u.id']
    ];

    $field = 'a.*,u.user_login,u.user_nickname,u.user_email';

    if (!empty($categoryId)) {
        if($categoryId==11) {
            $categoryIds = $portalCategoryModel->where(['path'=>['Like','%'.$categoryId.'%']])->column('id');
            $where['b.category_id'] = ['in', trim(implode(',',$categoryIds),',')];
        }else{
            $where['b.category_id'] = ['eq', $categoryId];
        }
        array_push($join, ['__PORTAL_CATEGORY_POST__ b', 'a.id = b.post_id']);
        $field = 'a.*,b.id AS post_category_id,b.list_order,b.category_id,u.user_login,u.user_nickname,u.user_email';
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
    empty($options)?:$where = array_merge($where,$options);

    $articles        = $portalPostModel->alias('a')->field($field)
        ->join($join)
        ->where($where)
        ->where('a.id>rand()*'.Db::name('portal_post')->field('max(id)-10')->buildSql())
        ->limit($limit)
        ->select()
        ->toArray();
    return $articles;
}

function applyClasses($categoryId='',$limit=99,$options=[])
{
    $categoryId = $categoryId ===''?23:$categoryId;
    $portalCategoryModel = new app\portal\model\PortalCategoryModel();
    $where = ['delete_time' => 0];
    $where['path'] = ['Like','%'.$categoryId.'-%'];
//        if (!empty($currentCid)) {
//            $where['id'] = ['neq', $currentCid];
//        }
    $categories = $portalCategoryModel->order("list_order ASC")->where($where)->select()->toArray();
    return getClassOption($categories);
}

