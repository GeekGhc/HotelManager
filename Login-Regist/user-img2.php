<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/4/20
 * Time: 下午4:17
 */
session_start();
$arr=array(
    'src'=>$_SESSION['src'],
);
echo  json_encode($arr);