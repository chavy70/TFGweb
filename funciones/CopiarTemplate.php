<?php
    /**
     * Aqui se agregan todas las funciones que se utilizaran en la herramienta
     * Autor: Gabriela Paredes Morínigo
     *
     **/
    echo 'HOLA';
    //Parametros enviados desde funciones.js
    $carpeta_origen = $_SERVER['DOCUMENT_ROOT'].$_GET['origen'];//carpeta raiz del hosting+origen
    $carpeta_destino =  $_SERVER['DOCUMENT_ROOT'].$_GET['destino'];//carpeta raiz del hosting+destino
    //$ipPcActual =$_GET['ipPcActual']; //Se comento
    //Nombre de la carpeta: dias mes año- hora minuto segundo - ip publica del dispositivo
    $carpeta_nombre = date('Y-m-d').'-'.time();//.'-'.$ipPcActual;
    //$carpeta_nombre = date('Y-m-d').'-'.time();
    //agrego el nombre de la carpeta nueva a la carpeta destino, url completa
    //descomentar abajo
    $carpeta_destino = $carpeta_destino.$carpeta_nombre;
    //Guardo la carpeta destino en una variable auxiliar, url completa
    $carpeta_destino_aux = $carpeta_destino;
    echo 'CHAU';
    //echo '*'.$carpeta_destino1.'*';
    //Nombre completo de la nueva carpeta, solo nombre de la carpeta
    $carpeta_nueva = 'newtemplate-'.$carpeta_nombre;

    /**
     * Agrega los scripts de edicion a los archivos html de una carpeta 
     *
     **/
    function habilitarEdicion($carpeta_habilitar){
        //Agrego al archivo los scripts necesarios para la edicion
        $archivo_completo=$carpeta_habilitar.'/index.php';
        //El file_put_contents de abajo no funciona por temas de permisos
        //file_put_contents($archivo_completo,str_replace("<head>","<head>\n<script src=\"http://code.jquery.com/jquery-1.9.1.js\"></script>",file_get_contents($archivo_completo)));


        //file_put_contents('d:/index.php',str_replace("<head>","<head>\n<script src=\"http://code.jquery.com/jquery-1.9.1.js\"></script>",file_get_contents('d:/index.php')));
    }

    /**
     * Copia el contenido de la carpeta origen a la carpeta destino
     *
     **/
    function copiar ($carpeta_origen, $carpeta_destino, $bandera) {
        Global $carpeta_destino_aux, $carpeta_nueva;
        $array_raiz[] = '';

        


        if ($bandera < 1) {//Devuelve la carpeta raiz
            $array_aux[0] = $carpeta_destino;
            $array_raiz[] = $carpeta_nueva;
            $bandera = 1;
            habilitarEdicion($carpeta_destino_aux);
            //Devuelvo el nombre de la carpeta creada para el usuario, convierto a json para recibirlo en el cliente
            echo json_encode($array_raiz);
        }
        
        // Crea carpetas
        mkdir($carpeta_destino.'/', 0777,true);


        if (is_dir($carpeta_origen)) {
            chdir($carpeta_origen);  
            $abrir_carpeta=opendir('.');  
            
            while (($archivo = readdir($abrir_carpeta)) !== false) {
                if (($archivo != '.') && ($archivo != '..')) {  
                    if (is_dir($archivo)) { //Si es carpeta
                        //Recursion, vuelve a llamar a la funcion 
                        copiar ($carpeta_origen.$archivo.'/', $carpeta_destino.'/'.$archivo.'/', 1);  
                        chdir($carpeta_origen);
                    }  
                    if (is_file($archivo)){//Copio los archivos del template a la carpeta que se creo para el usuario
                        copy($carpeta_origen.$archivo, $carpeta_destino.'/'.$archivo);  
                    }  
                } 
            }
            closedir($abrir_carpeta);  
        }
    }    
    
    //Llamo a la funcion copiar y paso los parametros ingresados desde el cliente (funciones.js)
    echo copiar ($carpeta_origen, $carpeta_destino, 0);
?>