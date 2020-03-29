var cB = document.getElementById("canvasB");
var cF = document.getElementById("canvasF");

var ctxB = cB.getContext("2d");
var ctxF = cF.getContext("2d");

ctxB.imageSmoothingEnabled= true;

var time = 0;

function DrawСircle(ctx, x, y, r, color){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function DrawLine(ctx, start, end){
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.strokeStyle  = '#333333';    
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
}

function Draw(t){

    var pos1 = {x: 400, y: 375};

    var p1x = pos1.x + Math.sin(t) * 80 * Math.cos(t);
    var p1y = pos1.y + Math.cos(t) * 80;
    var p2x = pos1.x + Math.sin(t) * 60 * Math.cos(t);
    var p2y = pos1.y + Math.cos(t) * 60;

    var p3x = pos1.x + Math.sin(t) * 80;
    var p3y = pos1.y + Math.cos(t) * 80;

    DrawСircle(ctxF, p1x, p1y, 8, '#333333');
    DrawСircle(ctxB, p1x, p1y, 1, '#1d1d1d');

    DrawСircle(ctxF, p2x, p2y, 8, '#333333');
    DrawСircle(ctxB, p2x, p2y, 1, '#1d1d1d');

    DrawСircle(ctxF, pos1.x + Math.sin(t) * 180 * Math.cos(t), pos1.y, Math.abs(10 * Math.sin(t)), '#333333');
    DrawСircle(ctxF, pos1.x + Math.sin(t) * 180 * (-Math.cos(t)), pos1.y, Math.abs(10 * Math.sin(t)), '#333333');

    DrawСircle(ctxF, p3x, p3y, 5, '#333333');
    DrawСircle(ctxB, p3x, p3y, 1, '#1d1d1d');

}


var animate = function () {
    requestAnimationFrame( animate );
    ctxF.clearRect(0, 0, cF.width, cF.height);
    Draw(time);
    time += 0.02;
};

animate();