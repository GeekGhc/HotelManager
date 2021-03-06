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
    <title>新闻公告</title>
    <link href="css/content.css" rel="stylesheet">
</head>
<body>
<div class="lefter">
    <div class="logo">
        <img src="images/Title/ziti.png" style="height: 87px;width: 150px">
    </div>
</div>
<div class="righter">
    <div class="mainer">
        <div class="admin-navbar">
            <ul class="admin-nav">
                <li><a href="start.php" class="fa fa-home"> 开始</a></li>
                <li><a href="room.php" class="fa fa-file-text"> 客房记录</a></li>
                <li  class="active"><a href="content.php" class="fa fa-cog"> 新闻公告</a></li>
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
                <li>新闻公告</li>
                <li>/</li>
                <li id="news2"><a href="#" style="color: black" id="news-color">新闻列表记录</a></li>
                <li>/</li>
                <li id="advise2"><a href="#" id="advise-color">公告列表记录</a></li>
                <li>/</li>
                <li id="modify"><a href="#" id="modify-color" style="cursor: default">文章修改</a></li>
            </ul>
        </div>
    </div>
    <div class="admin">
        <div class="pannel pannel-news" style="display: block">
            <div class="pannel-head">
                <strong>酒店新闻列表</strong>
            </div>
            <div class="pannel-head2">
                <button class="button button-small border-blue"  onclick="check()">全选</button>
                <button class="button button-small border-yellow" onclick="delContent('news')">批量删除</button>
            </div>
            <table class="table" id="table-news">
            </table>
            <div class="foot" id="foot-news">
            </div>
        </div>
        <div class="pannel pannel-advise">
            <div class="pannel-head">
                <strong>酒店公告列表</strong>
            </div>
            <div class="pannel-head2">
                <button class="button button-small border-blue" onclick="check()">全选</button>
                <button class="button button-small border-yellow" onclick="delContent('advise')">批量删除</button>
            </div>
            <table class="table" id="table-advise">
            </table>
            <div class="foot" id="foot-advise">
            </div>
        </div>
        <div class="tab-body-news" style="display: none">
            <div class="form-group">
                <div class="lable"><label id="content-kind-title"></label></div>
                <div class="field"><input class="input" id="modify-title" type="text" placeholder="请填写文章标题"></div>
            </div>
            <div class="form-group">
                <div class="lable">文章内容</div>
                <div class="field"><textarea id="modify-content" placeholder="请填写文章内容"></textarea></div>
            </div>
            <div class="form-button">
                <button id="modifysubmit" class="button bg-blue2 bg-big" onclick="modifysubmit()">提交</button>
            </div>
        </div>
    </div>
</div>

<!--弹框提醒-->
<div class="information-pannel" id="information-pannel">
    <div class="information">
        <div class="information-top">
            提示
            <sapn id="information-close" style="float: right;font-size: 20px;cursor: pointer">×</sapn>
        </div>
        <div class="information-down">
            <div class="one">
                <i class="fa icon-waring" style="color: #4169E1"></i>
                <span id="ok-html">是否确认提交?</span>
                <div class="two">
                    <a id="information-down-no" class="button bg-blue2 button-smaller" style="float: right">取消</a>
                    <a id="information-down-ok" class="button bg-blue2 button-smaller" style="float: right;margin-right: 20px">确认</a>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="source/jquery.js"></script>
<script src="javascript/content.js"></script>
<script src="javascript/tableView.js"></script>
</body>
</html>
