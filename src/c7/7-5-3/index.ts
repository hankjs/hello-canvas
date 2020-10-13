import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {

  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  (dom("btn") as HTMLButtonElement).onclick = function () {
    var angle = -30 * Math.PI / 180  //逆时针旋转30°
    cxt.rotate(angle);
    cxt.fillStyle = "LightSkyBlue ";
    cxt.fillRect(30, 30, 50, 50);
  }
}());