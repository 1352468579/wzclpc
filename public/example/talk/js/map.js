/**
 * Created by Administrator on 2017/10/21.
 */
var map = new BMap.Map("my-map");
var my_point_x = 104.04203017944337;
var my_point_y = 30.642857054286928;
var my_point_title = "望子成龙学校";
var point = new BMap.Point(parseFloat(my_point_x), parseFloat(my_point_y));
map.enableScrollWheelZoom(); //启用滚轮放大缩小
map.addControl(new BMap.NavigationControl());//添加地图操作控件
map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT})); //添加地图比例尺控件
map.addControl(new BMap.OverviewMapControl()); //添加鹰眼图控件
//map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
map.centerAndZoom(point,12);
zoomToPoint(my_point_x,my_point_y,my_point_title);
zoomToPoint(104.06726440185548,30.655114610318922,"天府广场校区");
//    addMarker();

//定位到某个点
function zoomToPoint(x,y,title)
{
    //定位
    var point = new BMap.Point(x,y);
    map.centerAndZoom(point,12);

    //添加标注
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    var infoWindow1 = new BMap.InfoWindow(title);
    marker.openInfoWindow(infoWindow1);
    marker.addEventListener("click", function(){this.openInfoWindow(infoWindow1);});
}
//添加标注
function addMarker()
{
    map.addEventListener("click", addMarkerEvent);
}
function addMarkerEvent(e)
{
    var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
    map.addOverlay(marker);
    marker.enableDragging();

    var infoWindow1 = new BMap.InfoWindow("河南东软科技有限公司");
    marker.addEventListener("click", function(){this.openInfoWindow(infoWindow1);});

    map.removeEventListener("click", addMarkerEvent);
}
//初始化map
function initMap()
{
    // 创建Map实例
    map = new BMap.Map("allmap");

    // 创建点坐标
    var point = new BMap.Point(116.404, 39.915);

    // 初始化地图,设置中心点坐标和地图级别。
    map.centerAndZoom(point,12);

    //启用滚轮放大缩小
    map.enableScrollWheelZoom();

    //添加地图操作控件
    map.addControl(new BMap.NavigationControl());

    //添加地图比例尺控件
    map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT}));

    //添加鹰眼图控件
    map.addControl(new BMap.OverviewMapControl());

    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl());
}

//放大2级
var myDrag;
function zoomIn()
{
    map.setZoom(map.getZoom() + 2);
// myDrag = new BMapLib.RectangleZoom(map, {
//     followText: "拖拽鼠标进行操作"
// });
// myDrag.open();  //开启拉框放大
}

//缩小2级
function zoomOut()
{
    map.setZoom(map.getZoom() - 2);
}

//测距离
var myDis;
function getDistance()
{
    //myDrag.close();
    myDis = new BMapLib.DistanceTool(map);
    myDis.open();
    //myDis.close();
}

//定位用户所在城市
function getUserCity()
{
    var myCity = new BMap.LocalCity();
    myCity.get(function(result){
        var cityName = result.name;
        map.setCenter(cityName);
    });
}


//添加行政区划
function addBoundary()
{
    var bdary = new BMap.Boundary();
    bdary.get("新乡", function(rs){       //获取行政区域
        map.clearOverlays();        //清除地图覆盖物
        var count = rs.boundaries.length; //行政区域的点有多少个
        for(var i = 0; i < count; i++){
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 3, strokeColor: "#ff0000"}); //建立多边形覆盖物
            map.addOverlay(ply);  //添加覆盖物
            map.setViewport(ply.getPath());    //调整视野
        }
    });
}

//添加文本标注
function addText()
{
    map.addEventListener("click", addTextEvent);
}
function addTextEvent(e)
{
    var opts = {
        position : new BMap.Point(e.point.lng, e.point.lat),    // 指定文本标注所在的地理位置
        offset   : new BMap.Size(10, -10)    //设置文本偏移量

    }
    var label = new BMap.Label("您好，河南东软科技为您服务！", opts);  // 创建文本标注对象
    label.setStyle({
        color : "red",
        fontSize : "12px",
        height : "20px",
        lineHeight : "20px",
        fontFamily:"微软雅黑"
    });
    map.addOverlay(label);

    map.removeEventListener("click", addTextEvent);
}

//可视范围内搜索
function search()
{
    var text = document.getElementById("searchText").value;

    var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
    });
    local.searchInBounds(text, map.getBounds());

    map.addEventListener("dragend",function(){
        map.clearOverlays();
        local.searchInBounds(text, map.getBounds());
    });
}

//清空地图覆盖物
function clearMap()
{
    map.clearOverlays();
}

//获取坐标点
function getXY()
{
    map.addEventListener("click", getXYEvent);
}
function getXYEvent(e)
{
    document.getElementById("xyText").value = e.point.lng+","+e.point.lat;
    map.removeEventListener("click", getXYEvent);
}

//公交查询
function busSearch()
{
    var startPoint = document.getElementById("startBusText").value;
    var endPoint = document.getElementById("endBusText").value;
    var transit = new BMap.TransitRoute(map, {
        renderOptions: {map: map, panel: "searchResult"}
    });
    transit.search(startPoint, endPoint);
}

//驾车查询
function carSearch()
{
    var startPoint = document.getElementById("startCarText").value;
    var endPoint = document.getElementById("endCarText").value;

    var options = {
        //显示路线说明
        onSearchComplete: function(results){
            if (driving.getStatus() == BMAP_STATUS_SUCCESS)
            {
                // 获取第一条方案
                var plan = results.getPlan(0);

                // 获取方案的驾车线路
                var route = plan.getRoute(0);

                // 获取每个关键步骤,并输出到页面
                var s = [];
                for (var i = 0; i < route.getNumSteps(); i ++){
                    var step = route.getStep(i);
                    s.push((i + 1) + ". " + step.getDescription());
                }
                document.getElementById("searchResult").innerHTML = s.join("<br/>");
            }
        },

        //显示地图
        renderOptions:{map: map, autoViewport: true}
    };
    var driving = new BMap.DrivingRoute(map, options);
    driving.search(startPoint, endPoint);
}
