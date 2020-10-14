import { Arrow } from "@/objects/Arrow";
import { animationFrame, dom, getMouse } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //实例化一个箭头，箭头中心坐标为画布中心坐标
  var arrow = new Arrow(cnv.width / 2, cnv.height / 2);
  var mouse = getMouse(cnv);
  var speed = 1.5;
  var angle = 0;

  (function drawFrame() {
    animationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    //计算出鼠标与箭头中心之间的夹角
    var dx = mouse.x - cnv.width / 2;
    var dy = mouse.y - cnv.height / 2;
    angle = Math.atan2(dy, dx);

    var vx = Math.cos(angle) * speed;
    var vy = Math.sin(angle) * speed;
    arrow.x += vx;
    arrow.y += vy;

    arrow.angle = angle;
    arrow.fill(cxt);
  })();
}());