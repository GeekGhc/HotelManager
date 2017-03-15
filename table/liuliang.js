/**
 * Created by apple on 16/3/30.
 */
$(function () {
    var time = [];
    var count = [];
    $.ajax({
        type: 'GET',
        url: '../MyHotel/start/webcount.php',
        dataType: 'json',
        async: false,
        success: function (json) {
            var list = json.list;
            $.each(list, function (index, array) {
                count.push(array['count']);
                time.push(array['time']);
            })
        },
        error: function () {
            alert("亲!出错了");
        }
    });
    var flow = [count[5], count[4], count[3], count[2], count[1], count[0]];
    var data = [
        {
            name: '访问次数:',
            value: flow,
            color: '#0d8ecf',
            line_width: 2
        }
    ];

    var labels = [time[5], time[4], time[3], time[2], time[1], time[0]];
    var line = new iChart.LineBasic2D({
        render: 'canvasDiv3',
        data: data,
        align: 'center',
        title: '金陵大酒店官网近六天访问流量统计表',
        subtitle: '每24小时统计一次',
        width: 800,
        height: 400,
        sub_option: {
            smooth: true,//平滑曲线
            point_size: 10
        },
        tip: {
            enable: true,
            shadow: true
        },
        legend: {
            enable: false
        },
        crosshair: {
            enable: true,
            line_color: '#62bce9'
        },
        coordinate: {
            width: 600,
            valid_width: 500,
            height: 260,
            axis: {
                color: '#9f9f9f',
                width: [0, 0, 2, 2]
            },
            grids: {
                vertical: {
                    way: 'share_alike',
                    value: 12
                }
            },
            scale: [{
                position: 'left',
                start_scale: 0,
                end_scale: 100,
                scale_space: 10,
                scale_size: 2,
                scale_color: '#9f9f9f'
            }, {
                position: 'bottom',
                labels: labels
            }]
        }
    });
    //开始画图
    line.draw();
});

