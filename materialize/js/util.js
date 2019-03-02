/**
*
* Aqui van todas las funciones utilizzdas en la mayoría de las páginas
* Gabriela Paredes - 2018
**/
$(document).ready(function () {
    // Oculta la barra de login si el user no esta conectado
    var idUserLog = parseInt($('#lbIdUser').attr('value'));
    if (idUserLog > 0){
        $('.barra-top-estado').css('display','inline');
    }else{
        $('.barra-top-estado').css('display','none');
    }
});    

/*******************************************************************************************************************************/
/************************************************MENSAJES DE ALERTA PARA LOS USUARIOS*******************************************/
/*******************************************************************************************************************************/
/*
* Funcion que muestra los mensajes cuando se ha concluido con exito la transaccion
*/
function mensajeOk(mensaje) {
    var toastHTML = "<span>"+mensaje+"<i class='small material-icons white-text'>check</i> </span>";
    M.toast({html: toastHTML});
}
/*
* Funcion que muestra los mensajes error
*/
function mensajeError(mensaje) {
    var toastHTML = "<span>"+mensaje+"<i class='small material-icons white-text'>clear</i></span>";
    M.toast({html: toastHTML});
}


/*******************************************************************************************************************************/
/************************************************ FUNCION PARA REDIRECCIONAR A PAGINA ******************************************/
/*******************************************************************************************************************************/
function irUrl(pagina){
    var url = window.location.href;
    location.href = pagina;
}
