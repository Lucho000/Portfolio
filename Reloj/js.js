/*---------------------------------------------------------*/
var time;
var hora;
var minuto;
var segundo;
var imprimible;
/*---------------------------------------------------------*/
function moverReloj(){
    time = new Date();
    hora = time.getHours();
    minuto = time.getMinutes();
    segundo = time.getSeconds();
    imprimible = hora+':'+minuto+':'+segundo;
    document.form_reloj.reloj.value = imprimible;
    setTimeout(moverReloj, 1000);
}
/*---------------------------------------------------------*/