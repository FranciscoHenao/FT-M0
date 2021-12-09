// Clase constructora, instanciadora
function Gato(nombre, otroParam)
{
    this.nombre= nombre;
    this.otroParam=otroParam
    this.maullar= function()
     {return'Mi nombre es '+this.nombre+' ... Moeow'}
    this.comidaFav=function()
     {return 'Otra cosa que acabo de hacer '+ this.otroParam
}
}
    
    
var sam = new Gato('1','pasta');
var kitty = new Gato('2','arroz');
console.log(kitty)
console.log(sam)
console.log(sam.maullar());
console.log(kitty.maullar());
// console.log(param2);
console.log(sam.comidaFav());
console.log(kitty.comidaFav())
