import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(0, cnv.height / 2);
  var vx = 2;

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += vx;
    //当小球"完全超出"右边界时
    if (ball.x > cnv.width + ball.radius) {
      ball.x = -ball.radius;
    }

    ball.fill(cxt);
  })();
}());