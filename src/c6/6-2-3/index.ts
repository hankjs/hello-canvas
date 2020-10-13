import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 语法：
  //   cxt.drawImage(image , dx , dy ,dw , dh)

  // 说明：
  //   参数image、dx、dy跟drawImage(image , dx , dy)参数一样。
  //   参数dw，定义图片的宽度。
  //   参数dh，定义图片的高度。
  //   drawImage(image , dx , dy , dw , dh)相对drawImage(image , dx , dy)来说，
  //     只是增加了定义图片宽度（dw）和高度（dh）的功能。
  //     这种方式可以将图片进行缩放，然后再显示在Canvas上。

  //创建image对象
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 40, 20, 60, 60);
  }
}());