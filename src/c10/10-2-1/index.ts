import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用beginPath()方法来开始一个新路径。
  // 语法：
  //   cxt.beginPath();
  const p = dom("p") as HTMLParagraphElement;

  cxt.lineWidth = 5;
  const main = async () => {
    p.innerText = "不使用beginPath";
    //第1条直线
    cxt.moveTo(50, 40);
    cxt.lineTo(150, 40);
    cxt.strokeStyle = "red";
    cxt.stroke();

    //第2条直线
    cxt.moveTo(50, 80);
    cxt.lineTo(150, 80);
    cxt.strokeStyle = "green";
    cxt.stroke();

    //第3条直线
    cxt.moveTo(50, 120);
    cxt.lineTo(150, 120);
    cxt.strokeStyle = "blue";
    cxt.stroke();
    await sleep(3000);
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    p.innerText = "使用beginPath";
    //第1条直线
    cxt.beginPath();
    cxt.moveTo(50, 40);
    cxt.lineTo(150, 40);
    cxt.strokeStyle = "red";
    cxt.stroke();

    //第2条直线
    cxt.beginPath();
    cxt.moveTo(50, 80);
    cxt.lineTo(150, 80);
    cxt.strokeStyle = "green";
    cxt.stroke();

    //第3条直线
    cxt.beginPath();
    cxt.moveTo(50, 120);
    cxt.lineTo(150, 120);
    cxt.strokeStyle = "blue";
    cxt.stroke();
    await sleep(3000);
    main();
  }

  main();
}());