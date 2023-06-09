var nombre = document.getElementById('nombreCalcularEdad');
var edad = document.getElementById('fechaCalcularEdad');
var resultadoEdad = document.getElementById('resultadoEdad');

btnCalcularEdad.addEventListener('click', function () {
    var nombre1 = nombre.value;
    var fechaNacimiento = new Date(edad.value);
    var edad1 = calcularEdad(fechaNacimiento);
    document.getElementById("resultadoEdad").innerHTML = `Hola ${nombre1}, tu edad actual es ${edad1} años`;
});

function calcularEdad(fechaNacimiento) {
    var fechaActual = new Date();
    var fechaEdad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (fechaActual.getMonth() < fechaNacimiento.getMonth() ||
        (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
            fechaActual.getDate() < fechaNacimiento.getDate()
        )) {
        fechaEdad--;
    }
    return fechaEdad;
}
