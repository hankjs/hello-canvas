import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var i = 0;
  var rectWidth = 100;
  var rectHeight = 50;
  setInterval(function () {
    i++;
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    cxt.save();
    cxt.translate(cnv.width / 2, cnv.height / 2); //将坐标移动到中心
    cxt.rotate(Math.PI * (i / 100));           //累进旋转
    cxt.fillStyle = "HotPink";
    cxt.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight); //填充矩形
    cxt.restore();
  }, 10);
}());