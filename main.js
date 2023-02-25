import { DraggableItem } from "./class.js";
import { removeLastItem } from "./functions.js";
import { changeTheme } from "./assets/theme.js";

document.querySelector(".add").addEventListener("click", (e) => {
  new DraggableItem(document.querySelector(".playground"));
});
document.querySelector(".delete").addEventListener("click", (e) => {
  removeLastItem();
});
document.querySelector("#theme").addEventListener("change", (e) => {
  changeTheme();
});
