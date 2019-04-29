<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/23 0023
 * Time: 下午 16:07
 */

namespace app\admin\model;
use think\Model;
use \tree\Tree;

class ProductCategoryModel extends Model
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
    public function adminCategoryTree($selectId = 0, $currentCid = 0)
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
     * 后台管理添加属性
     * @param array $data 数据
     * @return $this
     */
    public function adminAddCategory($data, $categories=[])
    {
        $data['user_id'] = cmf_get_current_admin_id();

        if (!empty($data['more']['icon'])) {
            $data['more']['icon'] = cmf_asset_relative_url($data['more']['icon']);
        }

        $this->allowField(true)->data($data, true)->isUpdate(false)->save();

//        if (is_string($categories)) {
//            $categories = explode(',', $categories);
//        }

//        $this->categories()->save($categories);


        return $this;

    }

    /**
     * 后台管理属性编辑
     * @param array $data 数据
     * @return $this
     */
    public function adminEditCategory($data, $categories=[])
    {


        if (!empty($data['more']['icon'])) {
            $data['more']['icon'] = cmf_asset_relative_url($data['more']['icon']);
        }
        $this->allowField(true)->isUpdate(true)->data($data, true)->save();


        return $this;

    }
}