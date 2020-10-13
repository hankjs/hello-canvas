import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用translate()方法来平移图形。所谓的平移，是指图形沿着x轴或y轴进行直线运动。平移不会改变图形的形状和大小。

  // 语法：
  //   cxt.translate(x,y);

  // 说明：
  //   x表示图形在x轴方向移动的距离，默认单位为px。当x为正时，图形向x轴正方向移动；当x为负时，图形向x轴反方向移动。
  //   y表示图形在y轴方向移动的距离，默认单位为px。当y为正时，图形向y轴正方向移动；当y为负时，图形向y轴反方向移动。
  //   注意，Canvas使用的坐标系为W3C坐标系（y轴正方向向下），而不是数学坐标系（y轴正方向向上）

  //绘制矩形
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);
  //移动矩形
  cxt.translate(50, 50);
  cxt.fillRect(30, 30, 50, 50);  //重绘，这里仍然是fillRect(30, 30, 50, 50)
}());