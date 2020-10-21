import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkCircle, checkRect } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //定义两个小球：ballA和ballB
  var ballA = new Ball(0, cnv.height / 2, 12, "#FF6699");
  var ballB = new Ball(cnv.width, cnv.height / 2, 12, "#66CCFF");
  //定义小球x轴速度
  var vx = 2;

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ballA.x += vx;
    ballB.x += -vx;

    //如果发生碰撞，则速度取反
    if (checkCircle(ballB, ballA)) {
      vx = -vx;
    }

    ballA.fill(cxt);
    ballB.fill(cxt);
  })();
}());