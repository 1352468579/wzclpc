<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 小夏 < 449134904@qq.com>
// +----------------------------------------------------------------------
namespace app\wap\controller;


use cmf\controller\HomeBaseController;
use app\admin\model\AboutModel;
use app\admin\model\SchoolAreaModel;
use app\admin\model\IndexPcModel;

class SchoolchildrenController extends HomeBaseController
{
    public function index()
    {
        return $this->fetch();
    }
}
