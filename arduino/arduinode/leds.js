const jf = require("johnny-five");
const circuito = new jf.Board();

circuito.on("ready", prender);
function prender()
{
    var led = new jf.Led(9);
    var verdecito = new jf.Led(13);
    led.blink(50);
    verdecito.blink(500);
    console.log("POR FIN FUNCIONO EL PINCHE JOHNNY-FIVEW!!")
}