<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/10
 * Time: 下午2:11
 */
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$id=$_GET['id'];
$name=$_GET['name'];
if($name=="news")
{
    $sql="delete from `news` WHERE `id`='$id'";
    $result=Db::query($sql);
    if($result)
    {
        echo '{"success":true}';
    }
}else if($name=="advise")
{
    $sql="delete from `advise` WHERE `id`='$id'";
    $result=Db::query($sql);
    if($result)
    {
        echo '{"success":true}';
    }
}