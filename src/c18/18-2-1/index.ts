import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

; (async function () {
  var ball = new Ball(0, cnv.height / 2);
  //定义终点的x轴坐标
  var targetX = cnv.width * (3 / 4);
  //定义缓动系数
  var easing = 0.05;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    var vx = (targetX - ball.x) * easing;
    ball.x += vx;

    ball.fill(cxt);
  })();
}());