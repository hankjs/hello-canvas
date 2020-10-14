import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var text = "这不是六个字";
  cxt.font = "bold 25px 微软雅黑";
  cxt.strokeStyle = "purple";
  cxt.strokeText(text, 30, 50);

  cxt.fillStyle = "purple";
  cxt.fillText(text, 30, 100);
}());