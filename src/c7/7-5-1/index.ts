import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 平移translate()、缩放scale()和旋转rotate()这三种方法本质上是用“变换矩阵transform()”方法来实现的。
  // 也就是说，我们单单通过transform()这一个方法就可以实现平移、缩放和旋转这三种操作。

  // 语法：
  //   cxt.transform(a,b,c,d,e,f); 

  // 说明：
  //   a：水平缩放绘图。
  //   b：水平倾斜绘图。
  //   c：垂直倾斜绘图。
  //   d：垂直缩放绘图。
  //   e：水平移动绘图。
  //   f：垂直移动绘图。
  //   transform(a,b,c,d,e,f)各个变量对应以下变换矩阵中相应位置的参数。
  //   a  c  e
  //   b  d  f
  //   0  0  1

  // transform()方法与translate()、scale()、rotate()这三种方法的关系。
  // （1）translate(e,f)等价于transform(1,0,0,1,e,f)。
  // （2）scale(a,d)等价于transform(a,0,0,d,0,0)。
  // （3）rotate(θ)等价于transform(cosθ,sinθ,-sinθ,cosθ,0,0)。

  //绘制初始图形
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  (dom("btn") as HTMLButtonElement).onclick = function () {
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    cxt.transform(1, 0, 0, 1, 10, 10);
    cxt.fillStyle = "HotPink";
    cxt.fillRect(30, 30, 50, 50);
  }
}());