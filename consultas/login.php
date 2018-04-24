<?php
	include("conexion.phtml");
	$link=Conectarse();
	/*Parametros*/
	$usuario =$_GET['usuario'];
	$password =$_GET['password'];

	/*Consulta de mysql con la que indicamos que necesitamos que seleccione
	**solo los campos que tenga como nombre_administrador el que el formulario
	**le ha enviado*/
	$result = mysqli_query("select * from users where usuario = '$usuario'");
	 
	//Validamos si el nombre del administrador existe en la base de datos o es correcto
	//if($row = mysql_fetch_array($result))
	while($row = $result->fetch_assoc()){
	{     
	//Si el usuario es correcto ahora validamos su contraseña
		 if($row["password"] == $password)
		 {
			//Creamos sesión
			session_start();  
			//Almacenamos el nombre de usuario en una variable de sesión usuario
			$_SESSION['usuario'] = $usuario;
			$_SESSION['idUsuario'] = $row["id"];
			//Redireccionamos a la pagina: index.php
			//header("Location: index.php");  
			
			echo json_encode($row["usuario"]);
		 }else{
		 	
			echo json_encode(0);
		 }
	}else{
		 	
			echo json_encode(0);
		 }
	//mysql_free_result($result);
	mysqli_free_result($result);
	//mysql_close();
	$link->close();
	//hasta segundo de haiti - Construction of a warehouse 
?>