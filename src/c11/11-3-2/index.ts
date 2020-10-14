import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const cnv2 = dom("canvas2") as HTMLCanvasElement;
const cxt2 = cnv2.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.fillStyle = "HotPink";
  cxt.translate(30, 30);
  cxt.fillRect(0, 0, 100, 50);

  cxt.fillStyle = "LightSkyBlue ";
  cxt.translate(60, 60);
  cxt.fillRect(0, 0, 100, 50);


  cxt2.save();
  cxt2.fillStyle = "HotPink";
  cxt2.translate(30, 30);
  cxt2.fillRect(0, 0, 100, 50);
  cxt2.restore();

  cxt2.fillStyle = "LightSkyBlue ";
  cxt2.translate(60, 60);
  cxt2.fillRect(0, 0, 100, 50);
}());