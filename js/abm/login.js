$(document).ready(function () {
    $('.mensaje').css('display','none');
    $("#lbErrorLog").css("display","none");
    $("#formLogin").validate({
        //definir reglas
        rules: {  
            userLog: { required: true },
            passLog: { required: true }
        },
        //mensajes a mostrar en caso que no se cumplan las reglas
         messages: {
           userLog: { required: "" },
           passLog: { required: "" }
          },
        //llamar a funcion guardar en caso que se hallan validados
        //los campos requeridos
        submitHandler: function() {
            if(accion == 'login'){
                login(); 
            }
        } 
    }); //validador fin
});


/*
 * Loguea al user
 */
function login(){

    //obtener datos
    var datos = {
        "usuario" : $("input[id*=userLog]").val(),
        "password" : $.md5($("input[id*=passLog]").val())
    }
    $.ajax({
        type: "GET",//dataType: 'json', //type: "POST", //type: "GET" // Choosing a JSON datatype
        data: datos,
        url: 'http://tfgweb.com.devel/consultas/login.php', //'http://localhost/TFGweb/consultas/login.php',
        success: function(data) {               
            var res = jQuery.parseJSON(data); 
            try {
                idActual = parseInt(res[0]['id']);
            }
            catch(err) {
                idActual = parseInt(0);
                $("#lbErrorLog").css("display","inline");
            }

            if (idActual > 0) {
                $("#lbErrorLog").css("display","none");
                irUrl('index.php');
            }
            $('.camposForm').val('');
        },
        error: function(e){  
            mensajeError("Error en el servidor, por favor, intentalo de nuevo mas tarde");
        }
    });
    return false;
}

/*
 * Salir de la sesion
 */
function logout(){
    $.ajax({
        type: "GET",//dataType: 'json', //type: "POST", //type: "GET" // Choosing a JSON datatype
        data: '{}',
        url: 'http://tfgweb.com.devel/consultas/logout.php',//'http://localhost/TFGweb/consultas/logout.php',
        success: function(data) {
            var res = jQuery.parseJSON(data);           
                idActual = parseInt(res);
        },
        error: function(e){ 
            mensajeError("Error en el servidor, por favor, intentalo de nuevo mas tarde");
        }
    });
}