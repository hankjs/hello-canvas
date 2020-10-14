import { dom, getMouse } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var txt = dom("p");
  var mouse = getMouse(cnv);

  cnv.addEventListener("mousemove", function () {
    txt.innerHTML = "鼠标当前坐标为：（" + mouse.x + "," + mouse.y + "）";
  }, false);
}());