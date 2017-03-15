<?php

session_start();
header("Content-Type: application/json;charset=utf-8");
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$UserName = $_GET["AdminName"];
$Password = $_GET["Password"];
if ($UserName == "" || $Password == "") {
    echo '{"success":false,"msg":"信息未填写完整"}';
    return 0;
} else {
    $sql3 = "select * from `admin` where `username`='$UserName' and `password`='$Password'";
    $row=Db::assoc($sql3);
    if ($row) {
        echo '{"success":true}';
        $_SESSION['admin']=true;
        $_SESSION['adminName']=$row['username'];
    } else {
        echo '{"success":false,"msg":"用户名与密码不匹配"}';
    }
}






