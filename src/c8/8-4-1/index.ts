import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 亮度效果（brightness），是指让图片变得更亮或者更暗。
  // 实现算法很简单：将红、绿、蓝三个通道值，分别同时加上一个正值或负值。
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 10, 10);
    var imgData = cxt.getImageData(10, 10, 120, 120);
    var data = imgData.data;
    //遍历每个像素
    for (var i = 0; i < data.length; i += 4) {
      var a = 50;
      data[i + 0] += a;
      data[i + 1] += a;
      data[i + 2] += a;
    }
    //在指定位置输出图片
    cxt.putImageData(imgData, 10, 10);
  }
}());