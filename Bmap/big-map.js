/**
 * Created by apple on 16/3/31.
 */
// 百度地图API功能

var map = new BMap.Map('dituContent');
var poi = new BMap.Point(118.906299,31.911419);
map.centerAndZoom(poi, 16);
map.enableScrollWheelZoom();

var content = '<div style="margin:0;line-height:20px;padding:2px;">'+
    '地址：南京市江宁区弘景大道99号<br/>电话：86408512<br/>简介：金陵大酒店是一座综合酒店,有全套的娱乐设施!' +
    '</div>';
//创建检索信息窗口对象
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    title  : "金陵大酒店",      //标题
    width  : 290,             //宽度
    height : 105,              //高度
    panel  : "panel",         //检索结果面板
    enableAutoPan : true,     //自动平移
    searchTypes   :[
        BMAPLIB_TAB_SEARCH,   //周边检索
        BMAPLIB_TAB_TO_HERE,  //到这里去
        BMAPLIB_TAB_FROM_HERE //从这里出发
    ]
});
var marker = new BMap.Marker(poi); //创建marker对象
marker.addEventListener("click", function(e){
    searchInfoWindow.open(marker);
});
map.addOverlay(marker); //在地图中添加marker


$("#big-map-close").click(function(){
    $(".big-map").css({"display":"none"});
});

$("#big-map").click(function(){
    $(".big-map").css({"display":"block"});
});