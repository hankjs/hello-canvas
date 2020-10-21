import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkCircle, checkRect } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //定义一个位置固定的小球
  var ballA = new Ball(cnv.width / 2, cnv.height / 2, 20, "#FF6699");
  var mouse = getMouse(cnv);

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //定义一个位置不固定的小球，小球追随鼠标
    var ballB = new Ball(mouse.x, mouse.y, 20, "#66CCFF");

    //碰撞检测
    if (checkCircle(ballB, ballA)) {
      p.innerHTML = "撞上了";
    } else {
      p.innerHTML = "没撞上";
    }

    ballA.fill(cxt);
    ballB.fill(cxt);
  })();
}());