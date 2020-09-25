//Variables globales
var urlPagina = document.domain;// Guarda el dominio de la página
var ipPcActual;//Se guarda la ip publica
var urlSql = "http://localhost/tesis/TFGweb/";//'http://ajapoweb.com/';
/**
  * Inicia el código jQuery después de que el DOM esté ya cargado
  *
 **/
$(document).ready(function () {
    // Login y Registro ----------------------------------------------------------
    // https://bootsnipp.com/snippets/80gpb
    // Función de las pestañas
    $('#formLoginLink').click(function(e) { // Login
        $("#formLogin").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#formRegLink').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#formRegLink').click(function(e) { // Registro
        $("#register-form").delay(100).fadeIn(100);
        $("#formLogin").fadeOut(100);
        $('#formLoginLink').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    // FIN Login y Registro -------------------------------------------------------
    // https://bootsnipp.com/snippets/80gpb
    // PopUp Modal
    //----- Abrir
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        e.preventDefault();
    });
    //----- Cerrar
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        e.preventDefault();
    });
    // FIN PopUp Modal
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
/*function copiarTemplate(templatex){
    origen = "http://ajapoweb.com/templates/"+templatex+"/";
    destino = "http://ajapoweb.com//newtemplate-";
    
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
        //url: 'funciones/CopiarTemplate.php',
        url: 'http://ajapoweb.com/funciones/CopiarTemplate.php',
        data: datos,
        success: function (data) {      
            //window.location = '/PRUEBA/proyectos/'+data[1].toString()+'/';
            window.location = 'http://ajapoweb.com/proyectos/'+data[1].toString()+'/';
        }
    });
}*/
function copiarTemplate(templatex){     
    raiz = "/tesis/TFGweb";//eliminar al subir al FTP
    carpetaUser = $("#lbIdUser").text();
    if(carpetaUser === ' '){
        carpetaUser = 'visitor'
    }
    carpetaUser = $.trim(carpetaUser);
    origen = raiz+"/templates/"+templatex+"/";
    destino = raiz+"/proyectos/"+carpetaUser+"/newtemplate-";// MODIFICAR AL SUBIR AL FTP
    var datos = {
            "origen" : origen,
            "destino" : destino,
            "ipPcActual" : ipPcActual
    }
    alert(carpetaUser+" origen "+origen+" destino "+destino)
    //Utilizo ajax para llamar a la funcion PHP copiar template
    $.ajax({
        type: "GET",
        url: urlSql+"funciones/CopiarTemplate.php", //'http://ajapoweb.com/funciones/CopiarTemplate.php',
        data: datos,
        success: function (data) {
            alert("data "+data);
            alert("JSON.parse(data)[1] "+JSON.parse(data)[1]);
            window.location = urlSql+'proyectos/'+carpetaUser+'/'+JSON.parse(data)[1]+'/';
            //window.location = 'http://ajapoweb.com/proyectos/'+carpetaUser+'/'+JSON.parse(data)[1]+'/';
        }
    });
}


function getip(json){
  alert(json.ip); // alerts the ip address
}