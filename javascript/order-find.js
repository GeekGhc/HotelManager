var del_index = 0;//删除订单的序号
var nowstate;
function getIndex(index,obj) {//得到需要删除订单的序号
    del_index = index;
    nowstate=$(obj).html();
}
//点击查询按钮
$("#find").on('click', function () {
    var phoneNum = $("#phoneNum").val();
    var time = new Array();//每个订单的预定时间
    var order_length = 0;//个人订单总数量
    $.ajax({
        type: 'GET',
        url: '../MyHotel/Web-front/order-find-res.php',
        data: {'phoneNum': phoneNum},
        dataType: 'json',
        success: function (json) {
            $("#order-list").empty();
            var li = "";
            var list = json.list;
            order_length = list.length;
            $.each(list, function (index, array) {
                var state="取消订单";
                var ruzhu='等待入住';
                if(array['payState']=='已付费')
                {
                    state='订单已处理';
                    ruzhu="已入住";
                }
                li += '<div class="find_list order' + index + '" style="margin-bottom: 0">'
                    + '<div class="list_head"><span style="float: left;padding-left: 10px">金陵大酒店</span>'
                    + '<div class="list_time">' + array['reserveTime'] + '</div></div><div class="list_content">'
                    + '<table><tbody><tr><td>'
                    + '<div>' + array['roomType'] + '</div>'
                    + '<div style="margin-top: 5px"><span style="color: #aaaaaa">住：</span>'
                    + '<span style="color: #aaaaaa">' + array['checkInTime'] + '</span></div>'
                    + '<div style="margin-top: 5px"><span style="color: #aaaaaa">离：</span>'
                    + '<span style="color: #aaaaaa">' + array['checkOutTime'] + '</span></div></td><td>'
                    + '<div style="color:#aaaaaa;">￥<span style="color: #ff0000">' + array['roomPrice'] + '</span>'
                    + '<span style="color: #aaaaaa"> x </span><span style="color: #aaaaaa">' + array['roomNum'] + '</span>单'
                    + '</div></td><td style="color: #aaaaaa;font-size: 14px">'
                    + '￥<span style="color: #ff0000;font-weight: bold;font-size: 14px">' + array['priceTotal'] + '</span></td><td>'
                    + '<span style="color:darkgreen;font-weight: bold">' + array['payState'] + '</span>'
                    + '</td><td><span>'+ruzhu+'</span></td><td><button  class="finish-operate-no dingdan"  onclick="getIndex(' + index + ',this)">'+state+'</button>'
                    + '</td></tr></tbody></table></div></div>';
                time.push(array['reserveTime']);
            });
            $("#order-list").append(li);
        },
        complete: function (){
            $("#information-close").click(function (){
                $("#information-pannel").css({"display": "none"});
            });
            $("#information-down-no").click(function () {
                $("#information-pannel").css({"display": "none"});
            });

            /*点击取消订单*/
            $(".finish-operate-no").click(function () {
                if(nowstate=='取消订单')
                {
                    $("#information-pannel").css({"display": "block"});
                }
            });

            /*确认取消订单*/
            $("#information-down-ok").click(function () {
                /*删除数据库数据*/
                $.get(
                    "../MyHotel/Web-front/room-order-delete.php",
                    {
                        phoneNum: phoneNum,
                        reserveTime: time[del_index]
                    },
                    function (data, state) {
                        /*alert("data = " + data);
                         alert("state = " + state);*/
                    }
                );
                $(".order" + del_index).remove();
                $("#information-pannel").css({"display": "none"});
                $("#information-pannel2").css({"display": "block"});
            });
            $("#information-down-ok1").click(function () {
                $("#information-pannel2").css({"display": "none"});
                $("#finsih-operate").css({"display": "none"});
                $('#font3-info').html("订单已取消");
            });
            $("#information-close2").click(function () {
                $("#information-pannel2").css({"display": "none"});
                $("#finsih-operate").css({"display": "none"});
                $('#font3-info').html("订单已取消");
            });
        },
        error: function () {
            alert("数据异常");
        }
    });
});


