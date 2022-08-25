import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

var image = new Image();
image.src = "/src/images/chisato.png";

image.onload = function (e) {
  console.log(this);
  const { naturalWidth, naturalHeight } = this as HTMLImageElement;
  cxt.drawImage(image, 0, 0, naturalWidth, naturalHeight, cnv.width / 2, cnv.height / 2, naturalWidth / 2, naturalHeight / 2);
};