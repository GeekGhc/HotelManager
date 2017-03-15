<?php

session_start();
require_once("../Database/db.php");
require_once('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$phone=$_SESSION['phone'];
$sql="select * from `user_info`WHERE `phone`='$phone'";
$result=Db::assoc($sql);

foreach($result as $row){
    $arr=array(
        "sex"=>$row['sex'],
        "year"=>$row['year'],
        "month"=>$row['month'],
        "day"=>$row['day'],
        "blood"=>$row['blood'],
        "education"=>$row['education'],
        "information"=>$row['information'],
    );
}

echo json_encode($arr);
