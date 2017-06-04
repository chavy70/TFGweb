<!DOCTYPE html>
<html lang="es">
	<head>
		<!-- Boton derecho -->
		<!-- http://lineadecodigo.com/html5/menu-contextual-en-html5/ -->
		<!-- Bootstrap modificado para la barra -->
		<link href="../../css/bootstrap-barra.css" rel="stylesheet">
       



		<!-- Libreria de jQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<!-- Libreria de jQuery utilizado, entre otras cosas, para el dragg/drop/edit -->
		<script src="jquery-ui.min.js"></script>

		<link href="../../css/estilo-barras.css" rel="stylesheet">
		

			
<!-- popup -->
		  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">  
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
<script>
	/*var popup = jQuery.noConflict();
  	popup( function() {
    	popup( "#confirmEliminar" ).dialog();
  } );*/
  </script>

<!-- FIN popup -->
		

<!-- Llama al codigo que permite editar y arrastrar elementos dentro de la página -->
		<script src="../../js/herramienta/editar.js"></script>


	</head>
	<body>



		<div class="barra-estado-pagina">
    <?php
      include('../../barra/barra_estado.php');
    ?>
    </div>
    <div class="barra-herramienta-pagina">
    <?php
      include('../../barra/barra_herramienta.php');
    ?>
    </div>

		<div id="div" class="draggable-box">
			<div>Div</div>
		</div>
		<div id="h1" class="draggable-box">
			<div>H1</div>
		</div>
		<div class="dest draggable-box">



<!-- MENU -->






	<label for="color" contextmenu="colorMenu">Color:</label>
	<input id="color" type="text" contextmenu="colorMenu">
	<!-- Menu derecho para los elementos html -->
<div id="MenuBderecho">
	<menu type="context" id="colorMenu">
	  <menuitem label="Editar" id="editar" icon="../../img/MenuDerecho/editar.png"/></menuitem>
	  <menuitem label="Color" id="color" icon="../../img/MenuDerecho/color.png"/></menuitem>
	  <menuitem label="Eliminar" id="eliminar" icon="../../img/MenuDerecho/eliminar.png"/></menuitem>
	  <menuitem label="Propiedades" id="propiedades" icon="../../img/MenuDerecho/propiedades.png"/></menuitem>
	</menu>

	<menu type="context" id="hnMenu">
	  <menuitem label="Editar H" id="editarh" icon="../../img/MenuDerecho/editar.png"/></menuitem>
	  <menuitem label="Color H" id="colorh" icon="../../img/MenuDerecho/color.png"/></menuitem>
	  <menuitem label="Eliminar H" id="eliminarh" icon="../../img/MenuDerecho/eliminar.png"/></menuitem>
	  <menuitem label="Propiedades H" id="propiedadesh" onclick="jQueryPopup('#confirmEliminar').dialog();" icon="../../img/MenuDerecho/propiedades.png"/></menuitem>
	</menu>

</div>
<!-- FIN MENU -->



		</div>


<!-- PopUps -->
<div class="popUp" style="display: none;">
        <!-- Confirmar Eliminar -->
        <div id="propiedades" style="font-size: 80%;" title="Titulo">
            <div class="formPopUp">
                Eventos
                <select>
                	<item>Click</item> 
                	<item>OnChange</item>
                </select>
            </div>
        </div>
    </div>

	</body>
</html>