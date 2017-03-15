//提交页面的js操作
var price = $("#price").text();
var roomNum = 1;//房间数量
var checkInTimeOld = $("#custom1").val();
var checkOutTimeOld = $("#custom2").val();
$("#selected").bind('change', function () {
    roomNum = this.value;
    $("#second-pannel").html("");
    for (var i = 0; i < roomNum; i++) {
        var li = '<div class="third-one">'
            + '<div class="second-title2">房间' + (i + 1) + '</div>' +
            '<div class="third-info"><input class="input input-black user' + i + '" placeholder="入住人姓名"></div>' +
            '</div>';
        $("#second-pannel").append(li);
    }
    var nowprice = price * roomNum;
    $('#price').html(nowprice);
    $("#price2").html(nowprice);
});

//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}

//试过改变input文本框触发事件 blur change都是有问题的
/*入住时间改变触发*/
function custom1Event(){
    var checkInTime = $("#custom1").val();//入住时间
    var checkOutTime = $("#custom2").val();//退房时间
    if(checkInTime!=checkInTimeOld){
        var day = 24 * 60 * 60 *1000;
        var arr1 = checkInTime.split("-");
        var date1 = new Date(arr1[0],parseInt(arr1[1])-1,arr1[2]);
        var date1res = date1.getTime();
        var arr2 = checkOutTime.split("-");
        var date2 = new Date(arr2[0],parseInt(arr2[1])-1,arr2[2]);
        var date2res = date2.getTime();
        var days = (date2res-date1res)/day;

        var roomNum = $("#selected").val();
        var nowprice = price * roomNum*parseInt(days);
        $('#price').html(nowprice);
        $("#price2").html(nowprice);
    }
}


/*退房时间改变触发*/
function custom2Event(){
    var checkInTime = $("#custom1").val();//入住时间
    var checkOutTime = $("#custom2").val();//退房时间
    if(checkOutTime!=checkOutTimeOld){
        var day = 24 * 60 * 60 *1000;
        var arr1 = checkInTime.split("-");
        var date1 = new Date(arr1[0],parseInt(arr1[1])-1,arr1[2]);
        var date1res = date1.getTime();
        var arr2 = checkOutTime.split("-");
        var date2 = new Date(arr2[0],parseInt(arr2[1])-1,arr2[2]);
        var date2res = date2.getTime();
        var days = (date2res-date1res)/day;

        var roomNum = $("#selected").val();
        var nowprice = price * roomNum*parseInt(days);
        $('#price').html(nowprice);
        $("#price2").html(nowprice);
    }
}


/*通过定时器来计算房价(日期插件限制)*/
var setInter1 = setInterval(custom1Event,100);
var setInter2 = setInterval(custom2Event,100);


//手机号码不变
var phoneNum = getCookie("phoneNum");
$("#phoneNum").val(phoneNum);
$("#phoneNum").attr("disabled", "true");//设置手机号码不可编辑

//获得当前日期时间
function getNowFormatDate() {
    var d = new Date();
    var hour2 = 0;
    var minute2 = 0;
    var seconds2 = 0;
    var hour = d.getHours();
    var minute = d.getMinutes();
    var seconds = d.getSeconds();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    if (minute < 10) {
        minute2 = "0" + minute;
    }
    else {
        minute2 = minute;
    }
    if (seconds < 10) {
        seconds2 = "0" + seconds;
    }
    else {
        seconds2 = seconds;
    }
    if (hour < 10) {
        hour2 = "0" + hour2;
    } else {
        hour2 = hour;
    }
    if (month > 0 && month < 10) {
        month = '0' + month;
    }
    else {
        month = month + "";
    }
    if (day > 0 && day < 10) {
        day = "0" + day;
    }
    else {
        day = "" + day;
    }
    var currentdate = year + "-" + month + "-" + day + " " + hour2 + ":" + minute2 + ":" + seconds2;
    return currentdate;
}

/*修改订单 数据对应到预订完成后的页面 同时数据修改到数据库*/
$("#sub_record").on('click', function () {
    var tag = 0;
    var roomType = $("#roomType").text();//房间类型
    var room_remain = 0;//ajax得到这种房间类型剩余房间数量
    $.ajax({
        type: 'GET',
        url: "../MyHotel/Web-front/room-reservation-submit-remain.php",
        data: {'roomType': roomType},
        dataType: 'json',
        async:false,
        success: function (json) {
            room_remain = json.room_remain;

        },
        error: function () {
            alert("数据异常");
        }
    })
    alert("remain = "+room_remain+"  roomNum = "+roomNum);
    if(room_remain<roomNum){
        alert("亲!房间剩余"+room_remain+"间,请重新进行选择!");
        tag = 1;
    }

    if(!tag){
        var roomType = $("#roomType").text();//房间类型
        var checkInTime = $("#custom1").val();//入住时间
        var checkOutTime = $("#custom2").val();//退房时间
        var priceTotal = $("#price").text();//订单价格
        var phoneNum = $("#phoneNum").val();//手机号码
        var reserveTime = getCookie("reserveTime");//预订时间
        var cus = new Array();
        for (var i = 0; i < roomNum; i++){
            cus[i] = $(".user" + i).val();
        }
        //数据库数据修改
        /*$.get(
            "../MyHotel/Web-front/room-order-modify.php",
            {
                roomType: roomType,
                checkInTime: checkInTime,
                checkOutTime: checkOutTime,
                priceTotal: priceTotal,
                roomNum: roomNum,
                phoneNum: phoneNum,
                reserveTime: reserveTime,
                cus: cus
            }
        );*/

        //数据库数据修改
        $.ajax(
            {
                type: "GET",
                async: false,
                url: "../MyHotel/Web-front/room-order-modify.php?cus="+cus,
                data:{
                    "roomType":roomType,
                    "checkInTime":checkInTime,
                    "checkOutTime":checkOutTime,
                    "priceTotal":priceTotal,
                    "roomNum":roomNum,
                    "phoneNum":phoneNum,
                    "reserveTime":reserveTime
                },
                success:function(){
                    alert("success");
                },
                error:function(){
                    alert("error");
                }

            }
        );

        /*完成订单分配房间*/
        $.get(
            "../MyHotel/Web-front/room-user-insert.php?cus=" + cus,
            {
                roomType: roomType,
                checkInTime: checkInTime,
                checkOutTime: checkOutTime,
                roomNum: roomNum,
                phoneNum: phoneNum,
                reserveTime: reserveTime
            }
        );

        //每次修改订单后清除页面的cookie
        clearCookie("phoneNum");
        clearCookie("reserveTime");

        //跳转到预订完成页面
        var url = "../MyHotel/room-reservation-finish.php";
        location.href = url + "?roomType=" + roomType + "&roomNum=" + roomNum + "&checkInTime=" + checkInTime +
            "&checkOutTime=" + checkOutTime + "&priceTotal=" + priceTotal + "&phoneNum=" + phoneNum +
            "&reserveTime=" + reserveTime + "&cus=" + cus;
    }
});
