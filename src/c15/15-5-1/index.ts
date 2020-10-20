import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  var ball = new Ball(cnv.width / 2, cnv.height / 2);
  //随机产生-3~3之间的任意数，作为vx、vy的值
  var vx = (Math.random() * 2 - 1) * 3;
  var vy = (Math.random() * 2 - 1) * 3;

  (function drawFrame() {
    animationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += vx;
    ball.y += vy;

    //边界检测
    //碰到左边界
    if (ball.x < ball.radius) {
      ball.x = ball.radius;
      vx = -vx;
      //碰到右边界
    } else if (ball.x > cnv.width - ball.radius) {
      ball.x = cnv.width - ball.radius;
      vx = -vx;
    }
    //碰到上边界
    if (ball.y < ball.radius) {
      ball.y = ball.radius;
      vy = -vy;
      //碰到下边界
    } else if (ball.y > cnv.height - ball.radius) {
      ball.y = cnv.height - ball.radius;
      vy = -vy;
    }

    ball.fill(cxt);
  })();
}());