/**
 * 绘制多边形
 * @param cxt canvas 上下文
 * @param n 边数
 * @param dx 中点x坐标
 * @param dy 中点y坐标
 * @param size 大小
 */
export function createPolygon(cxt: CanvasRenderingContext2D, n: number, dx: number, dy: number, size: number): void {
  cxt.beginPath();
  var degree = (2 * Math.PI) / n;
  for (var i = 0; i < n; i++) {
    var x = Math.cos(i * degree);
    var y = Math.sin(i * degree);
    cxt.lineTo(x * size + dx, y * size + dy);
  }
  cxt.closePath();
}