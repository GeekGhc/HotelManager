/**
 * Created by apple on 16/4/12.
 */

//头像设置
$(function () {
    $("#uic-left-one").click(function () {
        $("#uic-right").css({"display": "block"});
        $('#uic-right-pwd').css({"display": "none"});
        $("#uic-left-one").attr("class", "uic-left-li uic-active");
        $('#uic-left-two').attr("class", "uic-left-li");
    });
    $("#uic-left-two").click(function () {
        $("#uic-right").css({"display": "none"});
        $('#uic-right-pwd').css({"display": "block"});
        $("#uic-left-one").attr("class", "uic-left-li");
        $('#uic-left-two').attr("class", "uic-left-li uic-active");
    });
    $("#uic-head-one").click(function () {
        $("#uic-head-content-left").css({"display": "block"});
        $("#uic-head-content-left-two").css({"display": "none"});
        $("#uic-head-one").attr("class", "uic-head-active");
        $("#uic-head-two").attr("class", "uic-head-normal");
    });
    $("#uic-head-two").click(function () {
        $("#uic-head-content-left").css({"display": "none"});
        $("#uic-head-content-left-two").css({"display": "block"});
        $("#uic-head-one").attr("class", "uic-head-normal");
        $("#uic-head-two").attr("class", "uic-head-active");
    });
    $("#uic-a").click(function () {
        $("#uic-head-content-left").css({"display": "none"});
        $("#uic-head-content-left-two").css({"display": "block"});
        $("#uic-head-one").attr("class", "uic-head-normal");
        $("#uic-head-two").attr("class", "uic-head-active");
    });
});

//填写数据到html
$(function () {
    var li = "";
    for (var i = 1; i < 27; i++) {
        li += '<li><a><img src="images/userhead/' + i + '.jpg"></a></li>';
    }
    $("#uic-img-expecial").html(li);
});

$(function () {
    var time = new Date();
    var year = time.getFullYear();
    var li = '<option value="">日</option>';
    var li2 = '<option value="">月</option>';
    var li3 = '<option value="">年</option>';
    for (var i = 1; i < 32; i++) {
        li += '<option>' + i + '</option>';
    }
    $('#select-day').html(li);

    for (var j = 1; j < 13; j++) {
        li2 += '<option>' + j + '</option>';
    }
    $('#select-month').html(li2);

    for (var y = year; y >= 1950; y--) {
        li3 += '<option>' + y + '</option>';
    }
    $('#select-year').html(li3);
});

//********************
$(".uic-img").on("click", "li img", function () {
    var src = $(this).attr("src");
    $("#uic-way-one img").attr("src", src);
});

//保存头像
$("#uic-img-button").click(function () {
    var src = $("#uic-way-one img").attr("src");
    $.ajax({
        type: 'GET',
        url: '../MyHotel/Login-Regist/userhead.php',
        data: {
            'src': src
        },
        dataType: 'json',
        success: function (json) {
            if (json.success) {
                alert("保存成功");
            }
        }
        /*error: function () {
            alert("数据出错!");
        }*/
    })
});


//显示用户资料
var sex, year, month, day, blood, education, information;
$(function () {
    $.ajax({
        type: 'GET',
        url: '../MyHotel/Login-Regist/user_information_show.php',
        dataType: 'json',
        async: false,
        success: function (json) {
            sex = json.sex;
            year = json.year;
            month = json.month;
            day = json.day;
            blood = json.blood;
            education = json.education;
            information = json.information;
            if (sex == "男") {
                $("#radio-man").attr("checked", true);
            }
            else if (sex == "女") {
                $("#radio-woman").attr("checked", true);
            }
            $("#select-year").val(year);
            $("#select-month").val(month);
            $("#select-day").val(day);
            $("#select-blood").val(blood);
            $("#select-edcuation").val(education);
            $("#information").val(information);
        },
       /* error: function () {
            alert("亲!出错了!");
        }*/
    });
});


//存储个人资料
var arr = {
    "sex": "",
    "year": "",
    "month": "",
    "day": "",
    "blood": "",
    "information": "",
    "education": ""
};
$("#radio-man").click(function () {
    $("#radio-man").attr("checked", true);
    $("#radio-woman").attr("checked", false);
    arr.sex = "男";
});
$("#radio-woman").click(function () {
    $("#radio-woman").attr("checked", true);
    $("#radio-man").attr("checked", false);
    arr.sex = "女";
});
$("#user-info-button").click(function () {
    if ($("#radio-man").attr("checked")) {
        arr.sex = "男";
    }
    else if ($("#radio-woman").attr("checked")) {
        arr.sex = "女";
    }
    else {
        arr.sex = "";
    }
    arr.year = $("#select-year").val();
    arr.month = $("#select-month").val();
    arr.day = $("#select-day").val();
    arr.blood = $("#select-blood").val();
    arr.education = $("#select-edcuation").val();
    arr.information = $("#information").val();
    $.ajax({
        type: 'GET',
        url: '../MyHotel/Login-Regist/user_information.php',
        data: {
            'sex': arr.sex,
            'year': arr.year,
            'month': arr.month,
            'day': arr.day,
            'blood': arr.blood,
            'education': arr.education,
            'information': arr.information
        },
        dataType: 'json',
        success: function (json) {
            if (json.success) {
                alert("保存成功!");
            }
        },
        error: function () {
            alert("亲!出错了");
        }
    })
});

$(function () {
    $("#yulan").click(function () {
        $.ajax({
            type: 'GET',
            url: '../MyHotel/Login-Regist/user-img2.php',
            dataType: 'json',
            success: function (json) {
                var nn = json.src;
                var src = "images/user-head-img" + "/" + nn;
                $("#uic-way-one img").attr("src", src);
            },
            error: function () {
                alert("请上传本地图片!");
            }
        })
    });
});


