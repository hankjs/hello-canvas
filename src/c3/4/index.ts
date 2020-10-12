import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
//半圆
cxt.beginPath();
cxt.arc(80, 80, 50, 0, 180 * Math.PI / 180, true);
cxt.closePath();
//描边
cxt.fillStyle = "HotPink";
cxt.fill();
//整圆
cxt.beginPath();
cxt.arc(120, 80, 50, 0, 360 * Math.PI / 180, true);
cxt.closePath();
//描边
cxt.fillStyle = "#9966FF";
cxt.fill();;