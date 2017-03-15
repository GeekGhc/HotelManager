<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/10
 * Time: 下午4:26
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
$arr=array();
if($name=="news")
{
    $sql="select * from `news` WHERE `id`='$id'";
    $rows = array();
    $rows = Db::assoc($sql);
    $title=$rows[0]['title'];
    $content=$rows[0]['content'];
    $arr = array(
        "title" => $title,
        "content" => $content,
    );
    echo json_encode($arr);
}else if($name=="advise")
{
    $sql="select * from `advise` WHERE `id`='$id'";
    $rows = Db::assoc($sql);
    $title=$rows[0]['title'];
    $content=$rows[0]['content'];
    $arr = array(
        "title" => $title,
        "content" => $content,
    );
    echo json_encode($arr);
}
