import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  var degree = 0;
  setInterval(function () {
    cxt.rotate(degree * Math.PI / 180);
    cxt.fillRect(30, 30, 50, 50);
    degree++;
  }, 100);
}());