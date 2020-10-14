export function dom(id: string): HTMLCanvasElement {
  return document.getElementById(id) as HTMLCanvasElement;
}

export function getMouse(element: HTMLElement) {
  if (element == null) {
    return {} as any;
  }
  //定义一个mouse的对象
  var mouse = { x: 0, y: 0 };
  //为传入的元素添加mousemove事件
  element.addEventListener("mousemove", function (event) {
    let x, y;
    //在IE中，event对象是作为window对象的一个属性存在
    const e = (event || window.event);
    //获取鼠标当前位置，并作兼容处理
    //兼容Firefox、chrome、IE9及以上
    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    }
    //兼容IE8及以下，以及混杂模式下的Chrome和Safari
    else {
      x = e.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop || document.documentElement.scrollTop;
    }
    //将当前的坐标值减去canvas元素的偏移位置，则x、y为鼠标在canvas中的相对坐标
    x -= element.offsetLeft || 0;
    y -= element.offsetTop;

    mouse.x = x;
    mouse.y = y;
  })
  //返回值为mouse对象
  return mouse;
}
export function getKey() {
  var key: any = {};
  window.addEventListener("keydown", function (e: KeyboardEvent) {
    if (e.key === "ArrowUp" || e.key == "w") {
      key.direction = "up";
    } else if (e.key === "ArrowRight" || e.key === "d") {
      key.direction = "right";
    } else if (e.key === "down" || e.key === "s") {
      key.direction = "ArrowDown";
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      key.direction = "left";
    } else {
      key.direction = "";
    }
  }, false);
  return key;
}