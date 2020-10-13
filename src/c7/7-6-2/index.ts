import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var text = "这不是六个字";
  cxt.font = "bold 20px 微软雅黑";
  cxt.strokeStyle = "HotPink";
  cxt.strokeText(text, 10, 30);

  cxt.translate(50, 50);
  cxt.strokeText(text, 10, 30);
}());