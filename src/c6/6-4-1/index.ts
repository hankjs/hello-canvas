import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用clip()方法来切割Canvas中绘制的图片。

  // 语法：
  //   cxt.clip();

  // 说明：
  //   想要使用clip()方法切割一张图片，一般需要以下三步。
  //   （1）绘制基本图形。
  //   （2）使用clip()方法。
  //   （3）绘制图片。

  //第1步，绘制基本图形，用来切割
  cxt.beginPath();
  cxt.arc(70, 70, 50, 0, 360 * Math.PI / 180, true);
  cxt.closePath();
  cxt.stroke();

  //第2步，使用clip()方法，使得切割区域为上面绘制的基本图形
  cxt.clip();

  //第3步，绘制一张图片
  var image = new Image();
  image.src = "/src/images/1.jpg";
  image.onload = function () {
    cxt.drawImage(image, 10, 20);
  }
}());