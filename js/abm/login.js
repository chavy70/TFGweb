$(document).ready(function () {
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
            alert('accion '+accion);
            if(accion == 'login'){
                login(); 
            }
        } 
    }); //validador fin
});


/*
 * Guarda un Cliente con JSON
 */
function login(){
    //obtener datos
    var datos = {
            "usuario" : $("input[id*=userLog]").val(),
            "password" : $("input[id*=passLog]").val()
    }
alert('dsds')    
    $.ajax({ 
        type: "GET",//dataType: 'json', //type: "POST", //type: "GET" // Choosing a JSON datatype
        data: datos,
        url: 'http://localhost/TFGweb/consultas/login.php',
        success: function(data) {
            
            var res = jQuery.parseJSON(data);
                idActual = parseInt(res);
                if (idActual = 0) {
                    mensajeError('mensaje');
                } else {
                    mostrarMensaje('mensaje');
                }
                ocultaMensaje('mensaje');
                $('.camposForm').val('');
            /*if(data == 0){
                $("label[id*=lbError]").text("Usuario o contraseña incorrectos");
                
            }else{
                //$.cookie("log", data.replace('"','').replace('"',''));
                //createCookie("log", data.replace('"','').replace('"',''));
                //location.href = "/Seguros/inicio/index.php";
                location.href = "index.php";
            }*/


        },
        error: function(e){ <!-- Si no ha podido conectar con el servidor --> 
            mensajeError("Error en el servidor, por favor, intentalo de nuevo mas tarde");
        }
    });
    return false;
}