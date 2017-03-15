<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/10
 * Time: 上午11:15
 */
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

if(isset($_GET['name'])){
    $name = $_GET['name'];
    if($name=="news"){
        if(isset($_GET['title'])){
            $title = $_GET['title'];
            $sql = "delete from news where title = '$title'";
            $del  = Db::delete($sql);
            if(!$del){
                echo '{"success":1}';
            }
        }
    }
    if($name=="advise"){
        if(isset($_GET['title'])){
            $title = $_GET['title'];
            $sql = "delete from advise where title = '$title'";
            $del  = Db::delete($sql);
            if(!$del){
                echo '{"success":1}';
            }
        }
    }
}
