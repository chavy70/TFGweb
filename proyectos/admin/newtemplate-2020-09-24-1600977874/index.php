<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title id="tituloPagina">Parallax</title>
    <!-- Iconos y fuente de Google -->
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Materialize CSS -->
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <link rel="stylesheet" href="http://ajapoweb.com/css/colorpicker/materialize-colorpicker.min.css">
    <link rel="stylesheet" href="http://ajapoweb.com/css/colorpicker/docs.css">

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <!-- Codemirror -->
    <link rel="stylesheet" href="http://ajapoweb.com/css/codemirror/codemirror.css">
	<script type="text/javascript" src="http://ajapoweb.com/js/codemirror/codemirror.js"></script>
    <script type="text/javascript" src="http://ajapoweb.com/js/codemirror/javascript.js"></script>
    
    <link href="https://materializecss.com/extras/noUiSlider/nouislider.css" rel="stylesheet">
    

    <!-- Parallax -->
    <script>
        $(document).ready(function () {
            //Parallax de la pagina
            $('.parallax').parallax();
            //Efecto collapsible en menu de herramintas
            $('.collapsible').collapsible();
            //Tabs
            $('ul.tabs').tabs();
            //$('ul.tabs').tabs('select_tab', 'tab_id');
            //DropDownList
            $(".dropdown-trigger").dropdown();
            // Moda pooUp
            $('.modal-configuracion').modal();

//$('#modalCambiosEventos').modal('open');            
            //Formato Select
            $('select').formSelect();

            $('#txtForeColor, #txtBkColor').colorpicker({
                color: '#ffaa00',
                customClass: 'colorpicker-2x',
                sliders: {
                    saturation: {
                        maxLeft: 200,
                        maxTop: 200
                    },
                    hue: {
                        
                    },
                    alpha: {
                        maxTop: 200
                    }
                }
            });
            // Recorrer lista de Font
            $("#ddlFont ul li").each(function(){
                var idFont = $(this).attr('id');
                var nombreFont = $('#'+idFont).text();
                switch (nombreFont) { 
                    case 'Roboto': 
                        $('#'+idFont).removeClass('Roboto').addClass('Roboto');
                        break;
                    case 'Srisakdi': 
                        $('#'+idFont).removeClass('Srisakdi').addClass('Srisakdi');
                        break;
                    case 'Open Sans Condensed': 
                        $('#'+idFont).removeClass('Open-sans-condensed').addClass('Open-sans-condensed');
                        break;		
                    case 'Bitter': 
                        $('#'+idFont).removeClass('Bitter').addClass('Bitter');
                        break;
                    case 'Dancing Script': 
                        $('#'+idFont).removeClass('Dancing-script').addClass('Dancing-script');
                        break;
                    case 'Shadows Into Light': 
                        $('#'+idFont).removeClass('Shadows-into-light').addClass('Shadows-into-light');
                        break;
                    case 'Amatic SC': 
                        $('#'+idFont).removeClass('Amatic-SC').addClass('Amatic-SC');
                        break;
                    case 'Permanent Marker': 
                        $('#'+idFont).removeClass('Permanent-marker').addClass('Permanent-marker');
                        break;
                    case 'Cookie': 
                        $('#'+idFont).removeClass('Cookie').addClass('Cookie');
                        break;
                    case 'Special Elite': 
                        $('#'+idFont).removeClass('Special-elite').addClass('Special-elite');
                        break;
                    default:
                }
            });
            // Selector de tamaño de fuente
            var slider = document.getElementById('fontTamanho');
            noUiSlider.create(slider, {
                start: 80, //[20, 80],
                connect: true,
                step: 1,
                orientation: 'horizontal', // 'horizontal' or 'vertical'
                range: {
                    'min': 0,
                    'max': 100
                },
                format: wNumb({
                    decimals: 0
                })
            });
            // Muestra el tamaño actual seleccionado
            $('#lbTamFuente span').text($('.noUi-tooltip span').text());
            $('.noUi-handle, .noUi-handle span, .noUi-base').click(function() {
                $('#lbTamFuente span').text($('.noUi-tooltip span').text());
            });
            $('.noUi-handle,  .noUi-base').mouseup(function(){
                $('#lbTamFuente span').text($('.noUi-tooltip span').text());
            });


        });    
    </script>
    <style>
        /*10 tipos de famimlia*/
        @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Bitter|Cookie|Dancing+Script|Open+Sans+Condensed:300|Permanent+Marker|Roboto|Shadows+Into+Light|Special+Elite|Srisakdi');
        .Roboto{
            font-family: 'Roboto', sans-serif;
        }
        .Srisakdi{
            font-family: 'Srisakdi', cursive;
        }
        .Open-sans-condensed{
            font-family: 'Open Sans Condensed', sans-serif;
        }
        .Bitter{
            font-family: 'Bitter', serif;
        }
        .Dancing-script{
            font-family: 'Dancing Script', cursive;
        }
        .Shadows-into-light{
            font-family: 'Shadows Into Light', cursive;
        }
        .AmaticSC{
            font-family: 'Amatic SC', cursive;
        }
        .Permanent-marker{
            font-family: 'Permanent Marker', cursive;
        }
        .Cookie{
            font-family: 'Cookie', cursive;
        }
        .Special-elite{
            font-family: 'Special Elite', cursive;
        }
        
        /*
        * Cambia el color del efecto onda
        */
        .waves-effect.waves-redlighten4 .waves-ripple {
            background-color: #ffcdd2;
        }

        .tituloElement .hElem{
            margin-top:0px;
            margin-bottom:0px;
            padding-top:4px;
            padding-bottom:4px;
        }

        .sidenav li > a{
            height: auto;
        }

        .sidenav {
            width: 292px;
        }

        .collapsible-detalle {
            display: flex;
            padding: 5px;
        }

        .detalle-menu-izq{
            margin:-14px;
            margin-left: 5px;
            font-size: 12px;
        }

        .detalle-menu-izq .material-icons{
            width: 34px;
            text-align: left;
        }

        .configPage {
            position: absolute;
            right: -45px;
            display: none;
            z-index: 1000;
            top: -28px;
            width: 180px;
        }

        .configPage img {
            width: 13px;
        }
        .elementoEditable:hover .configPage { 
            display: inline; 
        }

        .elementHTML:hover{
            border: dashed 1px red!important;
            position: relative;
        }

        .nueva-pagina {
            width: 67px !important;
        }

        .nueva-pagina i {
            padding-top: 11px;
        }

        .btn-configuracion{
            padding: 0 7px;
        }
        .datosElem label {
            position: absolute;
            top: 2px;
            left: 0;
        }
        .input-field {
            margin-top: 0rem;
            margin-bottom: -1rem;
        }
        .datosElem input {
            height: 20px!important;
        }
        /*PAleta de Colores*/
        .colorpicker-2x .colorpicker-saturation {
            width: 200px;
            height: 200px;
        }
        .colorpicker-2x .colorpicker-hue,
        .colorpicker-2x .colorpicker-alpha {
            width: 30px;
            height: 200px;
        }
        .colorpicker-2x .colorpicker-color,
        .colorpicker-2x .colorpicker-color div{
            height: 30px;
        }
        .datosElem label, .datosElem span{
            position:relative;
            color:black;
        }
        #modalCambiosEventos {
            max-height: 45%;
            width: 23%;
        }
   </style>
   <!--
        nav, *
        article, *
        aside, 
        section, 
        header, *
        footer,*
        hgroup,
        h1, *
        h2, *
        h3, *
        h4, *
        h5, *
        h6, *
        p, *
        hr, 
        ol, *
        ul, *
        li, *
        div, 
        sup, 
        sub,
        i,
        u, 
        a, *
        img, 
        map, 
        area,
        address,
        blockquote, *
        fieldset, * y legend, *
        strong,  
        table, 
        tr, 
        td, 
        th, 
        form, *
        input,*
        button, *
        select, *  optgroup,
        textarea.*
    -->
</head>

<body>
    <!-- Opciones del perfil -->
    <ul id="dropdown1" class="dropdown-content">
        <li>
            <a class="red-text text-lighten-2" href="#!">Perfil</a>
        </li>
        <li>
            <a class="red-text text-lighten-2" href="#!">Guardar</a>
        </li>
        <li>
            <a class="red-text text-lighten-2" href="#!">Convertir a RAR</a>
        </li>
        <li>
            <a class="red-text text-lighten-2" href="#!">Eliminar</a>
        </li>
        <li class="divider"></li>
        <li>
            <a class="red-text text-lighten-2" href="#!">Salir</a>
        </li>
    </ul>
    <!-- Fin opciones del perfil -->

    <!-- Menu top -->
    <nav>
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
                <img src="http://ajapoweb.com/images/logo-completo.png" width="180"></img>
            </a>
            <ul class="right hide-on-med-and-down">
                <li>
                    <a href="sass.html">
                        <i class="material-icons">phone_android</i>
                    </a>
                </li>
                <li>
                    <a href="badges.html">
                        <i class="material-icons">tablet_mac</i>
                    </a>
                </li>
                <li>
                    <i class="material-icons">account_circle</i>
                </li>
                <li>
                    <a class="dropdown-trigger" href="#!" data-target="dropdown1">Chavy Paredes
                        <i class="material-icons right">arrow_drop_down</i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Fin Menu top -->

    <!-- Menu izquierdo -->
    <div class="row">
        <!-- Menu de herramientas izquierda -->
        <div class="col s2 hide-on-small-only">
            <ul id="nav-mobile" class="sidenavNO sidenav-fixed">
                <li class="no-padding">
                    <ul class="collapsible collapsible-accordion">
                        <!-- Paginas -->
                        <li class="bold"><a class="collapsible-header waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">description</i>Páginas</a>
                            <div class="collapsible-body">
                                <ul>
                                    <li><a href="#!">Pagina1.html</a></li>
                                    <li><a href="#!">Pagina2.html</a></li>
                                    <li><a href="#!">Pagina3.html</a></li>
                                </ul>
                            </div>
                        </li>
                        <!-- Titulo -->
                        <li class="bold tituloElement"><a class="collapsible-header waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">text_format</i>T&iacute;tulos</a>
                            <div class="collapsible-body">
                                <ul>
                                    <li><a id="h1" class="arrastrar ui-draggable ui-draggable-handle collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><h1 class="hElem">T&iacute;tulo</h1></a></li>
                                    <li><a id="h2" class="arrastrar ui-draggable ui-draggable-handle collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2"><h2 class="hElem">T&iacute;tulo</h2></a></li>
                                    <li><a id="h3" class="arrastrar ui-draggable ui-draggable-handle collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2"><h3 class="hElem">T&iacute;tulo</h3></a></li>
                                    <li><a id="h4" class="arrastrar ui-draggable ui-draggable-handle collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2"><h4 class="hElem">T&iacute;tulo</h4></a></li>
                                    <li><a id="h5" class="arrastrar ui-draggable ui-draggable-handle collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2"><h5 class="hElem">T&iacute;tulo</h5></a></li>
                                    <li><a id="h6" class="arrastrar ui-draggable ui-draggable-handle collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2"><h6 class="hElem">T&iacute;tulo</h6></a></li>
                                </ul>
                            </div>
                        </li>
                        <!-- Texto -->
                        <li class="bold"><a class="collapsible-header waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">text_fields</i>Texto</a>
                            <div class="collapsible-body">
                                <ul class="detalle-menu-izq">
                                    <li><a id="nav" class="arrastrar ui-draggable ui-draggable-handle collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">dehaze</i> P&aacute;rrafo</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">format_list_bulleted</i> Lista</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">format_list_numbered</i> Lista Numerada</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">insert_link</i> Hiperv&iacute;nculo</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">format_quote</i> Cita</a></li>
                                </ul>
                            </div>
                        </li>
                        <!-- Formulario -->
                        <li class="bold"><a class="collapsible-header waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">assignment</i>Formularios</a>
                            <div class="collapsible-body">
                                <ul class="detalle-menu-izq">
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">crop_square</i> Formulario</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">filter_none</i> Formulario Agrupado</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"> <b>Campos para Formulario</b></a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/textBoxAlph.png" alt="Input" width="30"></i> Texto</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/textBoxNum.png" alt="Input" width="30"></i> Num&eacute;rico</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/textBoxAlphNum.png" alt="Input" width="30"></i> Alfanum&eacute;rico</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/textArea.png" alt="Input" width="30"></i> Multilinea</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/dropDownList.png" alt="Input" width="30"></i> Deplegable</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/calendar.png" alt="Input" width="30"></i> Calendario</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/checkBox.png" alt="Input" width="20"></i> Check Box</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/radioButton.png" alt="Input" width="20"></i> RadioButton</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/boton.png" alt="Input" width="20"></i> Bot&oacute;n</a></li>
                                </ul>
                            </div>
                        </li>
                        <!-- Partes de una página -->
                        <li class="bold"><a class="collapsible-header waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">dashboard</i>Sectores</a>
                            <div class="collapsible-body">
                                <ul class="detalle-menu-izq">
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/header.png" alt="Input" width="20"></i> Header</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/footer.png" alt="Input" width="20"></i> Footer</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">menu</i> Menu</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2">art_track</i> Art&iacute;culo</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/textBoxAlphNum.png" alt="Input" width="30"></i> Alfanum&eacute;rico</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/textArea.png" alt="Input" width="30"></i> Multilinea</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/dropDownList.png" alt="Input" width="30"></i> Deplegable</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/calendar.png" alt="Input" width="30"></i> Calendario</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/checkBox.png" alt="Input" width="20"></i> Check Box</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/radioButton.png" alt="Input" width="20"></i> RadioButton</a></li>
                                    <li><a class="collapsible-detalle waves-effect waves-redlighten4 red-text text-lighten-2" tabindex="0"><i class="material-icons red-text text-lighten-2"><img src="http://ajapoweb.com/images/icon/boton.png" alt="Input" width="20"></i> Bot&oacute;n</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- Fin Menu de herramientas izquierda -->

        <!-- ----------------------------------------------------------------------------------------------------------- PÁGINAS EDITABLES ----------------------------------------------------------------------------------------------------------- -->
        <div class="col s10">
            <!-- Contenedor tabs y su contenido -->
            <div class="row contenedorTabs">
                <!-- Scripts utilizados en la/s página/s -->
                <!-- 
                <script>
                    $(document).ready(function () { // Llamadas jQuery
                        $("#dropdown_nav_1").dropdown();
                    });
                </script>
                -->
                <!-- Fin Scripts utilizados en la/s página/s -->

                <!-- Pestañas -->
                <div class="col s12">
                    <ul class="tabs tabsPages">
                        <li id="_pagina_1_" class="tab col s3 l2">
                            <a class="active tabPorPagina" href="#pagina1">Pagina 1</a>
                        </li>
                        <li class="tab col s3 nueva-pagina grey lighten-3">
                            <a href="#" onclick="agregarPagina();" class="agregar-pagina"><i class="Small material-icons">add</i></a>
                        </li>
                    </ul>
                </div>
                <!-- Fin Pestañas -->

                <!-- Paginas contenidas por pestaña -->
                <div id="pagina1" class="col s12 contenidoTab">
                    <!-- Pagina a editar -->
                    <div class="pagina-contenedor">
                        <div id="div_1" class="parallax-container rotator soltarEn sortable elementHTML ui-sortable-handle ui-sortable">
                            <div class="parallax">
                                <img src="images/parallax1.jpg">
                            </div>
                        </div>
                        <div class="section white">
                            <div class="row container">
                                <h2 class="header">Parallax</h2>
                                <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different
                                    speed than the foreground content while scrolling.</p>
                            </div>
                        </div>
                        <div class="parallax-container">
                            <div class="parallax">
                                <img src="images/parallax2.jpg">
                            </div>
                        </div>
                        <div class="parallax-container">
                            <div class="parallax">
                                <img src="images/parallax1.jpg">
                            </div>
                        </div>
                    </div>
                    <!-- Fin Pagina a editar -->
                </div>
                <!-- Fin Paginas contenidas por pestaña -->

            </div>
            <!-- Fin Contenedor tabs y su contenido -->
        </div>
        <!-- ----------------------------------------------------------------------------------------------------------- FIN PÁGINAS EDITABLES ----------------------------------------------------------------------------------------------------------- -->
    </div>
    <!-- Materialize Javascript -->
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <!-- Color picker de Materialize - http://wittsparks.com/materialize-colorpicker/ -->
    <script src="http://ajapoweb.com/js/materialize-colorpicker.min.js"></script>

    <!-- Editor de pagina -->
    <script src="http://ajapoweb.com/js/herramienta/editar-page.js"></script>

    <script src="https://materializecss.com/extras/noUiSlider/nouislider.js"></script>

    




    <!-- ------------------------------------------------------------------------------------ Modal PooUp ------------------------------------------------------------------------------------ -->
    <!-- Configurar Elemento -->
    <div id="modalConfigElement" class="modal-content modal modal-fixed-footer modal-configuracion">
        <div class="modal-content">
            <h4>Configurar Elemento</h4>
<a id="abrirModal2" class="waves-effect waves-light btn modal-trigger" href="#modalCambiosEventos">Modal</a>            
            <div class="row">
                <form class="col s12">
                    <!-- Informe del elemento -->
                    <div class="row">
                        <div class="input-field col s2 right-align">
                            Elemento:
                        </div>
                        <div class="input-field col s4 datosElem">
                            <input disabled id="txtElementoNombre" type="text" class="validate" value="0">
                        </div>

                        <div class="input-field col s2 right-align">
                            C&oacute;digo:
                        </div>
                        <div class="input-field col s4 datosElem">
                            <input disabled id="txtElementoCodigo" type="text" class="validate" value="0">
                        </div>
                    </div>
                    <!-- Color -->
                    <div class="row">
                        <div class="input-field col s2 right-align">
                            Color fuente:
                        </div>
                        <div class="input-field col s4 datosElem">
                            <input id="txtForeColor" type="text" class="validate"> 
                        </div>

                        <div class="input-field col s2 right-align">
                            Color Fondo:
                        </div>
                        <div class="input-field col s4 datosElem">
                            <input id="txtBkColor" type="text" class="validate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s2 right-align">
                            Fuente:
                        </div>
                        <div id="ddlFont" class="input-field col s4 datosElem">
                            <select id="ddlListaFont">
                                <option id="itemFont" value="0">Selecciona un font</option>
                                <option class="Roboto" value="Roboto">Roboto</option>
                                <option class="Srisakdi" value="Srisakdi">Srisakdi</option>
                                <option class="Open-sans-condensed" value="Open-sans-condensed">Open Sans Condensed</option>
                                <option class="Bitter" value="Bitter">Bitter</option>
                                <option class="Dancing-script" value="Dancing-script">Dancing Script</option>
                                <option class="Shadows-into-light" value="Shadows-into-light">Shadows Into Light</option>
                                <option class="AmaticSC" value="AmaticSC">Amatic SC</option>
                                <option class="Permanent-marker" value="Permanent-marker">Permanent Marker</option>
                                <option class="Cookie" value="Cookie">Cookie</option>
                                <option class="Special-elite" value="Special-elite">Special Elite</option>
                            </select>
                        </div>

                        <div class="input-field col s2 right-align datosElem">
                            Tama&ntilde;o: <label id="lbTamFuente"><span></span></label>
                        </div>
                        <div class="input-field col s4">
                            <br />
                            <div id="fontTamanho"></div>
                        </div>
                    </div>

                    <!-- Seleccionar Eventos -->
                    <div class="row">
                        <div class="input-field col s2 right-align">
                            Evento:
                        </div>
                        <div  id="ddlEventos" class="input-field col s10 datosElem">
                            <select id="ddlListaEventos">
                                <option id="item0" value="0">Selecciona un evento</option>
                                <option value="blur">blur()</option>
                                <option value="change">change()</option>
                                <option value="click">click()</option>
                                <option value="fadeIn">fadeIn()</option>
                                <option value="fadeOut">fadeOut()</option>
                                <option value="focus">focus()</option>
                                <option value="hover">hover()</option>
                                <option value="keyup">keyup()</option>
                                <option value="mouseout">mouseout()</option>
                                <option value="mouseover">mouseover()</option>
                                <option value="animate">animate()</option>
                                <option value="datatables">datatables()</option>
                                <option value="dialog">dialog()</option>
                                <option value="validate">validate()</option>
                            </select> 
                        </div>
                    </div>
                    <!-- Editor de Eventos -->
                    <div class="row">
                        <div class="col s12" id="eventContent"> 
                            <form>
                                <textarea id="code" name="code">
                                    aca debe ir el codigo
                                </textarea>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#!"  onclick="guardarDatosModal();" class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
        </div>
    </div>
    <!-- Guardar Cambios en evento -->
    <div id="modalCambiosEventos" class="modal-content modal modal-fixed-footer modal-configuracion">
        <div class="modal-content">
            <h4>Guardar Cambios?</h4>
            <div>Desea guardar los cambios realizados en el evento <span id="modalNomEvento"></span> del elemento <span id="modalNomElem"></span> ID <span id="modalIdElem"></span> ?</div>
            <div class="row">
                <form class="col s12"> 
                
                </form>               
            </div>
        </div>
        <div class="modal-footer"> 
            <a href="#!"  onclick="guardarCambiosCode();" class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
        </div>
    </div>
    <!-- ------------------------------------------------------------------------------------ FIN Modal PooUp ------------------------------------------------------------------------------------ -->




    <!-- ------------------------------------------------------------------------------------ Contenedor Eventos ------------------------------------------------------------------------------------ -->
    <div class="contentEvents">
        <!-- Codigo Base de Eventos -->
        <textarea id='codigoBase'>
$('idElementoAqui').nombreEvento(function() {
	// Aquí va el código
});
// Otra opción para llamar al evento sin la función.
//$('idElementoAqui').nombreEvento();
        </textarea>
        <textarea id='blurEventCode'>
/**
* Evento que detecta la pérdida del foco en el 
* elemento nombreElemento con id:nombreID
**/
        </textarea>
        <textarea id='changeEventCode'>
/**
* Evento que detecta el cambio de valor del
* elemento nombreElemento con id:nombreID
**/
        </textarea>
        <textarea id='clickEventCode'>
/**
* Evento que detecta cuando el usuario hace click sobre un elemento
* elemento nombreElemento con id:nombreID
**/
        </textarea>
        <textarea id='fadeInFunctionEventCode'>
/**
* Evento que detecta cuando el usuario hace click sobre un elemento
* elemento nombreElemento con id:nombreID
**/
        </textarea>
        <textarea id='fadeInEventCode'>

        </textarea>
        <textarea id='fadeOutEventCode'>
    
        </textarea>
        <textarea id='focusEventCode'>
        
        </textarea>
        <textarea id='hoverEventCode'>
        
        </textarea>
        <textarea id='keyupEventCode'></textarea>
        <textarea id='mouseoutEventCode'></textarea>
        <textarea id='mouseoverEventCode'></textarea>
        <textarea id='animateEventCode'></textarea>
        <textarea id='datatablesEventCode'></textarea>
        <textarea id='dialogEventCode'></textarea>
        <textarea id='validateEventCode'></textarea>
        <!-- Aqui se guarda los codigos geberados -->
        <textarea id='blurEvent'>                                           
//blurh1_1
/**
* Evento que detecta la pérdida del foco en el 
* elemento H1 con id:h1_1
**/
					
$('#h1_1').blur(function() {
	// Aquí va el código
});
// Otra opción para llamar al evento sin la función.
//$('#h1_1').blur();
//finblurh1_1
        </textarea>
        <textarea id='changeEvent'></textarea>
        <textarea id='clickEvent'></textarea>
        <textarea id='fadeInEvent'></textarea>
        <textarea id='fadeOutEvent'></textarea>
        <textarea id='focusEvent'></textarea>
        <textarea id='hoverEvent'></textarea>
        <textarea id='keyupEvent'></textarea>
        <textarea id='mouseoutEvent'></textarea>
        <textarea id='mouseoverEvent'></textarea>
        <textarea id='animateEvent'></textarea>
        <textarea id='datatablesEvent'></textarea>
        <textarea id='dialogEvent'></textarea>
        <textarea id='validateEvent'></textarea>

    </div>
    <!-- ------------------------------------------------------------------------------------ FIN Contenedor Eventos ------------------------------------------------------------------------------------ -->

    <!-- ------------------------------------------------------------------------------------ Campos ocultos ------------------------------------------------------------------------------------ -->
    <span id="spanIDoculto"></span>
    <!-- ------------------------------------------------------------------------------------ Fin Campos ocultos ------------------------------------------------------------------------------------ -->

    <script>
        CodeMirror.commands.autocomplete = function(cm) {
            cm.showHint({hint: CodeMirror.hint.anyword});
        }
        var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            lineNumbers: true,
            extraKeys: {"Ctrl-Space": "autocomplete"}
        });    
    </script>

    <!-- BIOGRAFÍA -->
    <!-- Asignar eventos a un elemento -->
    <!-- https://openclassrooms.com/en/courses/3693206-introduccion-a-jquery/3693281-eventos-vinculados-a-elementos -->
    <!-- VERY IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE -->
    <!-- Eventos asociados a elemento -->
    <!-- http://panicoenlaxbox.blogspot.com/2011/11/hace-poco-he-tenido-la-necesidad-de.html -->
    <!-- Saber si un elemento tiene un evento asignado -->
    <!-- http://rahosudce.blogspot.com/2013/11/re-saber-si-un-elemento-tiene-un-evento.html -->
    
</body>
</html>