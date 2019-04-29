<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/31 0031
 * Time: 下午 15:28
 */

namespace app\admin\model;


use think\Model;

class IndexPcModel extends Model
{
    protected $table = 'cmf_index';
    protected $type = [
        'more' => 'array',
//        'descript'=> 'json',
    ];
}