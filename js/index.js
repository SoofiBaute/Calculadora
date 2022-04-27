let result = document.getElementById('visor-result');

let cero = document.getElementById('input-number-0');
let uno = document.getElementById('input-number-1');
let dos = document.getElementById('input-number-2');
let tres = document.getElementById('input-number-3');
let cuatro = document.getElementById('input-number-4');
let cinco = document.getElementById('input-number-5');
let seis = document.getElementById('input-number-6');
let siete = document.getElementById('input-number-7');
let ocho = document.getElementById('input-number-8');
let nueve = document.getElementById('input-number-9');

let reset = document.getElementById('input-c');
let igual = document.getElementById('input-igual');
let suma = document.getElementById('input-suma');
let resta = document.getElementById('input-resta');
let mult = document.getElementById('input-mult');
let div = document.getElementById('input-div');

//EVENTOS
cero.onclick = function(e){
    result.textContent = result.textContent + "0";
}
uno.onclick = function(e){
    result.textContent = result.textContent + "1";
}
dos.onclick = function(e){
    result.textContent = result.textContent + "2";
}
tres.onclick = function(e){
    result.textContent = result.textContent + "3";
}
cuatro.onclick = function(e){
    result.textContent = result.textContent + "4";
}
cinco.onclick = function(e){
    result.textContent = result.textContent + "5";
}
seis.onclick = function(e){
    result.textContent = result.textContent + "6";
}
siete.onclick = function(e){
    result.textContent = result.textContent + "7";
}
ocho.onclick = function(e){
    result.textContent = result.textContent + "8";
}
nueve.onclick = function(e){
    result.textContent = result.textContent + "9";
}
