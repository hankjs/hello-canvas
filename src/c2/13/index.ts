import { dom } from "@/utils/dom";
import { createPolygon } from "@/utils/createPolygon";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

cxt.beginPath();
for (var i = 0; i < 5; i++) {
  cxt.lineTo(
    Math.cos(((18 + i * 72) * Math.PI) / 180) * 50 + 100,
    -Math.sin(((18 + i * 72) * Math.PI) / 180) * 50 + 100
  );
  cxt.lineTo(
    Math.cos(((54 + i * 72) * Math.PI) / 180) * 25 + 100,
    -Math.sin(((54 + i * 72) * Math.PI) / 180) * 25 + 100
  );
}
cxt.closePath();
cxt.stroke();