import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(0, cnv.height / 2);
  var targetX = cnv.width / 2;
  var spring = 0.02;
  var vx = 0;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    var ax = (targetX - ball.x) * spring;
    vx += ax;
    ball.x += vx;

    ball.fill(cxt);
  })();
}());