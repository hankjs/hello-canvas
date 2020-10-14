import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {

  //实例化一个小球，球心坐标、半径以及颜色都采用默认值
  var ball = new Ball();
  var speed = 2;
  //速度方向与x轴正方向角度为30°
  var vx = speed * Math.cos(30 * Math.PI / 180);
  var vy = speed * Math.sin(30 * Math.PI / 180);

  (function drawFrame() {
    animationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += vx;
    ball.y += vy;

    ball.fill(cxt);
  })();
}());