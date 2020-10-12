import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

//绘制描边矩形
cxt.strokeStyle = "red";
cxt.rect(50, 50, 80, 80);
cxt.stroke();

//绘制填充矩形
cxt.fillStyle = "#FFE8E8";
cxt.rect(50, 50, 80, 80);
cxt.fill();