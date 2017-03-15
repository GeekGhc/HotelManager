<?php
//连接数据库
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$name = $_GET['Name'];
$id = $_GET['id'];
$password = md5($_GET['password']);
$password2=md5($_GET['password2']);
$phone = $_GET['phone'];
$email=$_GET['email'];
$time=$_GET['time'];
if($name==""||$id==""||$password==""||$phone==""||$password2==""||$email=="")
{
    echo '{"success":false,"msg":"信息未填写完整"}';

}
else{
    $sql3 = "insert into `user_regist` (`id`, `name`, `password`,`email`, `phone`,`time`) VALUES ('$id','$name','$password','$email','$phone','$time')";
    $result = Db::query($sql3);
    if ($result) {
        echo '{"success":true}';
    } else {
        echo '{"success":false,"msg":"身份证号已存在,注册失败!"}';
    }
}




