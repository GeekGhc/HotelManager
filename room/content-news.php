<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/3/17
 * Time: 下午2:16
 */
//后台公告新闻数据库连接操作
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$page = intval($_GET['page']); //当前页
$total_num = Db::getNum("select * from news");
$page_size = 14; //每页数量
$page_total = ceil($total_num / $page_size); //总页数
$page_start = $page * $page_size;
$arr = array(
    "total_num" => $total_num,
    "page_size" => $page_size,
    "page_total_num" => $page_total,
);

$sql = "select * from news ORDER BY `time` DESC limit $page_start,$page_size";
$rows = array();
$rows = Db::assoc($sql);
foreach ($rows as $row) {
    $arr['list'][] = array(
        'title' => $row['title'],
        'content' => $row['content'],
        'id' => $row['id'],
        'time' => $row['time'],
    );
}
echo json_encode($arr);