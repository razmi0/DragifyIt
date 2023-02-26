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
  element.textContent = "O";
  parent.append(element);
}
export function eventElement(element) {
  startMoving(element);
  moving(element);
  endMoving(element);
  //setupEvent
}
export function removeLastItem(items) {
  try {
    document.querySelector(".draggable-item").remove();
    items.pop();
  } catch (e) {
    console.log("There's no item to remove...", { e });
  }
}
export function randomColors(item) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = 0.7;
  item.style.backgroundColor = `rgb(${r},${g},${b},${a})`;
  item.style.borderColor = `rgb(${r},${g},${b},${1})`;
}
export function isStartColor(item) {
  if (getComputedStyle(item, null).getPropertyValue("background-color") === "rgb(255, 255, 255)"){
    return true
  };return
    
}
