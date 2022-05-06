function entregarDinero()
{
    var t =  document.getElementById("dinero");
    dinero = parseInt(t.value);
    var div;
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
    if (dinero > 0)
    {
        document.write("No hay suficiente dinero D:" + "<br/>");
    }
    else
    {
        r.innerHTML += "Se ha retirado: <br />";
        for ( var e of entregado)
        {
            r.appendChild(e.imagen)
        }
        r.innerHTML += "<hr />";
    }
}

var imagenes = [];
imagenes [100] = "billete100.png";
imagenes [50] = "billete50.png";
imagenes [20] = "billete20.png";
imagenes [10] = "billete10.png";
imagenes [5] = "billete5.png";
var caja = [];
var entregado = [];
caja.push( new Billete (100, 10) );
caja.push( new Billete (50, 10) );
caja.push( new Billete (20, 30) );
caja.push( new Billete (10, 10) );
caja.push( new Billete (5, 10) );
var r = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
