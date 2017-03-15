<?php
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$roomType = $_GET['roomType'];

$sql = "select * from roomtype WHERE roomType='{$roomType}'";

$rows = array();
$ary = array();
$rows = Db::assoc($sql);
foreach ($rows as $row) {
    $ary['typeNum'] = $row['typeNum'];//这种类型房间一共房间数量
    $ary['room_remain'] = $row['room_remain'];//这种类型房间剩余房间数量
}

echo json_encode($ary);