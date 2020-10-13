import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用textBaseline属性来定义文本垂直方向的对齐方式。

  // 语法：
  //   cxt.textBaseline = "属性值";

  //在纵坐标100处绘制一条横线
  cxt.strokeStyle = "purple";
  cxt.moveTo(0, 100);
  cxt.lineTo(300, 100);
  cxt.stroke();

  cxt.font = "20px Arial";
  cxt.textBaseline = "alphabetic";
  cxt.fillText("alphabetic", 10, 100);
  cxt.textBaseline = "top";
  cxt.fillText("top", 110, 100);
  cxt.textBaseline = "middle";
  cxt.fillText("middle", 160, 100);
  cxt.textBaseline = "bottom";
  cxt.fillText("bottom", 230, 100);
}());