<?php


require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$sql="select * from `roomtype`";
$result=Db::assoc($sql);
foreach($result as $row){
    $arr['list'][] = array(
        'count' => $row['room_remain'],
    );
}
echo json_encode($arr);