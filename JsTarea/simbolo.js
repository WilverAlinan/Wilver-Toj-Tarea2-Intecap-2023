var nombreCompleto = document.getElementById("nombreCompleto");
var simboloReemplazo = document.getElementById("simboloReemplazo");
var resultadoVocales = document.getElementById("resultadoSimbolo");
var btnReemplaza = document.getElementById("btnReemplaza");

document.addEventListener("click", function () {
    var texto = nombreCompleto.value;
    var simbolo = simboloReemplazo.value;

    if (texto == " ") {
        document.getElementById("resultadoSimbolo").innerHTML = " ";
    } else {
        var resultadoReemplazo = texto.replace(/[aeiou]/gi, simbolo);
        document.getElementById("resultadoSimbolo").innerHTML = resultadoReemplazo;
    }
});


