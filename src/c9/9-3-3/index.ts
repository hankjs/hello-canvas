import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  //创建image对象
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    //定义阴影
    cxt.shadowOffsetX = 5;
    cxt.shadowOffsetY = 5;
    cxt.shadowColor = "HotPink";
    cxt.shadowBlur = 10;
    cxt.fillRect(40, 15, 120, 120);

    cxt.drawImage(image, 40, 15, 120, 120);
  }
}());