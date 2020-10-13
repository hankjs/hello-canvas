import { dom } from "@/utils/dom";
import { createSector } from "@/utils/createSector";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  createSector(cxt, cnv.width / 2, cnv.height / 2, 50, 30, 120);
  cxt.fillStyle = "HotPink";
  cxt.fill();
  createSector(cxt, cnv.width / 2, cnv.height / 2, 50, 30 + 180, 120 + 180);
  cxt.strokeStyle = "HotPink";
  cxt.stroke();
}());