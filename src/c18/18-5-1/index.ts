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
var friction = 0.95;

(function frame() {
  window.requestAnimationFrame(frame);
  cxt.clearRect(0, 0, cnv.width, cnv.height);

  //加入弹性动画
  var ax = (mouse.x - ball.x) * spring;
  var ay = (mouse.y - ball.y) * spring;
  vx += ax;
  vy += ay;
  vx *= friction;
  vy *= friction;
  ball.x += vx;
  ball.y += vy;
  ball.fill(cxt);

  //将鼠标以及小球中心连接成一条直线
  cxt.beginPath();
  cxt.moveTo(ball.x, ball.y);
  cxt.lineTo(mouse.x, mouse.y);
  cxt.stroke();
  cxt.closePath();
})();