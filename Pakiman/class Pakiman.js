class Pakiman
{
    constructor (n, hp, atp, t)
    {
        this.imagen =  new Image();
        this.nombre =  n;
        this.tipo = t;
        this.vida =  hp;
        this.ataque = atp; 

        this.imagen.src = imagenes[this.nombre]; 
    }
    mostrar ()
    {
        document.body.appendChild(this.imagen);
        document.write(`<br /><strong>${this.nombre}</strong><br />`);
        document.write(`HP: ${this.vida}<br />`);
        document.write(`AT: ${this.ataque}<br />`);
        document.write(`TIPO: ${this.tipo} <hr />`);
    }
}