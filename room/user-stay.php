<?php
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$page = intval($_GET['page']); //获取当前页
//$page = 0;

$total_num = Db::getNum("select * from user_stay");
$page_size = 14; //每页数量
$page_total = ceil($total_num / $page_size); //总页数
$page_start = $page * $page_size;
$arr = array(
    "total_num" => $total_num,
    "page_size" => $page_size,
    "page_total_num" => $page_total,
);
$sql = "select * from user_stay ORDER BY checkInTime DESC  limit $page_start,$page_size";
$rows = array();
$rows = Db::assoc($sql);
foreach ($rows as $row) {
    $arr['list'][] = array(
        'roomId' => $row['roomId'],
        'roomType' => $row['roomType'],
        'name' => $row['name'],
        'phone' => $row['phoneNum'],
        'checkInTime' => $row['checkInTime'],
        'checkOutTime' => $row['checkOutTime'],
    );
}
echo json_encode($arr);