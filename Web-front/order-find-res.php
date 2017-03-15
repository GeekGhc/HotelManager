<?php
require_once('../Database/db.php');
require_once('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$phoneNum = $_GET['phoneNum'];

$sql = "select * from room_account WHERE phoneNum='{$phoneNum}' ORDER BY reserveTime DESC";

$rows = array();
$ary = array();
$rows = Db::assoc($sql);
foreach ($rows as $row) {
    $roomPrice = $row['priceTotal']/$row['roomNum'];
    $ary['list'][] = array(
        'roomType' => $row['roomType'],
        'checkInTime' => $row['checkInTime'],
        'checkOutTime' => $row['checkOutTime'],
        'roomNum' => $row['roomNum'],
        'reserveTime' => $row['reserveTime'],
        'payState' => $row['payState'],
        'priceTotal' => $row['priceTotal'],
        'roomPrice' => $roomPrice
    );
}

echo json_encode($ary);
