import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 黑白效果，也叫灰度图（average），是指将彩色图片转换成黑白图片。
  // 实现算法是：首先取红、绿、蓝三个通道的平均值，
  // 也就是(data[i + 0] + data[i + 1] +data[i + 2])/3。
  // 然后data[i + 0]、data[i + 1]和data[i + 2]全部保存为这个平均值即可。
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 10, 10);
    var imgData = cxt.getImageData(10, 10, 120, 120);
    var data = imgData.data;
    //遍历每个像素
    for (var i = 0; i < data.length; i += 4) {
      var average = (data[i + 0] + data[i + 1] + data[i + 2] + data[i + 3]) / 3;
      data[i + 0] = average;　 //红
      data[i + 1] = average;　 //绿
      data[i + 2] = average;　 //蓝
    }
    //在指定位置输出图片
    cxt.putImageData(imgData, 10, 10);
  }
}());