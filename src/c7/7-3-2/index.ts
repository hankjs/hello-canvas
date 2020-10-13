import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //绘制初始图形
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  //图形放大
  (dom("btn-big") as HTMLButtonElement).onclick = function () {
    cxt.scale(1.5, 1.5);
    cxt.fillStyle = "#9966FF";
    cxt.fillRect(30, 30, 50, 50);
  };

  //图形缩小
  (dom("btn-small") as HTMLButtonElement).onclick = function () {
    cxt.scale(0.5, 0.5);
    cxt.fillStyle = "LightSkyBlue";
    cxt.fillRect(30, 30, 50, 50);
  };
}());