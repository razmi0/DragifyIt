import { itemElement, eventElement } from "./functions.js";

export class DraggableItem {
  constructor(parent) {
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.element = this.createItem(parent);
    this.initial_X = 0;
    this.initial_Y = 0;
    this.moving = false;
  }
  createItem(parent) {
    this.element = document.createElement("div");
    itemElement(parent, this.element);
    eventElement(this.element);
    return this.element;
  }
}
