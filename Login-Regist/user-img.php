<?php

session_start();
error_reporting(0);
$filename=$_FILES['file']['name'];
$type=$_FILES['file']['type'];
$tmp_name=$_FILES['file']['tmp_name'];
$size=$_FILES['file']['size'];
$error=$_FILES['file']['error'];
$path="../images/user-head-img";
if(!file_exists($path))
{
    mkdir($path,0777,true);
    chmod($path,0777);
}
$unquename=md5(uniqid(microtime(true),true)).'.'.$filename;
$desation=$path.'/'.$unquename;
move_uploaded_file($tmp_name,$desation);

$src=$unquename;
$_SESSION['src']=$src;
/*$arr=array(
    "src"=>$src,
);
echo json_encode($arr);*/
//echo "<script>window.parent.CallbackFunction();</script>";