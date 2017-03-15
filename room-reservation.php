<?php
session_start();
require_once('Database/db.php');
require_once('Database/Response.php');
try {
    $connection = Db::getInstance()->connect();
} catch (Exception $e) {
    return Response::show(401, '数据库连接失败');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>客房预订</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=skqewxmwb4hb9AbN5BnySFMyHGtWbKG9"></script>
    <link rel="stylesheet" href="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css" />
    <link href="css/hotel.css" rel="stylesheet">
</head>
<body style="background: #f2f9fd">
<div class="reservation-image">
    <div class="reservation-image-middle">
        <div class="middle-box">
            <div class="middle-box-image">
                <img src="images/userhead/1.jpg">
            </div>
            <div class="middle-box-pinglun">
                <p style="font-size: 20px;padding-top: 10px">"真诚与温馨,赢得您的心"</p>
                <br>
                <p style="font-size: 15px;padding-left: 10px;padding-top: 4px">共有<a href="#" style="color: red">1111</a>条点评>
                </p>
            </div>
        </div>
    </div>
</div>
<div class="pannel">
    <div class="pannel-real">
        <div class="reservation-head">
            <div class="reservation-head-pannel">
                <ul>
                    <li><a class="reservation-head-active" id="room">房间预订</a></li>
                    <li><a class="reservation-head-all" id="sheshi">设施概况</a></li>
                    <li><a class="reservation-head-all" id="weizhi">地理位置</a></li>
                    <li><a class="reservation-head-all" id="pinlun">点评问答</a></li>
                </ul>
            </div>
        </div>
        <div class="reservation-content" id="reservation-content">
            <div class="reservation-content-top">
                <table class="reservation-content-top-table">
                    <tbody>
                    <tr>
                        <td width="300px"><a style="cursor: default">房型信息</a></td>
                        <td width="210px"><a style="cursor: default">预订信息</a></td>
                        <td width="130px">含早</td>
                        <td width="145px">剩余房间数</td>
                        <td width="120px">价格</td>
                        <td width="150px">退订政策</td>
                        <td width="*">预订</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="reservation-content-down">
                <div class="down-one">
                    <table class="reservation-content-table1">
                        <tbody>
                        <tr>
                            <td class="td-first-set">
                                <div class="table-image">
                                    <img src="images/酒店展览/酒店房间/3.jpg">
                                </div>
                                <div class="table-info">
                                    <div class="table-font">普通套间</div>
                                    <div class="table-font-photo">
                                        <i class="fa icon icon-user" title="最多两人住"></i>
                                        <i class="fa icon icon-tv" title="电视机"></i>
                                        <i class="fa icon icon-sound" title="环绕音箱"></i>
                                        <i class="fa icon icon-wifi" title="无线WIFL"></i>
                                    </div>
                                    <div class="table-font-info">
                                        <p>面积30㎡,无窗</p>
                                        <p>独立卫浴,中央空调</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                    <tr class="td-second-set">
                                        <td width="140px">普通套间-双单床</td>
                                        <td width="100px">含早餐</td>
                                        <td width="100px">剩余<span
                                                style="color: red;font-size: 18px;font-weight: bold">
                                                <?php
                                                $sql = "select * from roomtype where typeId='PTS000'";
                                                $rows = Db::assoc($sql);
                                                foreach ($rows as $row) {
                                                    echo $row['room_remain'];
                                                }
                                                ?>
                                            </span>间
                                        </td>
                                        <td width="80px" style="color:  red">¥<span
                                                style="color: red;font-size: 18px;font-weight: bold">280</span></td>
                                        <td width="100px"><a style="font-size: 18px;border-bottom: 1px dotted gray"
                                                             title="订单确认后随时免费退订">免费取消</a></td>
                                        <td width="*"><a class="button bg-orange button-large" href="room-reservation-submit.php?type=1"  target="_blank">预订</a></td>
                                    </tr>
                                    <tr class="td-second-set">
                                        <td>普通套间-大床</td>
                                        <td>含早餐</td>
                                        <td>剩余<span style="color: red;font-size: 18px;font-weight: bold">
                                                <?php
                                                $sql = "select * from roomtype where typeId='PTB000'";
                                                $rows = Db::assoc($sql);
                                                foreach ($rows as $row) {
                                                    echo $row['room_remain'];
                                                }
                                                ?>
                                            </span>间</td>
                                        <td style="color:  red">¥<span
                                                style="color: red;font-size: 18px;font-weight: bold">380</span></td>
                                        <td><a style="font-size: 18px;border-bottom: 1px dotted gray"
                                               title="订单确认后随时免费退订">免费取消</a>
                                        </td>
                                        <td><a class="button bg-orange button-large" href="room-reservation-submit.php?type=2"  target="_blank">预订</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="down-two">
                    <table class="reservation-content-table1">
                        <tbody>
                        <tr>
                            <td class="td-first-set">
                                <div class="table-image">
                                    <img src="images/酒店展览/酒店房间/8.jpg">
                                </div>
                                <div class="table-info">
                                    <div class="table-font">商务套间</div>
                                    <div class="table-font-photo">
                                        <i class="fa icon icon-user" title="最多两人住"></i>
                                        <i class="fa icon icon-tv" title="电视机"></i>
                                        <i class="fa icon icon-sound" title="环绕音箱"></i>
                                        <i class="fa icon icon-wifi" title="无线WIFL"></i>
                                    </div>
                                    <div class="table-font-info">
                                        <p>面积40㎡,办公桌</p>
                                        <p>独立卫浴,中央空调</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                    <tr class="td-second-set">
                                        <td width="140px">商务套间-双单床</td>
                                        <td width="100px">含早餐</td>
                                        <td width="100px">剩余<span
                                                style="color: red;font-size: 18px;font-weight: bold">
                                                <?php
                                                $sql = "select * from roomtype where typeId='SWS000'";
                                                $rows = Db::assoc($sql);
                                                foreach ($rows as $row) {
                                                    echo $row['room_remain'];
                                                }
                                                ?>
                                            </span>间
                                        </td>
                                        <td width="80px" style="color:  red">¥<span
                                                style="color:red;font-size: 18px;font-weight: bold">480</span></td>
                                        <td width="100px"><a style="font-size: 18px;border-bottom: 1px dotted gray"
                                                             title="订单确认后随时免费退订">免费取消</a></td>
                                        <td width="*"><a class="button bg-orange button-large" href="room-reservation-submit.php?type=3"  target="_blank">预订</a></td>
                                    </tr>
                                    <tr class="td-second-set">
                                        <td>商务套间-大床</td>
                                        <td>含早餐</td>
                                        <td>剩余<span style="color: red;font-size: 18px;font-weight: bold">
                                                <?php
                                                $sql = "select * from roomtype where typeId='SWB000'";
                                                $rows = Db::assoc($sql);
                                                foreach ($rows as $row) {
                                                    echo $row['room_remain'];
                                                }
                                                ?>
                                            </span>间</td>
                                        <td style="color:  red">¥<span
                                                style="color:red;font-size: 18px;font-weight: bold">580</span></td>
                                        <td><a style="font-size: 18px;border-bottom: 1px dotted gray"
                                               title="订单确认后随时免费退订">免费取消</a>
                                        </td>
                                        <td><a class="button bg-orange button-large" href="room-reservation-submit.php?type=4"  target="_blank">预订</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="down-three">
                    <table class="reservation-content-table1">
                        <tbody>
                        <tr>
                            <td class="td-first-set">
                                <div class="table-image">
                                    <img src="images/酒店展览/酒店房间/2.jpg">
                                </div>
                                <div class="table-info">
                                    <div class="table-font">豪华套间</div>
                                    <div class="table-font-photo">
                                        <i class="fa icon icon-user" title="最多两人住"></i>
                                        <i class="fa icon icon-tv" title="电视机"></i>
                                        <i class="fa icon icon-sound" title="环绕音箱"></i>
                                        <i class="fa icon icon-wifi" title="无线WIFL"></i>
                                    </div>
                                    <div class="table-font-info">
                                        <p>面积80㎡,声控设备</p>
                                        <p>独立卫浴,中央空调</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                    <tr class="td-second-set">
                                        <td width="140px">豪华套间-双单床</td>
                                        <td width="100px">含早餐</td>
                                        <td width="100px">剩余<span
                                                style="color: red;font-size: 18px;font-weight: bold">
                                                <?php
                                                $sql = "select * from roomtype where typeId='HHS000'";
                                                $rows = Db::assoc($sql);
                                                foreach ($rows as $row) {
                                                    echo $row['room_remain'];
                                                }
                                                ?>
                                            </span>间
                                        </td>
                                        <td width="80px" style="color:  red">¥<span
                                                style="color:red;font-size: 18px;font-weight: bold">780</span></td>
                                        <td width="100px"><a style="font-size: 18px;border-bottom: 1px dotted gray"
                                                             title="订单确认后随时免费退订">免费取消</a></td>
                                        <td width="*"><a class="button bg-orange button-large" href="room-reservation-submit.php?type=5"  target="_blank">预订</a></td>
                                    </tr>
                                    <tr class="td-second-set">
                                        <td>豪华套间-大床</td>
                                        <td>含早餐</td>
                                        <td>剩余<span style="color: red;font-size: 18px;font-weight: bold">
                                                <?php
                                                $sql = "select * from roomtype where typeId='HHB000'";
                                                $rows = Db::assoc($sql);
                                                foreach ($rows as $row) {
                                                    echo $row['room_remain'];
                                                }
                                                ?>
                                            </span>间</td>
                                        <td style="color:  red">¥<span
                                                style="color: red;font-size: 18px;font-weight: bold">880</span></td>
                                        <td><a style="font-size: 18px;border-bottom: 1px dotted gray"
                                               title="订单确认后随时免费退订">免费取消</a>
                                        </td>
                                        <td><a class="button bg-orange button-large" href="room-reservation-submit.php?type=6"  target="_blank">预订</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="facility">
            <div class="facility-left" id="facility-left">
                <div class="facility-left-top">
                    <p style="font-size: 20px;font-weight: bold;padding:15px">设施概况</p>
                </div>
                <div class="facility-left-pannel">
                    <div class="facility-left-pannel-one">
                        <dl class="inform-list" style="margin: 12px 0">
                            <dt>联系方式</dt>
                            <dd>
                                <cite>电话:86408512</cite>
                                <cite>传真:(020)-2228 4826</cite>
                            </dd>
                        </dl>
                        <dl class="inform-list" style="margin: 12px 0">
                            <dt>基本信息</dt>
                            <dd>
                                <cite>2013年开业</cite>
                                <cite>100间客房</cite>
                                <cite>12层高</cite>
                                <cite>靠海</cite>
                            </dd>
                        </dl>
                        <dl class="inform-list" style="margin: 12px 0">
                            <dt>酒店简介</dt>
                            <dd>
                                <cite>性比价高</cite>
                                <cite>采光好</cite>
                                <cite>风景好</cite>
                            </dd>
                        </dl>
                    </div>
                    <div class="facility-left-pannel-one">
                        <dl class="inform-list">
                            <dt style="line-height: 24px;text-align: center">网络设施</dt>
                            <dd>
                                <cite title="无线覆盖"><i
                                        class="fa icon-small icon-wifi icon-lightgreen"></i>酒店各处提供WIFI</cite>
                            </dd>
                        </dl>
                    </div>
                    <div class="facility-left-pannel-one">
                        <dl class="inform-list">
                            <dt style="line-height: 24px;text-align: center">停车服务</dt>
                            <dd>
                                <cite title="停车设施"><i class="fa icon-small icon-car icon-lightgreen"></i>酒店提供<span
                                        style="color:#32CD32;font-size: 15px">免费</span>地下停车场</cite>
                            </dd>
                        </dl>
                    </div>
                    <div class="facility-left-pannel-one">
                        <dl class="inform-list">
                            <dt style="line-height: 24px;text-align: center">房间设施</dt>
                            <dd class="inform-list-dd">
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>24小时热水</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>中央空调</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>地暖设施</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>宽带上网</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>国际长途电话</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>吹风机</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>淋浴房</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="facility-left-pannel-one">
                        <dl class="inform-list">
                            <dt style="line-height: 24px;text-align: center">酒店服务</dt>
                            <dd class="inform-list-dd">
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>免费早餐</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>行李寄存</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>叫醒服务</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>租车</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>洗衣服务</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>携带宠物</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>接待外宾</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="facility-left-pannel-one" style="border-bottom: none">
                        <dl class="inform-list">
                            <dt style="line-height: 24px;text-align: center">酒店设施</dt>
                            <dd class="inform-list-dd">
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>普通套间</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>商务套件</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>豪华套间</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>休息室</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>游泳室</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>健身房</span>
                                <span><i class="fa icon-check icon-small icon-deepgreen"></i>高端网咖</span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <div class="position">
            <div class="position-left" id="position-left">
                <div class="position-top">
                    <p style="font-size: 20px;font-weight: bold;padding:15px;float: left">地理位置</p>
                    <a href="javascript:void(0)" id="big-map">查看大地图</a>
                </div>
                <div class="position-down">
                    <div style="width:819px;height:500px;" id="map"></div>
                </div>
            </div>
        </div>
        <div class="comment">
            <div class="comment-left" id="comment-left">
                <div class="comment-left-top">
                    <p style="font-size: 20px;font-weight: bold;padding:15px">评论</p>
                </div>
                <div class="comment-one">
                    <div class="comment-left-pannel">
                        <textarea id="comment-textarea" class="textarea" placeholder="扯淡,吐槽,鼓励,表扬......想说啥就说啥"></textarea>
                        <div id="comment-warning" style="float: left;color: red;font-size: 15px;padding: 10px 30px;display: none"><i class="fa icon-waring"></i>评论不能为空</div>
                        <div class="comment-left-pannel-button">
                            <a id="comment-button" class="button button-larger bg-green"  type="button" onclick=<?php if(!isset($_SESSION['user'])) {echo "warning()";}else{echo "submit()";}?>>发表评论</a>
                        </div>
                    </div>
                </div>
                <div class="comment-two" id="comment-two">
                    <ul class="comment-post" id="comment-post">
                    </ul>
                    <div class="page" id="comment-page">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="share"></div>
<div class="big-map">
    <a style="float: right;font-size: 30px;color: #fff;padding: 10px;font-weight: bold" id="big-map-close">×</a>
    <div class="one">
        <div style="width:100%;height:100%;border:#ccc solid 1px;" id="dituContent"></div>
    </div>
</div>


<!--提醒登陆弹框-->
<div class="information-pannel" id="comment-pannel">
    <div class="information">
        <div class="information-top">
            提示
            <sapn id="comment-close" style="float: right;font-size: 20px;cursor: pointer">×</sapn>
        </div>
        <div class="information-down">
            <div class="one">
                <i class="fa icon-waring" style="color: #4169E1"></i>
                <span>亲!请先登录然后评论!</span>
                <div class="two">
                    <a id="comment-down-no" class="button bg-blue2 button-smaller" style="float: right">取消</a>
                    <a id="comment-down-ok" class="button bg-blue2 button-smaller" style="float: right;margin-right: 20px">确认</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!---->
</body>
<script type="text/javascript" src="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js"></script>
<script src="source/jquery.js"></script>
<script src="javascript/room-reseration.js"></script>
<script src="javascript/html_share.js"></script>
<script src="Bmap/big-map.js"></script>
<script src="Bmap/map.js"></script>
</html>