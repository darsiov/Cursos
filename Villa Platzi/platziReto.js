var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo ={
    url: "https://i.postimg.cc/jSbdyXvc/tile.webp",
    cargaOK: false
};
var vaca ={
    url: "https://i.imgur.com/ELFyyz8.png",
    cargaOK: false
};
var teclas ={
    UP:87,
    DOWN:83,
    RIGHT:68,
    LEFT:65,
    UP1:38,
    DOWN1:40,
    RIGHT1:39,
    LEFT1:37
};
var x = 195;
var y = 195;
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
document.addEventListener("keydown", moverVaca);
function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK);
    {
        dibujarVaca(x, y) 
    }
} 
function dibujarVaca(x, y)
{
    papel.drawImage(vaca.imagen, x, y);
} 

function moverVaca(evento)
{
    papel.clearRect(0, 0, 500, 500)
    var movimiento = 5;
    console.log("reconoce");

    switch(evento.keyCode)
    {
        
        case teclas.UP:
            y = y - movimiento;
            if (y <= -20)
            {
                y = -20;
            }
        break;
        case teclas.DOWN:
            y = y + movimiento;
            console.log(y);
            if(y >= 425)
            { 
                y = 425
            }
            else if (y >= 315 && x >= 300)
            {
                y = y - movimiento;
            }
        break;
        case teclas.RIGHT:
            x = x + movimiento;
            console.log(x);
            if(x >= 420)
            { 
                x = 420 
            }
            else if (y >= 315 && x >= 300)
            {
                x = x - movimiento;
            }
        break;
        case teclas.LEFT:
            x = x- movimiento;
            if (x <= 0)
            {
                x = 0;
            }
        break;
        case teclas.UP1:
            y = y - movimiento;
            if (y <= -20)
            {
                y = -20;
            }
        break;
        case teclas.DOWN1:
            y = y + movimiento;
            if(y >= 425)
            { 
                y = 425
            }
            else if (y >= 315 && x >= 300)
            {
                y = y - movimiento;
            }
        break;
        case teclas.RIGHT1:
            x = x + movimiento;
            if(x >= 420)
            { 
                x = 420
            }
            else if (y >= 315 && x >= 300)
            {
                x = x - movimiento;
            }
        break;
        case teclas.LEFT1:
            x = x- movimiento;
            if (x <= 0)
            {
                x = 0;
            }
        break;      
    }
    dibujar();
}
