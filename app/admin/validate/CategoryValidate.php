<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/23 0023
 * Time: 下午 14:47
 */

namespace app\admin\validate;
use think\Db;
use think\Validate;
class CategoryValidate extends Validate
{
    protected $rule = [
        'name'          =>'require|max:64',
        'status'        =>'require',
        'list_order'    =>'number|lt:1000000',
        'desc'          =>'chsDash',
        'remark'        =>'chsDash',
        'parent_id'     =>'check_parent_id',
    ];

    protected $message = [
        'name.require'          =>'分类名必须',
        'status.require'        =>'分类状态必须',
//                'value.chsDash'         =>'只允许汉字、字母、数字和下划线_及破折号-',
        'list_order.number'     =>'排序号必须为数字',
        'list_order.lt'         =>'排序号最大不超过10w',
        'desc'                  =>'描述只允许汉字、字母、数字和下划线_及破折号-',
        'remark'                =>'备注只允许汉字、字母、数字和下划线_及破折号-',
        'parent_id'             =>'分类不能超过2级',
    ];

    protected $scene = [
        'add'  => ['name', 'value', 'list_order', 'parent_id','remark'],
        'edit'  => ['name', 'value', 'list_order', 'id','parent_id'],
    ];


    public function check_parent_id($parent_id=0)
    {
        if(Db::name('product_category')->where(['id'=>$parent_id])->value('parent_id'))
        {
            return false;
        }
        return true;
    }
}