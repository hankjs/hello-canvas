import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // （1）如果使用beginPath()开始一个新的路径，则不同路径使用不同的值。
  // （2）如果没有使用beginPath()开始一个新的路径，则后面的值会覆盖前面的值（后来者居上原则）。

  // clip
  // 在Canvas中，我们可以使用“clip()方法”结合“基本图形的绘制”来指定一个“剪切区域”。
  // 其中，这个剪切区域是由基本图形绘制出来的。
  // 当使用clip()方法指定剪切区域后，后面所有绘制的图形如果超出这个剪切区域，
  // 则超出部分不会显示。

  // 语法：
  //   cxt.clip();

  // 说明：
  //   我们在使用clip()方法之前，必须要在Canvas中绘制一个基本图形。
  //   然后调用clip()方法后，这个基本图形就会变为一个剪切区域。
  // 注意，与之前接触的isPointInPath()方法一样，
  //   clip()方法也不支持Canvas自带的两个方法：
  //   strokeRect() 、fillRect() 。
  //   如果要使用strokeRect()和fillRect() ，请使用rect()方法来代替。

  //绘制一个"描边圆"，圆心为（50，50），半径为40
  cxt.beginPath();
  cxt.arc(50, 50, 40, 0, 360 * Math.PI / 180, true);
  cxt.closePath();
  cxt.strokeStyle = "HotPink";
  cxt.stroke();

  //使用clip()，使得"描边圆"成为一个剪切区域
  cxt.clip();

  //绘制一个"填充矩形"
  cxt.beginPath();
  cxt.fillStyle = "#66CCFF";
  cxt.fillRect(50, 50, 100, 80);
}());