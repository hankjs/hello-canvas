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
export function checkCircle(circleB: any, circleA: any) {
  var dx = circleB.x - circleA.x;
  var dy = circleB.y - circleA.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < (circleA.radius + circleB.radius)) {
    return true;
  }
  else {
    return false;
  }
}