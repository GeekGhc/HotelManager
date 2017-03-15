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
$reserveTime = $_GET['reserveTime'];
$priceTotal = $_GET['priceTotal'];
$payState = "未付费";
$payTime = "00:00:00 00:00:00";//这里可不用改 因为没有什么页面需要显示

/*这样做是因为数据库表之间有触发器 这样省去了一些操作*/
//删除之前的数据
$sql = "delete from room_account where phoneNum='{$phoneNum}' and reserveTime='{$reserveTime}'";
$res = Db::delete($sql);

//再次进行数据的插入
$sql = "insert into room_account VALUES ('$roomType','$phoneNum','$checkInTime','$checkOutTime',
'$roomNum','$payState','$reserveTime','$payTime','$priceTotal')";
$res = Db::query($sql);