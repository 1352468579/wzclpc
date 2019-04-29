<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/4 0004
 * Time: 上午 11:45
 */

namespace app\admin\model;


use think\Model;

class FilesCategoryModel extends Model
{
    protected $type = ['more'=>'array'];


    public function fileCategoryAdd($data)
    {
        $result = true;
        self::startTrans();
        try {
            $this->allowField(true)->save($data);
            $id = $this->id;
            $this->where(['id'=>$id])->update(['path'=>$id]);
            if (empty($data['parent_id'])) {

                $this->where(['id' => $id])->update(['path' => '0-' . $id]);
            } else {
                $parentPath = $this->where('id', intval($data['parent_id']))->value('path');
                $this->where(['id' => $id])->update(['path' => "$parentPath-$id"]);
            }
            self::commit();
        } catch (\Exception $e) {
            self::rollback();
            $result = false;
        }
        return $result;
    }

    public function fileCategoryEdit($data)
    {
        $result = true;
        self::startTrans();
        try {
            $this->allowField(true)->save($data);
            $id = $this->id;
            $this->where(['id'=>$id])->update(['path'=>$id]);
            if (empty($data['parent_id'])) {

                $this->where(['id' => $id])->update(['path' => '0-' . $id]);
            } else {
                $parentPath = $this->where('id', intval($data['parent_id']))->value('path');
                $this->where(['id' => $id])->update(['path' => "$parentPath-$id"]);
            }
            self::commit();
        } catch (\Exception $e) {
            self::rollback();
            $result = false;
        }
        return $result;
    }
}