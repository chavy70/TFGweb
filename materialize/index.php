<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title id="tituloPagina">AjapoWeb</title>
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
            resize();
            //Parallax de la pagina
            $('.parallax').parallax();
            //Barra de menu
            $('.sidenav').sidenav();
            // Hace que el menu quedo fijo
            $('.pushpin-demo-nav').pushpin();
            //Modal de Registro
            $('.modal-registro').modal();
            //Tabs
            $('.tabs').tabs();
            // Pagina load
            /*$("#loaderPage").fadeOut(35000, function() {
                $('.contenedorMain').fadeIn();
            });*/
            //$('#loaderPage').fadeOut();
            //$('.contenedorMain').fadeOut();
            
            
            //Datepicker
            $('.datepicker').datepicker({
                firstDay: true,
                format: 'yyyy-mm-dd',
                i18n: {
                    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
                    weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                    weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
                    weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"]
                }
            });
            // Confirmar Pass
            $("#password").on("focusout", function (e) {
                if ($(this).val() != $("#passwordConfirm").val()) {
                    $("#passwordConfirm").removeClass("valid").addClass("invalid");
                } else {
                    $("#passwordConfirm").removeClass("invalid").addClass("valid");
                }
            });

            $("#passwordConfirm").on("keyup", function (e) {
                if ($("#password").val() != $(this).val()) {
                    $(this).removeClass("valid").addClass("invalid");
                } else {
                    $(this).removeClass("invalid").addClass("valid");
                }
            });

            // Menu ancla con efecto
            $('nav ul a').click(function(e){				
              e.preventDefault();		//evitar el eventos del enlace normal
              var strAncla=$(this).attr('href'); //id del ancla
                $('body,html').stop(true,true).animate({				
                  scrollTop: $(strAncla).offset().top
                },1000);
              
            });
        });

        function resize(){
          /*htmlCanvas = document.getElementById('acedrcaDe');
          htmlCanvas.width = window.innerWidth - 17;
          htmlCanvas.height = window.innerHeight;*/
          $(".section ").height( window.innerHeight);
          $(".parallax-container").height( window.innerHeight);
          /*$("#acedrcaDe").height( window.innerHeight);
          $("#acedrcaDe").height( window.innerHeight);*/
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Bubbler+One');

        #loaderPage{
            text-align: center;
            margin-top: 17vw;
            font-family: 'Bubbler One', sans-serif;
            font-size: 60px;
        }

        .pinned {
            z-index: 100;
        }

        .border-white {
            border: solid 2px;
        }

        /* label focus color */

        .input-field input:focus+label {
            color: #bab8b8 !important;
        }

        /* label underline focus color */

        .row .input-field input:focus {
            border-bottom: 1px solid #bab8b8 !important;
            box-shadow: 0 1px 0 0 #bab8b8 !important
        }

        #formLogin, #register-form {
            margin-left: 34px;
            margin-top: 15px;
        }

        .datepicker-date-display,
        .datepicker-table td.is-selected {
            background-color: #d05e66;
        }

        .datepicker-cancel,
        .datepicker-clear,
        .datepicker-today,
        .datepicker-done {
            color: #d05e66;
        }

        .botonera input{
          color:#fff;
        }

        .salirA{
          cursor: pointer;
        }

        .text1{
            animation: bounce1 .5s alternate infinite ease-in;
        }
        .text2{
            animation: bounce2 .5s alternate infinite ease-in;
        }
        .text3{
            animation: bounce3 .5s alternate infinite ease-in;
        }
        @keyframes bounce1{
            0%{
                transform:translateX(-40%);
            }
            100%{
                transform:translateX(0%);
            }
        }
        @keyframes bounce2{
            0%{
                transform:translateY(-10%);
            }
            100%{
                transform:translateY(0%);
            }
        }
        @keyframes bounce3{
            0%{
                transform:translateX(40%);
            }
            100%{
                transform:translateX(-10%);
            }
        }
    </style>

</head>

<body>

    <!-- Loader -->
    <div id="loaderPage" class="container red-text text-darken-4" style="width:50%;">
    
            <img class="text2" src="http://ajapoweb.com/images/logo-red.png" alt="Footer AjapoWeb">
            ajapoweb.com
            <div class="progress grey lighten-3">
                <div class="indeterminate red"></div>
            </div>
      </div>
      <!-- Fin Loader -->
<div class="contenedorMain">
    <!-- PopUp -->
    <div class="container">
        <div id="reg-modal" class="modal modal-registro">


            <div class="row">
                <div class="col s12">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab col s3">
                            <a class="active" href="#reg">Registro</a>
                        </li>
                        <li class="tab col s3">
                            <a href="#log">Login</a>
                        </li>
                    </ul>
                </div>
                <div id="reg" class="col s12">
                    <!-- Form de Registro -->
                    <div class="row">
                        <form id="register-form" method="post" role="form" class="col s11">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="tbUserReg" type="text" class="validate camposForm">
                                    <label for="tbUserReg">Usuario</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="tbNombre" type="text" class="validate camposForm">
                                    <label for="tbNombre">Nombre</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="tbFechaNac" type="text" class="validate datepicker camposForm">
                                    <label for="tbFechaNac">Fecha de Nacimiento</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="tbEmail" type="email" class="validate camposForm">
                                    <label for="tbEmail">Email</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="tbPassReg" type="password" class="validate camposForm">
                                    <label for="tbPassReg">Password</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="tbConfirmPass" type="password" class="camposForm">
                                    <label id="lblPasswordConfirm" for="tbConfirmPass" data-error="Password not match" data-success="Password Match">Password (Confirm)</label>
                                </div>
                            </div>

                            <div class="botonera right-align">
                                <input type="submit" value="Crear cuenta" name="guardar" id="btnGuardar" onclick="accion='guardar';" tabindex="4" class="form-control btn btn-register waves-effect waves-light btn red lighten-1">
                            </div>
                        </form>
                    </div>
                    <!-- Fin Form de Registro -->
                </div>
                <div id="log" class="col s12">
                  <!-- Form de Login --> 
                  <div class="row">
                        <form id="formLogin" method="post" role="form" class="col s11">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="userLog" type="text" class="validate camposForm">
                                    <label for="userLog">Usuario</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="passLog" type="password" class="camposForm">
                                    <label for="passLog">Contrasenha</label>
                                </div>
                            </div>

                            <div class="botonera right-align  white-text">
                              <input type="submit" value="Iniciar sesión" name="login" id="btnLogin" class="waves-effect waves-light btn red lighten-1" onclick="accion='login';">
                            </div>
                        </form>
                    </div>
                  <!-- Fin Form de Login -->
                </div>
            </div>






        </div>
    </div>
    <!-- Fin PopUp -->

    <!-- Nav -->
    <nav class="pushpin-demo-nav pinned"> 
      <?php 
      include("barra/barraLogin.php");
      ?> 
    </nav>
    <!-- Fin Nav -->





    <div id="acedrcaDe" class="parallax-container">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="container">
            <h2 class="white-text">Generador de código para páginas web basado en jQuery</h2>
            <br>
            <br>
            <a href="http://ajapoweb.com/generador.php" class="btn-large waves-effect waves-red white red-text">Usa la Herramienta!</a>
            <a class="btn-large waves-effect waves-light transparent border-white">Leer Más</a>
        </div>
        <div class="parallax">
            <img src="images/parallax01.jpg">
        </div>
    </div>

    <div id="caract" class="section white">
        <div class="row container">
            <h2 class="header">Aqui va el video</h2>
            <p class="grey-text text-darken-3 lighten-3">Aqui va el video del funcionamiento de la herramienta</p>
        </div>
    </div>

    <div id="galeria" class="section white">
        <div class="col s12 m7">
            <div class="card horizontal">
                <div class="card-image">
                    <img src="images/features-intro-01.jpg">
                </div>
                <div class="card-stacked red lighten-1">
                    <div class="card-content">
                        <p>
                            <ul class="slides white-text" id="featuresSlider">
                                <li>
                                    <h5>Rápido diseño del Front-End</h5>
                                    <p>Con esta herramienta podrás obtener el diseño de tu front-end de forma rápida, tan sólo
                                        eligiendo con un click uno de nuestros diseños predeterminados</p>
                                </li>
                                <li>
                                    <h5>Fácil de usar</h5>
                                    <p>Esta herramienta les ofrece una interfaz amigable y de fácil uso </p>
                                </li>
                                <li>
                                    <h5>Uso gratuito</h5>
                                    <p>Esta herramienta fue hecha para el usuario con un poco de conocimiento en el area de
                                        desarrollo web y es de uso gratuito!</p>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="registro" class="section white">
        <div class="row container">
            <h2 class="header">Aqui va un texto</h2>
            <p class="grey-text text-darken-3 lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>

    <div class="parallax-container">
        <div class="container">
            <br>
            <br>
            <br>
            <br>
            <h4 class="white-text">AjapoWeb. Crea páginas de manera rápida y fácil</h4>
            <br>
            <br>
            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.
                Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
        <div class="parallax">
            <img src="images/parallax02.jpg">
        </div>
    </div>





    <footer class="page-footer white">
        <div class="container">
            <div class="row">
                <div class="col l2 s12">
                    <h5 class="footer-logo">
                        <img src="images/logo-red.png" alt="Footer AjapoWeb">
                    </h5>
                    <p></p>

                </div>
                <div class="col l8 offset-l2 s12">


                    <br>
                    <br>
                    <div class="row">
                        <div class="col s3">
                            <a class="grey-text text-darken-3" href="sass.html">ACERCA DE</a>
                        </div>
                        <div class="col s3">
                            <a class="grey-text text-darken-3" href="badges.html">CARACTERISTICAS</a>
                        </div>
                        <div class="col s3">
                            <a class="grey-text text-darken-3" href="collapsible.html">GALERIA</a>
                        </div>
                        <div class="col s3">
                            <a class="grey-text text-darken-3" href="collapsible.html">REGISTRO</a>
                        </div>
                    </div>



                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container grey-text text-lighten-1 center-align">
                © 2019 - Diseñado &amp; Desarrollado por
                <a class="red-text" href="#">Gabriela Paredes</a>
            </div>
        </div>
    </footer>
</div>



    <!-- Materialize Javascript -->
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <!-- Validacion -->
    <script src='http://ajax.aspnetcdn.com/ajax/jquery.validate/1.12.0/jquery.validate.min.js' type='text/javascript'></script>
    <!-- Encriptacion MD5 -->
    <script src="js/jquery-md5.js"></script>
    <!-- Funciones utiles a utilizarse en la herramienta -->
    <script src="js/util.js"></script>
    <!-- js para registro y log --> 
    <script src="js/abm/login.js"></script>
    <script src="js/abm/usuarios.js"></script>
    <script>
        $(document).ready(function () {
            
            $(".contenedorMain").css("display","none");
            $('#loaderPage').fadeIn();
            
            setTimeout(function(){$("#loaderPage").fadeOut()},20000);//5
            setTimeout(function(){$('.contenedorMain').fadeIn();},20000);
        });
            </script>
</body>

</html>