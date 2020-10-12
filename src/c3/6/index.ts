import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

//绘制一条直线
cxt.moveTo(20, 20);
cxt.lineTo(70, 20);
cxt.stroke();

//绘制圆弧+直线
cxt.beginPath();
cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true);
cxt.moveTo(120, 70);
cxt.lineTo(120, 120);
cxt.stroke(); 