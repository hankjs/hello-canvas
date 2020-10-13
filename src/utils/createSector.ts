/**
  * createSector()用于绘制扇形
  * 中心坐标（x，y）、半径r、开始角度angle1和结束角度angle2。
  */
export function createSector(
  cxt: CanvasRenderingContext2D,
  x: number, y: number,
  r: number,
  angle1: number, angle2: number
) {
  cxt.beginPath();
  cxt.moveTo(x, y);
  cxt.arc(x, y, r, angle1 * Math.PI / 180, angle2 * Math.PI / 180, false);
  cxt.closePath();
}