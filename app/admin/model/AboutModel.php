<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/4 0004
 * Time: 上午 9:53
 */

namespace app\admin\model;


use think\Model;

class AboutModel extends Model
{
    protected $table = 'cmf_index';
    protected $type = [
        'more' => 'array'
    ];
}