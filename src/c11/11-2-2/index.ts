import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //绘制一个"填充矩形"
  cxt.beginPath();
  cxt.strokeStyle = "HotPink";
  // cxt.strokeRect(20, 20, 100, 80); // 不支持
  cxt.rect(20, 20, 100, 80);
  cxt.stroke();
  cxt.clip();

  //绘制一个"描边圆"，圆心为（120，60），半径为40
  cxt.beginPath();
  cxt.arc(120, 60, 40, 0, 360 * Math.PI / 180, true);
  cxt.closePath();
  cxt.fillStyle = " #66CCFF";
  cxt.fill();
}());