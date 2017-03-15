<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/17
 * Time: 下午1:32
 */
require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$sql="select * from `user_regist`";
$result=Db::getNum($sql);
$sql2="select * from `user_stay`";
$result2=Db::getNum($sql2);
$result3=160-$result2;
$sql3="select * from `news`";
$sql4="select * from `advise`";
$result4=Db::getNum($sql3);
$result5=Db::getNum($sql4);
$arr=array(
    'userNum'=>$result,
    'roomreservation'=>$result2,
    'roomremain'=>$result3,
    'news'=>$result4,
    'advise'=>$result5
);
echo json_encode($arr);