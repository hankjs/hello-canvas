import { Ball } from "@/objects/Ball";
import * as tools from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = tools.dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = tools.dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var bigBall = new Ball(cnv.width / 2, cnv.height / 2, 15, "# FF6699");
  var smallBall = new Ball(cnv.width / 2, cnv.height / 2, 12, "#66CCFF");
  var mouse = tools.getMouse(cnv);
  var easing = 0.05;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //第1个小球跟随鼠标移动
    var vx1 = (mouse.x - bigBall.x) * easing;
    var vy1 = (mouse.y - bigBall.y) * easing;
    bigBall.x += vx1;
    bigBall.y += vy1;
    bigBall.fill(cxt);

    //第2个小球跟随第1个小球移动
    var vx2 = (bigBall.x - smallBall.x) * easing;
    var vy2 = (bigBall.y - smallBall.y) * easing;
    smallBall.x += vx2;
    smallBall.y += vy2;
    smallBall.fill(cxt);
  })();
}());