let quantidade = 20;

//quantidade = 'qualquer'; --não compila

let x = [1, 2, null];

//x[0] = true; --não compila

//Contextual Typing
window.onmousedown = function(evento){
    console.log(evento.button); //OK
    // console.log(evento.buton); --não compila
}