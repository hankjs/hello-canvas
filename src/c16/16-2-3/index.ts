import { Ball } from "@/objects/Ball";
import { Box } from "@/objects/Box";
import { animationFrame, dom, getKey, getMouse } from "@/utils/dom";
import { checkRect, getRandomColor } from "@/utils/tools";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;
const p = dom("p") as HTMLParagraphElement;

; (async function () {
  //定义一个用来存放方块的数组boxes
  var boxes: Box[] = [];
  //定义一个"当前活动"的方块
  var activeBox = createBox();
  //定义方块的y轴速度
  var vy = 1.5;

  //加入鼠标控制
  var key = getKey();
  window.addEventListener("keydown", function () {
    switch (key.direction) {
      case "down":
        activeBox.y += 5;
        break;
      case "left":
        activeBox.x -= 10;
        break;
      case "right":
        activeBox.x += 10;
        break;
    }
  }, false);

  //定义一个函数createBox()，用于创建一个新的方块
  function createBox() {
    var x = Math.random() * cnv.width;
    var y = 0;
    var width = Math.random() * 40 + 10;
    var height = Math.random() * 40 + 10;
    var color = getRandomColor();
    var box = new Box(x, y, width, height, color);
    //添加到数组boxes中
    boxes.push(box);
    return box;
  }

  (function frame() {
    animationFrame(frame);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    activeBox.y += vy;

    //边界检测，如果到达底部，则创建一个新的box
    if (activeBox.y > cnv.height - activeBox.height) {
      activeBox.y = cnv.height - activeBox.height;
      activeBox = createBox();
    }
    //遍历数组boxes，以便单独处理每一个box
    boxes.forEach(function (box) {
      /*如果当前遍历的box不是"活动方块（activeBox）"，并且当前遍历的方块与
       "活动方块（activeBox）"碰上了，则创建新的方块*/
      if (activeBox !== box && checkRect(activeBox, box)) {
        activeBox.y = box.y - activeBox.height;
        activeBox = createBox();
      }
      box.fill(cxt);
    });
  })();
}());