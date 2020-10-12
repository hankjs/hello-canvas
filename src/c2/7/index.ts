import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.strokeStyle = "red";
cxt.strokeRect(50, 50, 80, 80);
cxt.fillStyle = "#FFE8E8";
cxt.fillRect(50, 50, 80, 80);