import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用textAlign属性来定义文本水平方向的对齐方式。

  // 语法：
  //   cxt.textAlign = "属性值";

  // 说明：
  //   context.font的默认值为10px sans-serif。
  //   定义context.font属性之后，后面的文本都会应用这些font属性，直到将context.font被重新定义为其他属性值为止。

  //在横坐标150处绘制一条竖线
  cxt.strokeStyle = "purple";
  cxt.moveTo(150, 0);
  cxt.lineTo(150, 200);
  cxt.stroke();

  cxt.font = "15px Arial";

  cxt.textAlign = "start";
  cxt.fillText("textAlign取值为start", 150, 30);
  cxt.textAlign = "left";
  cxt.fillText("textAlign取值为left", 150, 60);
  cxt.textAlign = "end";
  cxt.fillText("textAlign取值为end", 150, 90);
  cxt.textAlign = "right";
  cxt.fillText("textAlign取值为right", 150, 120);
  cxt.textAlign = "center";
  cxt.fillText("textAlign取值为center", 150, 150);
}());