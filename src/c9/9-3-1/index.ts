import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 阴影，在Web开发中，也是一种很常见的效果。
  // 在Canvas中，我们可以使用阴影属性来为图形或文字添加阴影效果。
  // 阴影，也分为两种，即图形阴影和文字阴影。

  //设置左上方向的阴影
  cxt.shadowOffsetX = -5;
  cxt.shadowOffsetY = -5;
  cxt.shadowColor = "LightSkyBlue ";
  cxt.shadowBlur = 1;
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  //设置右下方向的阴影
  cxt.shadowOffsetX = 5;
  cxt.shadowOffsetY = 5;
  cxt.shadowColor = "LightSkyBlue ";
  cxt.shadowBlur = 10;
  cxt.fillStyle = "HotPink";
  cxt.fillRect(100, 30, 50, 50);

}());