<?php

require_once("Database/db.php");
require_once ('Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}
$nowtime=date("Y-m-d");
$sql="select * from `webcount` WHERE `time`='$nowtime'";
$result=Db::assoc($sql);
if($result)
{
    $sql2="update `webcount` set `count`=`count`+1 WHERE `time`='$nowtime'";
    Db::query($sql2);
}else{
    $sql3="insert into `webcount`(`count`,`time`)VALUES ('1','$nowtime')";
    Db::query($sql3);
}