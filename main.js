import {demoImport} from './import.js';

demoImport();
console.log("Hello World");

//init
let lastTimeStamp = performance.now();
let keyState = {};
window.addEventListener('keydown', function (event) {
    keyState[event.keyCode] = true;
}, true);
window.addEventListener('keyup', function(event) {
    keyState[event.keyCode] = false;
}, true);
window.addEventListener('mousedown', function(event){
    keyState[event.keyCode] = true;
})
window.addEventListener('mouseup', function(event){
    keyState[event.keyCode] = false;
})

function ProcessInput(){
    
}
function update(elapsedTime) { /* TODO: All the work*/}
function render() {}

function gameLoop(time){
    let elapsedTime = time - lastTimeStamp;
    ProcessInput();
    update(elapsedTime);
    lastTimeStamp = time;
    render();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);