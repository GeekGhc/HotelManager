<?php

require_once("../Database/db.php");
require_once ('../Database/Response.php');
try{
    $connection=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

$nowyear=date('Y');
$nowmonth=date("m");
$arr=array();

$number=0;
$month=12;
for($j=2014;$j<=$nowyear;$j++)
{
    if($j==$nowyear)
    {
        $month=$nowmonth-1;
    }
    for($i=1;$i<=$month;$i++)
    {
        $sql="select * from `stay_record` WHERE  YEAR(`checkInTime`)='$j' and MONTH(`checkInTime`)='$i'";
        $result=Db::getNum($sql);
        $arr[$number++]=$result;
    }
}

echo json_encode($arr);
