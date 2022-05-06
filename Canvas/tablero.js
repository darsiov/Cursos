var number = document.getElementById("numero_lineas");
var button = document.getElementById("boton");
var marco = "black"

button.addEventListener("click", dibujoporClick);

var t = document.getElementById("tablero");
var ancho = t.width;
var lienzo = t.getContext("2d");

dibujarLinea(marco, 1, 1, 1, 299)
dibujarLinea(marco, 1, 299, 299, 299)
dibujarLinea(marco, 1, 1, 299, 1)
dibujarLinea(marco, 299, 1, 299, 299)
function dibujarLinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoporClick()
{
    var lim = parseInt(number.value);
    var xi, yi, xf, yf;
    var color = "#007DF5";
    var espacio = ancho / lim;
    for(l = 0; l < lim; l++)
    {
        yi = espacio * l;
        xf = espacio* (l + 1);
        dibujarLinea(color, 0, yi, xf, 300);
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea(color, xi, 0, 300, yf);
        xi = 300 - l * espacio;
        yf = espacio * (l + 1);
        dibujarLinea(color, xi, 0, 0, yf);
        yi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea(color, xi, 0, 0, yf);
        xf = 300 - espacio * (l + 1);
        dibujarLinea(color, 300, yi, xf, 300);
    }   
}


