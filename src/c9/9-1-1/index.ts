import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以将createLinearGradient()和addColorStop()这两个方法配合使用来实现线性渐变。

  // 语法：
  //   var gnt = cxt.createLinearGradient(x1, y1, x2, y2); 
  //   gnt.addColorStop(value1,color1); 
  //   gnt.addColorStop(value2,color2); 
  //   cxt.fillStyle = gnt; 
  //   cxt.fill();

  // 说明：
  // 在Canvas中，想要实现线性渐变，需要以下三个步骤。
  // （1）调用createLinearGradient()方法创建一个linearGradient对象，并赋值给变量gnt。
  // （2）调用linearGradient对象（即gnt）的addColorStop()方法N次，第1次表示渐变开始的颜色，第2次表示渐变结束时的颜色。然后第3次则以第2次渐变颜色作为开始颜色，进行渐变，以此类推。
  // （3）把linearGradient对象（即gnt）赋值给fillStyle属性，并且调用fill()方法来绘制有渐变色的图形。
  //   var gnt = cxt.createLinearGradient(x1, y1, x2, y2); 
  // x1、y1表示渐变色开始点的坐标，x2、y2表示渐变色结束点的坐标。也就是说，createLinearGradient(x1, y1, x2, y2)表示绘制从点(x1 , y1)到点(x2 , y2)的线性渐变。开始点和结束点坐标之间还有以下三种关系。
  // （1）如果y1与y2相同，表示沿着水平方向从左到右渐变。
  // （2）如果x1与x2相同，表示沿着垂直方向从左到右渐变。
  // （3）如果x1与x2不相同，并且y1与y2也不相同，则表示渐变色沿着矩形对角线方向渐变。

  var gnt = cxt.createLinearGradient(0, 150, 200, 150);
  gnt.addColorStop(0, "HotPink");
  gnt.addColorStop(1, "white");
  cxt.fillStyle = gnt;
  cxt.fillRect(0, 0, 200, 150);

}());