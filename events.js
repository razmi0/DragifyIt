import { isTouchDevice, whatDevice } from "./functions.js";

const deviceType = whatDevice();
let stopMovement = null;
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    up: "touchend",
    move: "touchmove",
  },
};

export function startMoving(item) {
  item.addEventListener(
    events[deviceType].down,
    (e) => {
      item.initial_X = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
      item.initial_Y = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
      item.moving = true;
      if (
        getComputedStyle(item, null).getPropertyValue("background-color") ===
        "rgb(255, 255, 255)"
      ) {
        item.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      }
    },
    { passive: true }
  );
}

export function moving(item) {
  item.addEventListener(
    events[deviceType].move,
    (e) => {
      if (item.moving) {
        let new_X = 0;
        let new_Y = 0;
        new_X = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        new_Y = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        item.style.top = item.offsetTop - (item.initial_Y - new_Y) + "px";
        item.style.left = item.offsetLeft - (item.initial_X - new_X) + "px";
        item.initial_X = new_X;
        item.initial_Y = new_Y;
      }
    },
    { passive: true }
  );
}

export function endMoving(item) {
  item.addEventListener(
    events[deviceType].up,
    (stopMovement = () => {
      item.moving = false;
    })
  );
  item.addEventListener("mouseleave", stopMovement);
  item.addEventListener(events[deviceType].up, () => {
    item.moving = false;
  });
}
