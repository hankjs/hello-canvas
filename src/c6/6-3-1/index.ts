import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用createPattern()方法来定义图片的平铺方式。

  // 语法：
  //   var pattern = cxt.createPattern(image , type);
  //   cxt.fillStyle = pattern;
  //   cxt.fillRect();

  // 说明：
  //   参数image表示被平铺的图片对象，参数type表示图像平铺的方式。
  //   参数type有四种取值，即no-repeat、repeat-x、repeat-y、repeat

  //创建image对象
  var image = new Image();
  image.src = "/src/images/3.png";

  image.onload = function () {
    var pattern = cxt.createPattern(image, "repeat") as CanvasPattern;
    cxt.fillStyle = pattern;
    cxt.fillRect(0, 0, cnv.width, cnv.height);
  }
}());