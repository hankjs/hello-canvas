import { dom } from "@/utils/dom";
import { createPolygon } from "@/utils/createPolygon";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

//调用自定义的方法createPolygon()
createPolygon(cxt, 3, 100, 75, 50);
cxt.fillStyle = "HotPink";
cxt.fill();