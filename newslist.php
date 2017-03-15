<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/3/8
 * Time: 上午10:34
 */
require_once("../MyHotel/Database/db.php");
require_once ('../MyHotel/Database/Response.php');
try{
    $connect=Db::getInstance()->connect();
} catch(Exception $e){
    return Response::show(401,'数据库连接失败');
}

if ($page = $_GET['id'] == 0) {
    $page = 1;
}else {
    $page = $_GET['id'];
}
$sql = "select * from news ORDER BY `time` DESC limit " . ($page - 1) * 14 . ",14";
$newslist = array();
$newslist=Db::assoc($sql);
$sql2 = "select * from  news";
$num=Db::getNum($sql2);
$number = ceil($num / 14);
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
                    <hr style="color: darkgray">
                </div>
                <div class="news_page">
                    <div class="news_page_list" style="width: 96%;margin: 0 2% 0;height: 560px">
                        <ul style="width: 100%;height: 100%;list-style: none">
                            <?php
                            foreach ($newslist as $key => $value) { ?>
                                <li style="width: 100%;height: 40px;border-bottom: 1px dotted #aaaaaa;box-sizing: border-box"><span
                                        style="width: 8%;height:40px;float: left;"><img src="images/share/point.gif" style="margin-top: 15px;margin-left: 30px"></span>
                                    <p style="width: 72%;float: left;height: 40px;line-height: 40px;font-size: 11pt">
                                        <a href="news.php?id=<?php echo $value['id'] ?> " target= "_blank"
                                           style="line-height: 40px;font-size: 11pt"><?php echo $value['title'] ?></a>
                                    </p>
                                    <span style="float: left;width:20%;height: 40px;line-height: 40px;font-size: 11pt"><?php echo $value['time']?></span>
                                </li>
                            <?php } ?>
                        </ul>
                    </div>
                </div>
                <div class="news_page_fenye">
                    <p style="width: 100%;text-align: center;height: 20px;margin-top: 20px;display: inline-block;">
                    <span style="width: 100%;"><a href="newslist.php?id=1" style="color: <?php if ($page == 1) {
                            echo "lightgrey";
                        } ?>" onclick="<?php if ($page == 1) {
                            echo "return false";
                        } ?>">首页</a><a
                            href="newslist.php?id=<?php echo $page - 1 ?>" style="color: <?php if ($page == 1) {
                            echo "lightgrey";
                        } ?>" onclick="<?php if ($page == 1) {
                            echo "return false";
                        } ?>">上一页</a>

                        <!--分页偏移量部分带刷新的-->
                        <?php
                        if($number>5){
                            if($page<=2)
                            {
                                for($i=1;$i<=5;$i++){?>
                                    <a href="newslist.php?id=<?php echo $i ?>" style="color:<?php if ($page == $i) {
                                        echo "red";
                                    } ?>"><?php echo $i ?></a>
                                <?php }}?>

                        <?php if($page>2&&$page+2<=$number)
                            {
                                for($i=$page-2;$i<=$page+2;$i++){?>
                                    <a href="newslist.php?id=<?php echo $i ?>" style="color:<?php if ($page == $i) {
                                        echo "red";
                                    } ?>"><?php echo $i ?></a>
                                <?php }}?>
                        <?php if($page+1==$number)
                            {
                                for($i=$page-3;$i<=$page+1;$i++){?>
                                    <a href="newslist.php?id=<?php echo $i ?>" style="color:<?php if ($page == $i) {
                                        echo "red";
                                    } ?>"><?php echo $i ?></a>
                                <?php }}?>
                        <?php if($page==$number)
                            {
                                for($i=$page-4;$i<=$page;$i++){?>
                                    <a href="newslist.php?id=<?php echo $i ?>" style="color:<?php if ($page == $i) {
                                        echo "red";
                                    } ?>"><?php echo $i ?></a>
                                <?php }}}else {?>
                            <?php
                            for($i=1;$i<=$number;$i++)
                            {?>
                                <a href="newslist.php?id=<?php echo $i ?>" style="color:<?php if ($page == $i) {
                                    echo "red";
                                } ?>"><?php echo $i ?></a>
                            <?php }}?>

                        <!---->

                        <a href="newslist.php?id=<?php echo $page + 1 ?>" style="color: <?php if ($page == $number) {
                            echo "lightgrey";
                        } ?>" onclick="<?php if ($page == $number) {
                            echo "return false";
                        } ?>">下一页</a><a
                            href="newslist.php?id=<?php echo $number ?>" style="color: <?php if ($page == $number) {
                            echo "lightgrey";
                        } ?>" onclick="<?php if ($page == $number) {
                            echo "return false";
                        } ?>">尾页</a><a>共有<?php echo $num ?>篇文章</a><a>共有<?php echo $number ?>页</a></span>
                    </p>
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