var edad=18;
var texto='';
switch(edad){
    case 17:
        texto='menor de edad';
    break;
    case 18:
        texto='mayor de edad';
    break;
    default: texto='no tienes edad';
}
console.log(texto);