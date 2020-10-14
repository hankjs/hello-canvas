import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const cnv2 = dom("canvas2") as HTMLCanvasElement;
const cxt2 = cnv2.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var text = "这不是六个字";
  cxt.font = "bold 20px 微软雅黑";

  cxt.fillStyle = "HotPink";
  cxt.fillText(text, 50, 40);

  cxt.fillStyle = "LightSkyBlue ";
  cxt.fillText(text, 50, 80);

  cxt.fillText(text, 50, 120);

  var text = "这不是六个字";
  cxt2.font = "bold 20px 微软雅黑";

  cxt2.fillStyle = "HotPink";
  cxt2.save();                 //save()保存状态
  cxt2.fillText(text, 50, 40);

  cxt2.fillStyle = "LightSkyBlue ";
  cxt2.fillText(text, 50, 80);

  cxt2.restore();              //restore()恢复状态
  cxt2.fillText(text, 50, 120);
}());