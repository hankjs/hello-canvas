import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.moveTo(75, 40);
  cxt.bezierCurveTo(75, 37, 70, 25, 50, 25);
  cxt.stroke();
  await sleep(1000);
  cxt.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  cxt.stroke();
  await sleep(1000);
  cxt.bezierCurveTo(20, 80, 40, 102, 75, 120);
  cxt.stroke();
  await sleep(1000);
  cxt.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  cxt.stroke();
  await sleep(1000);
  cxt.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  cxt.stroke();
  await sleep(1000);
  cxt.bezierCurveTo(85, 25, 75, 37, 75, 40);
  cxt.stroke();
}());