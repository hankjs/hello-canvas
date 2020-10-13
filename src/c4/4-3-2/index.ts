import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.moveTo(50, 50);
  cxt.lineTo(100, 50);
  cxt.lineTo(50, 100);
  cxt.lineTo(100, 100);
  cxt.lineWidth = 12;
  cxt.lineCap = "round";
  cxt.stroke();
}());