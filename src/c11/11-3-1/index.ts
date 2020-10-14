import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const cnv2 = dom("canvas2") as HTMLCanvasElement;
const cxt2 = cnv2.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用save()方法来保存“当前状态”，然后可以使用restore()方法来恢复“之前保存的状态”。save()和restore()一般情况下也都是成对使用的。

  // Canvas状态的保存和恢复，主要用于以下三种场合。
  // （1）图形或图片裁切。
  // （2）图形或图片变形。
  // （3）以下属性改变的时候：
  //     fillStyle、font、globalAlpha、globalCompositeOperation、
  //     lineCap、lineJoin、lineWidth、miterLimit、
  //     shadowBlur、shadowColor、shadowOffsetX、shadowOffsetY、
  //     strokeStyle、textAlign、textBaseline。

  //save()保存状态
  cxt.save();
  //使用clip()方法指定一个圆形的剪切区域
  cxt.beginPath();
  cxt.arc(70, 70, 50, 0, 360 * Math.PI / 180, true);
  cxt.closePath();
  cxt.stroke();
  cxt.clip();
  //绘制一张图片
  var image = new Image();
  image.src = "/src/images/1.jpg";
  image.onload = function () {
    cxt.drawImage(image, 10, 20);
  };

  (dom("btn") as HTMLButtonElement).onclick = function () {
    //restore()恢复状态
    // 如果不使用restore()，即便使用clearRect()方法清空画布，
    // 后面绘制的所有图形或图片也都会限制在这个剪切区域内。
    cxt.restore();
    //清空画布
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    //绘制一张新图片
    var image = new Image();
    image.src = "/src/images/2.jpg";
    image.onload = function () {
      cxt.drawImage(image, 10, 20);
    }
  }

  cxt2.save();
  //使用clip()方法指定一个圆形的剪切区域
  cxt2.beginPath();
  cxt2.arc(70, 70, 50, 0, 360 * Math.PI / 180, true);
  cxt2.closePath();
  cxt2.stroke();
  cxt2.clip();
  //绘制一张图片
  var image = new Image();
  image.src = "/src/images/1.jpg";
  image.onload = function () {
    cxt2.drawImage(image, 10, 20);
  };

  (dom("btn2") as HTMLButtonElement).onclick = function () {
    //restore()恢复状态
    // 如果不使用restore()，即便使用clearRect()方法清空画布，
    // 后面绘制的所有图形或图片也都会限制在这个剪切区域内。
    // cxt2.restore();

    // 总结:
    // （1）save()方法保存的状态包括三个，
    //     即剪切状态、变形状态（一般指变换矩阵）和绘图状态。
    // （2）save()不能保存路径状态，如果想要开始新的路径，
    //     只有beginPath()一个方法。
    // （3）save()只能保存“状态”，不能保存“图形”。
    //     也就是说，如果想要用save()保存一个圆形，这是不可能的。
    //     由于Canvas只有当前一个上下文环境，
    //     如果想要恢复图形，就只能清空画布再重绘。

    //清空画布
    cxt2.clearRect(0, 0, cnv.width, cnv.height);
    //绘制一张新图片
    var image = new Image();
    image.src = "/src/images/2.jpg";
    image.onload = function () {
      cxt2.drawImage(image, 10, 20);
    }
  }
}());