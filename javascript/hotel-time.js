/**
 * Created by apple on 16/2/23.
 */
var index = 0;
window.onload=function(){

    var date = new Date();
    var array = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var mm1=date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + array[date.getDay()];
    document.getElementById("week").innerHTML=mm1;


    var m=document.getElementsByClassName("content_middle_up_down_left_image_photo");
    var n=document.getElementsByClassName("content_middle_up_down_left_tab");
    var list1 = m[0].getElementsByTagName('div');
    var list2=n[0].getElementsByTagName('li');

    var timer=0;
    for(var i=0;i<list2.length;i++)
    {
        if(timer)
        {
            clearTimeout(timer);
        }
        list2[i].id=i;
        list2[i].onclick=function(){
            var that=this;
            setTimeout(function(){
                for(var j=0;j<list2.length;j++)
                {
                    list2[j].className="";
                }
                that.className='select';
                for(var m=0;m<list2.length;m++)
                {
                    list1[m].style.display="none";
                }
                list1[that.id].style.display="block";
                list1[that.id].style.display="block";
                index=that.id;
            },200);
        }
    }


    list2[0].className = "select";
    index++;
    setInterval(function () {
        for (var j = 0; j < list2.length; j++) {
            list2[j].className = "";
        }
        list2[index].className = "select";
        for (var m = 0; m < list1.length; m++) {
            list1[m].style.display = "none";
        }
        list1[index].style.display = "block";
        index++;
        if (index >= list2.length) {
            index = 0;
        }
    }, 4000);
};


function con(){
    var date = new Date();
    var minute2=0;
    var seconds2=0;
    var minute=date.getMinutes();
    var seconds=date.getSeconds();
    if(minute<10)
    {
         minute2="0"+minute;
    }
    else {
         minute2=minute;
    }
    if(seconds<10)
    {
       seconds2="0"+seconds;
    }
    else {
        seconds2=seconds;
    }
    var mm2=date.getHours() + ":" + minute2 + ":" + seconds2;
    document.getElementById("clock").innerHTML=mm2;
}

setInterval("con()",1000);


