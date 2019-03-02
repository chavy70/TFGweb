<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title id="tituloPagina">AjapoWeb | Templates</title>
    <!-- Iconos y fuente de Google -->
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Materialize CSS -->
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Llamadas jQuery -->
    <script>
        $(document).ready(function () {
            $('.menu-top').css('display','none');
        });
    </script>
    <!-- CSS -->
    <style>
        .pinned{
            z-index: 2;
        }
    </style>
</head>

<body>
     <!-- Nav -->
     <nav class="pushpin-demo-nav pinned"> 
      <?php 
        include("barra/barraLogin.php");
      ?> 
    </nav>
    <!-- Fin Nav -->

    <!-- Los 3 templates -->
    <div class="templates-container">
        <br>
        <br>
        <br>
        <div class="row">
            <div class="center">
                <h3 class="animated fadeInDown">Seleccione una Plantilla</h3>
                <h5>Elija el dise&ntilde;o de la plantilla que prefiera presionando en el boton ubicado debajo de cada imagen </h5>
            </div>
            <!-- Página en blanco -->
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="images/templates/template4.jpg">
                    </div>
                    <div class="card-action center">
                        <a href="#" class="red-text" onclick="copiarTemplate('template4');">P&aacute;gina en blanco</a>
                    </div>
                </div>
            </div>
            <!-- Template 1 -->
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="images/templates/template1.jpg">
                    </div>
                    <div class="card-action center">
                        <a href="#" class="red-text" onclick="copiarTemplate('template1');">Template #1</a>
                    </div>
                </div>
            </div>
            <!-- Template 2 -->
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="images/templates/template2.jpg">
                    </div>
                    <div class="card-action center">
                        <a href="#" class="red-text" onclick="copiarTemplate('template2');">Template #2</a>
                    </div>
                </div>
            </div>
            <!-- Template 3 -->
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="images/templates/template3.jpg">
                    </div>
                    <div class="card-action center">
                        <a href="#" class="red-text" onclick="copiarTemplate('template3');">Template #3</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin Los 3 templates -->
    <!-- Footer -->
    <footer class="page-footer white">
        <div class="footer-copyright">
            <div class="container grey-text text-lighten-1 center-align">
                © 2019 - Diseñado &amp; Desarrollado por
                <a class="red-text" href="#">Gabriela Paredes</a>
            </div>
        </div>
    </footer>
    <!-- Fin Footer -->

    <!-- Materialize Javascript -->
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <!-- Validacion -->
    <script src='http://ajax.aspnetcdn.com/ajax/jquery.validate/1.12.0/jquery.validate.min.js' type='text/javascript'></script>
    <!-- Encriptacion MD5 -->
    <script src="js/jquery-md5.js"></script>
    <!-- Funciones utiles a utilizarse en la herramienta -->
    <script src="js/util.js"></script>
    <!-- Funcionalidad para copiar template en carpeta proyecto -->
    <script src="js/herramienta/funciones.js"></script>
    <!-- js para registro y log --> 
    <script src="js/abm/login.js"></script>
    <script src="js/abm/usuarios.js"></script>
</body>

</html>