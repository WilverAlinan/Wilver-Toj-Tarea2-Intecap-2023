document.addEventListener("click", function () {
    var textoPalindromo = document.getElementById("palindromo1").value;
    var texto = textoPalindromo.replace(" ", "").toLowerCase();

    if (texto === texto.split("").reverse().join("")) {
        document.getElementById("resultadoPalindromo").innerHTML = "El texto ingresado SI es un palindromo :) ";

    } else {
        document.getElementById("resultadoPalindromo").innerHTML = "El Texto Ingresado NO es un Palindromo :( "
    }
    if (texto == "") {
        document.getElementById("resultadoPalindromo").innerHTML = "";
    }
}

);