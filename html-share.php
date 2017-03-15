<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>html代码共享</title>
</head>
<body>

<!--顶部注册登录-->
<div class="top" id="top" style="display: <?php if(!isset($_SESSION['user'])) echo "block"; else echo "none"?>">
    <form>
        <table style="width: 100%">
            <tbody>
            <tr>
                <td width="200px" align="right"><span
                        style="font-size: 25px;font-family: 'Rochester'">Jin Ling Hotel</span></td>
                <td width="*"></td>
                <td width="150px" align="right"><p style="color: red;display: none" id="user-warning"></p></td>
                <td width="250px" align="right"><input id="user-username" type="text" class="input" placeholder="登录名">
                </td>
                <td width="250px" align="right"><input type="password" id="user-password" class="input"
                                                       placeholder="密码"></td>
                <td width="100px" align="center"><input type="button" class="button button-small bg-blue2" value="登录"
                                                        id="userLogin"></td>
                <td width="100px" align="left"><a type="button" class="button button-small bg-blue2"
                                                  href="regist.php" target="_blank">注册</a></td>
                <td width="60px" align="left"><a href="order_find.php" style="color: #fff" target="_blank">查询订单</a></td>
                <td width="10px"></td>
            </tr>
            </tbody>
        </table>
    </form>
</div>
<!--****-->

<!--注册后顶部显示-->
<div class="top-user" id="top-user" style="display:<?php if(!isset($_SESSION['user'])) echo "none"; else echo "block"?>">
    <table style="width: 100%">
        <tbody>
        <tr>
            <td width="200px" align="right"><span
                    style="font-size: 25px;font-family: 'Rochester'">Jin Ling Hotel</span></td>
            <td width="*"></td>
            <td width="100px" align="center"><a style="font-size:12px;color: #fff">Welcome</a></td>
            <td width="40px" align="center"><a><img src="<?php echo $_SESSION['uploads']?>"></a></td>
            <td width="50px" align="left"><a id="html-share-name" style="font-size:12px;color: #EE7600;cursor: pointer"><?php echo $_SESSION['name']?></a></td>
            <td width="60px" align="left"><a id="html-operate-infomation" href="user-info.php" target="_blank" style="font-size: 12px;color:#EE7600;cursor: pointer">编辑资料</a></td>
            <td width="60px" align="left"><a style="font-size: 12px;color:#EE7600;cursor: pointer" href="order_find.php" target="_blank">查询订单</a></td>
            <td width="20px"></td>
            <td width="50px" align="left"><a style="cursor: pointer" href="Login-out.php">退出</a></td>
        </tr>
        </tbody>
    </table>
</div>
<!---->

<!--管理员登录 -->
<div class="login" id="login">
    <div class="login_admin">
        <div class="login_close">
            <p style="width: 15%;height: 50px;float: left;text-align: center"><img src="images/share/login.png" style="position: absolute;top: 10px;left: 20px">
            </p>
            <p style="width: 75%;height: 50px;line-height: 50px;float:left;font-size: 15pt;color: gray;font-weight: bold">管理员登录</p>
            <a onclick="hide()">×</a>
        </div>
        <div class="login_content" style="box-sizing: border-box">
            <p id="searchResult" style="width: 100%;height: 20px;line-height: 20px;text-align: center;color: red"></p>
            <p style="width: 100%;padding: 0 5%;box-sizing: border-box;margin-top: 10px"><input type=" text" class="form-control" id="AdminName" placeholder="管理员账号" required autofocus/></p>
            <p style="width: 100%;height: 50px;padding: 0 5%;box-sizing: border-box;margin-top: 30px"><input
                    type="password"
                    class="form-control2"
                    name="Password" id="Password" placeholder="管理员密码" required/></p>
            <p style="width: 100%;height: 50px;padding: 0 5%;box-sizing: border-box;margin-top: 30px">
                <button class="button-blue" id="button-blue" type="button" style=" font-weight: bolder">
                    登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录
                </button>
            </p>
        </div>
    </div>
</div>
<!---->

<!--图片展览-->
<div id="float_main" class="float_main" style="display: none;">
    <div class="img_close"><a class="float_close">×</a></div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/1.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/2.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/3.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/4.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/5.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/6.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/7.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/8.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/9.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/10.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/1.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/2.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/3.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/4.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
    <div class="box">
        <div class="box_img">
            <img src="images/酒店展览/酒店房间/5.jpg">
            <div class="img_text">酒店房间</div>
        </div>
    </div>
</div>
<!---->
<script src="javascript/login.js"></script>
</body>
</html>