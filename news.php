<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/3/7
 * Time: 下午3:55
 */

require_once("../MyHotel/Database/db.php");
require_once ('../MyHotel/Database/Response.php');
try{
    $connect=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}
$id = $_GET['id'];
$flag = $_GET['flag'];
if ($flag){
    $sql="select * from `advise` where id=$flag";
    $data=Db::query($sql)->fetch_assoc();
}else{
    $sql2="select * from `news` where id=$id";
    $data=Db::query($sql2)->fetch_assoc();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>国际大酒店</title>
    <link href="css/hotel.css" rel="stylesheet">
</head>
<body>
<!--顶部-->
<div class="title" id="title">
    <div class="title_image" id="title_image">
        <div class="title_name" style="width: 260px;height: 230px;" id="title_name">
            <img src="images/Title/ziti.png" style="width: 100%;height: 160px;line-height: 230px;margin-top: 35px">
        </div>
        <div class="ck-slide">
            <ul class="ck-slide-wrapper">
                <li>
                    <a><img src="images/Title/1.jpg"></a>
                </li>
                <li style="display:none">
                    <a><img src="images/Title/2.jpg"></a>
                </li>
                <li style="display:none">
                    <a><img src="images/Title/3.jpg"></a>
                </li>
                <li style="display:none">
                    <a><img src="images/Title/4.jpg"></a>
                </li>
                <li style="display:none">
                    <a><img src="images/Title/5.jpg"></a>
                </li>
            </ul>
            <a href="javascript:;" class="ctrl-slide ck-prev">上一张</a> <a href="javascript:;" class="ctrl-slide ck-next">下一张</a>
            <div class="ck-slidebox">
                <div class="slideWrap">
                    <ul class="dot-wrap">
                        <li class="current"><em>1</em></li>
                        <li><em>2</em></li>
                        <li><em>3</em></li>
                        <li><em>4</em></li>
                        <li><em>5</em></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!---->
<div class="content" id="content">
    <div class="body">
        <div class="content_left" id="content_left">
            <div class="admin" id="admin"><p><a>管理员登录</a></p></div>
            <div class="list_left" id="list_left">
                <ul>
                    <li class="li6"><a href="hotel.php">酒店首页</a></li>
                    <li class="li1"><a onclick="introduce()">酒店简介</a></li>
                    <li class="li2"><a href="#">客房预订</a></li>
                    <li class="li3"><a onclick="Hotel_img()">酒店图片</a></li>
                    <li class="li4"><a onclick="play()">娱乐设施</a></li>
                    <li class="li5"><a onclick="connect()">联系我们</a></li>
                </ul>
            </div>
            <div class="list_left_image">
                <p>预订热线：86408512</p>
                <p>传真号码：(020)-2228 4826</p>
                <p>邮箱地址：hotels@163.com</p>
            </div>
        </div>
        <div class="content_middle" id="content_middle" style="width: 73%; margin-right: 0">
            <div class="news_content">
                <div class="news_top">
                    <div style="width: 100%;height: 100%;">
                       <a style="position: absolute;right: 20px;font-weight: bolder;top: 20px;color:cornflowerblue" href="<?php if($flag) {echo "adviselist.php";} else{
                           echo "newslist.php";
                       }?>">返回列表</a>
                    </div>
                </div>
                <div class="news_title">
                    <p style="height: 20px;line-height: 20px;text-align: center;font-size:11pt;width: 100%;color: cadetblue"><?php echo $data['title'] ?></p>
                </div>
                <br/>
                <div class="news_time">
                    <p style="font-size: 9pt;font-weight: bold;height: 16px;line-height: 16px;text-align: center;width: 100%">
                        发布时间:<?php echo $data['time'] ?></p>
                </div>
                <div class="news_page">
                    <p style="font-size: 12pt;text-indent: 2em;padding: 1em 2em;word-spacing:2px;line-height: 30px"><?php echo $data['content'] ?></p>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="bottom_control">
            <p>地址:南京市江宁区弘景大道99号</p>
            <p>版权所有：金陵科技学院软件工程学院四个有梦想的大二学生</p>
        </div>
    </div>
</div>
    <div id="share"></div>

<script src="source/jquery.js"></script>
<script src="javascript/html_share.js"></script>
<script src="javascript/login.js"></script>
<script src="javascript/slide.js"></script>
</body>
</html>