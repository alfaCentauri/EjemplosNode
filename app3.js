const libreria = require('./utilidades.js');
const libreriaMensajes = require('./mensajes.js');
//
console.log('El valor de pi es: %f',libreria.pi);
var a = 2;
var b = 3;
var respuesta = libreria.potencia(a,b);
console.log('El valor de %d elevado a la %d es %d', a, b, respuesta);
//
libreriaMensajes.saludo();
console.log("El valor del número de mensaje es %d",libreriaMensajes.numeroMensaje);
libreriaMensajes.despedida();