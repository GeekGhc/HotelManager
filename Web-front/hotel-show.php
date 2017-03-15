<?php

require_once("../MyHotel/Database/db.php");
require_once ('../MyHotel/Database/Response.php');
try{
    $connect=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}
$sql = "select * from `news` ORDER BY `time` DESC limit 6";
$news = array();
$news=Db::assoc($sql);
$sql2 = "select * from `advise` ORDER BY `time` DESC limit 6";
$news2 = array();
$news2=Db::assoc($sql2);
