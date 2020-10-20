import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey } from "@/utils/dom";
import { getRandomColor } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //balls表示用来存放小球的数组
  var balls = [];
  //n表示小球数量
  var n = 50;

  //生成n个小球，其中小球的color、vx、vy取的都是随机值
  for (var i = 0; i < n; i++) {
    var ball = new Ball(cnv.width / 2, cnv.height / 2, 5, getRandomColor());
    ball.vx = 3;
    ball.vy = (Math.random() * 2 - 1) * 3;
    balls.push(ball);
  }

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //使用forEach()函数遍历数组balls
    balls.forEach(function (ball) {
      //当小球移出画布时，会在中心位置重新生成
      if (ball.x < -ball.radius ||
        ball.x > cnv.width + ball.radius ||
        ball.y < -ball.radius ||
        ball.y > cnv.height + ball.radius) {
        ball.x = cnv.width / 2;
        ball.y = cnv.height / 2;
        //随机产生3~4之间的任意数
        ball.vx = Math.random() + 3;
        //随机产生-3~3之间的任意数
        ball.vy = (Math.random() * 2 - 1) * 3;
      }
      ball.fill(cxt);

      ball.x += ball.vx;
      ball.y += ball.vy;
    })
  })();
}());