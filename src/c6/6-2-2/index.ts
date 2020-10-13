import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var image = dom("pic") as HTMLImageElement;
  cxt.drawImage(image, 40, 20);
}());