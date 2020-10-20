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
  var n = 50;

  //生成n个小球，其中小球的color、vx、vy都是随机值
  for (var i = 0; i < n; i++) {
    //球心坐标为Canvas中心，color为随机颜色值
    var ball = new Ball(cnv.width / 2, cnv.height / 2, 5, getRandomColor());
    //ball.vx和ball.vy取值都是：-1~1之间的任意数
    ball.vx = Math.random() * 2 - 1;
    ball.vy = Math.random() * 2 - 1;
    //添加到数组balls中
    balls.push(ball);
  }

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //使用forEach()函数遍历数组balls
    balls.forEach(function (ball) {
      //边界检测，使得小球完全移出画布后会在中心位置重新生成
      if (ball.x < -ball.radius ||
        ball.x > cnv.width + ball.radius ||
        ball.y < -ball.radius ||
        ball.y > cnv.height + ball.radius) {
        ball.x = cnv.width / 2;
        ball.y = cnv.height / 2;
        ball.vx = Math.random() * 2 - 1;
        ball.vy = Math.random() * 2 - 1;
      }
      ball.fill(cxt);

      ball.x += ball.vx;
      ball.y += ball.vy;
    })
  })();
}());