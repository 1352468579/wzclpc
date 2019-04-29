<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author:kane < chengjin005@163.com>
// +----------------------------------------------------------------------
namespace app\portal\model;

use think\Model;

class PortalTagModel extends Model
{
    public static   $STATUS = array(
        0=>"禁用",
        1=>"已推荐",
    );

    public static   $TYPE = array(
        'news'=>"新闻页",
        'newsList'=>"新闻列表页",
    );
}