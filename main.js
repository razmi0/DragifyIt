import { DraggableItem } from "./class.js";
import { whatDevice } from "./functions.js";
import { startMoving, moving, endMoving } from "./events.js";

const draggables = [];
let stopMovement = null;
const deviceType = whatDevice();
let addItem = false;
let removeItem = false;

document.querySelector(".add").addEventListener("click", (e) => {
  addItem = true;
  const draggable = new DraggableItem(document.querySelector("div"));
  draggables.push(draggable);
  if (addItem) {
    startMoving(draggables, deviceType);
    moving(draggables, deviceType);
    endMoving(draggables, deviceType, stopMovement);
    addItem = false;
  }
});
