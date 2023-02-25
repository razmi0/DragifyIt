export class DraggableItem {
  /**
   * @class
   * @classdesc Build an element with all the variables needed for manipulation and attach it to parent
   * @param {HTMLCanvasElement} Child
   * @returns {Object} A full dragaable Item
   * @returns {object}
   */
  constructor(parent) {
    /** @type {Number} id of child element  */
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    /** @type {HTMLCanvasElement} Child  */
    this.element = this.createItem(parent);
    /** @type {Number} Initial X Coordinate  */
    this.initial_X = 0;
    /** @type {Number} Initial Y Coordinate  */
    this.initial_Y = 0;
    /** @type {Boolean} Is it moving ? */
    this.moving = false;
  }
  createItem(parent) {
    this.element = document.createElement("div");
    this.element.className = "draggable-item -commun";
    this.element.id = "draggable-item";
    this.element.textContent = "Drag Me";
    parent.appendChild(this.element);
    return this.element;
  }
}
