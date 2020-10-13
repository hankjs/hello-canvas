import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 红色蒙版，指的是让图片呈现一种偏红的效果。
  // 实现算法是：
  // 将红通道（r）赋值为红、绿、蓝这三个的平均值，
  // 并且将绿通道、蓝通道都赋值为0。
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

      var average = (r + g + b) / 3;
      data[i + 0] = average;
      data[i + 1] = 0;
      data[i + 2] = 0;
    }
    //在指定位置输出图片
    cxt.putImageData(imgData, 10, 10);
  }
}());