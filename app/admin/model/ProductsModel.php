<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/24 0024
 * Time: 上午 11:58
 */

namespace app\admin\model;


use think\Model;
use \tree\Tree;
use think\Db;
class ProductsModel extends Model
{
    protected $type = [
        'more' => 'array'
    ];
    /**
     * 生成分类 select树形结构
     * @param int $selectId 需要选中的分类 id
     * @param int $currentCid 需要隐藏的分类 id
     * @return string
     */
    public function adminAttributesTree($selectId = 0, $currentCid = 0)
    {
        $where = [];
        if (!empty($currentCid)) {
            $where['id'] = ['neq', $currentCid];
        }
        $categories = $this->order("list_order ASC")->where($where)->select()->toArray();
        $tree       = new Tree();
        $tree->icon = ['&nbsp;&nbsp;│', '&nbsp;&nbsp;├─', '&nbsp;&nbsp;└─'];
        $tree->nbsp = '&nbsp;&nbsp;';

        $newCategories = [];
        foreach ($categories as $item) {
            $item['selected'] = $selectId == $item['id'] ? "selected" : "";

            array_push($newCategories, $item);
        }

        $tree->init($newCategories);
        $str     = '<option value=\"{$id}\" {$selected}>{$spacer}{$name}</option>';
        $treeStr = $tree->getTree(0, $str);

        return $treeStr;
    }

    /**
     * 添加商品
     * @param array $data 数据
     * @return $this
     */
    public function adminAddProducts($data)
    {

        $data['user_id'] = cmf_get_current_admin_id();
        if (!empty($data['more']['icon'])) {
            $data['more']['icon'] = cmf_asset_relative_url($data['more']['icon']);
        }
        $this->allowField(true)->isUpdate(false)->data($data, true)->save();
        return $this;
    }

    /**
     * 后台管理属性编辑
     * @param array $data 数据
     * @return $this
     */
    public function adminEditProducts($data, $categories=[])
    {
        if (!empty($data['more']['icon'])) {
            $data['more']['icon'] = cmf_asset_relative_url($data['more']['icon']);
        }
        $this->allowField(true)->isUpdate(true)->data($data, true)->save();

        return $this;

    }

    public function adminProductsList($data, $categories=[])
    {
        $where = [];
        isset($data['key_words']) ? $where['pa.key_words|pa.product_name'] = ['like',$data['key_words']]:'';
        isset($data['category_id']) ? $where['p.category_id'] = $data['category_id']:'';
        isset($data['is_rec']) ? $where['pa.is_rec'] = $data['is_rec']:'';
        isset($data['is_top']) ? $where['pa.is_top'] = $data['is_top']:'';
        isset($data['is_hot']) ? $where['pa.is_hot'] = $data['is_hot']:'';
        isset($data['is_sale']) ? $where['pa.is_sale'] = $data['is_sale']:'';
        isset($data['type']) ? $where['pa.type'] = $data['type']:'';
        $where['pa.delete_time'] = 0;

        return $this->alias('p')->field('p.category_id,p.more product_more,pa.*')->join('__PRODUCT_CATEGORY__ pc','p.category_id=pc.id','left')->join('__PRODUCT_ATTRIBUTE__ pa','pa.product_id=p.id','left')->where($where)->paginate(10);

    }

    public function productCategory(){
        return $this->belongsToMany('productCategoryModel','productCategory','id','category_id');
    }

    public function productAttribute(){
        return $this->hasMany('ProductAttributeModel','product_id','id');
    }
}