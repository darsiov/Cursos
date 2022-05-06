var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);

var picture = document.getElementById("Lienzo");
var paper = picture.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, paper)
function dibujarTeclado(evento)
{
    var color = "green";
    var movimiento = 5;
    switch(evento.keyCode)
    { 
        case teclas.UP:
            dibujarLinea(color, x, y, x, y - movimiento, paper);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(color, x, y, x, y + movimiento, paper);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(color, x, y, x - movimiento, y, paper);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(color, x, y, x + movimiento, y, paper);
            x = x + movimiento;
        break;
    }
}

function dibujarLinea(color, xi, yi, xf, yf, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}