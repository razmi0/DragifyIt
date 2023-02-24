import { isTouchDevice } from "./functions.js";


let events = {
    mouse: {
        down : "mousedown",
        move : "mousemove",
        up : "mouseup"
    },
    touch: {
        down : "touchstart",
        up : "touchend",
        move : "touchmove"
    }
};

export function startMoving(draggables, deviceType) {
    // start (mouse down / touch start)
    for (const item of draggables){
        item.element.addEventListener(events[deviceType].down , (e) => {
            e.preventDefault();
            // initial X Y ptn
            item.initial_X = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
            item.initial_Y = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
            //start movement
            item.moving = true;
            if (getComputedStyle(item.element,null).getPropertyValue("background-color") === "rgb(255, 255, 255)") {
                item.element.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            }
        })
    }
}

export function moving (draggables, deviceType) {
    
    for (const item of draggables){

        item.element.addEventListener(events[deviceType].move, (e) => {
            // movement is true => set top and left to new X Y while removing offsets
            if( item.moving ) {
                e.preventDefault();
                let new_X = 0;
                let new_Y = 0;
                new_X = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
                new_Y = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
                item.element.style.top = item.element.offsetTop - (item.initial_Y - new_Y) + "px";
                item.element.style.left = item.element.offsetLeft - (item.initial_X - new_X) + "px";
                item.initial_X = new_X;
                item.initial_Y = new_Y;
            }
        });
    }
}

export function endMoving (draggables, deviceType, stopMovement) {
    //mouseup / touch end
    for (const item of draggables){
        item.element.addEventListener(events[deviceType].up , (stopMovement = (e) => {
            item.moving = false;
        }));
        item.element.addEventListener("mouseleave", stopMovement);
        item.element.addEventListener(events[deviceType].up, (e) => {
            item.moving = false;
        });
    }
}
