import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var text = "这不是六个字";
  cxt.font = "bold 42px 微软雅黑";

  var gnt = cxt.createLinearGradient(0, 75, 200, 75);
  gnt.addColorStop(0, "HotPink");
  gnt.addColorStop(1, "LightSkyBlue");

  cxt.fillStyle = gnt;
  cxt.fillText(text, 10, 90);

}());