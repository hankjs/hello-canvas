import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用lineWidth属性来定义线条的宽度。
  // 语法：
  //   context.lineWidth = 整数;
  // 说明：
  //   lineWidth属性取值为整数，默认值为1，默认单位为px。

  //lineWidth值为5
  cxt.lineWidth = 5;
  cxt.moveTo(20, 20);
  cxt.lineTo(180, 20);
  cxt.stroke();
  await sleep(500);

  //lineWidth值为10
  cxt.lineWidth = 10;
  cxt.moveTo(20, 70);
  cxt.lineTo(180, 70);
  cxt.stroke();
  await sleep(500);

  //lineWidth值为15
  cxt.lineWidth = 15;
  cxt.moveTo(20, 120);
  cxt.lineTo(180, 120);
  cxt.stroke();
}());