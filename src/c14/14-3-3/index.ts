import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 椭圆和正圆的不同之处在于：正圆的半径在x轴和y轴两个方向上是相同的，而椭圆的半径在x轴和y轴两个方向上是不同的。
  // 语法：
  // x = centerX + Math.cos(angle)*radiusX;
  // y = centerY + Math.sin(angle)*radiusY;

  // 说明：
  // （centerX，centerY）表示圆心坐标，angle是一个弧度制的角度，
  //   radiusX表示椭圆的x轴半径，radiusY表示椭圆的y轴半径。
  //   从上面两条公式可以得到当前点的坐标。

  var ball = new Ball(100, 25);
  var centerX = cnv.width / 2;
  var centerY = cnv.height / 2;
  var radiusX = 60;
  var radiusY = 40;
  var angle = 0;

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //计算小球坐标
    ball.x = centerX + Math.cos(angle) * radiusX;
    ball.y = centerY + Math.sin(angle) * radiusY;
    ball.fill(cxt);

    //角度递增
    angle += 0.05;
  })();

}());