<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/10
 * Time: 下午4:54
 */

require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}
$id=$_GET['id'];
$kind=$_GET['kind'];
$title=$_GET['title'];
$content=$_GET['content'];
if($kind=="新闻标题")
{
   $sql="update `news` set `title`='$title',`content`='$content' WHERE `id`='$id'";
    $result=Db::query($sql);
    if($result)
    {
        echo '{"success":true}';
    }
}else if($kind=="公告标题") {
    $sql="update `advise` set `title`='$title',`content`='$content' WHERE `id`='$id'";
    $result=Db::query($sql);
    if($result)
    {
        echo '{"success":true}';
    }
}
