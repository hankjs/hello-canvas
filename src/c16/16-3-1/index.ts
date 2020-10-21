import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //定义一个位置固定的小球ballA
  var ballA = new Ball(cnv.width / 2, cnv.height / 2, 30);
  //获取ballA的外接矩形
  var rectA = ballA.getRect();
  var mouse = getMouse(cnv);

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //绘制ballA以及它的外接矩形
    ballA.fill(cxt);
    cxt.strokeRect(rectA.x, rectA.y, rectA.width, rectA.height);

    //定义一个位置不固定的小球ballB，小球追随鼠标
    var ballB = new Ball(mouse.x, mouse.y, 30);
    //获取ballB的外接矩形
    var rectB = ballB.getRect();

    //绘制ballB以及它的外接矩形
    ballB.fill(cxt);
    cxt.strokeRect(rectB.x, rectB.y, rectB.width, rectB.height);

    //碰撞检测
    if (checkRect(rectA, rectB)) {
      p.innerHTML = "撞上了";
    } else {
      p.innerHTML = "没撞上";
    }
  })();
}());