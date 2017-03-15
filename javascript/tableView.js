
function warningshow(){
    $("#information-pannel").css({"display":"block"});
    $("#information-close").click(function(){
        $("#information-pannel").css({"display":"none"});
    });
    $("#information-down-no").click(function(){
        $("#information-pannel").css({"display":"none"});
    });
}
function interval(){
    getData1(1);
    getData2(1);
    getData3(1);
    getData4(1);
    getData5(1);
}

var page_cur = 1;//当前页面
/*数据总量   每个页面数据数量  页数*/
var total_num, page_size, page_total_num;

//列表区分
var flag = {
    "roomAccount": '0',
    "userStay": '0',
    "roomInfo": '0',
    "stayRecord": '0',
    "userstate":'0'
};

/*-------------------------------------------------------------------------------------------------------------------*/
var si;
//news和advise
function fenye2(obj)
{
    if(obj.page_total_num>5)
    {
        if(page_cur<=2)
        {
            obj.start=1;
            obj.end=5;
        }
        if(obj.page_cur>2&&obj.page_cur+2<=obj.page_total_num)
        {
            obj.start=obj.page_cur-2;
            obj.end=obj.page_cur+2;
        }
        if(obj.page_cur+1==obj.page_total_num)
        {
            obj.start=obj.page_cur-3;
            obj.end=obj.page_cur+1;
        }
        if(obj.page_cur==obj.page_total_num)
        {
            obj.start=obj.page_cur-4;
            obj.end=obj.page_total_num;
        }
    }
    else{
        obj.start=1;
        obj.end=obj.page_total_num;
    }
}
var news = {
    "url":'../MyHotel/room/content-news.php',
    "id":"news",
    "page_cur":"1",
    "total_num":"0",
    "page_size":"0",
    "page_num":"0",
    "start":"0",
    "end":"0"
};
var advise = {
    "url":'../MyHotel/room/content-advise.php',
    "id":"advise",
    "page_cur":"1",
    "total_num":"0",
    "page_size":"0",
    "page_num":"0",
    "start":"0",
    "end":"0"
};
function getData(obj,page) {
    $.ajax({
        type: 'GET',
        url: obj.url,
        data: {'page': page - 1},
        dataType: 'json',
        success: function (json) {
            obj.total_num = json.total_num;
            obj.page_size = json.page_size;
            obj.page_cur = page;
            obj.page_total_num = json.page_total_num;
            var li='<tr>' + '<th width="100px">选择</th>'
                + '<th width="*">标题</th>'
                + '<th width="100px">时间</th>'
                + '<th width="100px">操作</th>'
                + '</tr>';
            var list = json.list;
            $.each(list, function (index, array) {
                li += '<tr><td><input type="checkbox" name="id" value="1"/>' + '</td><td class="title">' + array['title'] +
                    '</td><td>' + array['time'] + '</td><td>' + '<a onclick="modify('+"'"+obj.id+"'"+','+array['id']+')" class="button border-blue button-little">修改</a>' +
                    '<a class="button border-yellow button-little"  onclick="delContentone('+"'"+obj.id+"'"+','+array['id']+',this)">删除</a>' + '</td></tr>';
            });
            $("#table-"+obj.id).html(li);
        },
        complete: function (){
            getPageBar(obj);
        },
        error: function () {
            alert("数据异常,请检查是否json格式");
        }
    });
}
function getPageBar(obj) {
    if (obj.page_cur > obj.page_total_num)
        obj.page_cur = obj.page_total_num;
    if (obj.page_cur < 1)
        obj.page_cur = 1;
    var page_str = "<ul style='border:none'><li><a>共" + obj.total_num + "条" + obj.page_cur + "/" + obj.page_total_num + "</a></li></ul>";
    page_str += "<ul>" + "<li><a onclick='getData("+obj.id+","+"1)' href='javascript:void(0)'>首页</a></li></ul>";
    if (obj.page_cur >1) {
        page_str += "<ul>" + "<li><a onclick='getData("+obj.id+","+(obj.page_cur-1)+")'  href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else{
        page_str += "<ul>" + "<li><a  href='javascript:void(0)'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";

    fenye2(obj);

    for ( var i = obj.start; i <= obj.end; i++) {
        if(obj.page_cur==i)
        {
            page_str += "<li><a class='active' onclick='getData("+obj.id+","+i+")'  href='javascript:void(0)'>" + i + "</a></li>";
        }
        else
        {
            page_str += "<li><a  onclick='getData("+obj.id+","+i+")'  href='javascript:void(0)'>" + i + "</a></li>";
        }
    }

    page_str += "</ul>";
    if(obj.page_cur<obj.page_total_num) {
        page_str += "<ul>" + "<li><a onclick='getData("+obj.id+","+(obj.page_cur+1)+")'  href='javascript:void(0)'>下一页</a></li></ul>";
    }
    else{
        page_str += "<ul>" + "<li><a  href='javascript:void(0)'>下一页</a></li></ul>";
    }
    page_str += "<ul><li><a onclick='getData("+obj.id+","+obj.page_total_num+")' href='#'>尾页</a></li> </ul>";
    $("#foot-"+obj.id).html(page_str);
}
getData(news,1);
getData(advise,1);
//***********************************

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

/*-------------------------------------------------------------------------------------------------------------------*/
//房间结算列表
function getData1(page) {
    flag.roomAccount = 1;
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/room-account.php',
        data: {'page': page - 1},
        dataType: 'json',
        success: function (json) {
            $("#room-account-body").empty();
            $("#room-account-foot").empty();
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var li = "";
            var list = json.list;
            $.each(list, function (index, array) {
                li += '<tr><td>' + array['roomType'] + '</td><td>' + array['phone'] + '</td><td>' +
                    array['checkInTime'] + '</td><td>' +
                    array['checkOutTime'] + '</td><td style="text-align: center">' + array['roomNum'] +
                    '</td><td>' + array['reserveTime'] + '</td><td>' +'¥'+ array['price']+
                    '</td><td class="fufei" onclick="fufei('+array['phone']+',this)" style="color: red;cursor: pointer;text-decoration:underline">' + array['payState'] +
                    '</td></tr>';
            });
            $("#room-account-body").append('<tr><th width="120px">房间类型</th>'  +
                '<th width="90px">手机号码</th>' + '<th width="100px">入住时间</th>' + '<th width="100px">退房时间</th>' +
                '<th width="60px">房间数量</th>' + '<th width="120px">预订时间</th>'+ '<th width="60px">房费</th>' + '<th width="80px">付费情况</th></tr>');
            $("#room-account-body").append(li);
        },
        complete: function () {
            getPageBar1();
        },
        error: function () {
            alert("数据异常");
        }
    });
}

function fufei(phone,obj){
    if($(obj).html()=='未付费')
    {
        warningshow();
        $("#ok-html").html("确认付费?");
        $("#information-down-ok").click(function() {
            $("#information-pannel").css({"display":"none"});
            $.ajax({
                type:'GET',
                url:'../MyHotel/room/room-fufei.php',
                data:{
                    'phone':phone,
                },
                dataType:'json',
                success:function(data){
                    if(data.success)
                    {
                        $(obj).html("已付费");
                    }
                },
                error:function(){
                    alert("亲!出错了!")
                },
            })
        });
    }
}


function getPageBar1() {
    var page_str = '';
    if (page_cur == 1) {
        page_str += "<ul>" + "<li><a href='javascript:void(0)'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else {
        page_str += "<ul>" + "<li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    for (var i = 1; i <= page_total_num; i++) {
        if(page_total_num<=5){
            if(i==page_cur){
                page_str += "<li><a onclick='show1(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }else{
                page_str += "<li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }
        }
        else{
            if(page_cur-1<=2){
                if(i==1||i==2||i==3||i==4||i==5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show1(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    page_str += "<li style='display: none;'><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else if(page_total_num-page_cur<=2){
                if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show1(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                } else{
                    page_str += "<li style='display: none;'><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else{
                if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show1(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }else{
                    page_str += "<li style='display: none;'><a onclick='show1(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }
        }
    }
    page_str += "</ul>";
    if (page_cur < page_total_num) {
        var page = page_cur;
        page_str += "<ul>" + "<li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + (++page)+ "'>下一页</a></li></ul>";
        page_str += "<ul><li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    }
    else {
        page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
        page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
    }
    page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
    $("#room-account-foot").html(page_str);
}


//浏览全部信息
$("#room-account-view").click(function () {
    si=setInterval(interval,1000);
    getData1(1);
    flag.roomAccount = 1;
});


//房间结算列表快捷搜索
function getData1S(page,text) {
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/room-account-search.php',
        data: {
            'page': page - 1,
            'info': text
        },
        dataType: 'json',
        success: function (json) {
            $("#room-account-body").empty();
            $("#room-account-foot").empty();
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var li = "";
            var list = json.list;
            $.each(list, function (index, array) {
                li += '<tr><td>' + array['roomType'] + '</td><td>' + array['phone'] + '</td><td>' +
                    array['checkInTime'] + '</td><td>' +
                    array['checkOutTime'] + '</td><td style="text-align: center">' + array['roomNum'] +
                    '</td><td>' + array['reserveTime'] + '</td><td>' +'¥'+ array['price']+
                    '</td><td class="fufei" onclick="fufei('+array['phone']+',this)" style="color: red;cursor: pointer;text-decoration:underline">' + array['payState'] +
                    '</td></tr>';
            });
            $("#room-account-body").append('<tr><th width="120px">房间类型</th>'  +
                '<th width="90px">手机号码</th>' + '<th width="100px">入住时间</th>' + '<th width="100px">退房时间</th>' +
                '<th width="60px">房间数量</th>' + '<th width="120px">预订时间</th>'+ '<th width="60px">房费</th>' + '<th width="80px">付费情况</th></tr>');
            $("#room-account-body").append(li);
        },
        complete: function () {
            clearInterval(si);
            getPageBar1S();
        },
        error: function () {
            alert("数据异常");
        }
    });
}



function getPageBar1S() {
    var page_str = '';
    if (page_cur == 1) {
        page_str += "<ul>" + "<li><a   href='javascript:void(0)'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a   href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else {
        page_str += "<ul>" + "<li><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    for (var i = 1; i <= page_total_num; i++) {
        if(page_total_num<=5){
            if(i==page_cur){
                page_str += "<li><a onclick='show1(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }else{
                page_str += "<li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }
        }
        else{
            if(page_cur-1<=2){
                if(i==1||i==2||i==3||i==4||i==5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show1(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    page_str += "<li style='display: none;'><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else if(page_total_num-page_cur<=2){
                if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show1(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                } else{
                    page_str += "<li style='display: none;'><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else{
                if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show1(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show1(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }else{
                    page_str += "<li style='display: none;'><a onclick='show1(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }
        }
    }
    page_str += "</ul>";
    if (page_cur < page_total_num) {
        var page = page_cur;
        page_str += "<ul>" + "<li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + (++page) + "'>下一页</a></li></ul>";
        page_str += "<ul><li><a onclick='show1(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    }
    else {
        page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
        page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
    }
    page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
    $("#room-account-foot").html(page_str);
}


function show1(obj) {
    var page = obj.attributes['data-page'].nodeValue;
    if (flag.roomAccount == 1) {
        getData1(page);
    }
    else{
        var text = $("#room-account-text").val();
        getData1S(page,text);
    }
}

getData1(1);


$("#room-account-search").click(function () {
   flag.roomAccount = 0;
    var text = $("#room-account-text").val();
    if(text){
        getData1S(1,text);
    }else{
        $("#room-account-warn").css("display", "inline-block");
    }

});



//当文本改变时进行随时判断
$("#room-account-text").keyup(function(){
    if ($("#room-account-text").val()) {
        $("#room-account-warn").css("display", "none");
    }
});



//退房
function  tuifang(obj) {
    var tid =$(obj).attr("id");
    var nowtime=getNowFormatDate();
    warningshow();
    $("#ok-html").html("确认退房?");
    $("#information-down-ok").click(function() {
        $("#information-pannel").css({"display":"none"});
        $.ajax({
                type: 'GET',
                url: '../MyHotel/room/room-insert-record.php',
                data: {
                    'id': tid,
                    'time': nowtime
                },
                dataType: 'json',
                success: function (data) {
                    if (data.success) {
                        $(obj).parent().parent().remove();
                    }
                }
            }
        )
    })
};

/*-------------------------------------------------------------------------------------------------------------------*/
//顾客入住列表
function getData2(page) {
    flag.userStay = 1;
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/user-stay.php',
        data: {'page': page - 1},
        dataType: 'json',
        success: function (json) {
            $("#user-stay-body").empty();
            $("#user-stay-foot").empty();
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var li = "";
            var list = json.list;
            if(list!=null){
                $.each(list, function (index, array) {
                    li += '<tr><td>' + array['roomId'] + '</td><td>'
                        + array['roomType'] + '</td><td>' + array['name'] + '</td><td>' + array['phone'] + '</td><td>'+
                        array['checkInTime'] + '</td><td>' + array['checkOutTime'] + '</td>' +
                        '<td><a id="'+array['roomId']+'" onclick="tuifang(this)" class="tuifang" style="color: red;cursor: pointer;text-decoration:underline">' + '退房' + '</a></td></tr>';
                });
            }else{
                page_cur = 0;
            }
            $("#user-stay-body").append('<tr><th width="100px">房间号码</th>' + '<th width="120px">房间类型</th>' +
                '<th width="100px">姓名</th>' + '<th width="100px">手机号码</th>' +'<th width="100px">入住时间</th>' + '<th width="100px">退房时间</th>' +
                '<th width="100px">退房操作</th></tr>');
            $("#user-stay-body").append(li);
        },
        complete: function () {
            getPageBar2();
        },
        error: function () {
            alert("数据异常");
        }
    });
}



function getPageBar2() {
    var page_str = '';
    if (page_cur == 1) {
        page_str += "<ul>" + "<li><a href='javascript:void(0)'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else {
        page_str += "<ul>" + "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    for (var i = 1; i <= page_total_num; i++) {
        if(page_total_num<=5){
            if(i==page_cur){
                page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }else{
                page_str += "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }
        }
        else{
            if(page_cur-1<=2){
                if(i==1||i==2||i==3||i==4||i==5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    page_str += "<li style='display: none;'><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else if(page_total_num-page_cur<=2){
                if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                } else{
                    page_str += "<li style='display: none;'><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else{
                if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }else{
                    page_str += "<li style='display: none;'><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }
        }
    }
    page_str += "</ul>";
    if (page_cur < page_total_num) {
        var page = page_cur;
        page_str += "<ul>" + "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + (++page)+ "'>下一页</a></li></ul>";
        page_str += "<ul><li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    }
    else {
        page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
        page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
    }
    page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
    $("#user-stay-foot").html(page_str);
}


//浏览全部信息
$("#user-stay-view").click(function () {
    si=setInterval(interval,1000);
    getData2(1);
    flag.userStay = 1;
});




//顾客入住列表快捷搜索
function getData2S(page,text) {
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/user-stay-search.php',
        data: {
            'page': page - 1,
            'info': text
        },
        dataType: 'json',
        success: function (json) {
            $("#user-stay-body").empty();
            $("#user-stay-foot").empty();
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var li = "";
            var list = json.list;
            if(list!=null){
                $.each(list, function (index, array) {

                    li += '<tr><td>' + array['roomId'] + '</td><td>'
                        + array['roomType'] + '</td><td>' + array['name'] + '</td><td>' + array['phone'] + '</td><td>'+
                        array['checkInTime'] + '</td><td>' + array['checkOutTime'] + '</td>' +
                        '<td><a id="'+array['roomId']+'" onclick="tuifang(this)" class="tuifang" style="color: red;cursor: pointer;text-decoration:underline">' + '退房' + '</a></td></tr>';
                });
            }else{
                page_cur = 0;
            }
            $("#user-stay-body").append('<tr><th width="100px">房间号码</th>' + '<th width="120px">房间类型</th>' +
                '<th width="100px">姓名</th>' + '<th width="100px">手机号码</th>' +'<th width="100px">入住时间</th>' + '<th width="100px">退房时间</th>' +
                '<th width="100px">退房操作</th></tr>');
            $("#user-stay-body").append(li);
        },
        complete: function () {
            clearInterval(si);
            getPageBar2S();
        },
        error: function () {
            alert("数据异常");
        }
    });
}



function getPageBar2S() {
    var page_str = '';
    if (page_cur == 1) {
        page_str += "<ul>" + "<li><a   href='javascript:void(0)'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a   href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else {
        page_str += "<ul>" + "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    for (var i = 1; i <= page_total_num; i++) {
        if(page_total_num<=5){
            if(i==page_cur){
                page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }else{
                page_str += "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }
        }
        else{
            if(page_cur-1<=2){
                if(i==1||i==2||i==3||i==4||i==5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    page_str += "<li style='display: none;'><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else if(page_total_num-page_cur<=2){
                if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                } else{
                    page_str += "<li style='display: none;'><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else{
                if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }else{
                    page_str += "<li style='display: none;'><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }
        }
    }
    page_str += "</ul>";
    if (page_cur < page_total_num) {
        var page = page_cur;
        page_str += "<ul>" + "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + (++page) + "'>下一页</a></li></ul>";
        page_str += "<ul><li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    }
    else {
        page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
        page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
    }
    page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
    $("#user-stay-foot").html(page_str);
}


function show2(obj) {
    var page = obj.attributes['data-page'].nodeValue;
    if (flag.userStay == 1) {
        getData2(page);
    }
    else{
        var text = $("#user-stay-text").val();
        getData2S(page,text);
    }
}

getData2(1);


$("#user-stay-search").click(function () {
    flag.userStay = 0;
    var text = $("#user-stay-text").val();
    if(text){
        getData2S(1,text);
    }else{
        $("#user-stay-warn").css("display", "inline-block");
    }

});

//当文本改变时进行随时判断
$("#user-stay-text").keyup(function(){
    if ($("#user-stay-text").val()) {
        $("#user-stay-warn").css("display", "none");
    }
});


/*-------------------------------------------------------------------------------------------------------------------*/
//房间信息列表
function getData3(page) {
    flag.roomInfo = 1;
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/roomInfo.php',
        data: {'page': page - 1},
        dataType: 'json',
        success: function (json) {
            $("#roomInfo-body").empty();
            $("#roomInfo-foot").empty();
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var li = "";
            var list = json.list;
            $.each(list, function (index, array) {
                li += '<tr><td>' + array['roomId'] + '</td><td>'
                    + array['roomType'] + '</td><td>' + array['roomPrice'] + '</td><td>' +
                    array['roomState'] + '</td></tr>';
            });
            $("#roomInfo-body").append('<tr><th width="100px">房间号码</th>' + '<th width="120px">房间类型</th>' +
                '<th width="100px">房间价格</th>' + '<th width="100px">房间状态</th></tr>');
            $("#roomInfo-body").append(li);
        },
        complete: function () {
            getPageBar3();
        },
        error: function () {
            alert("数据异常");
        }
    });
}



function getPageBar3() {
    var page_str = '';
    if (page_cur == 1) {
        page_str += "<ul>" + "<li><a href='javascript:void(0)'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else {
        page_str += "<ul>" + "<li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    for (var i = 1; i <= page_total_num; i++) {
        if(page_total_num<=5){
            if(i==page_cur){
                page_str += "<li><a onclick='show3(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }else{
                page_str += "<li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }
        }
        else{
            if(page_cur-1<=2){
                if(i==1||i==2||i==3||i==4||i==5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show3(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    page_str += "<li style='display: none;'><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else if(page_total_num-page_cur<=2){
                if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show3(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                } else{
                    page_str += "<li style='display: none;'><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else{
                if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show3(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }else{
                    page_str += "<li style='display: none;'><a onclick='show3(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }
        }
    }
    page_str += "</ul>";
    if (page_cur < page_total_num) {
        var page = page_cur;
        page_str += "<ul>" + "<li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + (++page)+ "'>下一页</a></li></ul>";
        page_str += "<ul><li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    }
    else {
        page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
        page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
    }
    page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
    $("#roomInfo-foot").html(page_str);
}


//浏览全部信息
$("#roomInfo-view").click(function () {
    si=setInterval(interval,1000);
    getData3(1);
    flag.roomInfo = 1;
});




//房间信息列表快捷搜索
function getData3S(page,text) {
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/roomInfo-search.php',
        data: {
            'page': page - 1,
            'info': text
        },
        dataType: 'json',
        success: function (json) {
            $("#roomInfo-body").empty();
            $("#roomInfo-foot").empty();
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var li = "";
            var list = json.list;
            if(list!=null){
                $.each(list, function (index, array) {
                    li += '<tr><td>' + array['roomId'] + '</td><td>'
                        + array['roomType'] + '</td><td>' + array['roomPrice'] + '</td><td>' +
                        array['roomState'] + '</td></tr>';
                });
            }else{
                page_cur = 0;
            }
            $("#roomInfo-body").append('<tr><th width="100px">房间号码</th>' + '<th width="120px">房间类型</th>' +
                '<th width="100px">房间价格</th>' + '<th width="100px">房间状态</th></tr>');
            $("#roomInfo-body").append(li);
        },
        complete: function () {
            clearInterval(si);
            getPageBar3S();
        },
        error: function () {
            alert("数据异常");
        }
    });
}



function getPageBar3S() {
    var page_str = '';
    if (page_cur == 1) {
        page_str += "<ul>" + "<li><a   href='javascript:void(0)'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a   href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else {
        page_str += "<ul>" + "<li><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    for (var i = 1; i <= page_total_num; i++) {
        if(page_total_num<=5){
            if(i==page_cur){
                page_str += "<li><a onclick='show3(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }else{
                page_str += "<li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }
        }
        else{
            if(page_cur-1<=2){
                if(i==1||i==2||i==3||i==4||i==5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show3(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    page_str += "<li style='display: none;'><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else if(page_total_num-page_cur<=2){
                if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show3(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                } else{
                    page_str += "<li style='display: none;'><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else{
                if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show3(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show3(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }else{
                    page_str += "<li style='display: none;'><a onclick='show3(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }
        }
    }
    page_str += "</ul>";
    if (page_cur < page_total_num) {
        var page = page_cur;
        page_str += "<ul>" + "<li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + (++page) + "'>下一页</a></li></ul>";
        page_str += "<ul><li><a onclick='show3(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    }
    else {
        page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
        page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
    }
    page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
    $("#roomInfo-foot").html(page_str);
}


function show3(obj) {
    var page = obj.attributes['data-page'].nodeValue;
    if (flag.roomInfo == 1) {
        getData3(page);
    }
    else{
        var text = $("#roomSelect option:selected").val();
        getData3S(page,text);
    }
}

getData3(1);

$("#roomSelect").change(function(){
    flag.roomInfo = 0;
    var text = $("#roomSelect option:selected").val();
    if(text){
        getData3S(1,text);
    }
});






/*-------------------------------------------------------------------------------------------------------------------*/
//顾客入住记录列表
function getData4(page) {
    flag.stayRecord = 1;
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/stay-record.php',
        data: {'page': page - 1},
        dataType: 'json',
        success: function (json) {
            $("#stay-record-body").empty();
            $("#stay-record-foot").empty();
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var li = "";
            var list = json.list;
            if(list!=null){
                $.each(list, function (index, array) {

                    li += '<tr><td>' + array['roomId'] + '</td><td>'
                        + array['roomType'] + '</td><td>' + array['name'] + '</td><td>' + array['phone'] + '</td><td>'+
                        array['checkInTime'] + '</td><td>' + array['checkOutTime'] + '</td>' +
                        '<td>'+array['leaveTime']+'</td></tr>';
                });
            }else{
                page_cur = 0;
            }
            $("#stay-record-body").append('<tr><th width="100px">房间号码</th>' + '<th width="120px">房间类型</th>' +
                '<th width="100px">姓名</th>' + '<th width="100px">手机号码</th>' +'<th width="100px">入住时间</th>' + '<th width="100px">退房时间</th>' +
                '<th width="120px">离开时间</th></tr>');
            $("#stay-record-body").append(li);
        },
        complete: function () {
            getPageBar4();
        },
        error: function () {
            alert("数据异常");
        }
    });
}



function getPageBar4() {
    var page_str = '';
    if (page_cur == 1) {
        page_str += "<ul>" + "<li><a href='javascript:void(0)'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else {
        page_str += "<ul>" + "<li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    for (var i = 1; i <= page_total_num; i++) {
        if(page_total_num<=5){
            if(i==page_cur){
                page_str += "<li><a onclick='show4(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }else{
                page_str += "<li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }
        }
        else{
            if(page_cur-1<=2){
                if(i==1||i==2||i==3||i==4||i==5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show4(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    page_str += "<li style='display: none;'><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else if(page_total_num-page_cur<=2){
                if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show4(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                } else{
                    page_str += "<li style='display: none;'><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else{
                if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show4(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }else{
                    page_str += "<li style='display: none;'><a onclick='show4(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }
        }
    }
    page_str += "</ul>";
    if (page_cur < page_total_num) {
        var page = page_cur;
        page_str += "<ul>" + "<li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + (++page)+ "'>下一页</a></li></ul>";
        page_str += "<ul><li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    }
    else {
        page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
        page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
    }
    page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
    $("#stay-record-foot").html(page_str);
}


//浏览全部信息
$("#stay-record-view").click(function () {
    si=setInterval(interval,1000);
    getData4(1);
    flag.stayRecord = 1;
});




//顾客入住记录列表快捷搜索
function getData4S(page,text) {
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/stay-record-search.php',
        data: {
            'page': page - 1,
            'info': text
        },
        dataType: 'json',
        success: function (json) {
            $("#stay-record-body").empty();
            $("#stay-record-foot").empty();
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var li = "";
            var list = json.list;
            if(list!=null){
                $.each(list, function (index, array) {

                    li += '<tr><td>' + array['roomId'] + '</td><td>'
                        + array['roomType'] + '</td><td>' + array['name'] + '</td><td>' + array['phone'] + '</td><td>'+
                        array['checkInTime'] + '</td><td>' + array['checkOutTime'] + '</td>' +
                        '<td>'+array['leaveTime']+'</td></tr>';
                });
            }else{
                page_cur = 0;
            }
            $("#stay-record-body").append('<tr><th width="100px">房间号码</th>' + '<th width="120px">房间类型</th>' +
                '<th width="100px">姓名</th>' + '<th width="100px">手机号码</th>' +'<th width="100px">入住时间</th>' + '<th width="100px">退房时间</th>' +
                '<th width="120px">离开时间</th></tr>');
            $("#stay-record-body").append(li);
        },
        complete: function () {
            clearInterval(si);
            getPageBar4S();
        },
        error: function () {
            alert("数据异常");
        }
    });
}

function getPageBar4S() {
    var page_str = '';
    if (page_cur == 1) {
        page_str += "<ul>" + "<li><a   href='javascript:void(0)'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a   href='javascript:void(0)'>上一页</a></li></ul>";
    }
    else {
        page_str += "<ul>" + "<li><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
        page_str += "<ul>" + "<li><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    for (var i = 1; i <= page_total_num; i++) {
        if(page_total_num<=5){
            if(i==page_cur){
                page_str += "<li><a onclick='show4(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }else{
                page_str += "<li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
            }
        }
        else{
            if(page_cur-1<=2){
                if(i==1||i==2||i==3||i==4||i==5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show4(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    page_str += "<li style='display: none;'><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else if(page_total_num-page_cur<=2){
                if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show4(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                } else{
                    page_str += "<li style='display: none;'><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }else{
                if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show4(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show4(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }else{
                    page_str += "<li style='display: none;'><a onclick='show4(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                }
            }
        }
    }
    page_str += "</ul>";
    if (page_cur < page_total_num) {
        var page = page_cur;
        page_str += "<ul>" + "<li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + (++page) + "'>下一页</a></li></ul>";
        page_str += "<ul><li><a onclick='show4(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    }
    else {
        page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
        page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
    }
    page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
    $("#stay-record-foot").html(page_str);
}


function show4(obj) {
    var page = obj.attributes['data-page'].nodeValue;
    if (flag.stayRecord == 1) {
        getData4(page);
    }
    else{
        var text = $("#stay-record-text").val();
        getData4S(page,text);
    }
}

getData4(1);


$("#stay-record-search").click(function () {
    flag.stayRecord = 0;
    var text = $("#stay-record-text").val();
    if(text){
        getData4S(1,text);
    }else{
        $("#stay-record-warn").css("display", "inline-block");
    }
});



//当文本改变时进行随时判断
$("#stay-record-text").keyup(function(){
    if ($("#stay-record-text").val()) {
        $("#stay-record-warn").css("display", "none");
    }
});

/*-------------------------------------------------------------------------------------------------------------------*/
function fenye()
{
    if(page_total_num>5)
    {
        if(page_cur<=2)
        {
            start=1;
            end=5;
        }
        if(page_cur>2&&page_cur+2<=page_total_num)
        {
            start=page_cur-2;
            end=page_cur+2;
        }
        if(page_cur+1==page_total_num)
        {
            start=page_cur-3;
            end=page_cur+1;
        }
        if(page_cur==page_total_num)
        {
            start=page_cur-4;
            end=page_total_num;
        }
    }
    else{
        start=1;
        end=page_total_num;
    }
}

//会员信息
function getData5(page) {
    $.ajax({
        type: 'GET',
        url: '../MyHotel/room/user-vip.php',
        data: {'page': page - 1},
        dataType: 'json',
        success: function (json) {
            total_num = json.total_num;
            page_size = json.page_size;
            page_cur = page;
            page_total_num = json.page_total_num;
            var  li='<tr><th width="140px">身份证号</th>' +
                '<th width="80px">姓名</th><th width="120px">手机号码</th>' +
                '<th width="100px">邮箱地址</th><th width="100px">注册时间</th></tr>';
            var list = json.list;
            $.each(list, function (index, array) {
                li += '<tr><td>' + array['id'] + '</td><td>'
                    + array['name'] + '</td><td>' + array['phone'] + '</td><td>' +
                    array['email'] + '</td><td>' +
                    array['time'] + '</td>' +
                    '</tr>';
            });
            $("#table-before").html(li);
        },
        complete: function () {
            getPageBar5();
        },
        error: function () {
            alert("数据异常,请检查是否json格式");
        }
    });
}
function getPageBar5() {
    if (page_cur > page_total_num)
        page_cur = page_total_num;
    if (page_cur < 1)
        page_cur = 1;
    var page_str = "<ul style='border:none'><li><a>共" + total_num + "条" + page_cur + "/" + page_total_num + "</a></li></ul>";
    page_str += "<ul>" + "<li><a onclick='show5(this)' href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
    if (page_cur > 1) {
        page_str += "<ul>" + "<li><a onclick='show5(this)' href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
    }
    page_str += "<ul class='positon'>";
    fenye();
    for (var i = start; i <= end; i++) {
        if(page_cur==i)
        {
            page_str += "<li><a class='active'  href='javascript:void(0)' '>" + i + "</a></li>";
            var biaozhi=i;
        }
        else
        {
            page_str += "<li><a  onclick='show5(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
        }
    }
    page_str += "</ul>";
    page_cur=biaozhi;
    if (page_cur < page_total_num && page_cur>=1) {
        page_str += "<ul>" + "<li><a onclick='show5(this)' data-page='" + (page_cur + 1) + "'>下一页</a></li></ul>";
    }
    page_str += "<ul><li><a onclick='show5(this)' href='#' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
    $("#foot-room").html(page_str);
}
getData5(1);
function show5(obj) {
    var page = obj.attributes['data-page'].nodeValue;
    getData5(page);
}
$("#news_view").click(function () {
    si=setInterval(interval,1000);
    getData5(1);
    flag = 1;
});
//**********************

//会员信息id搜索
$("#search-before").click(function () {
    flag = 0;
    $info = $("#search-find-before").val();
    if($info.length==18)
    {
        function getData6(page) {
            $.ajax({
                type: 'GET',
                url:'../MyHotel/room/user-vip-research.php',
                data: {
                    'page': page - 1,
                    'info': $info
                },
                dataType: 'json',
                success: function (json) {
                    total_num = json.total_num;
                    page_size = json.page_size;
                    page_cur = page;
                    page_total_num = json.page_total_num;
                    var    li='<tr><th width="140px">身份证号</th>' +
                        '<th width="80px">姓名</th><th width="120px">手机号码</th>' +
                        '<th width="100px">邮箱地址</th><th width="100px">注册时间</th></tr>';
                    var list = json.list;
                    $.each(list, function (index, array) {
                        li += '<tr><td>' + array['id'] + '</td><td>'
                            + array['name'] + '</td><td>' + array['phone'] + '</td><td>' +
                            array['email'] + '</td><td>' +
                            array['time'] + '</td>' +
                            '</tr>';
                    });


                    $("#table-before").html(li);
                },
                complete: function () {
                    getPageBar6();
                    clearInterval(si);
                },
                error: function () {
                    alert("数据异常,请检查是否json格式");
                }
            });
        }

        function getPageBar6() {
            var page_str = '';
            if (page_cur == 1) {
                page_str += "<ul>" + "<li><a   href='javascript:void(0)'>首页</a></li></ul>";
                page_str += "<ul>" + "<li><a   href='javascript:void(0)'>上一页</a></li></ul>";
            }
            else {
                page_str += "<ul>" + "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + 1 + "'>首页</a></li></ul>";
                page_str += "<ul>" + "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + (page_cur - 1) + "'>上一页</a></li></ul>";
            }
            page_str += "<ul class='positon'>";
            for (var i = 1; i <= page_total_num; i++) {
                if(page_total_num<=5){
                    if(i==page_cur){
                        page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }else{
                        page_str += "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                    }
                }
                else{
                    if(page_cur-1<=2){
                        if(i==1||i==2||i==3||i==4||i==5){
                            if(i==page_cur){
                                page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                            }else{
                                page_str += "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                            }
                        }
                        else{
                            page_str += "<li style='display: none;'><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                        }
                    }else if(page_total_num-page_cur<=2){
                        if(i==page_total_num||i==page_total_num-1||i==page_total_num-2||i==page_total_num-3||i==page_total_num-4){
                            if(i==page_cur){
                                page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                            }else{
                                page_str += "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                            }
                        } else{
                            page_str += "<li style='display: none;'><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                        }
                    }else{
                        if(i==page_cur-1||i==page_cur-2||i==page_cur||i==parseInt(page_cur)+1||i==parseInt(page_cur)+2){
                            if(i==page_cur){
                                page_str += "<li><a onclick='show2(this)' class='active' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                            }else{
                                page_str += "<li><a onclick='show2(this)'  href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                            }
                        }else{
                            page_str += "<li style='display: none;'><a onclick='show2(this)' href='javascript:void(0)' data-page='" + i + "'>" + i + "</a></li>";
                        }
                    }
                }
            }
            page_str += "</ul>";
            if (page_cur < page_total_num) {
                var page = page_cur;
                page_str += "<ul>" + "<li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + (++page) + "'>下一页</a></li></ul>";
                page_str += "<ul><li><a onclick='show2(this)' href='javascript:void(0)' data-page='" + page_total_num + "'>尾页</a></li> </ul>";
            }
            else {
                page_str += "<ul><li><a href='javascript:void(0)'>下一页</a></li></ul>";
                page_str += "<ul><li><a href='javascript:void(0)'>尾页</a></li></ul>";
            }
            page_str += "<ul style='border:none;cursor: pointer;font-weight: bold'><li><a>共" + total_num + "条  " + page_cur + "/" + page_total_num + "</a></li></ul>";
            $("#foot-room").html(page_str);
        }
        getData6(1);
        $("#foot-room").on('click', 'a', function () {
            var page = $(this).attr("data-page");//获取当前页
            if (flag == 1) {
                getData5(page);
            }
            else {
                getData6(page);
            }
        });
    }else{
        flag=1;
    }
});

si=setInterval(interval,1000);

