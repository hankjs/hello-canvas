import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.lineWidth = 5;
  cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, false);
  cxt.stroke();
}());