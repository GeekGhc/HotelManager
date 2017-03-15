<?php

//分配房间时按顺序依次分配房间
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$roomType = $_GET['roomType'];
$roomNum = $_GET['roomNum'];
$phoneNum = $_GET['phoneNum'];
$checkInTime = $_GET['checkInTime'];
$checkOutTime = $_GET['checkOutTime'];
$reserveTime = $_GET['reserveTime'];
$ary = $_GET['cus'];



$cus = array();
$cus = explode(",",$ary);
$leaveTime = "0000";


$room = array();//分配的房间
$numTag = $roomNum;//房间数量

/*获得状态为空的房间*/
$sql = "select * from room where roomType='{$roomType}'";
$rows = Db::assoc($sql);
$roomState = null;
foreach ($rows as $row) {
    $roomState = $row['roomState'];
    if ($roomState == '空') {
        array_push($room,$row['roomId']);
        $numTag--;
    }
    if($numTag==0){
        break;
    }
}


/*设置分配的房间状态为非空*/
for($i=0;$i<$roomNum;$i++){
    $roomId = intval($room[$i]);
        $sql = "update room set roomState = '非空' WHERE roomId='{$roomId}'";
        $res = Db::query($sql);
}


/*分配对应的几个房间*/
for($i=0;$i<$roomNum;$i++){
    $name = $cus[$i];
//    print_r($cus[$i]);
    $roomId = intval($room[$i]);
        $sql = "insert into user_stay VALUES ('$roomId','$roomType','$name','$checkInTime','$checkOutTime','$phoneNum','$leaveTime','$reserveTime')";
        $res = Db::query($sql);
}