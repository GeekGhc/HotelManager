<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/3/13
 * Time: 下午8:01
 */
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
    <title>客房记录</title>
    <link href="css/content.css" rel="stylesheet">
</head>
<body>

<!--消息提示框 -->
<div class="information-pannel" id="information-pannel">
    <div class="information">
        <div class="information-top">
            提示
            <sapn id="information-close" style="float: right;font-size: 20px;cursor: pointer">×</sapn>
        </div>
        <div class="information-down">
            <div class="one">
                <i class="fa icon-waring" style="color: #4169E1"></i>
                <span id="ok-html">确认付费?</span>
                <div class="two">
                    <a id="information-down-no" class="button bg-blue2 button-smaller" style="float: right">取消</a>
                    <a id="information-down-ok" class="button bg-blue2 button-smaller"
                       style="float: right;margin-right: 20px">确认</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!--*****-->
<div class="lefter">
    <div class="logo">
        <img src="images/Title/ziti.png" style="height: 87px;width: 150px">
    </div>
</div>

<div class="lefter-down">
    <ul style="overflow: hidden;">
        <li id="room-lefter-down-one" class="lefter-down-active"><a href="javascript:void(0)">房费结算列表</a></li>
        <li id="room-lefter-down-two"><a href="javascript:void(0)">顾客入住列表</a></li>
        <li id="room-lefter-down-three"><a href="javascript:void(0)">房间列表</a></li>
        <li id="room-lefter-down-four"><a href="javascript:void(0)">会员统计列表</a></li>
        <li id="room-lefter-down-five"><a href="javascript:void(0)">顾客入住记录</a></li>
    </ul>
</div>


<div class="righter">
    <div class="mainer">
        <div class="admin-navbar">
            <ul class="admin-nav">
                <li><a href="start.php" class="fa fa-home"> 开始</a></li>
                <li class="active"><a class="fa fa-file-text"> 客房记录</a></li>
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
                <li>客房记录</li>
            </ul>
        </div>
    </div>
    <div class="admin">

        <!--房间结算列表-->
        <div class="pannel pannel-money">
            <div class="pannel-head">
                <strong>房费结算列表</strong>
            </div>
            <div class="pannel-head2">
                <div class="search">
                    <input type="text" id="room-account-text" class="search-find" placeholder="请输入要查找的顾客电话">
                    <button class="button button-small border-blue" id="room-account-search">查询</button>
                    <button class="button button-small border-green" id="room-account-view">浏览全部信息</button>
                    <span id="room-account-warn" style="color: white;font-weight: bold;background-color: #ec971f;padding: 5px 10px;border-radius:4px;display: none">内容不能为空</span>
                </div>
            </div>
            <table class="table" id="room-account-body">
            </table>
            <div class="foot" id="room-account-foot">
            </div>
        </div>

        <!--顾客入住列表-->
        <div class="pannel pannel-room">
            <div class="pannel-head">
                <strong>顾客入住列表</strong>
            </div>
            <div class="pannel-head2">
                <div class="search">
                    <input type="text" id="user-stay-text" class="search-find" placeholder="请输入要查找的顾客姓名">
                    <button class="button button-small border-blue" id="user-stay-search">查询</button>
                    <button class="button button-small border-green" id="user-stay-view">浏览全部信息</button>
                    <span id="user-stay-warn" style="color: white;font-weight: bold;background-color: #ec971f;padding: 5px 10px;border-radius:4px;display: none">内容不能为空</span>
                </div>
            </div>
            <table class="table" id="user-stay-body">
            </table>
            <div class="foot" id="user-stay-foot">
            </div>
        </div>

        <!--房间列表-->
        <div class="pannel pannel-advise">
            <div class="pannel-head">
                <strong>房间列表</strong>
            </div>
            <div class="pannel-head2">
                <div class="search">
                    <button class="button button-small border-green" id="roomInfo-view">浏览全部信息</button>
                    <p style="margin-left: 20px;width: 60px;color: black;font-weight:bold;display: inline-block">
                        房间类型</p>
                    <select
                        id="roomSelect" style="cursor: pointer;width: 150px;border: 1px solid #f60;border-radius: 3px;padding: 5px 8px;text-align: left">
                        <option value=''>房间类型</option>
                        <option>普通套间-大床</option>
                        <option>普通套间-双单床</option>
                        <option>商务套间-大床</option>
                        <option>商务套间-双单床</option>
                        <option>豪华套间-大床</option>
                        <option>豪华套间-双单床</option>
                    </select>
                </div>
            </div>
            <table class="table" id="roomInfo-body">
                <tr>
                    <th width="100px">房间号</th>
                    <th width="100px">房间类型</th>
                    <th width="100px">房间价格</th>
                    <th width="100px">房间状态</th>
                </tr>
            </table>
            <div class="foot" id="roomInfo-foot">
            </div>
        </div>

        <!--会员统计列表-->
        <div class="pannel pannel-news">
            <div class="pannel-head">
                <strong>会员统计列表</strong>
            </div>
            <div class="pannel-head2">
                <div class="search">
                    <input type="text" id="search-find-before" class="search-find" placeholder="请输入要查找的顾客id">
                    <button class="button button-small border-blue" id="search-before">查询</button>
                    <button class="button button-small border-green" id="news_view">浏览全部信息</button>
                </div>
            </div>
            <table class="table" id="table-before">
            </table>
            <div class="foot" id="foot-room">

            </div>
        </div>

        <!--顾客入住记录列表-->
        <div class="pannel pannel-notes">
            <div class="pannel-head">
                <strong>顾客入住记录</strong>
            </div>
            <div class="pannel-head2">
                <div class="search">
                    <input type="text" id="stay-record-text" class="search-find" placeholder="请输入要查找的顾客姓名">
                    <button class="button button-small border-blue" id="stay-record-search">查询</button>
                    <button class="button button-small border-green" id="stay-record-view">浏览全部信息</button>
                    <span id="stay-record-warn" style="color: white;font-weight: bold;background-color: #ec971f;padding: 5px 10px;border-radius:4px;display: none">内容不能为空</span>
                </div>
            </div>
            <table class="table" id="stay-record-body">
                <tr>
                    <th width="100px">房间号码</th>
                    <th width="120px">房间类型</th>
                    <th width="100px">姓名</th>
                    <th width="100px">入住时间</th>
                    <th width="100px">退房时间</th>
                    <th width="100px">离开时间</th>
                </tr>
            </table>
            <div class="foot" id="stay-record-foot">
            </div>
        </div>
    </div>
</div>

<script src="source/jquery.js"></script>
<script src="javascript/content.js"></script>
<script src="javascript/tableView.js"></script>
</body>
</html>
