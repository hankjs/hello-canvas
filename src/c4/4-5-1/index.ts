import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用setLineDash()方法来定义线条的虚实样式。

  // 语法：
  //   cxt.setLineDash(array);

  // 说明：
  //   数组[10,5]表示的是“10px实线”和“5px空白”重复拼凑组合而成的线型。
  //   同理，
  //   数组[10,5,5,5]表示的是“10px实线、5px空白、5px实线、5px空白”重复拼凑组合而成的线型，以此类推。

  // 需要注意的是， Google、Firefox浏览器支持setLineDash()方法，但是IE浏览器却不支持。

  cxt.strokeStyle = "red";
  cxt.setLineDash([10, 5]);
  cxt.strokeRect(50, 50, 80, 80);
}());