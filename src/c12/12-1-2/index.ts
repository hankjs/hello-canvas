import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //定义文字
  var text = "这不是六个字";
  cxt.font = "bold 60px 微软雅黑";

  //定义阴影
  cxt.shadowOffsetX = 5;
  cxt.shadowOffsetY = 5;
  cxt.shadowColor = "#66CCFF";
  cxt.shadowBlur = 10;

  //填充文字
  cxt.fillStyle = "#FF6699";
  cxt.fillText(text, 10, 90);

  (dom("btn") as HTMLButtonElement).onclick = function () {
    window.location.href = cnv.toDataURL("image/png");
  }
}());