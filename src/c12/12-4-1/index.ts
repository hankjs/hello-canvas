import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，对于图形、文字、图案等，
  // 可以分为两大类，即描边型stroke()和填充型fill()。
  // 通过这样简单地划分，我们对Canvas的基本知识会有一个清晰的轮廓。

  cxt.globalCompositeOperation = "xor";

  cxt.strokeStyle = "HotPink";
  cxt.strokeRect(20, 20, 50, 50);

  cxt.fillStyle = "LightSkyBlue";
  cxt.fillRect(100, 20, 50, 50);
}());