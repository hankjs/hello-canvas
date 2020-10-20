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