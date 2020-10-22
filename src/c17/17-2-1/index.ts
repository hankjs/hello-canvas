import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = dom("p") as HTMLParagraphElement;

; (async function () {
  var ball = new Ball(cnv.width / 2, cnv.height / 2, 30);
  ball.fill(cxt);
  var mouse = getMouse(cnv);

  //添加鼠标移动事件
  cnv.addEventListener("mousemove", function () {
    //判断鼠标当前坐标是否处于小球内
    if (ball.checkMouse(mouse)) {
      txt.innerHTML = "鼠标移入小球";
    }
    else {
      txt.innerHTML = "鼠标移出小球";
    }
  }, false);
}());