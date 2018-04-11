var _idUsuarioAuto = "0";
$(document).ready(function () {
	//mascaras
    $("input[id*=tbNombreEmpleado]").alpha({allow:"., "});
    $("input[id*=tbApellidoEmpleado]").alpha({allow:"., "});
    $("input[id*=tbDocEmpleado]").numeric({allow:"-"});
    $("input[id*=tbTelefonoEmpleado]").numeric({allow:"-()"});

    $("input[id*=tbUserReg]")
    $("input[id*=tbEmail]")
    $("input[id*=tbNombre]")
    $("input[id*=tbFechaNac]")
    $("input[id*=tbPassReg]")
    $("input[id*=tbConfirmPass]")

    $("#formUsuario").validate({ // Inicio validación
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
           tbConfirmPass: { required: "", equalTo:"<br/>Contrase&ntilde;a no coincide" }
          },
        //llamar a funcion guardar en caso que se hallan validados
        //los campos requeridos
        submitHandler: function() {
            if(accion == 'guardar')
            guardarUsuario();
        else if(accion == 'editar')
            editarUsuario();
        else if(accion == 'cancelar')
            cancelarUsuario();
        } 
    }); // fin validación
});
