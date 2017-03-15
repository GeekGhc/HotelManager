<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>个人资料修改</title>
    <link href="css/hotel.css" rel="stylesheet">
    <link href="source/skin/combo.select.css" rel="stylesheet">
</head>
<body style="background: #fff">
<div class="user-info-top"></div>
<div class="user-info-content">
    <div class="uic-one">
        <div class="uic-title">个人设置</div>
        <div class="uic-content">
            <div class="uic-left">
                <div class="uic-left-one">
                    <h3 style="display: inline"><i class="fa icon-user" style="display: inline;padding-right:20px;font-size: 20px;color: lightskyblue"></i>个人资料
                    </h3>
                </div>
                <ul class="uic-left-two">
                    <li class="uic-left-li uic-active" id="uic-left-one"><a>基本资料</a></li>
                    <li class="uic-left-li" id="uic-left-two"><a>头像设置</a></li>
                </ul>
            </div>
            <div class="uic-right" id="uic-right" style="display: block">
                <div class="uic-right-title">基本资料</div>
                <div class="uic-right-content">
                    <table class="pro-table">
                        <tbody>
                        <tr>
                            <th>性别:</th>
                            <td class="line30">
                                <input id="radio-man" type="radio">
                                <label class="pro-lable">男</label>
                                <input id="radio-woman" type="radio">
                                <labelid  class="pro-lable">女</labelid>
                            </td>
                        </tr>
                        <tr>
                            <th>生日:</th>
                            <td class="line30">
                                <div class="pro-select">
                                    <select id="select-year">
                                    </select>
                                </div>
                                <div class="pro-select">
                                    <select id="select-month">
                                    </select>
                                </div>
                                <div class="pro-select">
                                    <select id="select-day">
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>血型:</th>
                            <td class="line30">
                                <div class="pro-select">
                                    <select id="select-blood">
                                        <option value="">血型</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>O</option>
                                        <option>AB</option>
                                        <option>其他</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>教育背景:</th>
                            <td class="line30">
                                <div class="pro-select">
                                    <select id="select-edcuation">
                                        <option value="">教育</option>
                                        <option>高中</option>
                                        <option>大学</option>
                                        <option>研究生</option>
                                        <option>硕士生</option>
                                        <option>博士生</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>用户名:</th>
                            <td class="line30">
                                <div class="pro-select">
                                    <input  id="user-info-name"  type="text" value="<?php echo $_SESSION['name']?>">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>手机号码:</th>
                            <td class="line30">
                                <div class="pro-select">
                                    <input id="user-info-phone" type="text" value="<?php echo $_SESSION['phone']?>">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>个人简介:</th>
                            <td>
                                <textarea id="information" class="pro-table-textarea"></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div style="width: 100%;overflow: hidden;margin-top: 20px;padding-left: 100px">
                        <a id="user-info-button" class="button bg-blue2 button-large" href="javascript:void(0)">保存</a>
                    </div>
                </div>
            </div>
            <div class="uic-right-pwd" id="uic-right-pwd" style="display: none">
                <div class="uic-right-title">头像设置</div>
                <div class="uic-right-content">
                    <div class="uic-head">
                        <ul>
                            <li><a class="uic-head-active" id="uic-head-one">自定义头像</a></li>
                            <li><a class="uic-head-normal" id="uic-head-two">选择推荐头像</a></li>
                        </ul>
                    </div>
                    <div class="uic-head-content">
                        <div class="uic-head-content-left" id="uic-head-content-left" style="display: block;">
                            <p class="uic-way-one">
                                方法一:选择本地图片上传,编辑自己的头像
                            </p>
                            <div class="uic-button">
                                <form method="post" action="../MyHotel/Login-Regist/user-img.php" enctype="multipart/form-data" target="iframeUpload">
                                    <iframe name="iframeUpload" src="" width="350" height="35" frameborder=0 SCROLLING="no" style="display:NONE"></iframe>
                                    <a class="file">选择文件
                                        <input type="file" name="file">
                                    </a>
                                    <a  class="file" id="up-file">上传
                                        <input type="submit">
                                    </a>
                                </form>
                                <a  class="file" id="yulan">预览头像</a>
                                <span style="color: #999;line-height: 40px;margin-left: 10px" >可选择jpg,png图片格式</span>
                            </div>
                            <p class="uic-way-one">
                                方法二:选择推荐图片,编辑自己的头像
                            </p>
                            <ul class="uic-img">
                                <li><img src="images/userhead/1.jpg"></li>
                                <li><img src="images/userhead/2.jpg"></li>
                                <li><img src="images/userhead/3.jpg"></li>
                                <li><img src="images/userhead/4.jpg"></li>
                                <li><img src="images/userhead/5.jpg"></li>
                                <li><a class="uic-a" id="uic-a">更多</a></li>
                            </ul>
                        </div>
                        <div class="uic-head-content-left-two" id="uic-head-content-left-two" style="display: none">
                            <ul class="uic-img" id="uic-img-expecial">
                            </ul>
                        </div>
                        <div class="uic-head-content-right">
                            <p class="uic-way-one" style="font-size: 18px">
                                头像预览
                            </p>
                            <p class="uic-way-one" id="uic-way-one">
                                <img src="<?php echo $_SESSION['uploads']?>">
                            </p>
                            <div><a id="uic-img-button" style="margin:30px 0 0 10px" class="button bg-blue2">保存头像</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="user-bottom">
    <span>版权所有:金陵科技学院四个有梦想的少年</span>
</div>
</body>
<script src="source/jquery.js"></script>
<script src="source/jquery.combo.select.js"></script>
<script src="javascript/user-info.js"></script>
<script>
    $(function () {
        $('select').comboSelect();
    });
    function CallbackFunction(){
        alert("success");
    }
</script>
</html>