import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 分解加速度
  // 对于加速运动，分解的是加速度，而不是速度

  // 语法：
  // ax = a * Math.cos(angle * Math.PI/180);
  // ay = a * Math.sin(angle * Math.PI/180);
  // vx += ax;
  // vy += ay;
  // object.x += vx;
  // object.y += vy;

  // 说明：
  // object.x表示物体x轴坐标，object.y表示物体y轴坐标。
  // vx表示x轴方向的速度大小，vy表示y轴方向的速度大小。
  // ax表示x轴方向加速度，ay表示y轴方向加速度。
  // a表示任意方向的加速度大小，angle表示该加速度的方向与x轴正方向的夹角。
  var ball = new Ball();
  var a = 0.2;
  //计算出x轴和y轴2个方向的加速度
  var ax = a * Math.cos(30 * Math.PI / 180);
  var ay = a * Math.sin(30 * Math.PI / 180);
  var vx = 0;
  var vy = 0;

  (function drawFrame() {
    animationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += vx;
    ball.y += vy;
    ball.fill(cxt);

    vx += ax;
    vy += ay;
  })();
}());