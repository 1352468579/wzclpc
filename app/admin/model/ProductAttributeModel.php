<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/27 0027
 * Time: 上午 11:49
 */

namespace app\admin\model;


use think\Model;
use think\Db;

class ProductAttributeModel extends Model
{
    protected $type=[
        'more' => 'array'
    ];
    public function adminAddProductAttribute($product_id,$productAttributeData)
    {
        $this->startTrans();
        try {
            foreach ($productAttributeData as $key => $d) {
                $ss[] = $this->create($d,true);
            }
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->rollback();
            empty($product_id)?:Db::name('products')->where(['id'=>$product_id])->delete();
            return $e;
        }
    }
}