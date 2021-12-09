class FabricaDeAutos
{
    constructor(ruedas)
    {
        this.ruedas=ruedas || 0
    }
}

class FabricaDeCamiones extends FabricaDeAutos
{
    constructor(ruedas, tonelaje)
    {
        super(ruedas)
        this.tonelaje=tonelaje
    }
}

var uno=new FabricaDeAutos(3)
var dos=new FabricaDeCamiones(3, 400)

console.log(uno)
console.log(dos)

