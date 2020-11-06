import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

; (async function () {
  var ball = new Ball(cnv.width / 2, cnv.height / 2);
  var targetRadius = 36;
  var easing = 0.05;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    var vRadius = (targetRadius - ball.radius) * easing;
    ball.radius += vRadius;

    ball.fill(cxt);
  })();
}());