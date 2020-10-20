import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  // 摩擦力，指的是阻碍物体相对运动的力。
  // 其中摩擦力的方向与物体相对运动的方向相反。
  // 摩擦力只会改变速度的大小而不会改变它的方向。
  // 换句话说，摩擦力只能将物体的速度降至0，
  // 但它无法让物体掉头往相反的方向移动

  // 语法：
  // vx *= friction;
  // vy *= friction;
  // object.x += vx;
  // object.y += vy;

  //初始化数据
  var ball = new Ball(0, cnv.height / 2);
  //初始化x轴方向速度为2，摩擦系数为0.95
  var vx = 8;
  var friction = 0.95;

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += vx;
    ball.fill(cxt);

    //变量改变
    vx *= friction;
  })();
}());