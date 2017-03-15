<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>预订完成</title>
    <link href="css/hotel.css" rel="stylesheet">
    <script src="source/jquery.js"></script>
</head>
<body style="background:#ececec">
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
<div class="information-pannel2" id="information-pannel2" style="display: none">
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
<div style="overflow: hidden">
    <div class="submit-top">
        <div class="submit-top-middle">
            <div class="m-header">
                <ul>
                    <li>
                        <em class="first"></em>
                        1 填写订单
                    </li>
                    <li class="active">
                        <em class="last"></em>
                        预定完成
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="submit-pannel">
        <div class="submit-middle">
            <div class="middle-content2">
                <div class="orderfinish">
                    <div class="font">
                        <i class="fa icon-check-circle" style="color:#00CD00"></i> 预定完成
                    </div>
                    <div class="font2">
                        订单已确认成功!酒店信息将通过短信发送您的手机上.
                    </div>
                    <div class="font3">
                        <ul>
                            <li>预订日期:<span style="padding-left: 10px" id="reserveTime"><?php
                                    echo $_GET['reserveTime'];
                                    ?></span></li>
                            <li style="padding-left: 30px">订单状态:<span id="font3-info"
                                                                      style="padding-left: 10px;color:  #f55">等待入住</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="finish-operate" id="finsih-operate">
                    <ul>
                        <li><a id="finish-operate-no"><i class="fa fa-file-text" style="font-size: 35px"></i>取消订单</a>
                        </li>
                        <li><a id="modify"><i class="fa icon-edit" style="font-size: 35px"></i>修改订单</a>
                        </li>
                    </ul>
                </div>
                <div class="finish-info">
                    <div class="finish-info-left">
                        <p style="font-size: 20px;padding-left: 40px;padding-bottom: 15px">预订详情</p>
                        <div class="finish-info-left-pannel">
                            <p style="font-size: 15px;font-weight: bold;color: black">金陵大酒店</p>
                            <p>南京江宁区弘景大道99号</p>
                        </div>
                        <div class="finish-info-left-pannel">
                            <dl>
                                <dt>房型:</dt>
                                <dd id="fangxing"><?php
                                    $roomType = $_GET['roomType'];
                                    $res = explode('-', $roomType);
                                    echo $res[0];
                                    ?></dd>
                            </dl>
                            <dl>
                                <dt>床型:</dt>
                                <dd id="chuangxing"><?php
                                    $roomType = $_GET['roomType'];
                                    $res = explode('-', $roomType);
                                    echo $res[1];
                                    ?></dd>
                            </dl>
                            <dl>
                                <dt>宽带:</dt>
                                <dd>免费</dd>
                            </dl>
                            <dl>
                                <dt>WIFI:</dt>
                                <dd>免费</dd>
                            </dl>
                            <dl>
                                <dt>房间数:</dt>
                                <dd><?php
                                    $roomNum = $_GET['roomNum'];
                                    echo $roomNum;
                                    ?></dd>
                            </dl>
                            <dl>
                                <dt>入住时间:</dt>
                                <dd><?php
                                    $checkInTime = $_GET['checkInTime'];
                                    echo $checkInTime;
                                    ?></dd>
                            </dl>
                            <dl>
                                <dt>退房时间:</dt>
                                <dd><?php
                                    $checkOutTime = $_GET['checkOutTime'];
                                    echo $checkOutTime;
                                    ?></dd>
                            </dl>
                            <dl>
                                <dt>总金额:</dt>
                                <dd>¥
                                <dd style="color: orangered;font-size: 20px;"><?php
                                    $priceTotal = $_GET['priceTotal'];
                                    echo $priceTotal;
                                    ?></dd>
                                (到店付款)</dd></dl>
                        </div>
                    </div>
                    <div class="finish-info-right">
                        <p style="font-size: 20px;padding-left: 40px;padding-bottom: 15px">入住信息</p>
                        <div class="finish-info-left-pannel">
                            <dl id="ruzhuren">
                                <dt>入住人:</dt>
                                <dd>[房间1]</dd>
                            </dl>
                            <dl>
                                <dt>手机号码:</dt>
                                <dd id="phoneNum"><?php
                                    $phoneNum = $_GET['phoneNum'];
                                    echo $phoneNum;
                                    ?></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tuijian">
            <div class="lianjie-one2">
                <div class="lianjie-one-title2">用户点评</div>
                <div class="tuijian-two2">
                    已有网友对此酒店发表评论,<a style="color: #00aaee;" href="room-reservation.php" target="_blank">我来说两句>></a>
                </div>
            </div>
        </div>
        <div class="submit-bottom">
            <div>地址: 南京江宁区弘景大道99号</div>
            <div style="margin: 0 0 20px 0">版权所有:金陵科技学院四个有梦想的大二学生</div>
        </div>
    </div>
</div>


<div id="share"></div>
<script src="javascript/room-reservation-finish.js"></script>

<script>
    $("#ruzhuren").html("");
    <?php $i = 1;
    $cus = $_GET['cus'];
    $ary = array();
    $ary = explode(",", $cus);?>
    var con = new Array(
        '<dt>入住人:</dt><dd>[房间' + 1 + ']' + '</dd><dd style="padding-left: 5px">' +
        "<?php echo $ary[0];?>" + '</dd>',

        '<br><dt></dt><dd>[房间' + 2 + ']' + '</dd><dd style="padding-left: 5px">' +
        "<?php if (1 < count($ary)) echo $ary[1];?>" + '</dd>',

        '<br><dt></dt><dd>[房间' + 3 + ']' + '</dd><dd style="padding-left: 5px">' +
        "<?php if (2 < count($ary)) echo $ary[2];?>" + '</dd>',

        '<br><dt></dt><dd>[房间' + 4 + ']' + '</dd><dd style="padding-left: 5px">' +
        "<?php if (3 < count($ary)) echo $ary[3];?>" + '</dd>',

        '<br><dt></dt><dd>[房间' + 5 + ']' + '</dd><dd style="padding-left: 5px">' +
        "<?php if (4 < count($ary)) echo $ary[4];?>" + '</dd>',

        '<br><dt></dt><dd>[房间' + 6 + ']' + '</dd><dd style="padding-left: 5px">' +
        "<?php if (5 < count($ary)) echo $ary[5];?>" + '</dd>',

        '<br><dt></dt><dd>[房间' + 7 + ']' + '</dd><dd style="padding-left: 5px">' +
        "<?php if (6 < count($ary)) echo $ary[6];?>" + '</dd>',

        '<br><dt></dt><dd>[房间' + 8 + ']' + '</dd><dd style="padding-left: 5px">' +
        "<?php if (7 < count($ary)) echo $ary[7];?>" + '</dd>'
    )
    for (var i = 0; i <<?php echo $_GET['roomNum'];?>; i++) {
        if (i == 0) {
            $("#ruzhuren").append(con[i]);
        } else {
            $("#ruzhuren").append(con[i]);
        }
    }
</script>
</body>
<script src="source/jquery.js"></script>
<script src="javascript/room-reservation-finish.js"></script>
</html>