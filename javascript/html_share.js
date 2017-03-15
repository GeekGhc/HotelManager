/**
 * Created by apple on 16/3/20.
 */
/*管理员悬浮窗显示与隐藏*/
$("#admin").click(function(){
    var login=document.getElementById("login");
    login.style.display="block";
    document.getElementById("AdminName").value="";
    document.getElementById("Password").value="";
    document.getElementById("searchResult").innerHTML=" ";
});

function hide(){
    var login=document.getElementById("login");
    login.style.display='none';
}
function Hotel_img(){
    var htmlObj = $.ajax({
        type:'GET',
        async:false,
        url:'../MyHotel/hotel_view.html',
        dataType:'html'
    });
    $("#content_middle").html(htmlObj.responseText);
    $("#content_right").css({"display":"none"});
}
function introduce(){
    var htmlObj = $.ajax({
        type:'GET',
        async:false,
        url:'../MyHotel/introduce.html',
        dataType:'html'
    });
    $("#content_middle").html(htmlObj.responseText);
    $("#content_right").css({"display":"none"});
}

function play(){
    var htmlObj = $.ajax({
        type:'GET',
        async:false,
        url:'../MyHotel/play.html',
        dataType:'html'
    });
    $("#content_middle").html(htmlObj.responseText);
    $("#content_right").css({"display":"none"});
}
function connect(){
    var htmlObj = $.ajax({
        type:'GET',
        async:false,
        url:'../MyHotel/connect.html',
        dataType:'html'
    });
    $("#content_middle").html(htmlObj.responseText);
    $("#content_right").css({"display":"none"});
}

$(function(){
    var htmlObj = $.ajax({
        type:'GET',
        async:false,
        url:'../MyHotel/html-share.php',
        dataType:'html'
    });
    $("#share").html(htmlObj.responseText);
});