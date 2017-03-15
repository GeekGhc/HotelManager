<?php

$lifeTime = 600;
session_set_cookie_params($lifeTime);
session_start();
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}
$username = $_GET['username'];
$password = md5($_GET['password']);
if($username==""||$password=="")
{
    echo '{"success":false,"msg":"信息未填写完整"}';
}
else{
    $sql = "select * from `user_regist` where `name`='$username' and `password`='$password'";
    $row=Db::assoc($sql);
    if ($row) {
        echo '{"success":true}';
        $_SESSION['user']=true;
        foreach($row as $array)
        {
            $_SESSION['name']=$array['name'];
            $_SESSION['phone']=$array['phone'];
            $_SESSION['uploads']=$array['head'];
        }
    } else {
        echo '{"success":false,"msg":"用户名与密码不匹配"}';
    }
}