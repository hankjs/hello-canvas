import { Ball } from "@/objects/Ball";
import { animationFrame, dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {

  (function frame() {
    //实例化一个小球
    var ball = new Ball(cnv.height / 2, 0);
    //定义x轴速度为2，也就是每帧向正方向移动2px
    var vx = 2;

    (function frame() {
         animationFrame(frame);
         cxt.clearRect(0, 0, cnv.width, cnv.height);

         ball.y += vx;

         ball.fill(cxt);
    })();
  })();
}());