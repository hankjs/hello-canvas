import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkRect } from "@/utils/tools";

const canvas = dom("canvas") as HTMLCanvasElement;
const cxt = canvas.getContext("2d") as CanvasRenderingContext2D;
const txt = dom("p") as HTMLParagraphElement;

; (async function () {
  //初始化数据
  var ball = new Ball(canvas.width / 2, canvas.height / 2, 20);
  var mouse = getMouse(canvas);
  var isMouseDown = false;
  //随机产生-3~3之间的任意数，作为vx、vy的值
  var vx = (Math.random() * 2 - 1) * 3;
  var vy = (Math.random() * 2 - 1) * 3;

  //为画布添加mousedown事件
  canvas.addEventListener("mousedown", function () {
    var rect = ball.getRect();
    if (ball.checkMouse(mouse)) {
      isMouseDown = !isMouseDown;
      console.log("捕获成功");
    }
  }, false);

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    cxt.clearRect(0, 0, canvas.width, canvas.height);

    //如果鼠标不是按下状态，则小球继续运动，否则就会停止
    if (!isMouseDown) {
      ball.x += vx;
      ball.y += vy;

      //边界检测
      //碰到左边界
      if (ball.x < ball.radius) {
        ball.x = ball.radius;
        vx = -vx;
      }
      //碰到右边界
      else if (ball.x > canvas.width - ball.radius) {
        ball.x = canvas.width - ball.radius;
        vx = -vx;
      }
      //碰到上边界
      if (ball.y < ball.radius) {
        ball.y = ball.radius;
        vy = -vy;
      }
      //碰到下边界
      else if (ball.y > canvas.height - ball.radius) {
        ball.y = canvas.height - ball.radius;
        vy = -vy;
      }
    }

    ball.fill(cxt);
  })();
}());