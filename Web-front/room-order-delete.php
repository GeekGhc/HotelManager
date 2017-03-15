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

$phoneNum = $_GET['phoneNum'];
$reserveTime = $_GET['reserveTime'];
$sql2="select * from room_account where `phoneNum`='$phoneNum'";
$row=Db::assoc($sql2);
if($row[0]['payState']=='已付费')
{
    echo '{"success":true}';
}else{
    $sql = "delete from room_account where phoneNum='{$phoneNum}' and reserveTime='{$reserveTime}'";
    $res = Db::delete($sql);
}
