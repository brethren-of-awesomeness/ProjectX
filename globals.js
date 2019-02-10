var config = 2;

export var canvas = document.getElementById('canvas-main');
export var context = canvas.getContext('2d');
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
export function getConfig() { return config;}
export function updateConfig() { 
    config = (config%2) + 1;
}
