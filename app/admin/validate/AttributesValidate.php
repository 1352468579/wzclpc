<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/23 0023
 * Time: 下午 14:47
 */

namespace app\admin\validate;

use think\Validate;
class AttributesValidate extends Validate
{
    protected $rule = [
        'name'          =>'require|max:64',
        'value'         =>'require',
        'list_order'    =>'number|lt:1000000',
        'desc'          =>'chsDash',
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