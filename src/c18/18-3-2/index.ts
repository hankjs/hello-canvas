import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(cnv.width / 2, cnv.height / 2, 30, "rgba(255,102,153,1.0)");
  var opacity = 1.0;
  var targetOpacity = 0.0;
  var easing = 0.05;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    var v = (targetOpacity - opacity) * easing;
    opacity += v;
    ball.color = "rgba(255,102,153," + opacity + ")";

    ball.fill(cxt);
  })();
}());