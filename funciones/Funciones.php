<?php
/**
 * Aqui se agregan todas las funciones que se utilizaran en la herramienta
 *
 **/

//Extraido de
//http://blog.tednologia.com/copiar-directorios-completos-php/

 /*function full_copy( $source, $target ) {
    if ( is_dir( $source ) ) {
        @mkdir( $target );
        $d = dir( $source );
        while ( FALSE !== ( $entry = $d->read() ) ) {
            if ( $entry == '.' || $entry == '..' ) {
                continue;
            }
            $Entry = $source . '/' . $entry; 
            if ( is_dir( $Entry ) ) {
                full_copy( $Entry, $target . '/' . $entry );
                continue;
            }
            copy( $Entry, $target . '/' . $entry );
        }
 
        $d->close();
    }else {
        copy( $source, $target );
    }
}*/

/*function copiar($fuente, $destino)
{
    if(is_dir($fuente))
    {
        $dir=opendir($fuente);
        while($archivo=readdir($dir))
        {
            if($archivo!='.' && $archivo!='..')
            {
                if(is_dir($fuente.'/'.$archivo))
                {
                    if(!is_dir($destino.'/'.$archivo))
                    {
                        mkdir($destino.'/'.$archivo);
                    }
                    copiar($fuente.'/'.$archivo, $destino.'/'.$archivo);
                }
                else
                {
                    copy($fuente.'/'.$archivo, $destino.'/'.$archivo);
                }
            }
        }
        closedir($dir);
    }
    else
    {
        copy($fuente, $destino);
    }
}*/


//FUNCIONA
function copiar ($from_path, $to_path) {
	mkdir($to_path, 0777);  
	$this_path = getcwd();  
	if (is_dir($from_path)) {  
    	chdir($from_path);  
    	$handle=opendir('.');  
    	while (($file = readdir($handle))!==false) {  
        	if (($file != ".") && ($file != "..")) {  
            	if (is_dir($file)) {  

                	copiar ($from_path.$file."/", $to_path.$file."/");  
                	chdir($from_path);  
            	}  
            	if (is_file($file)){  
            	   copy($from_path.$file, $to_path.$file);  
            	}  
        	}  
    	}  
    	closedir($handle);  
	}  
}



 function HolaMundo(){
    
	$source ='C:/xampp/htdocs/TFGweb/templates/template1/';
	$destination = 'C:/xampp/htdocs/TFGweb/proyectos/newtemplate-'.date('Y-m-d');
	copiar($source, $destination);
    

  //return "Esto es una prueba";

 }

?>