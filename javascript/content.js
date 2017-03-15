/**
 * Created by apple on 16/3/12.
 */
//当期日期
function nowdate(){
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
    return date;
}

//酒店新闻公告
$("#advise2").click(function(){
   $(".pannel-advise").css({"display":"block"});
    $(".pannel-news").css({"display":"none"});
    $("#modify-color").css({"color":"#aaaaaa"});
    $("#news-color").css({"color":"#aaaaaa"});
    $("#advise-color").css({"color":"black"});
    $(".tab-body-advise").css({"display":"none"});
    $(".tab-body-news").css({"display":"none"});
});
$("#news2").click(function(){
    $(".pannel-advise").css({"display":"none"});
    $(".pannel-news").css({"display":"block"});
    $("#modify-color").css({"color":"#aaaaaa"});
    $("#news-color").css({"color":"black"});
    $("#advise-color").css({"color":"#aaaaaa"});
    $(".tab-body-advise").css({"display":"none"});
    $(".tab-body-news").css({"display":"none"});
});

$("#tab-nav-news").click(function(){
    $(".tab-body-advise").css({"display":"none"});
    $(".tab-body-news").css({"display":"block"});
    $("#tab-nav-news").attr("class","active");
    $("#tab-nav-advise").attr("class","");
    $(".input").val("");
    $("textarea").val("");
});

$("#tab-nav-advise").click(function(){
    $("#tab-nav-news").attr("class","");
    $("#tab-nav-advise").attr("class","active");
    $(".tab-body-advise").css({"display":"block"});
    $(".tab-body-news").css({"display":"none"});
    $(".input").val("");
    $("textarea").val("");
});

//start图表分析模块
$(document).ready(function(){
   $("#start-lefter-down-one").click(function(){
       $('#start-admin').css({"display":"block"});
       $("#start-admin2").css({"display":"none"});
       $("#start-admin3").css({"display":"none"});
       $("#start-admin4").css({"display":"none"});
   });
    $("#start-lefter-down-two").click(function(){
        $('#start-admin').css({"display":"none"});
        $("#start-admin2").css({"display":"block"});
        $("#start-admin3").css({"display":"none"});
        $("#start-admin4").css({"display":"none"});
    });
    $("#start-lefter-down-three").click(function(){
        $('#start-admin').css({"display":"none"});
        $("#start-admin2").css({"display":"none"});
        $("#start-admin3").css({"display":"block"});
        $("#start-admin4").css({"display":"none"});
    });
    $("#start-lefter-down-four").click(function(){
        $('#start-admin').css({"display":"none"});
        $("#start-admin2").css({"display":"none"});
        $("#start-admin3").css({"display":"none"});
        $("#start-admin4").css({"display":"block"});
    });
});

//start左侧模块
$("#start-lefter-down-one").click(function(){
    $("#start-lefter-down-one").attr("class","lefter-down-active");
    $("#start-lefter-down-two").attr("class","");
    $("#start-lefter-down-three").attr("class","");
    $("#start-lefter-down-four").attr("class","");
});
$("#start-lefter-down-two").click(function(){
    $("#start-lefter-down-one").attr("class","");
    $("#start-lefter-down-two").attr("class","lefter-down-active");
    $("#start-lefter-down-three").attr("class","");
    $("#start-lefter-down-four").attr("class","");
});
$("#start-lefter-down-three").click(function(){
    $("#start-lefter-down-one").attr("class","");
    $("#start-lefter-down-two").attr("class","");
    $("#start-lefter-down-three").attr("class","lefter-down-active");
    $("#start-lefter-down-four").attr("class","");
});
$("#start-lefter-down-four").click(function(){
    $("#start-lefter-down-one").attr("class","");
    $("#start-lefter-down-two").attr("class","");
    $("#start-lefter-down-three").attr("class","");
    $("#start-lefter-down-four").attr("class","lefter-down-active");
});

//room左侧
$("#room-lefter-down-one").click(function(){
    $(".pannel-news").css({"display":"none"});
    $(".pannel-advise").css({"display":"none"});
    $(".tab-body-news").css({"display":"none"});
    $(".pannel-money").css({"display":"block"});
    $(".pannel-room").css({"display":"none"});
    $(".pannel-notes").css({"display":"none"});
    $("#room-lefter-down-one").attr("class","lefter-down-active");
    $("#room-lefter-down-two").attr("class","");
    $("#room-lefter-down-three").attr("class","");
    $("#room-lefter-down-four").attr("class","");
    $("#room-lefter-down-five").attr("class","");
});

$("#room-lefter-down-two").click(function(){
    $(".pannel-news").css({"display":"none"});
    $(".pannel-advise").css({"display":"none"});
    $(".tab-body-news").css({"display":"none"});
    $(".pannel-money").css({"display":"none"});
    $(".pannel-room").css({"display":"block"});
    $(".pannel-notes").css({"display":"none"});
    $("#room-lefter-down-one").attr("class","");
    $("#room-lefter-down-two").attr("class","lefter-down-active");
    $("#room-lefter-down-three").attr("class","");
    $("#room-lefter-down-four").attr("class","");
    $("#room-lefter-down-five").attr("class","");
});

$("#room-lefter-down-three").click(function(){
    $(".pannel-news").css({"display":"none"});
    $(".pannel-room").css({"display":"none"});
    $(".pannel-advise").css({"display":"block"});
    $(".tab-body-news").css({"display":"none"});
    $(".pannel-money").css({"display":"none"});
    $(".pannel-notes").css({"display":"none"});
    $("#room-lefter-down-one").attr("class","");
    $("#room-lefter-down-two").attr("class","");
    $("#room-lefter-down-three").attr("class","lefter-down-active");
    $("#room-lefter-down-four").attr("class","");
    $("#room-lefter-down-five").attr("class","");

});
$("#room-lefter-down-four").click(function(){
    $(".pannel-news").css({"display":"block"});
    $(".pannel-room").css({"display":"none"});
    $(".pannel-advise").css({"display":"none"});
    $(".tab-body-news").css({"display":"none"});
    $(".pannel-money").css({"display":"none"});
    $(".pannel-notes").css({"display":"none"});
    $("#room-lefter-down-one").attr("class","");
    $("#room-lefter-down-two").attr("class","");
    $("#room-lefter-down-three").attr("class","");
    $("#room-lefter-down-four").attr("class","lefter-down-active");
    $("#room-lefter-down-five").attr("class","");
});

$("#room-lefter-down-five").click(function(){
    $(".pannel-news").css({"display":"none"});
    $(".pannel-room").css({"display":"none"});
    $(".pannel-advise").css({"display":"none"});
    $(".tab-body-news").css({"display":"none"});
    $(".pannel-money").css({"display":"none"});
    $(".pannel-notes").css({"display":"block"});
    $("#room-lefter-down-one").attr("class","");
    $("#room-lefter-down-two").attr("class","");
    $("#room-lefter-down-three").attr("class","");
    $("#room-lefter-down-four").attr("class","");
    $("#room-lefter-down-five").attr("class","lefter-down-active");
});

//room两个提示框
$("#information-close").click(function(){
    $("#information-pannel").css({"display":"none"});
});
$("#information-down-no").click(function(){
    $("#information-pannel").css({"display":"none"});
});
$("#fufei").click(function(){
    $("#information-pannel").css({"display":"block"});
    var that=$(this);
    $("#information-down-ok").click(function(){
        $("#information-pannel").css({"display":"none"});
        that.html("已付费");
    });
});



$("#information-close2").click(function(){
    $("#information-pannel2").css({"display":"none"});
});
$("#information-down-no2").click(function(){
    $("#information-pannel2").css({"display":"none"});
});
$("#tuifang").click(function(){
    $("#information-pannel2").css({"display":"block"});
});
$("#information-down-ok2").click(function(){
    $("#information-pannel2").css({"display":"none"});
});

//news发布和advise发布
function PassageSubmit(name){
    var title=$("#passage-"+name+"-title").val();
    var content=$("#passage-"+name+"-content").val();
    var time=nowdate();
    if(title==""||content=="")
    {
        warningshow();
        $("#ok-html").html("标题或内容不能为空!");
        $("#information-down-ok").click(function(){
            $("#information-pannel").css({"display":"none"});
        })
    }
    else{
        warningshow();
        $("#ok-html").html("确认发布?");
        $("#information-down-ok").click(function(){
            $.ajax({
                type:'GET',
                url:'../MyHotel/passage/passage-submit.php',
                data:{
                    'name':name,
                    'title':title,
                    'content':content,
                    'time':time
                },
                dataType:'json',
                success:function(json){
                    if(json.success)
                    {
                        window.location.href="../MyHotel/content.php";
                    }
                },
                error:function(){
                  //alert("亲!数据出错了!");
                }
            });
            $("#information-pannel").css({"display":"none"});
        });
    }
}



//news和advise的批量删除
function check(){
    if($(":checkbox").prop("checked")==true)
    {
        $(":checkbox").prop("checked",false);
    }else{
        $(":checkbox").prop("checked",true);
    }
}

function delContent(name){
    warningshow();
    $("#ok-html").html("确认删除?");
    $("#information-down-ok").click(function(){
        $("#information-pannel").css({"display":"none"});
        $("#table-"+name+" tr").each(function(){
            var tr = $(this);
            var checkbox = tr.find(":checkbox");
            var title = tr.find(".title").text();
            if(checkbox.prop("checked")==true){
                $.ajax({
                    type: 'GET',
                    data: {'name':name,'title': title},
                    url: "../MyHotel/passage/content-delete-many.php",
                    dataType: 'json',
                    success:function(json){
                        if(json.success==1)
                        {
                            tr.remove();
                        }
                    },
                    error: function () {
                        //alert("亲!出错了!")
                    }
                });
            }
        })
    });
}

function delContentone(obj,id,ptr){
    warningshow();
    $("#ok-html").html("确认删除?");
    $("#information-down-ok").click(function(){
        $("#information-pannel").css({"display":"none"});
        var mm=$(ptr).parent().parent();
        mm.remove();
        $.ajax({
            type:'GET',
            url:'../MyHotel/passage/content-delete-one.php',
            data:{
                'name':obj,
                'id':id
            },
            dataType:'json',
            success:function(json){
                if(json.success!=0){
                    this.parentNode.parentNode.remove();
                }
            },
            error:function(){
                //alert("亲!出错了!");
            }
        })
    })
}


//news和advise的修改显示
var expecialid;
function modify(obj,id){
    $(".pannel-news").css({"display":"none"});
    $(".pannel-advise").css({"display":"none"});
    $(".tab-body-news").css({"display":"block"});
    $("#modify-color").css({"color":"black"});
    $("#news-color").css({"color":"#aaaaaa"});
    $("#advise-color").css({"color":"#aaaaaa"});
    if(obj=="news")
    {
        $("#content-kind-title").text("新闻标题");
    }else if(obj=="advise"){
        $("#content-kind-title").text("公告标题");
    }
    expecialid=id;
    var title,content;
    $.ajax({
        type:'GET',
        url:'../MyHotel/passage/modify.php',
        data:{
            'name':obj,
            'id':id
        },
        dataType:'json',
        success:function(json){
            title=json.title;
            content=json.content;
            $("#modify-title").val(title);
            $("#modify-content").val(content);
        },
        error:function(){
            //alert("亲!出错了!");
        }
    });
}
//********************

//news和advise的修改提交
function modifysubmit(){
    var title=$("#modify-title").val();
    var content=$("#modify-content").val();
    var kind=$("#content-kind-title").text();

     warningshow();
    $("#ok-html").html("确认提交?");
    $("#information-down-ok").click(function(){
        $.ajax({
            type:'GET',
            url:'../MyHotel/passage/modifysubmit.php',
            data:{
                'id':expecialid,
                'kind':kind,
                'title':title,
                'content':content
            },
            dataType:'json',
            success:function(json){
                if(json.success!=0)
                {
                    window.location.href="../MyHotel/content.php";
                }
            },
            error:function(){
                //alert("亲!出错了!");
            }
        });
    });
}
//***************************

//消息提示框
function warningshow(){
    $("#information-pannel").css({"display":"block"});
    $("#information-close").click(function(){
        $("#information-pannel").css({"display":"none"});
    });
    $("#information-down-no").click(function(){
        $("#information-pannel").css({"display":"none"});
    });
}

//首页数据统计
setInterval(function(){
    $.ajax({
        type:'GET',
        url:'../MyHotel/start/data-total.php',
        dataType:'json',
        success:function(json){
            var userNum=json.userNum;
            var roomreservation=json.roomreservation;
            var roomremain=json.roomremain;
            var news=json.news;
            var advise=json.advise;
            $("#userNum").html(userNum);
            $("#roomreservation").html(roomreservation);
            $("#roomremain").html(roomremain);
            $('#news').html(news);
            $("#advise").html(advise);
        },
        error:function(){
            //alert("亲!出错了");
        }
    })
},1000);






