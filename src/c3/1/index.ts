import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

// cxt.beginPath();
// 角度单位是弧度
// cxt.arc(x,y,半径,开始角度,结束角度, anticlockwise);
// cxt.closePath();

// 开始结束角度建议写法
// 120*Math.PI/180   //120°
// 150*Math.PI/180   //150°
//半圆
cxt.beginPath();
cxt.arc(80, 80, 50, 0, 180 * Math.PI / 180, true);
cxt.closePath();
//描边
cxt.strokeStyle = "HotPink";
cxt.stroke();
//整圆
cxt.beginPath();
cxt.arc(120, 80, 50, 0, 360 * Math.PI / 180, true);
cxt.closePath();
//描边
cxt.strokeStyle = "HotPink";
cxt.stroke();