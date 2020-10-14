import { animationFrame, dom, getMouse } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const text = dom("p") as HTMLParagraphElement;

; (async function () {
  var x = cnv.width / 2;
  var y = cnv.height / 2;

  var mouse = getMouse(cnv);
  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    cxt.save();
    cxt.beginPath();
    cxt.moveTo(x, y);
    //mouse.x表示鼠标的x轴坐标，mouse.y表示鼠标的y轴坐标
    cxt.lineTo(mouse.x, mouse.y);
    cxt.closePath();
    cxt.strokeStyle = "red";
    cxt.stroke();
    cxt.restore();

    var dx = mouse.x - x;
    var dy = mouse.y - y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    text.innerText = "鼠标与中点距离为：" + distance;
  })();
}());