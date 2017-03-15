
//注册模块的表单验证
$(document).ready(function(){
   //姓名判断
    $("#reg_name").blur(function(){
        var value = $("#reg_name").val();
        var regx = /^[\u4e00-\u9fa5]{2,4}|[a-za-z]{2,16}$/g;//正则表达式  只能英文和汉字
        if(regx.test(value))
        {
            $(".reg_name").css("display","none");
        }else{
            $(".reg_name").css("display","block");
        }
        if(value.length==0){
            $(".reg_name").css("display","none");
        }
    });


    //身份证判断
    $("#reg_id").blur(function(){
        var value = $("#reg_id").val();
        var ary = new Array();
        for(var i=0;i<value.length;i++){
            ary[i] = value[i];
        }
        var tag = 1;
        for(i = 0;i<ary.length;i++)
        {
            if(ary[i]>=0&&ary[i]<=9){
            }else{
                tag = 0;
            }
        }
        if((tag==1)&&(value.length==18)){
            $(".reg_id").css("display","none");
        }else{
            $(".reg_id").css("display","block");
        }
        if(value.length==0){
            $(".reg_id").css("display","none");
        }
    });

    $("#reg_pas1").keyup(function(){
        var value = $("#reg_pas1").val();
        if(value.length==0){
            $(".reg_pas1").css("display","none");
            $("#pwd-one").css("background","#eee");
            $("#pwd-two").css("background","#eee");
            $("#pwd-three").css("background","#eee");
        }
        else if(value.length<6||value.length>32){
            $(".reg_pas1").css("display","block");
            $("#pwd-one").css("background","#eee");
            $("#pwd-two").css("background","#eee");
            $("#pwd-three").css("background","#eee");
        }else if(value.length<=10&&value.length>=6){
            $("#pwd-one").css("background","#5bc0de");
            $("#pwd-two").css("background","#eee");
            $("#pwd-three").css("background","#eee");
            $(".reg_pas1").css("display","none");
        }else if(value.length<=15&&value.length>10){
            $("#pwd-two").css("background","#5bc0de");
            $("#pwd-three").css("background","#eee");
            $(".reg_pas1").css("display","none");
        }else if(value.length>15&&value.length<=32){
            $("#pwd-three").css("background","#5bc0de");
            $(".reg_pas1").css("display","none");
        }
    });

    $("#reg_pas2").blur(function(){
        var value1 = $("#reg_pas1").val();
        var value2 = $("#reg_pas2").val();
        if(value1==value2){
            $(".reg_pas2").css("display","none");
        }else{
            $(".reg_pas2").css("display","block");
        }
        if(value2.length==0){
            $(".reg_pas2").css("display","none");
        }
    });

    $("#reg_email").blur(function(){
        var value=$("#reg_email").val();
        var reg = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$");
       if(reg.test(value)==0&&value!="")
        {
            $(".reg_email").css({"display":"block"});
        }
        else
        {
            $(".reg_email").css({"display":"none"});
        }
    });

    $("#reg_num").blur(function(){
        var value = $("#reg_num").val();
        var reg = /^(\+86)?(1[0-9]{10})$/;
        if(reg.test(value)==0&&value!="")
        {
            $(".reg_num").css({"display":"block"});
        }else{
            $(".reg_num").css({"display":"none"});
        }
    })
});
//***************

//会员注册板块
$("#resgist-button").click(function(){
    if($(".reg_name").is(":hidden")&&$(".reg_id").is(":hidden")&&$(".reg_pas1").is(":hidden")&&$(".reg_pas2").is(":hidden")&&$(".reg_num").is(":hidden")&&$(".reg_email").is(":hidden"))
    {
        var d=new Date();
        var year = d.getFullYear();
        var month= d.getMonth()+1;
        var day= d.getDate();
        if(month>0&&month<10)
        {
            month='0'+month;
        }
        else {
            month=month+"";
        }
        if(day>0&&day<10)
        {
            day="0"+day;
        }
        else {
            day=""+day;
        }
        var date=year+"-"+month+"-"+day;
        $.ajax({
            type: "GET",
            url: "../MyHotel/Login-Regist/userRegist.php?Name=" + $("#reg_name").val()+"&id="+$("#reg_id").val()+"&password="+$("#reg_pas1").val()+"&password2="+$("#reg_pas2").val()+"&phone="+$("#reg_num").val()+"&email="+$("#reg_email").val()+"&time="+date,
            dataType: "json",
            success: function(data){
                if (data.success==0) {
                    $("#regist_p").html("出现错误:"+data.msg);
                }else {
                    alert("注册成功!");
                    window.location.href="hotel.php";
                }
            },
            error: function(jqXHR){
                alert("发生错误：" + jqXHR.status);
            }
        });
    }
   else
    {
        $("#regist_p").html("信息格式不正确,请更改!");
    }
});
//***************

//管理员登录
$(document).ready(function (){
    $("#button-blue").click(function(){
       $.ajax({
            type: "GET",
            url: "../MyHotel/Login-Regist/adminLogin.php?AdminName=" + $("#AdminName").val()+"&Password="+$("#Password").val(),
            dataType: "json",
            success: function(data){
                if (data.success==0) {
                    $("#searchResult").html("出现错误：" + data.msg);
                }else {
                    window.location.href="start.php";
                }
            },
            error: function(jqXHR){
                alert("发生错误：" + jqXHR.status);
            }
        });
    });
});
//*******************

//登陆
$("#userLogin").click(function(){
    $.ajax({
        type:"GET",
        url:"../MyHotel/Login-Regist/userLogin.php?username="+$("#user-username").val()+"&password="+$("#user-password").val(),
        dataType:"json",
        success:function(data){
            if(data.success==0){
                $("#user-warning").html(data.msg);
                $("#user-warning").css({"display":"block"});
            }
            else {
                window.location.href="../MyHotel/hotel.php";
            }
        },
        error:function(jqXHR){
            alert("发生错误：" + jqXHR.status);
        }
    });
});

$("#user-username").blur(function(){
    $("#user-warning").html("用户名与密码不匹配!");
    $("#user-warning").css({"display":"none"});
});
$("#user-password").blur(function(){
    $("#user-warning").html("用户名与密码不匹配!");
    $("#user-warning").css({"display":"none"});
});
//*****************

//顶部图片展览
$('.ck-slide').ckSlide({
    autoPlay: true
});


