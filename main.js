import {movementInput, movementUpdate, movementRender} from "./character/movement.js";
import * as G from "./globals.js";
//init
let lastTimeStamp = performance.now();
let keyState = {};

CanvasRenderingContext2D.prototype.clear = function() {
    this.save();
    this.setTransform(1,0,0,1,0,0);
    this.clearRect(0,0, G.canvas.width, G.canvas.height);
    this.restore();
}

window.addEventListener('keydown', function (event) {
    keyState[event.keyCode] = true;
}, true);
window.addEventListener('keyup', function(event) {
    delete keyState[event.keyCode];
}, true);
window.addEventListener('mousedown', function(event){
    keyState[event.keyCode] = true;
})
window.addEventListener('mouseup', function(event){
    delete keyState[event.keyCode];
})

function ProcessInput(){
    movementInput(keyState);
}
function update(elapsedTime) { 
    movementUpdate(elapsedTime);
}
function render() {
    G.context.clear();
    movementRender();
}

function gameLoop(time){
    let elapsedTime = time - lastTimeStamp;
    ProcessInput();
    update(elapsedTime);
    lastTimeStamp = time;
    render();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);