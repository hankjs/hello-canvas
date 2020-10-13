import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用scale()方法来对图形进行缩放操作。缩放是指“缩小”和“放大”的意思。

  // 语法：
  //   cxt.scale(x,y); 

  // 说明：
  //   x表示图形在x轴方向的缩放倍数。y表示图形在y轴方向的缩放倍数。其中，x和y一般情况下都是正数。
  //   当x或y取值为0～1之间时，图形进行缩小；当x或y取值大于1时，图形进行放大。大家想一下“倍数”是怎样的一个概念，很快就懂了。
  //   举个例子，如果x为0.5，则表示图形在x轴方向缩小为原来的0.5倍；如果x为2，则表示图形在x轴方向放大为原来的2倍，以此类推。
  //   其实x和y也可以取负数，不过一般情况都不会用，因此简单了解一下即可。

  //绘制初始图形
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  //缩放操作
  cxt.scale(1.5, 1.5);
  cxt.fillStyle = "LightSkyBlue";
  cxt.fillRect(30, 30, 50, 50);
}());