export class Ball {
  /** 小球中心的x坐标，默认值为0 */
  public x: number;
  /** 小球半径，默认值为12 */
  public y: number;
  /** 小球半径，默认值为12 */
  public radius: number;
  /** 颜色，默认值为"#6699FF" */
  public color: string;
  /** 旋转角度，默认值为0 */
  public rotation: number = 0;
  public scaleX: number = 1;
  public scaleY: number = 1;

  constructor(
    x: number = 0,
    y: number = 0,
    radius: number = 12,
    color: string = "#6699ff"
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  stroke(cxt: CanvasRenderingContext2D) {
    cxt.save();
    cxt.scale(this.scaleX, this.scaleY);
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.radius, 0, 360 * Math.PI / 180, false);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
  }

  //绘制"填充"小球
  fill(cxt: CanvasRenderingContext2D) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.rotation);
    cxt.scale(this.scaleX, this.scaleY);
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.arc(0, 0, this.radius, 0, 360 * Math.PI / 180, false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  }
}
