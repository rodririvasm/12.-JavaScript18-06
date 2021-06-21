/*Escribir un programa que lea un entero positivo, n , 
introducido por el usuario y después muestre en pantalla 
la suma de todos los enteros desde 1 hasta n*/

function recibir(){
    let formulario = document.forms['formulario'];
    var x = formulario['entero'];
    entero= (x.value);

    console.log('numero entero ingresado: '+ entero);
    document.write('numero entero ingresado: '+ entero + '   ');

    var suma=0;
    
    for(var i=1;i<=entero;i++){
        suma= suma + i;
    }
    console.log('suma total del numero ingresado: ' + suma);
    document.write('suma total del numero ingresado: ' + suma);

}


