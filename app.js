const os = require('os');
const fileSystem = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
let cpu_string = JSON.stringify(cpu);

fileSystem.appendFile('salida.txt','Información del computador: '+cpu_string, function(error){
    error? console.log("Error al crear el archivo."):console.log("Ok");
});
