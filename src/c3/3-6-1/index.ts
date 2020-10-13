import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.beginPath();
  cxt.moveTo(100, 75);
  cxt.arc(cnv.width / 2, cnv.height / 2, 50, 30 * Math.PI / 180, 120 * Math.PI / 180, false);
  cxt.closePath();
  cxt.strokeStyle = "HotPink";
  cxt.stroke();
}());