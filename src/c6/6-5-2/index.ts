import { dom } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  var image = new Image();
  image.src = "/src/images/1.jpg";
  image.onload = function () {
    cxt.beginPath();
    cxt.arc(50, 50, 50, 0, 360 * Math.PI / 180, false);
    cxt.closePath();
    var pattern = cxt.createPattern(image, "no-repeat");
    cxt.fillStyle = pattern as CanvasPattern;
    cxt.fill();
}
}());