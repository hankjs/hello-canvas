import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.beginPath();
cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true);
cxt.closePath();
cxt.strokeStyle = "HotPink";
cxt.stroke();