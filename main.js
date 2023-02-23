
import { DraggableItem } from "./class.js";
import { isTouchDevice } from "./functions.js";
import { startMoving, moving, endMoving} from "./events.js";


const draggables = [];
let stopMovement = null;
let deviceType = "";
const numberOfDraggable = 5;

!isTouchDevice() ? deviceType = "mouse" : deviceType = "touch";

for (let i = 0 ; i < numberOfDraggable; i++){

    const draggable = new DraggableItem(document.getElementById("playground"));
    draggables.push(draggable);
    startMoving(draggables, deviceType, i);
    moving(draggables, deviceType, i);
    endMoving(draggables, deviceType, stopMovement, i);
}




