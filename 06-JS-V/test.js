var nissan={
    ruedas:4,
    puertas:3,
    color:'rojo',
    motor:'1.4'
}

var fiat={
    ruedas:4,
    puertas:5,
    color:'azul',
    motor:'2.0'
}

function FabricaDeAutos (ruedas, puertas, color, motor,otra){
    this.ruedas=ruedas
    this.puertas=puertas
    this.color=color
    this.motor=motor
    this.otra=otra || '99'
    this.vendido=false
    // this.seVendio=function(){
        // return 'ok'
    // }
}

class FabricaDeAutosDos { 
    constructor (ruedas, puertas, color, motor,otra, vendido)
    {
    this.ruedas=ruedas
    this.puertas=puertas
    this.color=color
    this.motor=motor
    this.otra=otra || '99'
    this.vendido=false
    // this.seVendio=function(){
        // return 'ok'
    // }
    }
    seVendio(){
        this.vendido=true
        return 'se vendio'
    }
}


FabricaDeAutos.prototype.verificarRuedas=function(){
    if (typeof this.ruedas === 'number')
    return true
    else return false
}

FabricaDeAutos.prototype.seVendio=function(){
    this.vendido=true
    return 'se vendio'
}

FabricaDeAutosDos.prototype.seVendio=function(){
    this.vendido=true
    return 'se vendio'
}
FabricaDeAutos.prototype.nuevo = 'nuevo'

var nissanFunctionClass1 = new FabricaDeAutosDos(4,5,'amarillo','3.0',null,)
var nissanFunctionClass2 = new FabricaDeAutos(4,5,'rojo','3.0','xxxxx')
var nissanFunctionClass3 = new FabricaDeAutos(4,5,'azul','3.0')

var buscado='otra'

console.log(nissanFunctionClass1)

console.log(nissanFunctionClass1[buscado])
console.log(nissanFunctionClass2.nuevo)
console.log(nissanFunctionClass3.verificarRuedas())

console.log(nissanFunctionClass1.vendido)
console.log(nissanFunctionClass1.seVendio())
console.log(nissanFunctionClass1.vendido)
console.log(nissanFunctionClass1)

console.log(nissanFunctionClass2)
console.log(nissanFunctionClass3)

