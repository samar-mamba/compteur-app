const compteur = document.getElementById('compteur');
const buttonRemove = document.getElementById('btn-remove');
const buttonAdd = document.getElementById('btn-add');
const buttonReset = document.getElementById('btn-reset');


function add (){
    const nombre = Number(compteur.innerHTML);
    compteur.innerHTML= nombre + 1 ;
}
function remove (){
    const nombre = Number(compteur.innerHTML);
    if (nombre > 0){
    compteur.innerHTML= nombre - 1 ;
    }
}
function reset (){
    const nombre = Number(compteur.innerHTML);
    compteur.innerHTML = nombre - nombre;    
}
buttonAdd.addEventListener("click",add);
buttonRemove.addEventListener("click",remove);
buttonReset.addEventListener("click",reset);
