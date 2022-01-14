/* Mi archivo de utilidades. */
console.log("Archivo utilidades");
let pi = 3.14156;
module.exports.pi = pi;

module.exports.potencia = function (a, b){
    let resultado = a;
    for(var i=1; i < b; i++){
        resultado = resultado * a;
    }
    return resultado;
}