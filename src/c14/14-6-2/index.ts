import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(cnv.width / 2, 0);
  //y轴初始速度为0，重力加速度为0.2，反弹系数为-0.8
  var vy = 0;
  var gravity = 0.2;
  var bounce = -0.8;

  (function drawFrame() {
    animationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.y += vy;
    //边界检测
    if (ball.y > cnv.height - ball.radius) {
      ball.y = cnv.height - ball.radius;
      //速度反向并且减小
      vy = vy * bounce;
    }
    ball.fill(cxt);

    vy += gravity;
  })();
}());