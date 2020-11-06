import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

var ball = new Ball(cnv.width / 2, cnv.height / 2);
var mouse = tools.getMouse(cnv);

var targetX = cnv.width / 2;
var spring = 0.02;
var vx = 0;
var vy = 0;
var f = 0.95;

(function frame() {
  window.requestAnimationFrame(frame);
  cxt.clearRect(0, 0, cnv.width, cnv.height);

  var ax = (mouse.x - ball.x) * spring;
  var ay = (mouse.y - ball.y) * spring;

  vx += ax;
  vy += ay;

  vx *= f;
  vy *= f;

  ball.x += vx;
  ball.y += vy;

  ball.fill(cxt);
})();