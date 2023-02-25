import { startMoving, moving, endMoving } from "./events.js";

export function whatDevice() {
  let deviceType = "";
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return deviceType;
  } catch (e) {
    deviceType = "mouse";
    return deviceType;
  }
}
export function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
export function itemElement(parent, element) {
  element.className = "draggable-item -commun -flex -noSelectText";
  element.id = "draggable-item";
  element.textContent = "Drag me";
  parent.append(element);
}
export function eventElement(element) {
  startMoving(element);
  moving(element);
  endMoving(element);
  //setupEvent
}
export function removeLastItem() {
  document.querySelector(".draggable-item").remove();
}
