import { dom } from "@/utils/dom";
import { createLeaf } from "@/utils/createLeaf";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  createLeaf(cxt, 4, cnv.width / 2, cnv.height / 2, 20, 80);
  //定义填充颜色为浅绿色
  cxt.fillStyle = "#00FF99";
  cxt.fill();
}());