<?php
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$page = intval($_GET['page']); //获取当前页

$total_num = Db::getNum("select * from room_account");
$page_size = 14; //每页数量
$page_total = ceil($total_num / $page_size); //总页数
$page_start = $page * $page_size;
$ary = array(
    "total_num" => $total_num,
    "page_size" => $page_size,
    "page_total_num" => $page_total,
);
$sql = "select * from room_account ORDER BY reserveTime DESC  limit $page_start,$page_size";
$rows = array();
$rows = Db::assoc($sql);
foreach ($rows as $row) {
    $ary['list'][] = array(
        'roomType' => $row['roomType'],
        'name' => $row['name'],
        'phone' => $row['phoneNum'],
        'checkInTime' => $row['checkInTime'],
        'checkOutTime' => $row['checkOutTime'],
        'roomNum' => $row['roomNum'],
        'reserveTime' => $row['reserveTime'],
        'payState' => $row['payState'],
        'price'=>$row['priceTotal'],
    );
}
echo json_encode($ary);