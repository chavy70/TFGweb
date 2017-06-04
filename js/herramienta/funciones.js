//Variable global
var urlPagina = document.domain;// Guarda el dominio de la página
var ipPcActual;//Se guarda la ip publica
var urlSql = 'http://localhost/TFGWeb/';
/**
  * Inicia el código jQuery después de que el DOM esté ya cargado
  *
 **/
$(document).ready(function () {

});

/**
  * Guarda la ip publica del dispositivo desde donde se accedio a la herramienta
  *
 **/
$.getJSON("http://jsonip.com?callback=?", function (dataip) {
    //ipPcActual = dataip.ip;// la ip que devuelve esta en formato 12:54:1f:fc
});

/*
 * Copia el template seleccionado a la carpeta del usuario 
 */
function copiarTemplate(templatex){
    origen = "/TFGWeb/templates/"+templatex+"/";
    destino = "/TFGWeb/proyectos/newtemplate-";
     
    var datos = {
            "origen" : origen,
            "destino" : destino,
            "ipPcActual" : ipPcActual
    }
    //Utilizo ajax para llamar a la funcion PHP copiar template
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'funciones/CopiarTemplate.php',
        data: datos,
        success: function (data) {
            //window.location = '/PRUEBA/proyectos/'+data[1].toString()+'/';
            window.location = '/TFGWeb/proyectos/'+data[1].toString()+'/';
        }
    });
}

function getip(json){
  alert(json.ip); // alerts the ip address
}