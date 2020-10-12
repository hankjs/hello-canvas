import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.moveTo(40, 60);
cxt.lineTo(100, 60);
cxt.lineTo(100, 30);
cxt.lineTo(150, 75);
cxt.lineTo(100, 120);
cxt.lineTo(100, 90);
cxt.lineTo(40, 90);
cxt.lineTo(40, 60);
cxt.stroke();