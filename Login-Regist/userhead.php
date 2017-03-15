<?php
session_start();

require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$src=$_GET['src'];
$phone=$_SESSION['phone'];
$sql="update `user_regist` set `head`='$src' WHERE `phone`='$phone'";
$sql2="update `comment` set `head`='$src' WHERE  `phone`='$phone'";
$result=Db::query($sql);
$result2=Db::query($sql2);
if($result&&$result2){
    $_SESSION['uploads']=$src;
    echo '{"success":true}';
}