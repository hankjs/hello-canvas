import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 正常情况下，浏览器会按照图形绘制的顺序来依次显示每个图形，
  // 后面绘制的会覆盖前面绘制的，遵循“后来者居上”原则。

  // 在Canvas中，如果想要改变交叉图形的显示方式，
  // 我们可以使用globalCompositeOperation属性来实现。

  cxt.globalCompositeOperation = "xor";

  //绘制矩形
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 60, 60);
  //绘制圆形
  cxt.beginPath();
  cxt.arc(100, 100, 40, 0, Math.PI * 2, true);
  cxt.closePath();
  cxt.fillStyle = "LightSkyBlue";
  cxt.fill();
}());