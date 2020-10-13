import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var text = "这不是六个字";
  cxt.font = "20px bold";
  var textWidth = cxt.measureText(text).width;
  var canvasWidth = cnv.width;
  var xPosition = canvasWidth / 2 - textWidth / 2;

  cxt.fillStyle = "purple";
  cxt.fillText(text, xPosition, 50);
}());