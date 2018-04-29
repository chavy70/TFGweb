/*******************************************************************************************************************************/
/************************************************MENSAJES DE ALERTA PARA LOS USUARIOS*******************************************/
/*******************************************************************************************************************************/
/*
 * Funcion que oculta los mensajes pasado 3 segundos
 */
function ocultaMensaje(div) {
    var capa = document.getElementById(div);
    setTimeout(function () { capa.style.display = 'none'; }, 3000);
}
/*
* Funcion que muestra los mensajes de alerta
*/
function mostrarMensaje(div) {
    var capa = document.getElementById(div);
    capa.style.display = 'inline';
}
/*
* Funcion que muestra los mensajes cuando se ha concluido con exito la transaccion
*/
function mensajeOk(mensaje) {
    $("#mensaje").html("");
    $("#mensaje").append(mensaje);
    mostrarMensaje("mensaje");
    ocultaMensaje("mensaje");
}
/*
* Funcion que muestra los mensajes error
*/
function mensajeError(mensaje) {
    $("#mensajeError").html("");
    $("#mensajeError").append(mensaje);
    mostrarMensaje("mensajeError");
    ocultaMensaje("mensajeError");
}

function irUrl(pagina){
    var url = window.location.href;
    //window.location(url + "/"+pagina);
    //window.location(pagina);
    location.href = pagina;
}