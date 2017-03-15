<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/8
 * Time: 下午8:21
 */

session_start();
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$phone=$_SESSION['phone'];
$sql="select * from `commentzan` WHERE `phone`='$phone'";
$rows=Db::assoc($sql);
if(empty($rows))
{
  $rows['id']=0;
}
$arr=array();
foreach ($rows as $row) {
    $arr['list'][] = array(
        'id'=>$row['id'],
    );
}
echo  json_encode($arr);