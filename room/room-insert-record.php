<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/5/10
 * Time: 下午2:16
 */
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}
$roomid=$_GET['id'];
$time=$_GET['time'];
$sql="select * from user_stay where `roomId`='$roomid'";
$row=Db::assoc($sql);
if($row)
{
    $roomId=$row[0]['roomId'];
    $roomType=$row[0]['roomType'];
    $name=$row[0]['name'];
    $checkintime=$row[0]['checkInTime'];
    $checkouttime=$row[0]['checkOutTime'];
    $phonenum=$row[0]['phoneNum'];
    $sql2="insert into stay_record VALUES ('$roomId','$roomType','$name','$checkintime','$checkouttime','$phonenum','$time')";
    $result=Db::query($sql2);
    if($result)
    {
        $sql3="delete from user_stay WHERE `roomId`='$roomId'";
        Db::query($sql3);
        echo '{"success":true}';
    }
}

