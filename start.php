<?php

session_start();
if(!isset($_SESSION['admin']))
{
    header("Location: hotel.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>开始</title>
    <link href="css/content.css" rel="stylesheet">
</head>
<body>
<div class="lefter">
    <div class="logo">
        <img src="images/Title/ziti.png" style="height: 87px;width: 150px">
    </div>
</div>
<div class="lefter-down">
    <ul style="overflow: hidden;">
        <li id="start-lefter-down-one" class="lefter-down-active"><a href="javascript:void(0)">后台首页</a></li>
        <li id="start-lefter-down-two"><a href="javascript:void(0)">酒店订单数据分析</a></li>
        <li id="start-lefter-down-three"><a href="javascript:void(0)">酒店房间剩余数量统计</a></li>
        <li id="start-lefter-down-four"><a href="javascript:void(0)">酒店官网访问流量统计</a></li>
    </ul>
</div>
<div class="righter">
    <div class="mainer">
        <div class="admin-navbar">
            <ul class="admin-nav">
                <li  class="active"><a href="start.php" class="fa fa-home"> 开始</a></li>
                <li><a href="room.php" class="fa fa-file-text"> 客房记录</a></li>
                <li><a href="content.php" class="fa fa-cog"> 新闻公告</a></li>
                <li><a href="passage.php" class="fa fa-file">文章发布</a></li>
                  <span class="float-right">
            	<a class="button button-little bg-blue" href="hotel.php">前台首页</a>
                <a class="button button-little bg-yellow" href="admin-Login-out.php">注销登录</a>
                  </span>
            </ul>
        </div>
        <div class="admin-bread">
            <span>您好，admin，欢迎您的光临。</span>
            <ul class="bread">
                <li class="icon-home" style="margin-left: 20px;">开始</li>
                <li>/</li>
                <li>后台管理首页</li>
            </ul>
        </div>
    </div>
    <div style="display: block" class="admin" id="start-admin">
        <div class="allpannel">
            <div class="start-pannel">
                <div class="start-admin">
                    <div class="start-admin-up">
                        <img src="images/userhead/1.jpg" style="border-radius: 50%;width: 120px;height: 120px">
                        <br>
                        <span style="font-weight: bolder">admin</span>
                    </div>
                    <div class="start-admin-down">
                        admin,欢迎您登陆,祝您身心愉快,工作顺利!
                    </div>
                </div>
                <div class="start-data">
                    <div class="pannel-head">
                        <strong>数据统计</strong>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td style="width: 75%" class="icon-user">会员</td>
                            <td style="width: 25%"><span id="userNum" class="span span-red"></span></td>
                        </tr>
                        <tr>
                            <td style="width: 80%"class="icon-list-alt">房间预订</td>
                            <td style="width: 20%"><span id="roomreservation" class="span span-blue"></span></td>
                        </tr>
                        <tr>
                            <td style="width: 70%" class="icon-th-large">空余房间</td>
                            <td style="width: 20%"><span id="roomremain"  class="span span-blue"></span></td>
                        </tr>
                        <tr>
                            <td style="width: 80%" class="icon-th-list">新闻篇数</td>
                            <td style="width: 20%"><span id="news"  class="span span-blue"></span></td>
                        </tr>
                        <tr>
                            <td style="width: 80%" class="icon-th">公告篇数</td>
                            <td style="width: 20%"><span id="advise" class="span span-blue"></span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="righter-pannel">
                <div class="start-right">
                    <span style="font-size: 20px"> 欢迎进入后台系统</span>
                    <br>
                    <span>酒店设有总经办、行政人事部、财务部、工程部、保安部、财务部、前厅部、客房部、餐饮部、营销部，在职员工200人。酒店倡导“以人为本”的管理模式，引进全新管理服务理念，由资深酒店管理专家管理，拥有一支敬业精神强，专业素质高的员工队伍，以“成就至尊服务，打造行业品牌”为服务宗旨，是酒店不懈努力的目标，更是对所有客人的郑重承诺，我们将用积极的态度、求实的精神、高效的行动来打造酒店，使之在南京成为众人所知的名牌酒店。</span>
                </div>
                <div class="start-data">
                    <table class="table">
                        <tbody>
                        <tr>
                            <th colspan="2">服务器信息</th>
                            <th colspan="2">系统信息</th>
                        </tr>
                        <tr>
                            <td>操作系统:</td>
                            <td>MAC OS</td>
                            <td>系统开发:</td>
                            <td>酒店管理系统</td>
                        </tr>
                        <tr>
                            <td >WEB服务器:</td>
                            <td>Apache</td>
                            <td>演示:</td>
                            <td>www.baidu.com</td>
                        </tr>
                        <tr>
                            <td >程序语言:</td>
                            <td>PHP</td>
                            <td>开发时间:</td>
                            <td>2016-4-22</td>
                        </tr>
                        <tr>
                            <td>数据库:</td>
                            <td>MySql</td>
                            <td>开发者:</td>
                            <td>陈鑫,葛华春,吉春,许震南</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div  style="display: none;" class="admin" id="start-admin2">
    <div class="admin-pannel">
        <div style="overflow: hidden;padding: 5px 20px">
            <div style="display: inline;">选择年份:</div>
            <select id="select" style=" display: inline;cursor: pointer;width: 80px;border: 1px solid black">
                <option class="optioned">2016</option>
                <option class="optioned">2015</option>
                <option class="optioned">2014</option>
            </select>
        </div>
        <div class="canvasDiv" id='canvasDiv'></div>
    </div>
    </div>
    <div  style="display: none" class="admin" id="start-admin3">
        <div class="admin-pannel">
            <div class="canvasDiv" id='canvasDiv2'></div>
        </div>
    </div>
    <div  style="display: none" class="admin" id="start-admin4">
        <div class="admin-pannel">
            <div class="canvasDiv" id='canvasDiv3'></div>
        </div>
    </div>
</div>
<script src="source/jquery.js"></script>
<script src="table/ichart.1.2.min.js"></script>
<script src="table/dingdan.js"></script>
<script src="javascript/content.js"></script>
<script src="table/zhu.js"></script>
<script src="table/liuliang.js"></script>
</body>
</html>
