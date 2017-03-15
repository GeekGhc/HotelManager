/**
 * Created by apple on 16/3/27.
 */

//**************************************
function zanred(obj){
    var color="icon-grey";
    $.ajax({
        type:'GET',
        url:'../MyHotel/Web-front/zan-red.php',
        dataType:'json',
        async: false,
        success:function(json){
            var list=json.list;
            $.each(list,function(index,array){
                if(obj==array['id'])
                {
                   color="icon-red";
                }
            })
        },
        error:function(){
            alert("出错了");
        }
    });
    return color;
}
//***************


//时间函数
function con() {
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
    var date = year + "-" + month + "-" + day + " " + hour2 + ":" + minute2 + ":" + seconds2;
    return date;
}
//*********************************


//界面滚动操作
$(document).ready(function () {
    $("#sheshi").click(function () {
        var high = $("#facility-left").offset().top;
        $("body,html").animate({
            scrollTop: high - 65
        }, 500);
    });
    $("#pinlun").click(function () {
        var high = $("#comment-left").offset().top;
        $("body,html").animate({
            scrollTop: high - 65
        }, 500);
    });
    $("#weizhi").click(function () {
        var high = $("#position-left").offset().top;
        $("body,html").animate({
            scrollTop: high - 65
        }, 500);
    });
    $("#room").click(function () {
        var high = $("#reservation-content").offset().top;
        $("body,html").animate({
            scrollTop: high - 75
        }, 500);
    })
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= 500 && $(window).scrollTop() <= 1150) {
        $(".reservation-head").attr("class", "reservation-head-scroll");
        $("#reservation-content").css({"margin": "55px auto"});
        $("#sheshi").attr("class", "reservation-head-all");
        $("#pinlun").attr("class", "reservation-head-all");
        $('#room').attr("class", "reservation-head-active");
        $('#weizhi').attr("class", "reservation-head-all");
    } else if ($(window).scrollTop() > 1150 && $(window).scrollTop() <= 1700) {
        $(".reservation-head").attr("class", "reservation-head-scroll");
        $("#reservation-content").css({"margin": "55px auto"});
        $("#sheshi").attr("class", "reservation-head-active");
        $("#pinlun").attr("class", "reservation-head-all");
        $('#room').attr("class", "reservation-head-all");
        $('#weizhi').attr("class", "reservation-head-all");
    }
    else if ($(window).scrollTop() > 1700 && $(window).scrollTop() <= 2250) {
        $(".reservation-head").attr("class", "reservation-head-scroll");
        $("#reservation-content").css({"margin": "55px auto"});
        $("#sheshi").attr("class", "reservation-head-all");
        $("#pinlun").attr("class", "reservation-head-all");
        $('#room').attr("class", "reservation-head-all");
        $('#weizhi').attr("class", "reservation-head-active");
    }
    else if ($(window).scrollTop() > 2250) {
        $(".reservation-head").attr("class", "reservation-head-scroll");
        $("#reservation-content").css({"margin": "55px auto"});
        $("#sheshi").attr("class", "reservation-head-all");
        $("#pinlun").attr("class", "reservation-head-active");
        $('#room').attr("class", "reservation-head-all");
        $('#weizhi').attr("class", "reservation-head-all");
    }
    else {
        $(".reservation-head-scroll").attr("class", "reservation-head");
        $("#reservation-content").css({"margin": "20px auto"});
    }
});

//***************************************

//赞的点击函数
function zan(obj){
   var mm= $(obj).find("span:eq(1)").html();
   var number=parseInt(mm);
    var prenumber=number;
   number=number+1;
   var id= $(obj).find("span:eq(1)").attr("id");
    $.ajax({
        type:'GET',
        url:'../MyHotel/Web-front/zan.php',
        data:{
            'number':number,
            'id':id
        },
        dataType:'json',
        success:function(data){
           if(data.success==1){
               $(obj).find("span:eq(1)").html(number);
               $(obj).find("span:eq(1)").attr("class","icon-red");
               $(obj).find("span:eq(0)").attr("class","fa icon-zan-o icon-red");
           }
            else if(data.success==2)
           {
               $(obj).find("span:eq(1)").html(prenumber);
           }
        },
        error:function(){
            alert("出错了!");
        }
    })
}
//*******************

//评论显示功能
var total_num, page_size, page_total_num, start, end,session;
//分页判断偏移量为5
function fenye() {
    if (page_total_num > 5) {
        if (page_cur <= 2) {
            start = 1;
            end = 5;
        }
        if (page_cur > 2 && page_cur + 2 <= page_total_num) {
            start = page_cur - 2;
            end = page_cur + 2;
        }
        if (page_cur + 1 == page_total_num) {
            start = page_cur - 3;
            end = page_cur + 1;
        }
        if (page_cur == page_total_num) {
            start = page_cur - 4;
            end = page_total_num;
        }
    }
    else {
        start = 1;
        end = page_total_num;
    }
}
//***************
function getComment(page) {
    $.ajax({
        type: 'GET',
        url: '../MyHotel/Web-front/room-reservation-show.php',
        data: {'page': page - 1},
        dataType: 'json',
        success: function (json) {
                total_num = json.total_num;
                page_size = json.page_size;
                page_cur = page;
                page_total_num = json.page_total_num;
                session=json.session;
                var li = "";
                var list = json.list;

                $.each(list, function (index, array) {
                    if(session)
                    {
                        li += '<li><div class="media"><img src="'+array['src']+'">' +
                            '</div><div class="bd"><div class="tit">' + array['name'] + '</div>' +
                            '<p class="bd-word">' + array['comments'] + '</p>' +
                            '<div class="footer"><span>时间:' + array['time'] + '</span>' +
                            '<span style="float: right"><a onclick="zan(this)" href="javascript:void(0)"><span class="fa icon-zan-o '+zanred(array['id'])+'"></span>' +
                            '<span style="margin-left: 2px" id="'+array['id']+'"  class='+zanred(array['id'])+'>' + array['zan'] + '</span></a></span>' +
                            '</div></div></li>';
                    }else{
                        li += '<li><div class="media"><img src="'+array['src']+'">' +
                            '</div><div class="bd"><div class="tit">' + array['name'] + '</div>' +
                            '<p class="bd-word">' + array['comments'] + '</p>' +
                            '<div class="footer"><span>时间:' + array['time'] + '</span>' +
                            '<span style="float: right"><a onclick="warning()" href="javascript:void(0)"><span class="fa icon-zan-o icon-grey"></span>' +
                            '<span style="margin-left: 2px" id="'+array['id']+'"  class="icon-grey">' + array['zan'] + '</span></a></span>' +
                            '</div></div></li>';
                    }
                    });
                $("#comment-post").html(li);
        },
        complete: function () {
            getPageBar();
        },
        error: function () {
            alert("数据异常,请检查是否json格式");
        }
    });
}
function getPageBar() {
    if (page_cur > page_total_num)
        page_cur = page_total_num;
    if (page_cur < 1)
        page_cur = 1;
    var page_str = "<a onclick='getComment(1)' href='javascript:void(0)'>首页</a>";
    if (page_cur > 1) {
        page_str += "<a onclick='getComment(" + (page_cur - 1) + ")'  href='javascript:void(0)'>上一页</a>";
    }
    else {
        page_str += "<a  href='javascript:void(0)'>上一页</a>";
    }
    fenye();
    for (var i = start; i <= end; i++) {
        if (page_cur == i) {
            page_str += "<a class='active' onclick='getComment(" + i + ")'  href='javascript:void(0)'>" + i + "</a>";
        }
        else {
            page_str += "<a  onclick='getComment(" + i + ")'  href='javascript:void(0)'>" + i + "</a>";
        }
    }
    if (page_cur < page_total_num) {
        page_str += "<a onclick='getComment(" + (page_cur + 1) + ")'  href='javascript:void(0)'>下一页</a>";
    }
    else {
        page_str += "<a  href='javascript:void(0)'>下一页</a>";
    }
    page_str += "<a onclick='getComment(page_total_num)' href='javascript:void(0)'>尾页</a>";
    $("#comment-page").html(page_str);
}
getComment(1);



//发表评论和点赞

$("#comment-textarea").keyup(function () {
    $('#comment-warning').css({"display": "none"});
});
$("#comment-textarea").blur(function () {
    $('#comment-warning').css({"display": "none"});
});

function submit() {
    var comment = $("#comment-textarea").val();
    if (comment == "") {
        $('#comment-warning').css({"display": "block"});
    } else {
        var date = con();
        $.ajax({
            type: 'GET',
            url: '../MyHotel/Web-front/room-reservation-comment-submit.php',
            data: {
                'date': date,
                'comment': comment
            },
            dataType: 'json',
            success: function (data) {
                if (data.success == 0) {
                    $('#comment-warning').css({"display": "block"});
                    $("#comment-warning").html(data.msg);
                }
                else {
                    console.log("1");
                    getComment(1);
                    $("#comment-textarea").val('');
                }
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });
    }
}

//***************************************

//没有登录就评论跳出弹框
function warning(){
    $("#comment-pannel").css({"display":"block"});
}
$("#comment-close").click(function(){
    $("#comment-pannel").css({"display":"none"});
});
$("#comment-down-no").click(function(){
    $("#comment-pannel").css({"display":"none"});
});
$("#comment-down-ok").click(function(){
    $("#comment-pannel").css({"display":"none"});
});
//*******************



