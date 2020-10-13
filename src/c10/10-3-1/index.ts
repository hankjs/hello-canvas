import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用isPointInPath()方法来判断某一个点是否存在于当前的路径中。
  // 语法：
  //   cxt.isPointInPath(x , y);
  // 注意，isPointInPath()不支持Canvas自带的两个方法：
  //   strokeRect()、fillRect()。
  // 如果想要使用strokeRect()和fillRect()，请使用rect()方法来代替。
  cxt.strokeStyle = "HotPink";
  cxt.rect(50, 50, 80, 80);
  cxt.stroke();
  if (cxt.isPointInPath(100, 50)) {
    alert("点(100,100)存在于当前路径中");
  }
  // 上面代码只在IE浏览器中运行中有效果，
  // 但是在Google浏览器和Firefox中不会弹出对话框。
  // 实际上，当我们想要使用isPointInPath()方法判断某个点是否位于一条直线上时，在Goole和Firefox浏览器中都是无法实现的。不过可以使用isPointInPath()方法判断某个点是否位于一个图形（如矩形、圆形等）上面。
}());