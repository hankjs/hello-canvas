import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 复古效果（sepia），是指使得图片有一种古旧效果。
  // 实现算法是：将红、绿、蓝三个通道，分别取这三个值的某种加权平均值。
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 10, 10);
    var imgData = cxt.getImageData(10, 10, 120, 120);
    var data = imgData.data;
    //遍历每个像素
    for (var i = 0; i < data.length; i += 4) {
      var r = data[i + 0];
      var g = data[i + 1];
      var b = data[i + 2];

      data[i + 0] = r * 0.39 + g * 0.76 + b * 0.18;
      data[i + 1] = r * 0.35 + g * 0.68 + b * 0.16;
      data[i + 2] = r * 0.27 + g * 0.53 + b * 0.13;
    }
    //在指定位置输出图片
    cxt.putImageData(imgData, 10, 10);
  }
}());