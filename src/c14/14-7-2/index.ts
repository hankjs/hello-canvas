import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball();
  var speed = 8;
  var vx = speed * Math.cos(30 * Math.PI / 180);
  var vy = speed * Math.sin(30 * Math.PI / 180);
  var friction = 0.95;

  (function drawFrame() {
    animationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += vx;
    ball.y += vy;
    ball.fill(cxt);

    //变量改变
    vx *= friction;
    vy *= friction;
  })();
}());