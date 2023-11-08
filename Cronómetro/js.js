var contadorDias=0;
var contadorHoras=0;
var contadorMinutos=0;
var contadorSegundos=0;
var controlPausa=false;
var iterador;
var contador1=document.getElementById('contadorSegundos');
var contador2=document.getElementById('contadorMinutos');
var contador3=document.getElementById('contadorHoras');
var contador4=document.getElementById('contadorDias');
/*-------------------------------------------------------------------------------------------*/
function procesar(){
    contadorSegundos+=1;
    console.log(contadorSegundos);
    contador1.innerHTML=contadorSegundos;
    contador2.innerHTML=contadorMinutos;
    contador3.innerHTML=contadorHoras;
    contador4.innerHTML=contadorDias;
    if(contadorSegundos==60){
        contadorSegundos=0;
        contadorMinutos++;
    }
    if(contadorMinutos==60){
        contadorMinutos=0;
        contadorHoras++;
    }
    if(contadorHoras==24){
        contadorHoras=0;
        contadorDias++;
    }
}
function retrasar(){
    iterador=setInterval(procesar,1000);
}

function comenzar(){
    retrasar();
    document.getElementById('comenzar').disabled=true;
}
function controlar(){
    if(controlPausa==false){
        controlPausa=true;
        clearInterval(iterador);
    }
    else{
        controlPausa=false;
        retrasar();
    }
}
function restablecer(){
    clearInterval(iterador);
    contadorSegundos=0;
    contadorMinutos=0;
    contadorHoras=0;
    contadorDias=0;
    contador1.innerHTML=contadorSegundos;
    contador2.innerHTML=contadorMinutos;
    contador3.innerHTML=contadorHoras;
    contador4.innerHTML=contadorDias;
    document.getElementById('comenzar').disabled=false;
}
/*-------------------------------------------------------------------------------------------*/