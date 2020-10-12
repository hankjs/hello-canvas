import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

createRoundedRect(cxt, 100, 100, 20, 20, 20);
cxt.fillStyle = "HotPink";
cxt.fill();