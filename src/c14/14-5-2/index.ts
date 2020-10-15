import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //实例化一个小球
  var ball = new Ball(0, cnv.height / 2);
  //初始化x轴速度以及加速度
  var vx = 8;
  var ax = -0.2;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += vx;
    ball.fill(cxt);

    vx += ax;
  })();
}());