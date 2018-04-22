var _idUsuarioAuto = "0";
$(document).ready(function () {
	//mascaras
    /*$("input[id*=tbNombreEmpleado]").alpha({allow:"., "});
    $("input[id*=tbApellidoEmpleado]").alpha({allow:"., "});
    $("input[id*=tbDocEmpleado]").numeric({allow:"-"});
    $("input[id*=tbTelefonoEmpleado]").numeric({allow:"-()"});

    $("input[id*=tbUserReg]")
    $("input[id*=tbEmail]")
    $("input[id*=tbNombre]")
    $("input[id*=tbFechaNac]")
    $("input[id*=tbPassReg]")
    $("input[id*=tbConfirmPass]")*/
                      
    $("#register-form").validate({ // Inicio validación
        errorClass: 'error', // Agreaga esta clase al campo
        //definir reglas
        rules: {  
            tbUserReg: { required: true },
            tbPassReg: { required: true },
            tbConfirmPass: { required: true, equalTo: "#tbPassReg" }
       
        },
        //mensajes a mostrar en caso que no se cumplan las reglas
         messages: {
           tbUserReg: { required: "" },
           tbPassReg: { required: "" },
           tbConfirmPass: { required: "", equalTo:"" } //<br/>Contrase&ntilde;a no coincide
          },

            /*highlight: function (element) {
                $(element).parent().addClass('error')
            },
            unhighlight: function (element) {
                $(element).parent().removeClass('error')
            }*/
        //llamar a funcion guardar en caso que se hallan validados
        //los campos requeridos
        submitHandler: function() {
            if(accion == 'guardar'){
                alert('hola');
            guardarUsuario(); 
        }else if(accion == 'login')
            alert('login!');//editarUsuario();
        else if(accion == 'cancelar')
            cancelarUsuario();
        } 
    }); // fin validación
});


/*
* Guarda un usuario
*/
function guardarUsuario(){
    //obtener datos
    var datos = {
            "tipo" : "a",//alta baja
            "id" : "0",
            "usuario" :     $("input[id*=tbUserReg]").val(),
            "password":     $("input[id*=tbPassReg]").val(),
            "nombre" :      $("input[id*=tbNombre]").val(),
            "direccion" :   '', // Obtener pais
            "email" :       $("input[id*=tbEmail]").val(),
            "fecha_nac" :   $("input[id*=tbFechaNac]").val(),
            "type" :        'miembro',
            "fecha_crea" :  '2018-04-04'//$.now()
    }
alert('llllllllll '+datos[9])
        $.ajax({ 
            type: "GET",//dataType: 'json', //type: "POST", //type: "GET" // Choosing a JSON datatype
            data: datos,
            url: 'http://localhost/TFGweb/consultas/users.php',
            success: function(data) {
                alert('entro en ajax')
                var res = jQuery.parseJSON(data);
                /*if(data == false || data == "false"){ 
                    mensajeError("Ocurrio un error en el proceso"); 
                }else{
                    mensajeOk("El registro ha sio guardado");
                }*/
                /*
                mensajeOk("El registro ha sido guardado");
                auditoria("Se agrego nuevo registro a la tabla Empleado");
                irArriba();*/
            },
            error: function(e){ //<!-- Si no ha podido conectar con el servidor --> 
                mensajeError("Error en el servidor, por favor, intentalo de nuevo mas tarde");
            }
        });
    return false;
}