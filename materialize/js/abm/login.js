var urlAjax = "http://localhost/tesis/TFGweb/";
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
        type: "GET",
        data: datos,
        url: urlAjax+"consultas/login.php", //'http://ajapoweb.com/consultas/login.php', 
        success: function(data) {               
            var res = jQuery.parseJSON(data); 
            
            try {
                idActual = parseInt(res[0]['id']);
                location.reload();
            }
            catch(err) {
                idActual = parseInt(0);
                $("#lbErrorLog").css("display","inline");
            }
            if (idActual > 0) {
                $("#lbErrorLog").css("display","none");
                //irUrl('index.php');
            }
            $('.camposForm').val('');
        },
        error: function(e){  
            mensajeError("Error en el servidor, por favor, intentalo de nuevo mas tarde!");
        }
    });
    return false;
}

/*
 * Salir de la sesion
 */
function logout(){
    $.ajax({
        type: "GET",
        data: '{}',
        url: urlAjax+"consultas/logout.php", //'http://ajapoweb.com/consultas/logout.php',
        success: function(data) {
            location.reload();
        },
        error: function(e){ 
            location.reload();
            //mensajeError("Error en el servidor, por favor, intentalo de nuevo mas tarde!");
        }
    });
}