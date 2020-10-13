import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //定义数组，存储7种颜色
  var colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
  cxt.lineWidth = 12;
  cxt.translate(50, 0);

  //循环绘制圆弧
  for (var i = 0; i < colors.length; i++) {
    //每次向下移动10px
    cxt.translate(0, 10);
    //定义颜色
    cxt.strokeStyle = colors[i];
    //绘制圆弧
    cxt.beginPath();
    cxt.arc(50, 100, 100, 0, 180 * Math.PI / 180, true);
    cxt.stroke();
  }
}());