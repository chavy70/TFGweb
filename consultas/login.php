<?php
	include("conexion.phtml");
	$link=Conectarse();
	/*Parametros*/
	$usuario =$_GET['usuario'];
	$password =$_GET['password'];
	/* Busco el usuario y contrasenha ingresados por el usuario */
	$resultado = mysqli_query($link,"select id, usuario, nombre from users where usuario = '$usuario' and password = '$password'");
	 $arrayDatosUser = array();
	 while ($tareas=$resultado->fetch_assoc()) {
	 		$arrayDatosUser[] = array_map('utf8_encode', $tareas);
	 		$idUsuarioSes = $tareas['id'];
			$usuarioSes = $tareas['usuario'];
			$nombreUsuario = $tareas['nombre'];
	 		session_start();
			// Guardo las variables de sesion
			$_SESSION['idUsuario'] = $idUsuarioSes;
			$_SESSION['usuario'] = $usuarioSes;
			$_SESSION['nombre'] = $nombreUsuario;

			//echo $idUsuarioSes;
			//header('Location: index.php'); 
		}
	echo json_encode($arrayDatosUser);
	$link->close();
?>