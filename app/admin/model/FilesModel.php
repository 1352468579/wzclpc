<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/4 0004
 * Time: 上午 11:00
 */

namespace app\admin\model;


use think\Model;

class FilesModel extends Model
{
    protected $type = [
        'more' => 'array'
    ];

    public function categories()
    {
        return $this->belongsTo('FilesCategoryModel', 'id');
    }
}