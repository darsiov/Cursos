function entregarDinero()
{
    var t =  document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles) );
            dinero -= (bi.valor * papeles);
        }
    }
    if (dinero < 0)
    {
        r.innerHTML = 'No hay suficiente dinero D:" + "<br/>';
    }
    else
    {
        for ( var e of entregado)
        {
            if (e.cantidad > 0)
            {
            r.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
            i.innerHTML += '<a href="https://imgur.com/8TE237P"><img src="https://i.imgur.com/8TE237P.png" title="source: imgur.com" width ="15%" length ="15%"/></a><br/>';
            }
        }
    }
}

var caja = [];
var entregado = [];
caja.push( new Billete (50, 10) );
caja.push( new Billete (20, 30) );
caja.push( new Billete (10, 10) );
caja.push( new Billete (5, 10) );
var dinero = 0;
var div = 0;
var papeles = 0;
var i = document.getElementById("images")
var r = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);