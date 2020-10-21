function getRandomHex() {
  return '0123456789abcdef'[Math.floor(Math.random() * 16)];
}
export function getRandomColor() {
  let res = "#";
  while (res.length < 7) {
    res += getRandomHex();
  }
  return res;
}

export function checkRect(rectA: any, rectB: any) {
  return !(rectA.x + rectA.width < rectB.x ||
    rectB.x + rectB.width < rectA.x ||
    rectA.y + rectA.height < rectB.y ||
    rectB.y + rectB.height < rectA.y);
}