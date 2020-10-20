import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(0, cnv.height);
  var vx = 3;
  var vy = -6;
  var gravity = 0.2;
  var bounce = -0.75;

  (function drawFrame() {
       animationFrame(drawFrame);
       cxt.clearRect(0, 0, cnv.width, cnv.height);

       ball.x += vx;
       ball.y += vy;

       //边界检测
       if ((ball.y + ball.radius) > cnv.height) {
              ball.y = cnv.height - ball.radius;
              vy = vy * bounce;
       }
       ball.fill(cxt);

       //变量递增
       vy += gravity;
  })();
}());