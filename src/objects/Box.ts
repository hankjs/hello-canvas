export class Box {
  /** 小球中心的x坐标，默认值为0 */
  public x: number;
  /** 小球半径，默认值为12 */
  public y: number;
  /** x速度 */
  public vx: number = 0;
  /** y速度 */
  public vy: number = 0;
  /** 颜色，默认值为"red" */
  public color: string;
  public width: number;
  public height: number;

  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 80,
    height: number = 40,
    color: string = "red"
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  //绘制"描边"矩形
  stroke(cxt: CanvasRenderingContext2D) {
    cxt.save();
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.rect(this.x, this.y, this.width, this.height);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
  },
  //绘制"填充"矩形
  fill(cxt: CanvasRenderingContext2D) {
    cxt.save();
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.rect(this.x, this.y, this.width, this.height);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  }
}
