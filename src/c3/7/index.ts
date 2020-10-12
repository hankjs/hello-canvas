import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.moveTo(20, 20);
// cxt.lineTo(70, 20); // 可有可无
cxt.arcTo(120, 20, 120, 70, 50);
cxt.lineTo(120, 120);
cxt.stroke();