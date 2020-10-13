import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 径向渐变，是一种从起点到终点、颜色从内到外进行的圆形渐变（从中间向外拉，像圆一样）。
  //   径向渐变是圆形渐变或椭圆形渐变，颜色不再沿着一条直线渐变，
  //   而是从一个起点向所有方向渐变。
  // 在Canvas中，我们可以将createRadialGradient()和addColorStop()两个方法配合使用来实现径向渐变。

  // 语法：
  //   var gnt = cxt.createRadialGradient(x1,y1,r1,x2,y2,r2); 
  //   gnt.addColorStop(value1,color1); 
  //   gnt.addColorStop(value2,color2); 
  //   cxt.fillStyle = gnt; 
  //   cxt.fill();

  // 说明：
  // 在Canvas中，想要实现径向渐变，需要以下三个步骤。
  //  （1）调用createLinearGradient()方法创建一个radialGradient对象，并赋值给变量gnt。
  //  （2）调用radialGradient对象（即gnt）的addColorStop()方法N次，第1次表示渐变开始的颜色，第2次表示渐变结束时的颜色。然后第3次则以第2次渐变颜色作为开始颜色，进行渐变，以此类推。
  //  （3）把radialGradient对象（即gnt）赋值给fillStyle属性，并且调用fill()方法来绘制有渐变色的图形。

  //画圆
  cxt.beginPath();
  cxt.arc(80, 80, 50, 0, Math.PI * 2, true);
  cxt.closePath();
  //渐变
  var gnt = cxt.createRadialGradient(100, 60, 10, 80, 80, 50);
  gnt.addColorStop(0, "white");
  gnt.addColorStop(0.9, "orange");
  gnt.addColorStop(1, "rgba(0,0,0,0)");
  //填充
  cxt.fillStyle = gnt;
  cxt.fill();

}());