<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/7
 * Time: 下午7:32
 */
session_start();
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$number=$_GET['number'];
$id=$_GET['id'];
$name=$_SESSION['name'];
$phone=$_SESSION['phone'];

$sql2="select * from `commentzan` WHERE `id`='$id' and `phone`='$phone'";
$sql="update comment set `zan`='$number' WHERE `id`='$id'";
$sql3="insert into `commentzan` VALUES ('$id','$name','$phone')";
$result2=Db::assoc($sql2);
if($result2)
{
    echo '{"success":2}';
}else{
    $result3=Db::query($sql3);
    if($result3)
    {
        $result=Db::query($sql);
        if($result)
        {
            echo '{"success":1}';
        }
    }
}