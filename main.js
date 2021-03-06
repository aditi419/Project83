canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var lastPosition_X;
var lastPosition_Y;
var lastPositionX_Touch, lastPositionY_Touch;
var color = "red";
var widthOfLine = 1;
var width = screen.width;
new_width = screen.width - 70;
new_height =  screen.height - 300;

if(width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart (e) {
    console.log("mytouchstart");
    lastPositionX_Touch = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionY_Touch = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);
var mouseevent = "empty";
function myTouchMove(e) {
    currentPositionTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionTouchY = e.touches[0].clientY - canvas.offsetTop;
   
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.moveTo(lastPositionX_Touch, lastPositionY_Touch);
    ctx.lineTo(currentPositionTouchX,currentPositionTouchY);
    ctx.stroke();
    lastPositionX_Touch = currentPositionTouchX;
    lastPositionY_Touch = currentPositionTouchY;
}


canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentPositionMouseX = e.clientX - canvas.offsetLeft;
    currentPositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle =  color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPosition_X, lastPosition_Y);
        ctx.lineTo(currentPositionMouseX, currentPositionMouseY);
        ctx.stroke();
    }
    lastPosition_X = currentPositionMouseX;
    lastPosition_Y = currentPositionMouseY;
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseevent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseup";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseevent = "mousedown";
}
