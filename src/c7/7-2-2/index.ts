import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //绘制初始图形
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  //添加按钮点击事件
  (dom("btn") as HTMLButtonElement).onclick = function () {
    cxt.translate(10, 10);
    cxt.fillStyle = "HotPink";
    cxt.fillRect(30, 30, 50, 50);
  }
}());