import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //创建image对象
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    var text = "这不是六个字";
    cxt.font = "bold 22px 微软雅黑";
    var pattern = cxt.createPattern(image, "no-repeat") as CanvasPattern;
    cxt.fillStyle = pattern;
    cxt.fillText(text, 10, 50);
  }
}());