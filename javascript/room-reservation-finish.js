//提交完成后的操作

function warningshow(){
    $("#information-pannel").css({"display":"block"});
    $("#information-close").click(function(){
        $("#information-pannel").css({"display":"none"});
    });
    $("#information-down-no").click(function(){
        $("#information-pannel").css({"display":"none"});
    });
}
$("#information-close").click(function () {
    $("#information-pannel").css({"display": "none"});
});
$("#information-down-no").click(function () {
    $("#information-pannel").css({"display": "none"});
});
$("#finish-operate-no").click(function () {
    $("#information-pannel").css({"display": "block"});
});

//取消订单
$("#information-down-ok").click(function () {
    $("#information-pannel").css({"display": "none"});
    $("#information-pannel2").css({"display": "block"});
    var reserveTime = $("#reserveTime").text();
    var phoneNum = $("#phoneNum").text();

    /*删除数据库数据*/
    $.get(
        "../MyHotel/Web-front/room-order-delete.php",
        {
            phoneNum: phoneNum,
            reserveTime: reserveTime
        },
        function(data) {
            if(data.success){
                warningshow();
                $("#ok-html").html("订单已处理!不能取消!");
                $("#information-down-ok").click(function() {
                    $("#information-pannel").css({"display":"none"});
                })
            }
        }
    );

});
$("#information-down-ok1").click(function () {
    $("#information-pannel2").css({"display": "none"});
    $("#finsih-operate").css({"display": "none"});
    $('#font3-info').html("订单已取消");
});
/*$("#information-close2").click(function () {
    $("#information-pannel2").css({"display": "none"});
    $("#finsih-operate").css({"display": "none"});
    $('#font3-info').html("订单已取消");
});*/


//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}

//修改订单
$("#modify").on('click',function(){
    var roomType = new Array(
        "普通套间-双单床",
        "普通套间-大床",
        "商务套间-双单床",
        "商务套间-大床",
        "豪华套间-双单床",
        "豪华套间-大床"
    );
    var fangxing = $("#fangxing").text();
    var chuangxing = $("#chuangxing").text();
    var room = fangxing+"-"+chuangxing;
    var type;
    var reserveTime = $("#reserveTime").text();
    var phoneNum = $("#phoneNum").text();
    for(var i=0;i<6;i++){
        if(roomType[i]==room){
            type = i+1;
            break;
        }
    }
    setCookie("phoneNum",phoneNum,1);
    setCookie("reserveTime",reserveTime,1);
    location.href = "../MyHotel/room-reservation-modify.php?type="+type;
});

