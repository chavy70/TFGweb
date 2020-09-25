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
	
	//echo '7';

	/*Llamada a procedimiento*/
	$resultado=mysqli_query($link,"CALL sp_abmUsuarios ('$tipo','$id','$usuario','$password','$nombre','$direccion','$email','$fecha_nac','$type','$fecha_crea')");
	
	//echo '8';
	
	if(!$resultado){
		$id = 0;
	}else{
		//obtengo el ultimo id registrado
		$ultimoId = mysqli_query($link, "SELECT MAX(id) AS id FROM users");
		//los datos son devueltos en formato Array, lo recorro con la funcion mysql_fetch_row
		/*if ($row = mysqli_fetch_array($rs)) {
			//guardo en una variable $id, el valor que esta en la posicion 0 del arreglo, ya que solo 
			//devuelve un registro
			$id = trim($row[0]);
		}*/
		while($row = $ultimoId->fetch_assoc()){
	        $id = $row['id'];
	    }
	}
	//devuelve el id
	echo json_encode($id);
	//mysqli_close($link);
	$link->close();
?>