var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var centerPlaceX = c.getAttribute('width') / 2;
var centerPlaceY = c.getAttribute('height') / 2;

var time = 0;

var maxArrLenght = 80;

var elements = [
    { color: '#ededed', size: 3, position: {x:0, y:0}, recordPosition: [] },
    { color: '#EBDC4C', size: 2.5, position: {x:0, y:0}, recordPosition: [] },
    { color: '#9CBAFF', size: 2.5, position: {x:0, y:0}, recordPosition: [] }
];

function DrawСircle(x, y, r, color){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function Draw(time){
        var posX = centerPlaceX + Math.sin(time) * 150 * Math.abs(Math.sin(time));
        var posY = centerPlaceY + Math.cos(time) * 150 * Math.abs(Math.sin(time));
        var posX2 = posX + Math.sin(time) * 20;
        var posY2 = posY + Math.cos(time) * 20;
        var posX3 = posX2 + Math.sin(time) * 20;
        var posY3 = posY2 + Math.cos(time) * 20;

        elements[0].position = {x: posX, y:posY };
        elements[1].position = {x: posX2, y:posY2 };
        elements[2].position = {x: posX3, y:posY3 };

        for(var el of elements){
            if(el.recordPosition.length > maxArrLenght){
                el.recordPosition.shift();
            } else {
                el.recordPosition.push({x: el.position.x, y: el.position.y})
            }
        }

        for(var el of elements){
            for(var arr of el.recordPosition){
                DrawСircle(arr.x, arr.y, el.size, el.color); 
            }            
        }

        DrawСircle(posX, posY, 10, '#ededed');
        DrawСircle(posX2, posY2, 4, '#EBDC4C');      
        DrawСircle(posX3, posY3, 4, '#9CBAFF');   
}


var animate = function () {
    requestAnimationFrame( animate );
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Draw(time);
    time += 0.03;
};

animate();
