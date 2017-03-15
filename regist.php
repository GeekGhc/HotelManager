<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>会员注册界面</title>
    <link href="css/hotel.css" rel="stylesheet">
</head>
<body style="background: #fff">
<div class="regist">
    <div class="regist-title">
        <div><img src="images/share/title-hotel.png"></div>
    </div>
</div>
<div class="regist-content">
    <div class="pannel-regist">
        <div class="regist_content">
            <table>
                <tbody>
                <tr>
                    <td width="60px" style="font-size: 20px">姓名:</td>
                    <td width="200px"><input type="text" class="form-control3" id="reg_name" name="AdminName"
                                             placeholder="请输入姓名"></td>
                    <td width="80px" align="center"><span class="reg_name">姓名格式错误</span></td>
                </tr>
                <tr>
                    <td style="font-size: 20px">身份证号:</td>
                    <td><input type="text" class="form-control4" id="reg_id" name="id"
                               placeholder="输入身份证号">
                    <td align="center"><span class="reg_id">身份证格式错误</span></td>
                </tr>
                <tr>
                    <td style="font-size: 20px">密码:</td>
                    <td><input type="password" class="form-control4" id="reg_pas1"
                               placeholder="输入密码6~32位字符"></td>
                    <td align="center"><span class="reg_pas1">密码为6~32位字符</span></td>
                </tr>
                <tr class="pwd-tr" style="height:30px;">
                    <td></td>
                    <td><span class="pwd-tr-td" id="pwd-one">弱</span><span id="pwd-two" class="pwd-tr-td">中</span><span id="pwd-three" class="pwd-tr-td">强</span>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td style="font-size: 20px">确认密码:</td>
                    <td><input type="password" class="form-control4" id="reg_pas2" placeholder="请确认密码"></td>
                    <td align="center"><span class="reg_pas2">密码确认错误</span></td>
                </tr>
                <tr>
                    <td style="font-size: 20px">邮箱地址:</td>
                    <td><input type="text" class="form-control4" id="reg_email" name="email" placeholder="输入邮箱地址"></td>
                    <td align="center"> <span class="reg_email">邮箱格式错误</span></td>
                </tr>
                <tr>
                    <td style="font-size: 20px">手机号码:</td>
                    <td><input type="text" class="form-control4" id="reg_num" name="phone" placeholder="输入手机号码"></td>
                    <td align="center"><span class="reg_num">手机号格式错误</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><a class="button bg-blue2" id="resgist-button" style="padding: 15px 150px;font-size: 20px;letter-spacing: 20px">注册</a></td>
                    <td></td>
                </tr>
                <tr style="height: 15px">
                    <td></td>
                    <td align="center"><p id="regist_p" style="color: red"></p></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</body>
<script src="source/jquery.js"></script>
<script src="javascript/login.js"></script>
</html>