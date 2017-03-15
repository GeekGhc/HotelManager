<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/16
 * Time: 下午4:30
 */

require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$sql="select * from `webcount`ORDER BY `time` DESC limit 1,7";
$result=Db::assoc($sql);
foreach($result as $row){
    $arr['list'][] = array(
        'count' => $row['count'],
        'time' => $row['time'],
    );
}
echo json_encode($arr);