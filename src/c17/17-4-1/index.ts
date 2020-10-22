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

  var isMouseDown = false;
  var dx = 0, dy = 0;
  //oldX和oldY用于存储小球旧的坐标
  var oldX: number = 0, oldY: number = 0;
  //初始速度vx和vy都为0
  var vx = 0, vy = 0;

  //添加mousedown事件
  cnv.addEventListener("mousedown", function () {
    //判断鼠标点击是否落在小球上
    if (ball.checkMouse(mouse)) {
      //鼠标按下小球时，isMouseDown设置为true
      isMouseDown = true;
      //鼠标按下小球时，将当前鼠标位置赋值给oldX和oldY
      oldX = ball.x;
      oldY = ball.y;
      dx = mouse.x - ball.x;
      dy = mouse.y - ball.y;
      document.addEventListener("mousemove", onMouseMove, false);
      document.addEventListener("mouseup", onMouseUp, false);
    }
  }, false);
  function onMouseMove() {
    //鼠标移动时，更新小球坐标
    ball.x = mouse.x - dx;
    ball.y = mouse.y - dy;
  }
  function onMouseUp() {
    //鼠标松开时，isMouseDown设置为false
    isMouseDown = false;
    document.removeEventListener("mouseup", onMouseUp, false);
    document.removeEventListener("mousemove", onMouseMove, false);
  }

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    if (isMouseDown) {
      //如果isMouseDown为true，用当前小球的位置减去上一帧的坐标
      vx = ball.x - oldX;
      vy = ball.y - oldY;

      //如果isMouseDown为true，更新oldX和oldY为当前小球中心坐标
      oldX = ball.x;
      oldY = ball.y;
    } else {
      //如果isMouseDown为false，小球沿着抛掷方向运动
      ball.x += vx;
      ball.y += vy;
    }

    ball.fill(cxt);
  })();
}());