import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，根据sin函数作用对象的不同, 常见的波形运动可以分为三种
  // （1）作用于x轴坐标。
  // （2）作用于y轴坐标。
  // （3）作用于缩放属性（scaleX或scaleY）。

  // 作用于y轴坐标
  // 当正弦函数sin作用于物体中心的y轴坐标时，
  // 物体运动的轨迹刚好就是sin函数的波形。

  // 语法：
  // y = centerY + Math.sin(angle) * range;
  // angle += speed;

  // 说明：
  // （centerX，centerY）表示物体中心坐标，
  //   angle表示角度（弧度制），range表示振幅，speed表示角度改变的大小。。

  var ball = new Ball(0, cnv.height / 2);
  var angle = 0;
  var range = 40;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x += 1;
    ball.y = cnv.height / 2 + Math.sin(angle) * range;
    ball.fill(cxt);

    //角度递增
    angle += 0.05;
  })();

}());