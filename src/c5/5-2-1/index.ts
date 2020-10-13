import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用strokeText()方法来绘制“描边文本”。“描边文本”是指空心的文本。

  // 语法：
  //   strokeText(text , x , y , maxWidth)

  // 说明：
  //   参数text是一个字符串文本。
  //   参数x表示文本的x坐标，也就是文本最左边的坐标。
  //   参数y表示文本的y坐标，也就是文本最下边的坐标（注意是最下边，而不是最上边）。
  //   参数maxWidth为可选参数，表示允许的最大文本的宽度（单位为px）。如果文本宽度超出maxWidth值，文本会被压缩至maxWidth值的宽度。

  var text = "这不是六个字";
  cxt.font = "bold 24px 微软雅黑";
  cxt.strokeStyle = "purple";
  cxt.strokeText(text, 30, 60);
}());