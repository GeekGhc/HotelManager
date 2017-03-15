<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/5
 * Time: 下午1:10
 */
session_start();
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$name=$_SESSION['name'];
$phone=$_SESSION['phone'];
$comment=$_GET['comment'];
$date=$_GET['date'];
$src=$_SESSION['uploads'];

$sql="insert into `comment`(`phone`,`name`,`comments`,`time`,`head`)VALUES ('$phone','$name','$comment','$date','$src')";
$result=Db::query($sql);
if($result)
{
    echo '{"success":true}';
}
else{
    echo '{"success":false,"msg":"插入失败"}';
}

