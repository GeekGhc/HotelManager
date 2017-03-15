<?php
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$page = intval($_GET['page']); //获取当前页
$info = $_GET['info'];//获取查询信息

/*$page = 0;
$info = '商务套间-双单床';*/


$total_num = Db::getNum("select * from room WHERE roomType='{$info}'");
$page_size = 14; //每页数量
$page_total = ceil($total_num / $page_size); //总页数
$page_start = $page * $page_size;
$ary = array(
    "total_num" => $total_num,
    "page_size" => $page_size,
    "page_total_num" => $page_total,
);
$sql = "select * from room WHERE roomType='{$info}' ORDER BY roomId ASC ";

$rows = array();
$search_res = array();
$rows = Db::assoc($sql);
foreach ($rows as $row) {
    $search_res['list'][] = array(
        'roomId' => $row['roomId'],
        'roomType' => $row['roomType'],
        'roomPrice' => $row['roomPrice'],
        'roomState' => $row['roomState'],
    );
}

$size = 0;
//计算选中页的数据个数
if($total_num>=($page+1)*$page_size){
    $size = 14;
}
else{
    $size = $total_num%$page_size;
}

for($i=$page_start;$i<$page_start+$size;$i++){
    $ary['list'][$i] = $search_res['list'][$i];
}
echo json_encode($ary);