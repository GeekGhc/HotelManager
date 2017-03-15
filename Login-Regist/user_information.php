<?php

session_start();

require_once("../Database/db.php");
require_once('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$sex = $_GET['sex'];
$year = $_GET['year'];
$month = $_GET['month'];
$day = $_GET['day'];
$blood = $_GET['blood'];
$education = $_GET['education'];
$information = $_GET['information'];
$phone=$_SESSION['phone'];
$sql="update `user_info` set `sex`='$sex',`year`='$year',`month`='$month',`day`='$day',`blood`='$blood',`education`='$education',`information`='$information' WHERE `phone`='$phone'";
$result = Db::query($sql);
if ($result) {
    echo '{"success":true}';
}


