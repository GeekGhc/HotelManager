<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>订单查询</title>
    <link href="css/hotel.css" rel="stylesheet">
</head>
<body style="background: #fff">

<div class="information-pannel" id="information-pannel">
    <div class="information">
        <div class="information-top">
            提示
            <sapn id="information-close" style="float: right;font-size: 20px;cursor: pointer">×</sapn>
        </div>
        <div class="information-down">
            <div class="one">
                <i class="fa icon-waring" style="color: #4169E1"></i>
                <span>是否确认取消订单?</span>
                <div class="two">
                    <a id="information-down-no" class="button bg-blue2 button-smaller" style="float: right">取消</a>
                    <a id="information-down-ok" class="button bg-blue2 button-smaller"
                       style="float: right;margin-right: 20px">确认</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="information-pannel2" id="information-pannel2">
    <div class="information">
        <div class="information-top">
            提示
            <sapn id="information-close2" style="float: right;font-size: 20px;cursor: pointer">×</sapn>
        </div>
        <div class="information-down">
            <div class="one">
                <i class="fa icon-waring" style="color: #4169E1"></i>
                <span>订单已成功取消!</span>
                <div class="two">
                    <a id="information-down-ok1" class="button bg-blue2 button-smaller"
                       style="float: right;margin-right: 20px">确认</a>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="find_head">
    <div class="find_head_text">订单查询</div>
</div>
<div class="find_content">
    <div class="find_content_in">
        <div class="find_content_head">
            <div class="phone_number">请输入手机号：<input placeholder="请输入您的手机号" type="text" class="phone_number_text" id="phoneNum"> <input
                    type="button" class="button bg-blue2 pad_0 " value="查询" id="find"></div>
        </div>
        <div class="find_content_list" id="order-list">
            <div class="find_list" style="margin-bottom: 0">
                <div class="list_head">
                    <span style="float: left;padding-left: 10px">金陵大酒店</span>
                    <div class="list_time">2016-4-22 18:42</div>
                </div>
                <div class="list_content">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <div>普通套间-双单床</div>
                                <div style="margin-top: 5px"><span style="color: #aaaaaa">住：</span><span
                                        style="color: #aaaaaa">2016-4-22</span></div>
                                <div style="margin-top: 5px"><span style="color: #aaaaaa">离：</span><span
                                        style="color: #aaaaaa">2016-4-25</span></div>
                            </td>
                            <td>
                                <div style="color:#aaaaaa;">
                                    ￥
                                    <span style="color: #ff0000">500</span>
                                    <span style="color: #aaaaaa">x</span>
                                    <span style="color: #aaaaaa">1</span>单
                                </div>
                            </td>
                            <td style="color: #aaaaaa;font-size: 14px">
                                ￥
                                <span style="color: #ff0000;font-weight: bold;font-size: 14px">500</span>
                            </td>
                            <td>
                                <span style="color:darkgreen;font-weight: bold">未付费</span>
                            </td>
                            <td><span>等待入住</span></td>
                            <td>
                                <button class="button button-large bg-blue2">取消订单</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="find_list" style="margin-bottom: 0">
                <div class="list_head">
                    <span style="float: left;padding-left: 10px">金陵大酒店</span>
                    <div class="list_time">2016-4-22 18:42</div>
                </div>
                <div class="list_content">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <div>普通套间-双单床</div>
                                <div style="margin-top: 5px"><span style="color: #aaaaaa">住：</span><span
                                        style="color: #aaaaaa">2016-4-22</span></div>
                                <div style="margin-top: 5px"><span style="color: #aaaaaa">离：</span><span
                                        style="color: #aaaaaa">2016-4-25</span></div>
                            </td>
                            <td>
                                <div style="color:#aaaaaa;">
                                    ￥
                                    <span style="color: #ff0000">500</span>
                                    <span style="color: #aaaaaa">x</span>
                                    <span style="color: #aaaaaa">1</span>单
                                </div>
                            </td>
                            <td style="color: #aaaaaa;font-size: 14px">
                                ￥
                                <span style="color: #ff0000;font-weight: bold;font-size: 14px">500</span>
                            </td>
                            <td>
                                <span style="color:darkgreen;font-weight: bold">未付费</span>
                            </td>
                            <td><span>等待入住</span></td>
                            <td>
                                <button class="button button-large bg-blue2">取消订单</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script src="source/jquery.js"></script>
<script src="javascript/order-find.js"></script>
</html>