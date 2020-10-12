/*
 * createRoundedRect()用于绘制圆角矩形
 * width、height：分别表示长和宽
 * r：表示圆角半径
 * offsetX、offsetY：分别表示左上角顶点坐标
 */
function createRoundedRect(cxt: CanvasRenderingContext2D, width: number, height: number, r: number, offsetX: number, offsetY: number): void {
  cxt.beginPath();
  cxt.moveTo(offsetX + r, offsetY);
  cxt.lineTo(offsetX + width - r, offsetY);
  cxt.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r);
  cxt.lineTo(offsetX + width, offsetY + height - r);
  cxt.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r);
  cxt.lineTo(offsetX + r, offsetY + height);
  cxt.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r);
  cxt.lineTo(offsetX, offsetY + r);
  cxt.arcTo(offsetX, offsetY, offsetX + r, offsetY, r);
  cxt.closePath();
}