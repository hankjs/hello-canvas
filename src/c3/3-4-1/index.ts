import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.moveTo(30, 120);
cxt.quadraticCurveTo(100, 20, 160, 120);
cxt.stroke();