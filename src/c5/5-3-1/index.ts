import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用font属性来定义文本的字体样式。context.font的用法与CSS中的font属性用法是一样的。

  // 语法：
  //   context.font = "font-style font-weight font-size/line-height font-family";

  // 说明：
  //   context.font的默认值为10px sans-serif。
  //   定义context.font属性之后，后面的文本都会应用这些font属性，直到将context.font被重新定义为其他属性值为止。

  var text = "helicopter";
  cxt.font = "bold 30px 微软雅黑";
  cxt.fillStyle = "purple";
  cxt.fillText(text, 30, 60);
}());