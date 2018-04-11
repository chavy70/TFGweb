<?php
	include("conexion.phtml");
	$link=Conectarse();
	/*Parametros*/
	$tipo =$_GET['tipo'];
	$id =$_GET['id'];
	$usuario =$_GET['usuario'];
	$password =$_GET['password'];
	$nombre =$_GET['nombre'];
	$direccion =$_GET['direccion'];
	$email =$_GET['email'];
	$fecha_nac =$_GET['fecha_nac'];
	$type =$_GET['type'];
	$fecha_crea =$_GET['fecha_crea'];
	

	/*Llamada a procedimiento*/
	$resultado=mysql_query("CALL sp_abmUsuarios ('$tipo','$id','$usuario','$password','$nombre','$direccion','$email','$fecha_nac','$type','$fecha_crea')",$link);
	
	if($resultado == false){
		$id = 0;
	}else{
		//obtengo el ultimo id registrado
		$rs = mysql_query("SELECT MAX(id) AS id FROM users");
		//los datos son devueltos en formato Array, lo recorro con la funcion mysql_fetch_row
		if ($row = mysql_fetch_row($rs)) {
			//guardo en una variable $id, el valor que esta en la posicion 0 del arreglo, ya que solo 
			//devuelve un registro
			$id = trim($row[0]);
		}
	}
	//devuelve el id
	echo json_encode($id);
?>