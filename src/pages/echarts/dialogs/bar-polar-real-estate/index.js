import template from './index.html';
import "./index.scss";

import ResizeObserver from '../../../../tool/ResizeObserver';
import canvasRender from '../../../../tool/canvas/region';
import ruler from '../../../../tool/ruler';
import rotate from '../../../../tool/transform/rotate';
import getLoopColors from '../../../../tool/getLoopColors';
import drawRectRadius from '../../../../tool/canvas/extend/rectRadius';

export default function (obj, props) {

    return {
        name: "echarts-example",
        render: template,
        data: {
            srcUrl: props.srcUrl
        },
        mounted: function () {
            var i, y, p1, p2, indexs;

            var data = [

                // 最低、最高、平均
                ["北京", 5000, 10000, 6785.71],
                ["上海", 4000, 10000, 6825],
                ["深圳", 3000, 6500, 4463.33],
                ["广州", 2500, 5600, 3793.83],
                ["苏州", 2000, 4000, 3060],
                ["杭州", 2000, 4000, 3222.33],
                ["南京", 2500, 4000, 3133.33],
                ["福州", 1800, 4000, 3100],
                ["青岛", 2000, 3500, 2750],
                ["济南", 2000, 3000, 2500],
                ["长春", 1800, 3000, 2433.33],
                ["大连", 2000, 2700, 2375],
                ["温州", 1500, 2800, 2150],
                ["郑州", 1500, 2300, 2100],
                ["武汉", 1600, 3500, 2057.14],
                ["成都", 1500, 2600, 2037.5],
                ["东莞", 1500, 2417.54, 1905.85],
                ["沈阳", 1500, 2000, 1775],
                ["烟台", 1500, 1800, 1650]
            ];

            var colors = getLoopColors(2);

            var mycontent = this._refs.mycontent.value;
            var mycanvas = this._refs.mycanvas.value;
            var mytooltip = this._refs.mytooltip.value;

            var painter;

            var beginDeg, deg = Math.PI * 2 / data.length, maxValue = 0, cx, cy, radius, distV;

            // 求解最大值
            for (i = 0; i < data.length; i++) {
                if (maxValue < data[i][2]) {
                    maxValue = data[i][2];
                }
            }

            // 刻度尺
            var rulerData = ruler(maxValue, 0, 5);

            // 监听画布大小改变
            ResizeObserver(mycontent, function () {
                painter = canvasRender(mycanvas, mycontent.clientWidth, mycontent.clientHeight, true);

                // 圆心和半径
                cx = mycontent.clientWidth * 0.5;
                cy = mycontent.clientHeight * 0.5;
                radius = Math.max(Math.min(cx, cy) * 0.75, 0);

                distV = radius / rulerData[rulerData.length - 1];

                if (radius <= 0) return;

                painter.clearRect(0, 0, mycontent.clientWidth, mycontent.clientHeight);

                beginDeg = Math.PI * -0.5;

                // 左上文字
                painter.config({
                    "fontSize": 18,
                    "fontWeight": 800
                }).fillText("How expensive is it to rent an apartment in China?", 20, 20)
                    .config({
                        "fontSize": 12,
                        "fontWeight": 400,
                        "fillStyle": "#70727b"
                    }).fillText("Data from https://www.numbeo.com", 20, 45);

                // 绘制垂直刻度尺和圆
                painter.config({
                    'textAlign': "right"
                });
                for (i = 0; i < rulerData.length; i++) {
                    y = cy - radius / (rulerData.length - 1) * i;

                    // 圆
                    painter.config({
                        "strokeStyle": i == rulerData.length - 1 ? "#70727b" : "#edf1f7"
                    }).strokeCircle(cx, cy, radius / (rulerData.length - 1) * i);

                    // 刻度
                    painter.config({
                        "fillStyle": "#6e7079",
                        "strokeStyle": "#6e7079"
                    }).fillText(rulerData[i], cx - 7, y)
                        .beginPath().moveTo(cx, y).lineTo(cx - 5, y).stroke();
                }

                // 垂直线
                painter.beginPath().moveTo(cx, cy).lineTo(cx, cy - radius).stroke();

                // 图例

                painter.config({
                    "fillStyle": colors[0]
                });
                drawRectRadius(painter, cx - 85, mycontent.clientHeight - 30, 30, 16, 5).fill()
                    .config({
                        "fillStyle": "black",
                        "textAlign": "left"
                    }).fillText("Range", cx - 50, mycontent.clientHeight - 22);

                painter.config({
                    "fillStyle": colors[1]
                });
                drawRectRadius(painter, cx + 5, mycontent.clientHeight - 30, 30, 16, 5).fill()
                    .config({
                        "fillStyle": "black"
                    }).fillText("Average", cx + 40, mycontent.clientHeight - 22);

                // 绘制圆刻度尺和内容
                painter.config({
                    "textAlign": "center"
                });
                for (i = 0; i < data.length; i++) {
                    painter.setRegion("");

                    p1 = rotate(cx, cy, beginDeg + deg * 0.5, cx + radius + 20, cy);

                    // 刻度值
                    painter.config({
                        "fillStyle": "#6e7079"
                    }).fillText(data[i][0], p1[0], p1[1]);

                    p1 = rotate(cx, cy, beginDeg + deg, cx + radius, cy);
                    p2 = rotate(cx, cy, beginDeg + deg, cx + radius + 5, cy);

                    // 刻度线
                    painter.beginPath().moveTo(p1[0], p1[1]).lineTo(p2[0], p2[1]).stroke();

                    // 绘制最高最低
                    painter.setRegion("0-" + i).config({
                        "fillStyle": colors[0]
                    }).fillArc(cx, cy, distV * data[i][1], distV * data[i][2], beginDeg + deg * 0.1, deg * 0.8);

                    // 绘制平均
                    painter.setRegion("1-" + i).config({
                        "fillStyle": colors[1]
                    }).fillArc(cx, cy, distV * data[i][3] - 1, distV * data[i][3] + 1, beginDeg + deg * 0.1, deg * 0.8);

                    beginDeg += deg;
                }

            });

            var currentRegion = false;
            mycanvas.addEventListener('mousemove', function (event) {
                if (painter) {
                    var regionName = painter.getRegion(event);
                    if (regionName) {

                        if (regionName != currentRegion) {
                            mytooltip.style.display = '';

                            indexs = regionName.split('-');

                            // 修改悬浮框内容
                            mytooltip.innerHTML = "<div style='border-color:" + colors[indexs[0]] + "'><h6>" + data[indexs[1]][0] + "</h6>" +
                                "<div>Lowest：" + data[indexs[1]][1] + "</div>" +
                                "<div>Highest：" + data[indexs[1]][2] + "</div>" +
                                "<div>Average：" + data[indexs[1]][3] + "</div></div>";

                            currentRegion = regionName;
                        }

                        // 修改悬浮框位置
                        mytooltip.style.left = (event.offsetX + 20) + "px";
                        mytooltip.style.top = (event.offsetY + 20) + "px";

                    }

                    // 隐藏悬浮框
                    else if (currentRegion) {
                        currentRegion = false;
                        mytooltip.style.display = 'none';
                    }
                }
            });
        }

    };
};