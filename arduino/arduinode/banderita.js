var j= require("johnny-five");
var circuito = new j.Board();
var bombillo, motorcito, celda; 
var turno = 0;

circuito.on("ready", prender);

function prender ()
{
    var configuracion = {pin:"A0", freq:50}; 
    celda = new j.Sensor(configuracion); 

    bombillo = new j.Led(13);
    bombillo.on();

    motorcito = new j.Servo(9);
    
    ondear(); 
    
}

function ondear ()
{   
    var luz = celda.value;
    if (luz > 50)
    {
        if(turno)
        {
            turno = 0;
            motorcito.to(180);
        }
        else
        {
            turno = 1;
            motorcito.to(60);
        }
    }
    else 
    {
        motorcito.to(45);
    }
    setTimeout(ondear, 1000);
    console.log("Luz:" + luz);

}

