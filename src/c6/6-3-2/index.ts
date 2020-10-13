import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //创建canvas元素
  var bgCanvas = document.createElement("canvas");
  bgCanvas.width = 20;
  bgCanvas.height = 20;

  //在新创建的canvas中画一个圆
  var bgCxt = bgCanvas.getContext("2d") as CanvasRenderingContext2D;
  bgCxt.beginPath();
  bgCxt.arc(10, 10, 10, 0, 360 * Math.PI / 180, true);
  bgCxt.closePath();
  bgCxt.fillStyle = "HotPink";
  bgCxt.fill();

  //平铺canvas
  var pattern = cxt.createPattern(bgCanvas, "repeat-x") as CanvasPattern;
  cxt.fillStyle = pattern;
  cxt.fillRect(0, 0, 200, 200);
}());