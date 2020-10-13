import { dom } from "@/utils/dom";
import { sleep } from "@/utils/sleep";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 在Canvas中，我们可以使用closePath()来关闭当前路径。
  // 语法：
  //   cxt.closePath();
  // 说明：
  //   “关闭路径”并不等于“结束路径”，
  //   所谓的“关闭路径”一般是指将同一个路径的起点与终点这两点连接起来，
  //   使其成为一个封闭的图形。
  //   所谓的“结束路径”一般是指开始一个新的路径。
  //   “关闭”指的是“封闭”，“结束”指的是“新的开始”。
  //   大家一定要认真区分好“关闭路径”和“结束路径”这两种叫法的不同。
  //   如果想要“结束路径（即开始新的路径）”只有一个办法：beginPath() 。
  const p = dom("p") as HTMLParagraphElement;

  const main = async () => {
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    p.innerText = "不使用closePath";
    cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true);
    cxt.stroke();

    await sleep(3000);

    cxt.clearRect(0, 0, cnv.width, cnv.height);
    p.innerText = "使用closePath";
    cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true);
    cxt.closePath();
    cxt.stroke();
    await sleep(3000);
    main();
  }

  main();
}());