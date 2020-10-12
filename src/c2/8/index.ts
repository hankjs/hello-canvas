import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.fillStyle = "HotPink";
cxt.fillRect(50, 50, 80, 80);

cxt.fillStyle = "rgba(0,0,255,0.3)";
cxt.fillRect(30, 30, 80, 80);