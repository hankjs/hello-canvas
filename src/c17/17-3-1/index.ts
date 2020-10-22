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

  //为Canvas添加鼠标按下事件（mousedown）
  cnv.addEventListener("mousedown", function () {
    //判断鼠标点击是否落在小球上，如果落在，就添加两个事件：mousemove、mouseup
    if (ball.checkMouse(mouse)) {
      document.addEventListener("mousemove", onMouseMove, false);
      document.addEventListener("mouseup", onMouseUp, false);
    }
  }, false);
  function onMouseMove() {
    //鼠标移动时，更新小球坐标
    ball.x = mouse.x;
    ball.y = mouse.y;
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