import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.moveTo(40, 20);
cxt.lineTo(160, 20);
cxt.arcTo(180, 20, 180, 40, 20);
cxt.moveTo(180, 40);
cxt.lineTo(180, 110);
cxt.arcTo(180, 130, 160, 130, 20);
cxt.moveTo(160, 130);
cxt.lineTo(40, 130);
cxt.arcTo(20, 130, 20, 110, 20);
cxt.moveTo(20, 110);
cxt.lineTo(20, 40);
cxt.arcTo(20, 20, 40, 20, 20);
cxt.stroke();