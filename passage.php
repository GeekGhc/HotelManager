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
    <title>文章发布</title>
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
                <li><a href="content.php" class="fa fa-cog"> 新闻公告</a></li>
                <li class="active"><a href="passage.php" class="fa fa-file">文章发布</a></li>
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
                <li>文章发布</li>
                <li>/</li>
                <li>新闻公告发布</li>
            </ul>
        </div>
    </div>
    <div class="admin passage">
        <div class="tab">
            <div class="tab-head">
                <strong>发布文章</strong>
                <ul class="tab-nav">
                    <li class="active" id="tab-nav-news"><a href="#">新闻发布</a></li>
                    <li id="tab-nav-advise"><a href="#">公告发布</a></li>
                </ul>
            </div>
            <div class="tab-body-news">
                <div class="form-group">
                    <div class="lable"><label>标题</label></div>
                    <div class="field"><input  class="input" id="passage-news-title" type="text" placeholder="请填写新闻标题"></div>
                </div>
                <div class="form-group">
                    <div class="lable">新闻内容</div>
                    <div class="field"><textarea id="passage-news-content"  placeholder="请填写新闻内容"></textarea></div>
                </div>
                <div class="form-button">
                    <button class="button bg-blue2 bg-big" onclick="PassageSubmit('news')">发布</button>
                </div>
            </div>
            <div class="tab-body-advise">
                <div class="form-group">
                    <div class="lable"><label>标题</label></div>
                    <div class="field"><input id="passage-advise-title" class="input" type="text" placeholder="请填写公告标题"></div>
                </div>
                <div class="form-group">
                    <div class="lable">公告内容</div>
                    <div class="field"><textarea id="passage-advise-content" placeholder="请填写公告内容"></textarea></div>
                </div>
                <div class="form-button">
                    <button class="button bg-blue2 bg-big" id="passage-advise-submit"  onclick="PassageSubmit('advise')">发布</button>
                </div>
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
</body>
</html>
