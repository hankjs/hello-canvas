import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.fillStyle = "HotPink";
cxt.fillRect(50, 50, 80, 80);
cxt.clearRect(60, 60, 50, 50);