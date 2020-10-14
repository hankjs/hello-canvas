import { Arrow } from "@/objects/Arraw";
import { animationFrame, dom, getMouse } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //实例化一个箭头，中点坐标为画布中心坐标
  var arrow = new Arrow(cnv.width / 2, cnv.height / 2);
  //获取鼠标坐标
  var mouse = getMouse(document.documentElement);

  (function drawFrame() {
    animationFrame(drawFrame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    var dx = mouse.x - cnv.width / 2;
    var dy = mouse.y - cnv.height / 2;
    //使用Math.atan2()方法计算出鼠标与箭头中心的夹角
    arrow.angle = Math.atan2(dy, dx);

    arrow.fill(cxt);
  })();
}());