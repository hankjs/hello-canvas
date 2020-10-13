import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //定义文字
  var text = "这不是六个字";
  cxt.font = "bold 48px 微软雅黑";

  //定义阴影
  cxt.shadowOffsetX = 5;
  cxt.shadowOffsetY = 5;
  cxt.shadowColor = "LightSkyBlue ";
  cxt.shadowBlur = 10;

  //填充文字
  cxt.fillStyle = "HotPink";
  cxt.fillText(text, 10, 90);
}());