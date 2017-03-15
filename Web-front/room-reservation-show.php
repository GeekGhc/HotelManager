<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/4
 * Time: 上午10:11
 */
session_start();
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$page = intval($_GET['page']); //当前页
$total_num = Db::getNum("select * from `comment`");
$page_size = 10; //每页数量
$page_total = ceil($total_num / $page_size); //总页数
$page_start = $page * $page_size;
$phone=$_SESSION['phone'];
$arr = array(
    "total_num" => $total_num,
    "page_size" => $page_size,
    "page_total_num" => $page_total,
    "session"=>$_SESSION['user'],
);

$sql = "select * from comment ORDER BY `time` DESC limit $page_start,$page_size";
$rows = array();
$rows = Db::assoc($sql);
foreach ($rows as $row) {
    $arr['list'][] = array(
        'name' => $row['name'],
        'comments' => $row['comments'],
        'time' => $row['time'],
        'zan'=>$row['zan'],
        'id'=>$row['id'],
        'src'=>$row['head'],
    );
}
echo json_encode($arr);
