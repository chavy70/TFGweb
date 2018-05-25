/**
*
* Aqui van todas las funciones utilizzdas en la mayoría de las páginas
* Gabriela Paredes - 2018
**/
$(document).ready(function () {
    // Oculta la barra de login si el user no esta conectado
    var idUserLog = parseInt($('#lbIdUser').attr('value'));
    if (idUserLog === 0){
        $('#barraMenu').css('display','none');
        $('.barraEstado').css('display','none');
    }
});    

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

/********************************************************************************************************************************/
/******************************************************** ABRIR/CERRAR MENU ****************************************************/
/*******************************************************************************************************************************/
function menuPrincipal(){
    /*$('.menu-home').addClass('open'); 
    $('.cerrar-menu').addClass('active');*/
    if($(".cerrar-menu").hasClass( "active" )){
        $(".cerrar-menu").removeClass("active");
        $('.menu-home').removeClass('open'); 
    }else{
        $(".cerrar-menu").addClass("active");
        $('.menu-home').addClass('open'); 
    }
}

/*******************************************************************************************************************************/
/************************************************ FUNCION PARA REDIRECCIONAR A PAGINA ******************************************/
/*******************************************************************************************************************************/
function irUrl(pagina){
    var url = window.location.href;
    //window.location(url + "/"+pagina);
    //window.location(pagina);
    location.href = pagina;
}
