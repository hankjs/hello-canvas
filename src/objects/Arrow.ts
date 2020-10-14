export class Arrow {
  /** 箭头中心x坐标，默认值为0 */
  public x: number;
  /** 箭头中心y坐标，默认值为0 */
  public y: number;
  /** 颜色，默认值为"#FF0099" */
  public color: string;
  /** 旋转角度，默认值为0 */
  public angle: number;

  constructor(
    x: number = 0,
    y: number = 0,
    color: string = "#FF0099",
    angle: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.angle = angle;
  }

  stroke(cxt: CanvasRenderingContext2D): void {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.angle);
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.moveTo(-20, -10);
    cxt.lineTo(0, -10);
    cxt.lineTo(0, -20);
    cxt.lineTo(20, 0);
    cxt.lineTo(0, 20);
    cxt.lineTo(0, 10);
    cxt.lineTo(-20, 10);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
  }

  fill(cxt: CanvasRenderingContext2D): void {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.angle);
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.moveTo(-20, -10);
    cxt.lineTo(0, -10);
    cxt.lineTo(0, -20);
    cxt.lineTo(20, 0);
    cxt.lineTo(0, 20);
    cxt.lineTo(0, 10);
    cxt.lineTo(-20, 10);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  }

}
