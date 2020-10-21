import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkCircle, checkRect, getRandomColor } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  var n = 8;
  var balls: Ball[] = [];

  //生成n个小球，小球的x、y、color、vx、vy属性取的都是随机值
  for (var i = 0; i < n; i++) {
    let ball = new Ball();
    ball.x = Math.random() * cnv.width;
    ball.y = Math.random() * cnv.height;
    ball.radius = 10;
    ball.color = getRandomColor();
    ball.vx = Math.random() * 6 - 3;
    ball.vy = Math.random() * 6 - 3;
    //添加到数组balls中
    balls.push(ball);
  }

  //碰撞检测（小球与小球）
  function checkCollision(ballA: Ball, i: number) {
    for (var j = i + 1; j < balls.length; j++) {
      var ballB = balls[j];
      //如果两个小球碰撞，则碰撞后vx、vy都取相反值
      if (checkCircle(ballB, ballA)) {
        ballA.vx = -ballA.vx;
        ballA.vy = -ballA.vy;
        ballB.vx = -ballB.vx;
        ballB.vy = -ballB.vy;
      }
    }
  }

  //边界检测（小球与边界）
  function checkBorder(ball: Ball) {
    //碰到左边界
    if (ball.x < ball.radius) {
      ball.x = ball.radius;
      ball.vx = -ball.vx;
      //碰到右边界
    } else if (ball.x > cnv.width - ball.radius) {
      ball.x = cnv.width - ball.radius;
      ball.vx = -ball.vx;
    }
    //碰到上边界
    if (ball.y < ball.radius) {
      ball.y = ball.radius;
      ball.vy = -ball.vy;
      //碰到下边界
    } else if (ball.y > cnv.height - ball.radius) {
      ball.y = cnv.height - ball.radius;
      ball.vy = -ball.vy;
    }
  }

  //绘制小球
  function drawBall(ball: Ball) {
    ball.fill(cxt);
    ball.x += ball.vx;
    ball.y += ball.vy;
  }

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //碰撞检测
    balls.forEach(checkCollision);
    //边界检测
    balls.forEach(checkBorder);
    //绘制小球
    balls.forEach(drawBall);

  })();
}());