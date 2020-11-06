import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(cnv.width / 2, cnv.height / 2, 15, "#FF6699");
  var mouse = tools.getMouse(cnv);
  var easing = 0.05;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    var vx = (mouse.x - ball.x) * easing;
    var vy = (mouse.y - ball.y) * easing;
    ball.x += vx;
    ball.y += vy;

    ball.fill(cxt);
  })();
}());