import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  cxt.fillStyle = "yellow";
  cxt.fillRect(0, 0, 100, 50)

  cxt.setTransform(1, 0.5, -0.5, 1, 30, 10);
  cxt.fillStyle = "red";
  cxt.fillRect(0, 0, 100, 50);

  cxt.setTransform(1, 0.5, -0.5, 1, 30, 10);
  cxt.fillStyle = "blue";
  cxt.fillRect(0, 0, 100, 50);
}());