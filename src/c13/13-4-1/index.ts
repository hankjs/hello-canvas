import { dom, animationFrame } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //初始化变量，也就是初始化圆的x轴坐标为0
  var x = 0;
  //动画循环
  (function frame(t: number) {
    animationFrame(frame);

    //每次动画循环都先清空画布，再重绘新的图形
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //绘制圆
    cxt.beginPath();
    cxt.arc(x, 70, 20, 0, 360 * Math.PI / 180, true);
    cxt.closePath();
    cxt.fillStyle = "#6699FF";
    cxt.fill();

    //变量递增
    x += 2;
  }(0));
}());