<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/3/21
 * Time: 下午5:14
 */
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$page = intval($_GET['page']); //当前页
$info=$_GET['info'];//id
$total_num = Db::getNum("select * from `user_regist` where `id`='$info'");
$page_size = 14; //每页数量
$page_total = ceil($total_num / $page_size); //总页数
$page_start = $page * $page_size;
$arr = array(
    "total_num" => $total_num,
    "page_size" => $page_size,
    "page_total_num" => $page_total,
);

$sql = "select * from user_regist WHERE `id`='$info'limit $page_start,$page_size";
$rows = array();
$rows = Db::assoc($sql);
foreach ($rows as $row){
    $arr['list'][] = array(
        'id' => $row['id'],
        'name' => $row['name'],
        'phone' => $row['phone'],
        'email' => $row['email'],
        'time' => $row['time'],
    );
}
echo json_encode($arr);