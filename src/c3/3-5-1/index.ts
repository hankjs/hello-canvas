import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

//绘制三次贝塞尔曲线
cxt.moveTo(20, 80);
var cx1 = 20;
var cy1 = 20;
var cx2 = 120;
var cy2 = 120;
var endX = 120;
var endY = 60;
cxt.bezierCurveTo(cx1, cy1, cx2, cy2, endX, endY);
cxt.stroke();