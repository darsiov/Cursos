document.addEventListener("mousedown", pulsarClick);
document.addEventListener("mouseup", soltarClck)
document.addEventListener("mousemove", dibujarMouse);    

var estado = 0;
var picture = document.getElementById("Feel_Good");
var paper = picture.getContext("2d");
var borde = "#66FFFF";
var color = "black";

dibujarLinea(borde, 1, 1, 1, 299, paper);
dibujarLinea(borde, 1, 299, 299, 299, paper);
dibujarLinea(borde, 1, 1, 299, 1, paper);
dibujarLinea(borde, 299, 1, 299, 299, paper);

function dibujarMouse(evento)
{
    if (estado == true)
     {   
        dibujarLinea(color, x, y, evento.layerX, evento.layerY, paper);
     }
      x = evento.layerX;
      y = evento.layerY;
}
function pulsarClick(evento)
{
    estado = 1;         
    x = evento.layerX;
    y = evento.layerY;
}
function soltarClck(evento)
{
    estado = 0;         
    x = evento.layerX;
    y = evento.layerY;
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