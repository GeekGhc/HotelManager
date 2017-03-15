/**
 * Created by asus on 2016/3/12.
 */
$(document).ready(function(){
    var ary1 = new Array();
    var str = "images/酒店展览/";
    for(var i  = 0;i<15;i++){
        ary1[i] = str+"酒店房间/"+(i%10+1)+".jpg";
    }
    var ary2 = new Array();
    for(var i  = 0;i<15;i++){
        ary2[i] = str+"酒店夜景/"+(i%10+1)+".jpg";
    }
    var ary3 = new Array();
    for(i  = 0;i<15;i++){
        ary3[i] = str+"酒店走廊/"+(i%10+1)+".jpg";
    }
    var ary4 = new Array();
    for(i  = 0;i<15;i++){
        ary4[i] = str+"夏日风情/"+(i%10+1)+".jpg";
    }
    var ary5 = new Array();
    for(i  = 0;i<15;i++){
        ary5[i] = str+"酒店装饰/"+(i%10+1)+".jpg";
    }
    var ary6 = new Array();
    for(i  = 0;i<15;i++){
        ary6[i] = str+"酒店美食/"+(i%10+1)+".jpg";
    }

    $(".image_stack_1 .photo10").click(function(){
        $(".box_img:eq(0) img").attr("src",ary1[0]);
        $(".box_img:eq(1) img").attr("src",ary1[1]);
        $(".box_img:eq(2) img").attr("src",ary1[2]);
        $(".box_img:eq(3) img").attr("src",ary1[3]);
        $(".box_img:eq(4) img").attr("src",ary1[4]);
        $(".box_img:eq(5) img").attr("src",ary1[5]);
        $(".box_img:eq(6) img").attr("src",ary1[6]);
        $(".box_img:eq(7) img").attr("src",ary1[7]);
        $(".box_img:eq(8) img").attr("src",ary1[8]);
        $(".box_img:eq(9) img").attr("src",ary1[9]);
        $(".box_img:eq(10) img").attr("src",ary1[10]);
        $(".box_img:eq(11) img").attr("src",ary1[11]);
        $(".box_img:eq(12) img").attr("src",ary1[12]);
        $(".box_img:eq(13) img").attr("src",ary1[13]);
        $(".box_img:eq(14) img").attr("src",ary1[14]);

        $("#float_main").css("display","block");
        $("#main").css("display","block");
        imgLocation("float_main","box");
    });
    $(".image_stack_2 .photo10").click(function(){
        $("#main").css("display","block");
        $(".box_img:eq(0) img").attr("src",ary2[0]);
        $(".box_img:eq(1) img").attr("src",ary2[1]);
        $(".box_img:eq(2) img").attr("src",ary2[2]);
        $(".box_img:eq(3) img").attr("src",ary2[3]);
        $(".box_img:eq(4) img").attr("src",ary2[4]);
        $(".box_img:eq(5) img").attr("src",ary2[5]);
        $(".box_img:eq(6) img").attr("src",ary2[6]);
        $(".box_img:eq(7) img").attr("src",ary2[7]);
        $(".box_img:eq(8) img").attr("src",ary2[8]);
        $(".box_img:eq(9) img").attr("src",ary2[9]);
        $(".box_img:eq(10) img").attr("src",ary2[10]);
        $(".box_img:eq(11) img").attr("src",ary2[11]);
        $(".box_img:eq(12) img").attr("src",ary2[12]);
        $(".box_img:eq(13) img").attr("src",ary2[13]);
        $(".box_img:eq(14) img").attr("src",ary2[14]);

        $("#float_main").css("display","block");
        imgLocation("float_main","box");
    });
    $(".image_stack_3 .photo10").click(function(){
        $("#main").css("display","block");
        $(".box_img:eq(0) img").attr("src",ary3[0]);
        $(".box_img:eq(1) img").attr("src",ary3[1]);
        $(".box_img:eq(2) img").attr("src",ary3[2]);
        $(".box_img:eq(3) img").attr("src",ary3[3]);
        $(".box_img:eq(4) img").attr("src",ary3[4]);
        $(".box_img:eq(5) img").attr("src",ary3[5]);
        $(".box_img:eq(6) img").attr("src",ary3[6]);
        $(".box_img:eq(7) img").attr("src",ary3[7]);
        $(".box_img:eq(8) img").attr("src",ary3[8]);
        $(".box_img:eq(9) img").attr("src",ary3[9]);
        $(".box_img:eq(10) img").attr("src",ary3[10]);
        $(".box_img:eq(11) img").attr("src",ary3[11]);
        $(".box_img:eq(12) img").attr("src",ary3[12]);
        $(".box_img:eq(13) img").attr("src",ary3[13]);
        $(".box_img:eq(14) img").attr("src",ary3[14]);

        $("#float_main").css("display","block");
        imgLocation("float_main","box");
    });
    $(".image_stack_4 .photo10").click(function(){
        $("#main").css("display","block");
        $(".box_img:eq(0) img").attr("src",ary4[0]);
        $(".box_img:eq(1) img").attr("src",ary4[1]);
        $(".box_img:eq(2) img").attr("src",ary4[2]);
        $(".box_img:eq(3) img").attr("src",ary4[3]);
        $(".box_img:eq(4) img").attr("src",ary4[4]);
        $(".box_img:eq(5) img").attr("src",ary4[5]);
        $(".box_img:eq(6) img").attr("src",ary4[6]);
        $(".box_img:eq(7) img").attr("src",ary4[7]);
        $(".box_img:eq(8) img").attr("src",ary4[8]);
        $(".box_img:eq(9) img").attr("src",ary4[9]);
        $(".box_img:eq(10) img").attr("src",ary4[10]);
        $(".box_img:eq(11) img").attr("src",ary4[11]);
        $(".box_img:eq(12) img").attr("src",ary4[12]);
        $(".box_img:eq(13) img").attr("src",ary4[13]);
        $(".box_img:eq(14) img").attr("src",ary4[14]);

        $("#float_main").css("display","block");
        imgLocation("float_main","box");
    });
    $(".image_stack_5 .photo10").click(function(){
        $("#main").css("display","block");
        $(".box_img:eq(0) img").attr("src",ary5[0]);
        $(".box_img:eq(1) img").attr("src",ary5[1]);
        $(".box_img:eq(2) img").attr("src",ary5[2]);
        $(".box_img:eq(3) img").attr("src",ary5[3]);
        $(".box_img:eq(4) img").attr("src",ary5[4]);
        $(".box_img:eq(5) img").attr("src",ary5[5]);
        $(".box_img:eq(6) img").attr("src",ary5[6]);
        $(".box_img:eq(7) img").attr("src",ary5[7]);
        $(".box_img:eq(8) img").attr("src",ary5[8]);
        $(".box_img:eq(9) img").attr("src",ary5[9]);
        $(".box_img:eq(10) img").attr("src",ary5[10]);
        $(".box_img:eq(11) img").attr("src",ary5[11]);
        $(".box_img:eq(12) img").attr("src",ary5[12]);
        $(".box_img:eq(13) img").attr("src",ary5[13]);
        $(".box_img:eq(14) img").attr("src",ary5[14]);

        $("#float_main").css("display","block");
        imgLocation("float_main","box");
    });
    $(".image_stack_6 .photo10").click(function(){
        $("#main").css("display","block");
        $(".box_img:eq(0) img").attr("src",ary6[0]);
        $(".box_img:eq(1) img").attr("src",ary6[1]);
        $(".box_img:eq(2) img").attr("src",ary6[2]);
        $(".box_img:eq(3) img").attr("src",ary6[3]);
        $(".box_img:eq(4) img").attr("src",ary6[4]);
        $(".box_img:eq(5) img").attr("src",ary6[5]);
        $(".box_img:eq(6) img").attr("src",ary6[6]);
        $(".box_img:eq(7) img").attr("src",ary6[7]);
        $(".box_img:eq(8) img").attr("src",ary6[8]);
        $(".box_img:eq(9) img").attr("src",ary6[9]);
        $(".box_img:eq(10) img").attr("src",ary6[10]);
        $(".box_img:eq(11) img").attr("src",ary6[11]);
        $(".box_img:eq(12) img").attr("src",ary6[12]);
        $(".box_img:eq(13) img").attr("src",ary6[13]);
        $(".box_img:eq(14) img").attr("src",ary6[14]);

        $("#float_main").css("display","block");
        imgLocation("float_main","box");
    });
    $(".float_close").on('click',function(){
        $("#float_main").css("display","none");
        $("#main").css("display","none");
    })
});

//找到最小高度值
function getminHeightLocation(boxHeight,minHeight){
    for(var i in boxHeight){
        if(boxHeight[i]==minHeight){
            return i;
        }
    }
}
//获取子元素
function getChildElement(parent,content){
    var contentArr = [];
    var allContent = document.getElementsByTagName("*");
    for(var i = 0;i<allContent.length;i++){
        if(allContent[i].className==content){
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}

function imgLocation(parent,content){
//将parent中的全部conten全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.getElementById("float_main").offsetWidth/imgWidth);
    cparent.style.cssText = "width:"+imgWidth*num*1.01+"px;margin:0 auto";
    var boxHeight = [];
    for(var i = 0;i<ccontent.length;i++){
        console.log(i+" = "+ccontent[i].offsetHeight);
        if(i<num){
            boxHeight[i] = ccontent[i].offsetHeight+50;//每个盒子的高度
        }else{
            var minHeight = Math.min.apply(null,boxHeight);
            var minindex = getminHeightLocation(boxHeight,minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight+"px";
            ccontent[i].style.left = minindex*imgWidth+"px";
            boxHeight[minindex] = boxHeight[minindex]+ccontent[i].offsetHeight;
        }
    }
}

