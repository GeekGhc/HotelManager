<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/5/10
 * Time: 下午3:48
 */

require_once("../Database/db.php");
require_once ('../Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$phone=$_GET['phone'];
$sql="update room_account set `payState`='已付费' WHERE `phoneNum`='$phone'";
$result=Db::query($sql);
if($result)
{
    echo '{"success":true}';
}
