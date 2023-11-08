/*---------------------------------------------------------------------------------------*/
var mode=document.getElementById('mode');
var valor = localStorage.getItem('modo');
/*---------------------------------------------------------------------------------------*/
mode.addEventListener('click', function(){
    var val = document.body.classList.toggle('dark');
    localStorage.setItem('modo', val);
});

if(valor=='true'){
    document.body.classList.add('dark');
}
else{
    document.body.classList.remove('dark');
}
/*---------------------------------------------------------------------------------------*/