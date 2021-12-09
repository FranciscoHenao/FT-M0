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

// class FabricaDeAutos {
//     constructor(ruedas, puertas, color, motor, otra) {
//         this.ruedas = ruedas
//         this.puertas = puertas
//         this.color = color
//         this.motor = motor
//         this.otra = otra || '99'
//         this.vendido = false
//         // this.seVendio=function(){
//         // return 'ok'
//         // }
//     }
// }

var uno= new FabricaDeAutos(2,4,'red','10.0','xxx')
console.log(uno)
