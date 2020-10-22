import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(cnv.width / 2, cnv.height / 2, 20);
  ball.fill(cxt);
  var mouse = getMouse(cnv);
  //初始化2个变量：dx和dy
  var dx = 0, dy = 0;

  cnv.addEventListener("mousedown", function () {
    if (ball.checkMouse(mouse)) {
      //dx为鼠标与球心的水平偏移量
      dx = mouse.x - ball.x;
      //dy为鼠标与球心的垂直偏移量
      dy = mouse.y - ball.y;
      document.addEventListener("mousemove", onMouseMove, false);
      document.addEventListener("mouseup", onMouseUp, false);
    }
  }, false);
  function onMouseMove() {
    //更新小球坐标
    ball.x = mouse.x - dx;
    ball.y = mouse.y - dy;
  }
  function onMouseUp() {
    //鼠标松开时，移除鼠标松开事件：mouseup（自身事件）
    document.removeEventListener("mouseup", onMouseUp, false);
    //鼠标松开时，移除鼠标移动事件：mousemove
    document.removeEventListener("mousemove", onMouseMove, false);
  }

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.fill(cxt);
  })();
}());