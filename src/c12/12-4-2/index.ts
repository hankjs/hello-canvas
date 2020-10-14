import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.beginPath();
  cxt.arc(50, 50, 25, 0, 360 * Math.PI / 180, false);
  cxt.closePath();
  cxt.strokeStyle = "HotPink";
  cxt.stroke();

  cxt.beginPath();
  cxt.arc(150, 50, 25, 0, 360 * Math.PI / 180, false);
  cxt.closePath();
  cxt.fillStyle = "LightSkyBlue";
  cxt.fill();
}());