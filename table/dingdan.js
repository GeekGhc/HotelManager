var number = [];
var temp=[];
var yearnum;
var flow = [];
var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
$(function () {
    var labels = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    $.post("../MyHotel/start/dingdan.php",
     function(data){
         for(i=0;i<month-1;i++)
         {
             temp[i] =labels[i];
         }
         labels=[];
         for(i=0;i<month-1;i++)
         {
             labels.push(temp[i]);
         }
         var j=0;
         yearnum=parseInt(data.length/12);
         for(var k=yearnum*12;k<data.length;k++)
         {
             number[j++]=data[k];
         }
         for ( var i = 0; i <number.length; i++) {
             flow.push(number[i]);
         }
         var nowdata = [
             {
                 name: 'PV',
                 value: flow,
                 color: '#ec4646',
                 line_width: 2
             }
         ];


         var chart = new iChart.LineBasic2D({
             render: 'canvasDiv',
             data: nowdata,
             align: 'center',
             title: {
                 text: '金陵大酒店' + 2016 + '房间订单数据分析',
                 font: '微软雅黑',
                 fontsize: 24,
                 color: '#b4b4b4'
             },
             subtitle: {
                 text: '单位:件',//利用副标题设置单位信息
                 font: '微软雅黑',
                 color: '#b4b4b4'
             },
             width: 800,
             height: 400,
             shadow: true,
             shadow_color: '#202020',
             shadow_blur: 8,
             shadow_offsetx: 0,
             shadow_offsety: 0,
             background_color: '#2e2e2e',
             tip: {
                 enable: true,
                 shadow: true,
                 listeners: {
                     //tip:提示框对象、name:数据名称、value:数据值、text:当前文本、i:数据点的索引
                     parseText: function (tip, name, value, text, i) {
                         return "<span style='color:#005268;font-size:12px;'>" + labels[i] + ":订单数量:<br/>" +
                             "</span><span style='color:#005268;font-size:20px;'>" + value + "</span>";
                     }
                 }
             },
             crosshair: {
                 enable: true,
                 line_color: '#ec4646'
             },
             sub_option: {
                 smooth: true,
                 label: false,
                 hollow: false,
                 hollow_inside: false,
                 point_size: 8
             },
             coordinate: {
                 width: 640,
                 height: 260,
                 striped_factor: 0.18,
                 grid_color: '#4e4e4e',
                 axis: {
                     color: '#252525',
                     width: [0, 0, 4, 4]
                 },
                 scale: [{
                     position: 'left',
                     start_scale: 0,
                     end_scale: 150,
                     scale_space: 20,
                     scale_size: 2,
                     scale_enable: false,
                     label: {color: '#9d987a', font: '微软雅黑', fontsize: 11, fontweight: 600},
                     scale_color: '#9f9f9f'
                 }, {
                     position: 'bottom',
                     label: {color: '#9d987a', font: '微软雅黑', fontsize: 11, fontweight: 600},
                     scale_enable: false,
                     labels: labels
                 }]
             }
         });
         //利用自定义组件构造左侧说明文本
         chart.plugin(new iChart.Custom({
             drawFn: function () {
                 //计算位置
                 var coo = chart.getCoordinate(),
                     x = coo.get('originx'),
                     y = coo.get('originy'),
                     w = coo.width,
                     h = coo.height;
                 //在左上侧的位置，渲染一个单位的文字
                 chart.target.textAlign('start')
                     .textBaseline('bottom')
                     .textFont('600 11px 微软雅黑')
                     .fillText(' 订单数量:', x - 40, y - 12, false, '#9d987a')
             }
         }));
         //开始画图
         chart.draw();
     },"json");

});


$.post("../MyHotel/start/dingdan.php",
    function(data){
        temp=[];
        $("#select").bind('change', function () {
            var  labels = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
            var value = this.value;
            if (value == '2014') {
                for (var i = 0; i < 12; i++) {
                    number[i] = data[i];
                }
                flow=[];
                for (var i = 0; i < 12; i++) {
                    flow.push(number[i]);
                }
            }
            else if (value == '2015') {
                var j=0;
                for ( i = 12; i < 24; i++) {
                    number[j++] = data[i];
                }
                flow=[];
                for (var i = 0; i < 12; i++) {
                    flow.push(number[i]);
                }
            }
            else if (value == '2016') {
                var j=0;
                for(i=0;i<month-1;i++)
                {
                   temp[i] =labels[i];
                }
                labels=[];
                for(i=0;i<month-1;i++)
                {
                    labels.push(temp[i]);
                }
                for ( i = 24; i < data.length; i++) {
                    number[j++] = data[i];
                }
                flow=[];
                for (var i = 0; i < month-1; i++) {
                    flow.push(number[i]);
                }
            }

            //表格显示
            var nowdata = [
                {
                    name: 'PV',
                    value: flow,
                    color: '#ec4646',
                    line_width: 2
                }
            ];

            var chart = new iChart.LineBasic2D({
                render: 'canvasDiv',
                data: nowdata,
                align: 'center',
                title: {
                    text: '金陵大酒店' + value + '房间订单数据分析',
                    font: '微软雅黑',
                    fontsize: 24,
                    color: '#b4b4b4'
                },
                subtitle: {
                    text: '单位:件',//利用副标题设置单位信息
                    font: '微软雅黑',
                    color: '#b4b4b4'
                },
                width: 800,
                height: 400,
                shadow: true,
                shadow_color: '#202020',
                shadow_blur: 8,
                shadow_offsetx: 0,
                shadow_offsety: 0,
                background_color: '#2e2e2e',
                tip: {
                    enable: true,
                    shadow: true,
                    listeners: {
                        //tip:提示框对象、name:数据名称、value:数据值、text:当前文本、i:数据点的索引
                        parseText: function (tip, name, value, text, i) {
                            return "<span style='color:#005268;font-size:12px;'>" + labels[i] + ":订单数量:<br/>" +
                                "</span><span style='color:#005268;font-size:20px;'>" + value + "</span>";
                        }
                    }
                },
                crosshair: {
                    enable: true,
                    line_color: '#ec4646'
                },
                sub_option: {
                    smooth: true,
                    label: false,
                    hollow: false,
                    hollow_inside: false,
                    point_size: 8
                },
                coordinate: {
                    width: 640,
                    height: 260,
                    striped_factor: 0.18,
                    grid_color: '#4e4e4e',
                    axis: {
                        color: '#252525',
                        width: [0, 0, 4, 4]
                    },
                    scale: [{
                        position: 'left',
                        start_scale: 0,
                        end_scale: 150,
                        scale_space: 20,
                        scale_size: 2,
                        scale_enable: false,
                        label: {color: '#9d987a', font: '微软雅黑', fontsize: 11, fontweight: 600},
                        scale_color: '#9f9f9f'
                    }, {
                        position: 'bottom',
                        label: {color: '#9d987a', font: '微软雅黑', fontsize: 11, fontweight: 600},
                        scale_enable: false,
                        labels: labels
                    }]
                }
            });
            //利用自定义组件构造左侧说明文本
            chart.plugin(new iChart.Custom({
                drawFn: function () {
                    //计算位置
                    var coo = chart.getCoordinate(),
                        x = coo.get('originx'),
                        y = coo.get('originy'),
                        w = coo.width,
                        h = coo.height;
                    //在左上侧的位置，渲染一个单位的文字
                    chart.target.textAlign('start')
                        .textBaseline('bottom')
                        .textFont('600 11px 微软雅黑')
                        .fillText(' 订单数量:', x - 40, y - 12, false, '#9d987a')
                }
            }));
            //开始画图
            chart.draw();
        });

    },"json");

