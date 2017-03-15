setInterval(function() {
    var count = [];
    $.ajax({
        type: 'GET',
        url: '../MyHotel/start/room_remain.php',
        dataType: 'json',
        async: false,
        success: function (json) {
            var list = json.list;
            $.each(list, function (index, array) {
                count.push(array['count']);
            })
        },
        error: function () {
            alert("亲!出错了");
        }
    });

    var data = [
        {name: '普通套间-双单床', value: count[3], color: '#3A68D3'},
        {name: '普通套间-大床', value: count[2], color: '#2A962A'},
        {name: '标准套间-双单床', value: count[5], color: '#9F2626'},
        {name: '标准套间-大床', value: count[4], color: '#4F7DE7'},
        {name: '豪华套间-双单床', value: count[1], color: '#7A3C9C'},
        {name: '豪华套间-大床', value: count[0], color: '#782A56'}
    ];

    var chart = new iChart.Column3D({
        render: 'canvasDiv2',
        data: data,
        title: {
            text: '金陵大酒店套间剩余量统计表',
            color: '#3e576f'
        },
        width: 800,
        height: 400,
        padding: 20,
        background_color: '#eceeef',
        sub_option: {
            label: {
                color: '#2c2e2a',
                padding: 20
            }
        },
        coordinate: {
            left_board: false,
            scale: [{
                position: 'left',
                start_scale: 0,
                end_scale: 50,
                scale_space: 5,
                listeners: {
                    parseText: function (t) {
                        return {text: t}
                    }
                }
            }]
        },
        legend: {
            background_color: iChart.toRgba('#213e49', 0.6),
            border: {radius: 5},
            enable: true,
            align: 'right',
            valign: 'top',
            row: 'max',
            color: '#fefefe',
            column: 2,
            line_height: 15
        },
        tip: {
            enable: true
        }
    });
    chart.draw();
},1000);
