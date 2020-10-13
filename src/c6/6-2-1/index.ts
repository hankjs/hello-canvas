import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 语法：
  //   cxt.drawImage(image ,d x , dy);

  // 说明：
  //   参数image，表示页面中的图片。该图片可以是页面中的img元素，也可以是JavaScript创建的Image对象。

  //创建image对象
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 40, 20);
  }
}());