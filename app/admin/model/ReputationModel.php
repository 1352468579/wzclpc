<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/3 0003
 * Time: 下午 15:49
 */

namespace app\admin\model;


use think\Model;

class ReputationModel extends Model
{
    protected $table = 'cmf_index';
    protected $type = [
        'more' => 'array'
    ];
}