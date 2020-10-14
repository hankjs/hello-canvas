import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用globalAlpha属性来定义Canvas环境的透明度。

  // 语法：
  // context.globalAlpha = 数值;

  cxt.globalAlpha = 0.3;
  var text = "这不是六个字";
  cxt.font = "20px bold 微软雅黑";
  cxt.fillStyle = "purple";
  cxt.fillText(text, 50, 40);

  cxt.fillStyle = "HotPink";
  cxt.fillRect(50, 50, 100, 50);
}());