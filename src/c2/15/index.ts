import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

let r = 255;
let g = 0;
let b = 0;
for (let i = 0; i < 150; i++) {
  if (i < 25) {
    g += 10;
  } else if (i > 25 && i < 50) {
    r -= 10;
  } else if (i > 50 && i < 75) {
    g -= 10;
    b += 10;
  } else if (i >= 75 && i < 100) {
    r += 10;
  } else {
    b -= 10;
  }
  cxt.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  cxt.fillRect(3 * i, 0, 3, cnv.height);
}