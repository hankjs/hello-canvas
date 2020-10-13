import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var i = 0;
  setInterval(function () {
    var gradient = cxt.createRadialGradient(60, 60, 0, 60, 60, 60);
    gradient.addColorStop(i * 0, "magenta");
    gradient.addColorStop(i * 0.25, "blue");
    gradient.addColorStop(i * 0.50, "green");
    gradient.addColorStop(i * 0.75, "yellow");
    gradient.addColorStop(i * 1.0, "HotPink");
    cxt.fillStyle = gradient;

    i = i + 0.1;
    if (i >= 1) { //超过颜色点值后，自动归0
      i = 0;
    }
    cxt.fillRect(0, 0, 120, 120);
  }, 50);
}());