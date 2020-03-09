var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var centerPlaceX = c.getAttribute('width') / 2;
var centerPlaceY = c.getAttribute('height') / 2;

var time = 0;

var circlesArr = [
    {r: 10, color: '#9b9b9b', speed: 1},
    {r: 15, color: '#d1d1d1', speed: 0.6},
    {r: 20, color: '#ededed', speed: 0.5}
];

function DrawСircle(x, y, r, color){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function DrawLine(start, end){
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.strokeStyle  = '#636363';
    
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
}

function Draw(time){
    for( var circle of circlesArr) {

        var time = time * circle.speed;
        time = Math.sin(time) * 1.7;

        var posX = centerPlaceX - (circle.r/2) + (Math.sin(time) * 150);
        var posY = centerPlaceY  - (circle.r/2) + (Math.cos(time) * 150);

        DrawLine({x:centerPlaceX, y: centerPlaceX}, {x:posX, y: posY});
        DrawСircle(posX, posY, circle.r, circle.color);
        DrawСircle(centerPlaceX, centerPlaceX, 2.5, '#ededed');
    }
}


var animate = function () {
    requestAnimationFrame( animate );
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Draw(time);
    time += 0.03;
};

animate();
