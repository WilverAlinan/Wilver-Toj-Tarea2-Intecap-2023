var style = document.createElement('style');
document.head.appendChild(style);

style.sheet.insertRule('span {color:red;}', 0);

btnPrimos.addEventListener("click", function () {
    var numeros = "";
    for (var i = 1; i <= 100; i++) {
        if (numeroPrimo(i)) {
            numeros += "<span>" + i + "  " + "</span>";
        } else {
            numeros += i + "  ";
        }
    }
    document.getElementById("resultadoPrimo").innerHTML = numeros;

});

function numeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}