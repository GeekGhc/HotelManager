<?php
include "../MyHotel/Web-front/webcount.php";
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
                    <li class="li2"><a href="room-reservation.php">客房预订</a></li>
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
        <div class="content_middle" id="content_middle">
            <div class="content_middle_up">
                <div class="content_middle_up_top">
                    <div class="content_middle_up_top_more">
                        <a href="newslist.php" target= "_blank"><img src="images/share/more.gif"></a>
                    </div>
                </div>
                <div class="content_middle_up_down">
                    <div class="content_middle_up_down_all">
                        <div class="content_middle_up_down_left">
                            <div class="content_middle_up_down_left_image">
                                <div class="content_middle_up_down_left_image_photo">
                                    <div style="display: block"><img src="images/share/1.jpg"></div>
                                    <div style="display: none"><img src="images/share/2.jpg"></div>
                                    <div style="display: none"><img src="images/share/3.jpg"></div>
                                    <div style="display: none"><img src="images/share/4.jpg"></div>
                                    <div style="display: none"><img src="images/share/5.jpg"></div>
                                </div>
                                <div class="content_middle_up_down_left_tab">
                                    <ul>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="content_middle_up_down_right">
                            <ul>
                                <table style=" position: relative;width: 100%;height: 100%;">
                                    <tbody>
                                    <?php include('../MyHotel/Web-front/hotel-show.php');
                                    foreach ($news as $key => $value) { ?>
                                        <tr>
                                            <td style="width:4%"><img src="images/share/point.gif"></td>
                                            <td style="padding-left: 10px"><a
                                                    target= "_blank"     href="news.php?id=<?php echo $value['id'] ?>"><?php echo $value['title'] ?></a>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                    </tbody>
                                </table>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_middle_down">
                <div class="content_middle_down_top">
                    <div class="content_middle_down_top_more">
                        <a href="adviselist.php" target= "_blank"><img src="images/share/more.gif"></a>
                    </div>
                </div>
                <div class="content_middle_down_bottom">
                    <div class="bottom_content">
                        <ul>
                            <table style=" position: relative;width: 100%;height: 100%;">
                                <tbody>
                                <?php include('../MyHotel/Web-front/hotel-show.php');
                                foreach ($news2 as $key => $value) { ?>
                                    <tr>
                                        <td style="width: 8%; text-align: center"><img src="images/share/point.gif"></td>
                                        <td style="width: 75%;padding-left: 20px"><a
                                                target= "_blank"      href="news.php?flag=<?php echo $value['id'] ?>"><?php echo $value['title'] ?></a>
                                        </td>
                                        <td><?php echo $value['time'] ?></td>
                                    </tr>
                                <?php } ?>
                                </tbody>
                            </table>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="content_right" id="content_right">
            <div class="content_right_time">
                <div class="content_right_time_date" id="content_right_time_date">
                    <div id="week"
                         style="width: 100% ;height:50%;font-size: 13pt;line-height: 200%;text-align: center;font-weight: bold"></div>
                    <div id="clock"
                         style="width: 100% ;height:50%;font-size: 13pt;line-height: 200%;text-align: center;font-weight: bold;"></div>
                </div>
            </div>
            <div class="content_right_down"></div>
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
</body>
<script src="source/jquery.js"></script>
<script src="javascript/hotel-time.js"></script>
<script src="javascript/html_share.js"></script>
<script src="javascript/slide.js"></script>
</html>