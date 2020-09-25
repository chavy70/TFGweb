<?php 
    // Abro la sesion 
    session_start(); 
    
    //para remover una variable a la vez
    unset($_SESSION['idUsuario']);
    unset($_SESSION['usuario']);
    unset($_SESSION['nombre']);
    
    // elimina todas las sesiones menos en la que se encuentra actualmente 
    session_unset(); 
    
    // elimina todas las sesiones
    session_destroy(); 

    //header("Location: URL");
    echo json_encode('ok');
 ?> 