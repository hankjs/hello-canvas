import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var gradient = cxt.createRadialGradient(60, 60, 0, 60, 60, 60) as CanvasGradient;
  gradient.addColorStop(0, "magenta");
  gradient.addColorStop(0.25, "blue");
  gradient.addColorStop(0.50, "green");
  gradient.addColorStop(0.75, "yellow");
  gradient.addColorStop(1.0, "HotPink");
  cxt.fillStyle = gradient;
  cxt.fillRect(0, 0, 120, 120);
}());