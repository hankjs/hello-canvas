import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用measureText()方法来返回一个对象，并且可以利用这个对象的width属性来获取某个文本的长度。

  // 语法：
  //   var length = cxt.measureText(text).width;

  // 说明：
  //   参数text表示一个字符串文本，measureText().width返回文本的长度，单位为px。
  //   注意，measureText()方法返回的是一个对象，这个对象只有一个width属性。
  //     width属性可以获取某个文本的长度，这个属性对于实现水平居中文本效果非常有用。

  var text = "这不是六个字";
  cxt.font = "bold 24px 微软雅黑";
  cxt.fillStyle = "purple";
  cxt.fillText(text, 30, 60);

  var length = cxt.measureText(text).width;
  alert("文本长度为" + length + "px");
}());