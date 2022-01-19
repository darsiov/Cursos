var imagenes = [];
imagenes["Cauchin"] = "https://i.imgur.com/ELFyyz8.png";
imagenes["Pokacho"] = "https://i.postimg.cc/vHGN9xf9/pollo.webp";
imagenes["Tocinauro"] = "https://i.postimg.cc/xjvZc3Jn/cerdo.webp";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100 , 30, "Tierra" ));
coleccion.push(new Pakiman("Pokacho", 80, 50, "Volador"));
coleccion.push(new Pakiman("Tocinauro", 120, 40, "Normal"));

for(var p of coleccion)
{
    p.mostrar();
}