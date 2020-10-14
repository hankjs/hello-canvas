import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //绘制初始图形
  cxt.fillStyle = "#FF6699";
  cxt.fillRect(30, 30, 50, 50);

  (dom("btn") as HTMLButtonElement).onclick = function () {
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    cxt.translate(10, 10);
    cxt.fillStyle = "#FF6699";
    cxt.fillRect(30, 30, 50, 50);
  }
}());