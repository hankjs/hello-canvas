import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey } from "@/utils/dom";
import { getRandomColor } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //定义一个用来存放小球的数组balls
  var balls = [];
  //n表示小球数量
  var n = 10;

  //生成n个小球，其中小球的color、vx、vy都是随机的
  for (var i = 0; i < n; i++) {
    var ball = new Ball(cnv.width / 2, cnv.height / 2, 8, getRandomColor());
    //随机产生-3~3之间的任意数，作为vx、vy的值
    ball.vx = (Math.random() * 2 - 1) * 3;
    ball.vy = (Math.random() * 2 - 1) * 3;
    //添加到数组balls中
    balls.push(ball);
  }

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //使用forEach()函数遍历数组balls
    balls.forEach(function (ball) {
      ball.x += ball.vx;
      ball.y += ball.vy;

      //边界检测
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

      ball.fill(cxt);
    })
  })();
}());