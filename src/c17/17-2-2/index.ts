import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = dom("p") as HTMLParagraphElement;

; (async function () {
  var ball = new Ball(0, cnv.height / 2, 20);
  var mouse = getMouse(cnv);
  //isMouseDown用于标识鼠标是否按下的状态
  var isMouseDown = false;
  var vx = 3;

  cnv.addEventListener("mousedown", function () {
    //判断鼠标点击坐标是否位于小球上，如果是，则isMouseDown为true
    if (ball.checkMouse(mouse)) {
      isMouseDown = true;
      alert("捕获成功");
    }
  }, false);

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //如果鼠标不是按下状态，则小球继续运动，否则就会停止
    if (!isMouseDown) {
      ball.x += vx;
    }

    ball.fill(cxt);
  })();
}());