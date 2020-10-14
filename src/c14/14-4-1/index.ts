import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var x = cnv.width / 2;
  var y = cnv.height / 2;

  (function frame() {
    //实例化一个小球
    var ball = new Ball(0, cnv.height / 2);
    //定义x轴速度为2，也就是每帧向正方向移动2px
    var vx = 2;

    (function frame() {
         animationFrame(frame);
         cxt.clearRect(0, 0, cnv.width, cnv.height);

         ball.x += vx;

         ball.fill(cxt);
    })();
  })();
}());