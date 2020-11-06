import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

var ball = new Ball(0, cnv.height / 2);
var targetX = cnv.width / 2;
var spring = 0.06;
var vx = 0;
var friction = 0.95;

(function frame() {
  window.requestAnimationFrame(frame);
  cxt.clearRect(0, 0, cnv.width, cnv.height);

  var ax = (targetX - ball.x) * spring;
  vx += ax;
  vx *= friction;
  ball.x += vx;

  ball.fill(cxt);
})();