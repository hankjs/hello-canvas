import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用rotate()方法来旋转图形。

  // 语法：
  //   cxt.rotate(angle); 

  // 说明：
  //   参数angle表示图形旋转的角度，取值为-Math.PI*2～Math.PI*2。当angle>0时，图形顺时针旋转；当angel<0时，图形逆时针旋转。
  //   注意，rotate()方法的角度也是用弧度来表示的，例如180°就应该写成Math.PI，而360°就应该写成Math.PI*2，以此类推。
  //   在实际开发中推荐这种写法：“度数*Math.PI/180”
  //   120*Math.PI/180　 //120°
  //   150*Math.PI/180　 //150°

  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  (dom("btn") as HTMLButtonElement).onclick = function () {
    cxt.rotate(-30 * Math.PI / 180);   //逆时针旋转30°
    cxt.fillStyle = "LightSkyBlue ";
    cxt.fillRect(30, 30, 50, 50); //注意，这里仍然是fillRect(30, 30, 50, 50) 
  }
}());