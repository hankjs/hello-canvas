import { dom } from "@/utils/dom";
import { createPolygon } from "@/utils/createPolygon";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    cxt.fillStyle =
      "rgb(" +
      Math.floor(255 - 42.5 * i) +
      "," +
      Math.floor(255 - 42.5 * j) +
      ",0)";
    cxt.fillRect(j * 25, i * 25, 25, 25);
  }
}