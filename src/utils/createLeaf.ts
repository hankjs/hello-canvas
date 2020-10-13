/**
  * createLeaf()用于绘制N叶草
  * n：n片
  * dx、dy：叶子中心位置的坐标
  * size：控制叶子的大小
  * length：控制叶子长度
  */
export function createLeaf(
  cxt: CanvasRenderingContext2D,
  n: number,
  dx: number, dy: number,
  size: number, length: number
): void {
  cxt.beginPath();
  cxt.moveTo(dx, dy + size);
  var degree = 2 * Math.PI / n;
  for (var i = 1; i < n + 1; i++) {
    //计算控制点的坐标
    var cx1 = Math.sin((i - 1) * degree) * length + dx;
    var cy1 = Math.cos((i - 1) * degree) * length + dy;
    var cx2 = Math.sin(i * degree) * length + dx;
    var cy2 = Math.cos(i * degree) * length + dy;
    //计算结束点的坐标
    var x = Math.sin(i * degree) * size + dx;
    var y = Math.cos(i * degree) * size + dy;
    cxt.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
  }
  cxt.closePath();
}