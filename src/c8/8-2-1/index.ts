import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 10, 10);
    var imgData = cxt.getImageData(10, 10, 120, 120);
    var data = imgData.data;
    //遍历每个像素
    for (var i = 0; i < data.length; i += 4) {
      data[i + 0] = 255 - data[i + 0];
      data[i + 1] = 255 - data[i + 1];
      data[i + 2] = 255 - data[i + 2];
    }
    //在指定位置输出图片
    cxt.putImageData(imgData, 10, 10);
  }
}());