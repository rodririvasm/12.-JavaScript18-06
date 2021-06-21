var humedad=0;
var liquido=0;
var trabajadores=0;
var ambiente=0;

function recibir(){
    let formulario = document.forms['formulario'];
    var x = formulario['ambiente'];
    var y = formulario['liquido'];
    var z = formulario['trabajadores'];
    var w = formulario['humedad'];

    humedad= (w.value);
    liquido= (y.value);
    trabajadores= (z.value);
    ambiente= (x.value);

    console.log(ambiente,humedad,trabajadores,liquido);
}
/*
function alert(ambiente,liquido,trabajadores,humedad){
    
}*/

