import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // createImageData()用于在画布中创建一个区域，
  // 使得这个区域得以进行像素操作。
  // 如果没有创建像素操作区域，我们是没有办法进行像素操作的。

  // 语法：
  // 第1种格式
  //   接收两个参数，sw和sh分别表示要创建区域的宽度和高度。
  //   cxt.createImageData(sw,sh);
  // 第2种格式
  //   接收一个像素对象，
  //     表示要“创建区域”的宽度和高度与“这个像素对象”的宽度和高度相等。
  //   cxt.createImageData(imageData);  
  // getImageData()和putImageData()配合使用是对一张图片进行像素操作的，
  //   而createImageData()和putImageData()配合使用是对一个区域进行像素操作的。
  var image = new Image();
  image.src = "/src/images/1.jpg";

  image.onload = function () {
    cxt.drawImage(image, 0, 0, 60, 60);
    //获取一个图片的imgData
    var imgData1 = cxt.getImageData(0, 0, 60, 60);
    //利用这个图片的imgData作为参数
    var imgData2 = cxt.createImageData(imgData1);
    var data = imgData2.data;
    for (var i = 0; i < imgData2.width * imgData2.height * 4; i += 4) {
      data[i + 0] = 0;
      data[i + 1] = 0;
      data[i + 2] = 255;
      data[i + 3] = 255;
    }
    cxt.putImageData(imgData2, 80, 0);
  }
}());