import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.moveTo(75, 25);
  cxt.stroke();
  await sleep(1000);
  cxt.quadraticCurveTo(25, 25, 25, 62);
  cxt.stroke();
  await sleep(1000);
  cxt.quadraticCurveTo(25, 100, 50, 100);
  cxt.stroke();
  await sleep(1000);
  cxt.quadraticCurveTo(50, 120, 30, 125);
  cxt.stroke();
  await sleep(1000);
  cxt.quadraticCurveTo(60, 120, 65, 100);
  cxt.stroke();
  await sleep(1000);
  cxt.quadraticCurveTo(125, 100, 125, 62);
  cxt.stroke();
  await sleep(1000);
  cxt.quadraticCurveTo(125, 25, 75, 25);
  cxt.stroke();
}());