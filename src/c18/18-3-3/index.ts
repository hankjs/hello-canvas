import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(cnv.width / 2, cnv.height / 2, 30);
  ball.fill(cxt);
  var easing = 0.02;

  var red = 255;
  var green = 0;
  var blue = 0;
  var targetRed = 10;
  var targetGreen = 255;
  var targetBlue = 55;


  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    var vRed = (targetRed - red) * easing;
    var vGreen = (targetGreen - green) * easing;
    var vBlue = (targetBlue - blue) * easing;

    red += vRed;
    green += vGreen;
    blue += vBlue;

    var color = "rgba(" + Math.floor(red) + "," + Math.floor(green) + ", " + Math.floor(blue) + "," + "1.0)";
    ball.color = color;

    ball.fill(cxt);
  })();
}());