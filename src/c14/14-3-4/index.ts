import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，根据sin函数作用对象的不同, 常见的波形运动可以分为三种
  // （1）作用于x轴坐标。
  // （2）作用于y轴坐标。
  // （3）作用于缩放属性（scaleX或scaleY）。

  // 作用于x轴坐标
  // 当正弦函数sin作用于物体中心的x轴坐标时，物体会进行左右摇摆，
  // 类似于水草在水流中左右摇摆。

  // 语法：
  // x = centerX + Math.sin(angle) * range;
  // angle += speed;

  // 说明：
  // （centerX，centerY）表示物体中心坐标，
  //   angle表示角度（弧度制），range表示振幅，speed表示角度改变的大小。。

  var ball = new Ball(cnv.width / 2, cnv.height / 2);
  var angle = 0;
  var range = 80;

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.x = cnv.width / 2 + Math.sin(angle) * range;
    ball.fill(cxt);

    //角度递增
    angle += 0.05;
  })();

}());