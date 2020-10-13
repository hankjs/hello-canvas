import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.translate(150, 0);
  cxt.fillStyle = "rgba(255,0,0,0.25)";
  for (var i = 0; i < 50; i++) {
    cxt.translate(25, 25);      //图形平移
    cxt.scale(0.95, 0.95);      //图形缩放
    cxt.rotate(Math.PI / 10);   //图形旋转
    cxt.fillRect(0, 0, 100, 50);
  }
}());