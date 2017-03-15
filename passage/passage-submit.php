<?php

require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$name=$_GET['name'];
$title=$_GET['title'];
$content=$_GET['content'];
$time=$_GET['time'];
if($name=="news")
{
    $sql="insert into `news`(`title`,`content`,`time`) VALUES ('$title','$content','$time')";
    $result=Db::query($sql);
    if($result)
    {
        echo '{"success":true}';
    }
}else if($name=="advise")
{
    $sql="insert into `advise`(`title`,`content`,`time`) VALUES ('$title','$content','$time')";
    $result=Db::query($sql);
    if($result)
    {
        echo '{"success":true}';
    }
}

