<?php
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
$phoneNum = $_GET['phoneNum'];
$checkInTime = $_GET['checkInTime'];
$checkOutTime = $_GET['checkOutTime'];
$roomNum = $_GET['roomNum'];
$payState = "未付费";
$reserveTime = $_GET['reserveTime'];
$payTime = "00:00:00 00:00:00";
$priceTotal = $_GET['priceTotal'];

//数据插入
$sql = "insert into room_account VALUES ('$roomType','$phoneNum','$checkInTime','$checkOutTime','$roomNum','$payState','$reserveTime','$payTime','$priceTotal')";
$res = Db::insert($sql);



