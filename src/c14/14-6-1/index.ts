import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  // 说起重力，有一个东西不得不提，那就是：重力加速度。
  // 重力加速度是加速度中比较特殊的一种。
  // 重力加速度其实是由两个物体间的引力形成的

  // 在地球上，任何一个物体从空中下落到地面，它都有一个垂直向下的加速度。
  // 对于重力引起的运动，我们姑且可以看成是沿着y轴正方向的加速运动。
  // 语法：
  // vy += gravity;
  // object.y += vy;

  //初始化数据
  var ball = new Ball(0, cnv.height);
  var vx = 4;
  var vy = -5;
  var gravity = 0.2;

  (function drawFrame() {
    animationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    p.innerText = `ball.x: ${ball.x}, ball.y: ${ball.y}`;

    ball.x += vx;
    ball.y += vy;
    ball.fill(cxt);

    //变量递增
    vy += gravity;
  })();
}());