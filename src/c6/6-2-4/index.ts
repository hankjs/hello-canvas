import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 语法：
  //   cxt.drawImage(image , sx , sy , sw, sh , dx , dy , dw , dh)

  // 说明：
  //   参数image、dx、dy、dw、dh跟drawImage(image、dx、dy、dw、dh)参数意思相同。
  //   参数sx、sy、sw、sh，表示源图像需要截取的范围。
  //   参数sx，表示源图片被截取部分的横坐标。
  //   参数sy，表示源图片被截取部分的纵坐标。
  //   参数sw，表示源图片被截取部分的宽度。
  //   参数sh，表示源图片被截取部分的高度。
  //   drawImage(image , sx , sy , sw, sh , dx , dy , dw , dh)这种方式可以将截取图片的某一部分显示在Canvas上面。

  // 说明：
  // （1）sx、sy、sw、sh这四个参数中的“s”指的是“source（源图片）”。
  // （2）dx、dy、dw、dh这四个参数中的“d”指的是destination（目标图片）。

  //创建image对象
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 265, 165, 145, 120, 30, 20, 145, 120);
  }
}());