import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const txt = dom("p") as HTMLParagraphElement;

; (async function () {
  var ball = new Ball(cnv.width / 2, cnv.height / 2, 20);
  ball.fill(cxt);
  var mouse = getMouse(cnv);

  var isMouseDown = false;
  var dx = 0, dy = 0;
  //oldX和oldY用于存储小球旧的坐标
  var oldX = 0, oldY = 0;
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

    //加入边界限制
    //当小球碰到左边界时
    if (ball.x < ball.radius) {
      ball.x = ball.radius;
      //当小球碰到右边界时
    } else if (ball.x > cnv.width - ball.radius) {
      ball.x = cnv.width - ball.radius;
    }
    //当小球碰到上边界时
    if (ball.y < ball.radius) {
      ball.y = ball.radius;
      //当小球碰到下边界时
    } else if (ball.y > cnv.height - ball.radius) {
      ball.y = cnv.height - ball.radius;
    }
  }
  function onMouseUp() {
    //鼠标松开时，isMouseDown设置为false
    isMouseDown = false;
    document.removeEventListener("mouseup", onMouseUp, false);
    document.removeEventListener("mousemove", onMouseMove, false);
  }

  (function drawFrame() {
    animationFrame(drawFrame);
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
      //边界反弹
      //碰到右边界
      if (ball.x > cnv.width - ball.radius) {
        ball.x = cnv.width - ball.radius;
        vx = -vx;
        //碰到左边界
      } else if (ball.x < ball.radius) {
        ball.x = ball.radius;
        vx = -vx;
      }
      //碰到下边界
      if (ball.y > cnv.height - ball.radius) {
        ball.y = cnv.height - ball.radius;
        vy = -vy;
        //碰到上边界
      } else if (ball.y < ball.radius) {
        ball.y = ball.radius;
        vy = -vy;
      }
    }

    ball.fill(cxt);
  })();
}());