import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，根据sin函数作用对象的不同, 常见的波形运动可以分为三种
  // （1）作用于x轴坐标。
  // （2）作用于y轴坐标。
  // （3）作用于缩放属性（scaleX或scaleY）。

  // 作用于缩放属性（scaleX或scaleY）
  // 当正弦函数sin作用于物体的缩放属性（scaleX或scaleY）时，
  // 物体会不断地放大然后缩小，从而产生一种脉冲动画的效果。

  // 语法：
  // scaleX = 1 + Math.sin(angle) * range;
  // scaleY = 1 + Math.sin(angle) * range;
  // angle += speed;

  // 说明：
  // scaleX表示物体x轴方向缩放的倍数，scaleY表示物体y轴方向缩放的倍数。
  // angle表示角度（弧度制），range表示振幅，speed表示角度改变的大小。

  var ball = new Ball(cnv.width / 2, cnv.height / 2, 25);
  var range = 0.5;
  var angle = 0;

  (function frame() {
    window.requestAnimationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    ball.scaleX = 1 + Math.sin(angle) * range;
    ball.scaleY = 1 + Math.sin(angle) * range;
    ball.fill(cxt);

    //角度递增
    angle += 0.05;
  })();

}());