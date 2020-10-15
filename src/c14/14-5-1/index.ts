import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 加速运动，指的是方向相同、速度大小变化的运动。
  // 速度递增的是加速运动，速度递减的是减速运动。

  // 加速运动分为两种，即匀加速运动和变加速运动。
  // 说起加速运动，有一个东西我们不得不提，
  // 那就是加速度。加速度，指的是单位时间内速度改变的矢量。

  // 语法：
  // vx += ax;
  // vy += ay;
  // object.x += vx;
  // object.y += vy;

  // 说明：
  // object.x表示物体x轴坐标，object.y表示物体y轴坐标。

  // vx表示x轴方向的速度大小，vy表示y轴方向的速度大小。

  // ax表示x轴方向加速度，ay表示y轴方向加速度。
  // 当ax大于0时，物体向右做匀加速运动；当ax小于0时，物体向左做匀加速运动；
  // 当ax等于0时，物体按原来速度运动。ay跟ax是一样的。
  //实例化一个小球
  var ball = new Ball(0, cnv.height / 2);
  //初始化x轴速度以及加速度
  var vx = 0;
  var ax = 0.2;

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += vx;
    ball.fill(cxt);

    vx += ax;
  })();
}());