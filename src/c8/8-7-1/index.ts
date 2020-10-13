import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 对于透明处理，我们都是在得到像素数组后，
  // 将该数组中每一个像素的透明度乘以n， 然后保存像素数组，
  // 最后使用putImageData()方法将图像重新绘制在画布上。
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 10, 10);
    var imgData = cxt.getImageData(10, 10, 120, 120);
    var data = imgData.data;
    //遍历每个像素
    for (var i = 0; i < data.length; i += 4) {
      data[i + 3] = data[i + 3] * 0.3;
    }
    //在指定位置输出图片
    cxt.putImageData(imgData, 10, 10);
  }
}());