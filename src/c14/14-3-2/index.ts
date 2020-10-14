import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getMouse } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，圆周运动共有两种形式，即正圆运动和椭圆运动。
  // 语法：
  // x = centerX + Math.cos(angle)*radius;
  // y = centerY + Math.sin(angle)*radius;

  // 说明：
  // （centerX，centerY）表示圆心坐标，
  //   angle是一个弧度制的角度，radius是圆的半径。
  //   从上面两条公式可以得到当前点的坐标。
  //实例化一个小球，中心坐标为（100，25），半径、颜色都取默认值

  var ball = new Ball(100, 25);
  var centerX = cnv.width / 2;
  var centerY = cnv.height / 2;
  var radius = 50;
  var angle = 0;

  (function frame() {
       animationFrame(frame);
       cxt.clearRect(0, 0, cnv.width, cnv.height);
       //绘制圆形
       cxt.beginPath();
       cxt.arc(centerX, centerY, 50, 0, 360 * Math.PI / 180, false);
       cxt.closePath();
       cxt.stroke();

       //计算小球坐标
       ball.x = centerX + Math.cos(angle) * radius;
       ball.y = centerY + Math.sin(angle) * radius;
       ball.fill(cxt);

       //角度递增
       angle += 0.05;
  })();

}());