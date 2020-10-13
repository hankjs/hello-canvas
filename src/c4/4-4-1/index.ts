import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用lineJoin属性定义两个线条交接处的样式。
  // 语法：
  //   cxt.lineJoin = "属性值";
  // 说明：
  //   miter     默认值，尖角
  //   round     圆角
  //   bevel     斜角
  // 区别：
  // （1）miter样式：线段在交接处延伸直至交于一点，为默认值。
  // （2）round样式：连接处是一个圆角，圆角所在圆的直径等于线宽长度。
  // （3）bevel样式：连接处是一个斜角，斜角所在正方形的对角线长等于线宽长度。

  cxt.moveTo(50, 50);
  cxt.lineTo(100, 50);
  cxt.lineTo(50, 100);
  cxt.lineTo(100, 100);
  cxt.lineWidth = 12;
  cxt.lineJoin = "miter";
  cxt.stroke();
}());