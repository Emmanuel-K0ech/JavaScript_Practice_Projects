// EventListeners
// Syntax
// element.addEventListener(event, listener, useCapture);
// lets use getElementById
console.log("Script linked successfully");
//lets write out the functions first
//start function

//global variables needed
var startTime = new Date().getSeconds();

function printTime(){
    const element = document.getElementById("stopwatch").innerHTML = 
    new Date().getSeconds() - startTime;
};

function startWatch(){
    //setInterval(printTime, 1000);
};

//stop function 
function stopTheWatch(){
    clearInterval(element);
};

//reset function
function resetWatch(){
    alert("This will reset the stowpwatch")
};

document.getElementById("start").addEventListener('click', startWatch);
document.getElementById("stop").addEventListener('click', stopTheWatch);
document.getElementById("reset").addEventListener('click', resetWatch);

// setInterval code
setInterval(startWatch, 1);