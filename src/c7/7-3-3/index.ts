import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用scale()方法来改变图形大小（即缩放）。
  // 不过scale()方法是有一定负作用的，它除了改变图形的大小之外，还会改变其他属性如线条宽度（即lineWidth）、左上角坐标等。

  // scale()方法会改变图形的以下几点。
  // （1）左上角坐标。
  // （2）宽度或高度。
  // （3）线条宽度。

  cxt.fillStyle = "HotPink";
  cxt.lineWidth = 4;
  cxt.strokeStyle = "HotPink";
  cxt.strokeRect(30, 30, 50, 50);

  //图形放大
  (dom("btn-big") as HTMLButtonElement).onclick = function () {
    cxt.scale(1.5, 1.5);
    cxt.strokeRect(30, 30, 50, 50);
  }
}());