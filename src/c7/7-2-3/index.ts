import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用clearRect()方法来清空整个Canvas（即画布）。

  // 语法：
  //   cxt.clearRect(0,0,cnv.width,cnv.height); 

  // 说明：
  //   cnv.width表示获取Canvas的宽度，cnv.height表示获取Canvas的高度。
  //   可以使用clearRect()方法来清空“指定矩形区域”。当“指定矩形区域”大小与Canvas大小相等时，就等于清空了整个Canvas。
  //   一般情况下，clearRect()都是用于清空整个Canvas，而很少用来清空Canvas的某一部分。
  //   因为仅仅清空Canvas的某一部分，这种做法其实一点意义都没有，还不如直接清空整个Canvas来得爽快。

  //绘制初始图形
  cxt.fillStyle = "HotPink";
  cxt.fillRect(30, 30, 50, 50);

  //添加按钮点击事件
  (dom("btn") as HTMLButtonElement).onclick = function () {
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    cxt.translate(10, 10);
    cxt.fillStyle = "HotPink";
    cxt.fillRect(30, 30, 50, 50);
  }
}());