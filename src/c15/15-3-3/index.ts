import { Ball } from "@/objects/Ball";
import { animationFrame, dom, getKey } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  var ball = new Ball(cnv.width / 2, cnv.height / 2);
  ball.fill(cxt);
  var key = getKey();

  //添加键盘事件
  window.addEventListener("keydown", function (e) {
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //根据key.direction的值，判断小球移动方向
    switch (key.direction) {
      case "up":
        ball.y -= 3;
        //检测上边界
        if (ball.y < -ball.radius) {
          ball.y = cnv.height + ball.radius;
        }
        ball.fill(cxt);
        break;
      case "down":
        ball.y += 3;
        //检测下边界
        if (ball.y > cnv.height + ball.radius) {
          ball.y = -ball.radius;
        }
        ball.fill(cxt);
        break;
      case "left":
        ball.x -= 3;
        //检测左边界
        if (ball.x < -ball.radius) {
          ball.x = cnv.width + ball.radius;
        }
        ball.fill(cxt);
        break;
      case "right":
        ball.x += 3;
        //检测右边界
        if (ball.x > cnv.width + ball.radius) {
          ball.x = -ball.radius;
        }
        ball.fill(cxt);
        break;
      //default值
      default:
        ball.fill(cxt);
    }
  }, false);
}());