<?php
//连接数据库
require_once('Database/db.php');
require_once('Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}

$roomType = array(
    "1" => "普通套间-双单床",
    "2" => "普通套间-大床",
    "3" => "商务套间-双单床",
    "4" => "商务套间-大床",
    "5" => "豪华套间-双单床",
    "6" => "豪华套间-大床",
);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>修改订单</title>
    <link href="css/hotel.css" rel="stylesheet">
    <link href="source/skin/jedate.css" rel="stylesheet">
    <script src="source/jedate.js"></script>
</head>
<body style="background:#ececec">
<div class="submit-top">
    <div class="submit-top-middle">
        <div class="m-header">
            <ul>
                <li class="active">
                    <em class="first"></em>
                    1 填写订单
                </li>
                <li>
                    <em class="last"></em>
                    预定完成
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="submit-pannel">
    <div class="submit-middle">
        <div class="middle-content">
            <div class="middle-content-left">
                <div class="middle-content-left-one">
                    <div class="first">
                        <h3 style="font-size: 20px;font-weight: normal">预订信息</h3>
                    </div>
                    <div class="second">
                        <div class="second-one">
                            <div class="second-title">房型信息</div>
                            <div class="second-info"><span id="roomType"><?php $index = $_GET['type'];echo $roomType[$index];?></span></div>
                        </div>
                        <div class="second-one">
                            <div class="second-title">入住时间</div>
                            <input style="cursor: pointer;float: left" type="text" id="custom1" class="workinput"
                                   readonly>
                            <script>
                                jeDate({
                                    dateCell: "#custom1",
                                    format: "YYYY-MM-DD",
                                    isinitVal: true,
                                    minDate: jeDate.now(0),
                                    maxDate: jeDate.now(20)
                                });
                            </script>
                            <div style="margin-left: 30px" class="second-info"><span
                                    style="font-weight: normal">退房时间</span></div>
                            <input style="cursor: pointer;margin-left: 40px" type="text" id="custom2" class="workinput"
                                   readonly>
                            <script>
                                jeDate({
                                    dateCell: "#custom2",
                                    format: "YYYY-MM-DD",
                                    isinitVal: true,
                                    minDate: jeDate.now(1),
                                });
                            </script>
                        </div>
                        <div class="second-one">
                            <div class="second-title">房间数量</div>
                            <div class="second-info"><a class="btn-select" id="btn_select">
                                    <select id="selected" style="cursor: pointer;width: 80px;border: 1px solid black">
                                        <option class="optioned">1</option>
                                        <option class="optioned">2</option>
                                        <option class="optioned">3</option>
                                        <option class="optioned">4</option>
                                        <option class="optioned">5</option>
                                        <option class="optioned">6</option>
                                        <option class="optioned">7</option>
                                        <option class="optioned">8</option>
                                    </select>
                                </a>
                            </div>
                            <div class="second-title" style="font-size: 13px;text-align: left;padding:5px 0 0 10px">
                                房费总计&nbsp<span style="font-size: 13px;color: red">¥<span id="price"><?php
                                        $index = $_GET['type'];
                                        $sql = "select * from roomtype where roomType='$roomType[$index]'";
                                        $rows = Db::assoc($sql);
                                        foreach ($rows as $row) {
                                            echo $row['roomPrice'];
                                        }
                                        ?></span></span></div>
                        </div>
                    </div>
                    <div class="third">
                        <div class="first">
                            <h3 style="font-size: 20px;font-weight: normal">入住信息</h3>
                        </div>
                        <div class="second">
                            <div class="second-panel" id="second-pannel">
                                <div class="third-one">
                                    <div class="second-title2">房间1</div>
                                    <div class="third-info"><input class="input input-black user0" placeholder="入住人姓名"></div>
                                </div>
                            </div>
                            <div class="second-one" style="padding-top: 20px">
                                <div class="second-title2">联系电话</div>
                                <div class="third-info"><input class="input input-black" placeholder="电话" id="phoneNum"></div>
                            </div>
                            <div class="third-warning">
                                <p class="third-warning-p"><i class="fa icon-small icon-waring" style="color: red"></i>本次预订的房费请到酒店前台缴纳,若您想要订购8间以上房间,请拨打86408512预订.谢谢合作!
                                </p>
                                <p class="third-warning-p"><span style="color: red">注: </span>若您未按时到达酒店订单将会取消</p>
                            </div>
                        </div>
                    </div>
                    <div class="four">
                        <a><input type="button" class="button bg-yellow button-larger" id="sub_record" value="提交订单"></a>
                    </div>
                </div>
            </div>
            <div class="middle-content-right">
                <div class="right-image">
                    <img src="images/酒店展览/酒店房间/10.jpg">
                </div>
                <div class="right-down">
                    <p style="width: 100%;font-size: 20px">金陵大酒店</p>
                    <p style="margin-top: 10px;color: #666">南京市江宁区弘景大道99号</p>
                </div>
                <div class="right-middle">
                    <p style="color: #999">付款<span style="margin-left: 30px;color: black">现付</span></p>
                    <p style="color: #999;margin-top: 10px">宽带<span style="margin-left: 30px;color: black">免费</span></p>
                    <p style="color: #999;margin-top: 10px">WIFI<span style="margin-left: 32px;color: black">免费</span>
                    </p>
                </div>
                <div class="right-bottom">
                    <p style="font-size: 17px ">到店付款</p>
                    <p style="margin:20px 0 30px 0">总计费用 :<span
                            style="color: red">¥</span><span id="price2" style="color: red;font-size: 25px"><?php
                            $index = $_GET['type'];
                            $sql = "select * from roomtype where roomType='$roomType[$index]'";
                            $rows = Db::assoc($sql);
                            foreach ($rows as $row) {
                                echo $row['roomPrice'];
                            }
                            ?></span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="tuijian">
        <div class="lianjie-one">
            <div class="lianjie-one-title">用户点评</div>
            <div class="tuijian-two">
                已有网友对此酒店发表评论,<a style="color: #00aaee;" href="room-reservation.php" target="_blank">我来说两句>></a>
            </div>
        </div>
    </div>
    <div class="submit-bottom">
        <div>地址: 南京江宁区弘景大道99号</div>
        <div style="margin: 0 0 20px 0">版权所有:金陵科技学院四个有梦想的大二学生</div>
    </div>
</div>

<div id="share"></div>
</body>
<script src="source/jquery.js"></script>
<script src="javascript/html_share.js"></script>
<script src="javascript/room-reservation-modify.js"></script>
</html>