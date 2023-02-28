import { DraggableItem } from "./class.js";
import { removeLastItem } from "./functions.js";
import { changeTheme } from "./assets/theme.js";


const items = [];
const generator = document.querySelector(".playground");

document.querySelector(".add").addEventListener("click", () => {
  const item = new DraggableItem(generator);
  items.push(item);  
});
  document.querySelector(".delete").addEventListener("click", () => {
  removeLastItem(items);
});
document.querySelector("#theme").addEventListener("change", () => {
  changeTheme();
});
mql = window.matchMedia(window);
console.log(mql)
