import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用lineCap属性来定义线条开始处和结尾处的线帽样式。
  // 语法：
  //   context.lineCap="属性值";
  // 说明：
  //   Butt     默认值，无线帽
  //   Round    圆形线帽
  //   Square   正方形线帽
  // 区别：
  // （1）取值为butt：每条线的头端和尾端都是长方形，也就是不做任何的处理。
  // （2）取值为round：每条线的头和尾都增加一个半圆，半圆的直径为线宽长度。
  // （3）取值为square：每条线的头和尾都增加一个长方形，长方形的长度为线宽的一半，高度保持为线宽长度。

  cxt.lineWidth = 16;

  //lineCap值为默认值（butt）
  cxt.moveTo(20, 20);
  cxt.lineTo(180, 20);
  cxt.stroke();
  await sleep(500);

  //lineCap值改为round
  cxt.beginPath();
  cxt.lineCap = "round";
  cxt.moveTo(20, 70);
  cxt.lineTo(180, 70);
  cxt.stroke();
  await sleep(500);

  //lineCap值改为square
  cxt.beginPath();
  cxt.lineCap = "square";
  cxt.moveTo(20, 120);
  cxt.lineTo(180, 120);
  cxt.stroke();
}());