import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  // 边界限制，指的是通过边界检测的办法来限制物体的运动范围，
  // 使得其无法超出这个运动范围，而只限在范围里面运动。

  // 语法：
  // if (ball.x < ball.radius) {
  //    //小球"碰到"左边界时
  // } else if (ball.x > cnv.width - ball.radius) {
  //    //小球"碰到"右边界时
  // }
  // if (ball.y < ball.radius) {
  //    //小球"碰到"上边界时
  // } else if (ball.y > cnv.height - ball.radius) {
  //    //小球"碰到"下边界时
  // }

  //初始化数据
  var ball = new Ball(cnv.width / 2, cnv.height / 2);
  ball.fill(cxt);
  var key = getKey();

  //添加键盘事件
  window.addEventListener("keydown", function (e) {
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //根据key.direction的值，判断物体移动方向
    switch (key.direction) {
      case "up":
        ball.y -= 3;
        checkBorder();
        ball.fill(cxt);
        break;
      case "down":
        ball.y += 3;
        checkBorder();
        ball.fill(cxt);
        break;
      case "left":
        ball.x -= 3;
        checkBorder();
        ball.fill(cxt);
        break;
      case "right":
        ball.x += 3;
        checkBorder();
        ball.fill(cxt);
        break;
      default:
        checkBorder();
        ball.fill(cxt);
    }
  }, false);

  //定义边界检测函数
  function checkBorder() {
    //当小球碰到上边界时
    if (ball.y < ball.radius) {
      ball.y = ball.radius;
      //当小球碰到下边界时
    } else if (ball.y > cnv.height - ball.radius) {
      ball.y = cnv.height - ball.radius;
    }
    //当小球碰到左边界时
    if (ball.x < ball.radius) {
      ball.x = ball.radius;
      //当小球碰到右边界时
    } else if (ball.x > cnv.width - ball.radius) {
      ball.x = cnv.width - ball.radius;
    }
  }
}());