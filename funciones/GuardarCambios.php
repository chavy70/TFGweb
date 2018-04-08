<?php //Ejemplo aprenderaprogramar.com, archivo escribir.php
	$codigo = $_GET['codigoHTML'];
	$nombreArchivo = $_GET['nombreArchivo'];
	$file = fopen("../proyectos/archivo.html", "w");
	
	//$file = fopen("../proyectos/".$nombreArchivo, "w");
//echo $codigo;
	//fwrite($file, "Esto es una nueva linea de texto" . PHP_EOL);
	//fwrite($file, "Otra más" . PHP_EOL);
	fwrite($file, $codigo . PHP_EOL);
	fclose($file);
?>