<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/27 0027
 * Time: 上午 11:09
 */

namespace app\admin\validate;


use think\Validate;

class ProductsValidate extends Validate
{
    protected $rule = [
        'product_name'          =>'require|max:64',
        'product_category'         =>'require',
        'price'         =>'require',
        'storage_num'         =>'require',
        'freight'         =>'require',
        'attributes'    =>'number|lt:1000000',
        'attr'          =>'chsDash',
    ];

    protected $message = [
        'name.require'          =>'属性名必须',
        'value.require'         =>'属性值必须',
//                'value.chsDash'         =>'只允许汉字、字母、数字和下划线_及破折号-',
        'list_order.number'     =>'排序号必须为数字',
        'list_order.lt'         =>'排序号最大不超过10w',
        'desc'                  =>'只允许汉字、字母、数字和下划线_及破折号-',
    ];

    protected $scene = [
        'add'  => ['name', 'value', 'list_order', 'desc'],
        'edit'  => ['name', 'value', 'list_order', 'desc','id'],
    ];
}