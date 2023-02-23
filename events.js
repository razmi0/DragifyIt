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

export function startMoving(draggables, deviceType, i) {
    // start (mouse down / touch start)
    draggables[i].element.addEventListener(events[deviceType].down , (e) => {

        e.preventDefault();
        // initial X Y ptn
        draggables[i].initial_X = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        draggables[i].initial_Y = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        //start movement
        draggables[i].moving = true;

    })
}

export function moving (draggables, deviceType, i) {
    //move
    draggables[i].element.addEventListener(events[deviceType].move, (e) => {
        // movement is true => set top and left to new X Y while removing offsets
        if(draggables[i].moving){
            e.preventDefault();
            let new_X = 0;
            let new_Y = 0;
            new_X = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
            new_Y = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
            draggables[i].element.style.top = draggables[i].element.offsetTop - (draggables[i].initial_Y - new_Y) + "px";
            draggables[i].element.style.left = draggables[i].element.offsetLeft - (draggables[i].initial_X - new_X) + "px";
            draggables[i].initial_X = new_X;
            draggables[i].initial_Y = new_Y;
            

        }
    });
}

export function endMoving (draggables, deviceType, stopMovement, i) {
    //mouseup / touch end
    draggables[i].element.addEventListener(events[deviceType].up , (stopMovement = (e) => {
        draggables[i].moving = false;
    }));

    draggables[i].element.addEventListener("mouseleave", stopMovement);

    draggables[i].element.addEventListener(events[deviceType].up, (e) => {
        draggables[i].moving = false;
    });
}