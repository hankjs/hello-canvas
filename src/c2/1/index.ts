import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.moveTo(50, 100);
cxt.lineTo(150, 50);
cxt.stroke();