import {_4D, _8D} from './hotkeys.js';
import * as G from '../globals.js';

let speed = .2;
let sw = false;

var character = {
    x: 0,
    y: 0,
    
    currentMovement: {
        "x": 0,
        "y": 0,
    }
}

export function movementInput(keystate) {
    console.log(sw);
    if (keystate[192]) { if (sw == false) { G.updateConfig(); sw = true;} }
    else sw = false;
    
    character.currentMovement = { "x": 0, "y":0 };
    if (G.getConfig() == 1) {
        // counter-clockwise priority
        if (keystate[_4D.up]){ character.currentMovement.y = -1; }
        if (keystate[_4D.right]){ character.currentMovement.x = 1; }
        if (keystate[_4D.down]){ character.currentMovement.y = 1; }
        if (keystate[_4D.left]){ character.currentMovement.x = -1; }
    }
    if (G.getConfig() == 2) {
        // clockwise priority
        if (keystate[_8D.ul]) { character.currentMovement.y = -1; character.currentMovement.x = -1; }
        else if (keystate[_8D.up]){ character.currentMovement.y = -1; }
        else if (keystate[_8D.ur]){ character.currentMovement.y = -1; character.currentMovement.x = 1; }
        else if (keystate[_8D.right]){ character.currentMovement.x = 1; }
        else if (keystate[_8D.dr]){ character.currentMovement.y = 1; character.currentMovement.x = 1;}
        else if (keystate[_8D.down]){ character.currentMovement.y = 1; }
        else if (keystate[_8D.dl]){ character.currentMovement.y = 1; character.currentMovement.x = -1; }
        else if (keystate[_8D.left]){ character.currentMovement.x = -1; }
    }
}

export function movementUpdate(elapsedTime) {
    if (character.x >= 0 && character.x <= G.canvas.width - 50) character.x += character.currentMovement.x * elapsedTime * speed;
    else if (character.x < 0) character.x = 0;
    else (character.x) = G.canvas.width - 50;
    if (character.y >= 0 && character.y <= G.canvas.height - 50) character.y += character.currentMovement.y * elapsedTime * speed;
    else if (character.y < 0) character.y = 0;
    else (character.y = G.canvas.height - 50);
}

export function movementRender() {
    if (G.getConfig() == 1) G.context.strokeStyle="blue";
    else G.context.strokeStyle="red";
    G.context.beginPath();
    G.context.strokeRect(character.x,character.y,50,50)
}
