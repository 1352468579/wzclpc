<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/31 0031
 * Time: 上午 10:54
 */

namespace app\admin\model;


use think\Model;

class BannerModel extends Model
{

    /*
     * banner添加
     */
    public function add($data)
    {
        $this->isUpdate(false)->create($data);
    }
}