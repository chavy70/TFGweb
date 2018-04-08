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
		<link rel="stylesheet" href="../../css/styles.css">
		<!-- FIN popup -->
		
		<!-- BORRAR -->
       	<link href="../../css/pestanas.css" rel="stylesheet">


      
        <!-- BORRAR -->


		<!-- Llama al codigo que permite editar y arrastrar elementos dentro de la página -->
		<script src="../../js/herramienta/editar.js"></script>
	</head>
	<body>








		<button type="button" onclick="generaRAR();" class="btn btn-default">button</button>

		
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

		
		<div class="dest wdraggable-box">
			<!-- MENU -->
			<!--
			<label for="color" contextmenu="colorMenu">Color:1235</label>
			<input id="color" type="text" contextmenu="colorMenu">
			-->

<br />
<div class="clear:both;"></div>
<!-- BORRAR -->
<div class="contenedor">

		<div class="panel-izq barra-herramienta-pagina">
		    <?php
		      include('../../barra/barra_herramienta.php');
		    ?>
	    </div>
<div class="panel-der">


	<div id="pestanas">
        <ul id=lista>
            <li id="pestana1"><a id="titSol1" onclick="seleccionarSolatas('cpestana1');"">Index.html</a></li>
            <li id="pestana2"><a id="titSol2" onclick="seleccionarSolatas('cpestana2');"">Nuevo.html</a></li>
        </ul>
    </div>


	<div id="contenidopestanas">
		<div class="pestanasCode draggable-box wdraggable-box ui-sortable" id="cpestana1">
		HTML, siglas de HyperText Markup Language («lenguaje de marcado de hipertexto»), hace referencia al lenguaje de marcado predominante para la elaboración de páginas web que se utiliza para describir y traducir la estructura y la información en forma de texto, así como para complementar el texto con objetos tales como imágenes. El HTML se escribe en forma de «etiquetas», rodeadas por corchetes angulares (<,>). HTML también puede describir, hasta un cierto punto, la apariencia de un documento, y puede incluir un script (por ejemplo JavaScript), el cual puede afectar el comportamiento de navegadores web y otros procesadores de HTML.
		</div>
		<div class="pestanasCode draggable-box wdraggable-box ui-sortable dest" id="cpestana2">
		El nombre hojas de estilo en cascada viene del inglés Cascading Style Sheets, del que toma sus siglas. CSS es un lenguaje usado para definir la presentación de un documento estructurado escrito en HTML o XML2 (y por extensión en XHTML). El W3C (World Wide Web Consortium) es el encargado de formular la especificación de las hojas de estilo que servirán de estándar para los agentes de usuario o navegadores.
		</div> 
	</div>
</div>
	    <!-- <div class="panel-der">
	        <div id="pestanas">
	            <ul id=lista>
	                <li id="pestana1"><a id="titSol1" onclick="seleccionarSolatas('cpestana1');"">Index.html</a></li>
	                <li id="pestana2"><a id="titSol2" onclick="seleccionarSolatas('cpestana2');"">Nuevo.html</a></li>
	            </ul>
	        </div>
	        
	   
	        <div id="contenidopestanas">
	            <div class="pestanasCode draggable-box wdraggable-box" id="cpestana1">
	                HTML, siglas de HyperText Markup Language («lenguaje de marcado de hipertexto»), hace referencia al lenguaje de marcado predominante para la elaboración de páginas web que se utiliza para describir y traducir la estructura y la información en forma de texto, así como para complementar el texto con objetos tales como imágenes. El HTML se escribe en forma de «etiquetas», rodeadas por corchetes angulares (<,>). HTML también puede describir, hasta un cierto punto, la apariencia de un documento, y puede incluir un script (por ejemplo JavaScript), el cual puede afectar el comportamiento de navegadores web y otros procesadores de HTML.
	            </div>
	            <div class="pestanasCode draggable-box wdraggable-box" id="cpestana2">
	                El nombre hojas de estilo en cascada viene del inglés Cascading Style Sheets, del que toma sus siglas. CSS es un lenguaje usado para definir la presentación de un documento estructurado escrito en HTML o XML2 (y por extensión en XHTML). El W3C (World Wide Web Consortium) es el encargado de formular la especificación de las hojas de estilo que servirán de estándar para los agentes de usuario o navegadores.
	            </div>                
	        </div>
	    </div> -->



        </div>

<!-- BORRAR -->

			<!-- FIN MENU -->
		</div>









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
					<menuitem label="Propiedades H" id="propiedadesh" onclick="editarElemento();" icon="../../img/MenuDerecho/propiedades.png"/></menuitem>
				</menu>
			</div>









		<!-- PopUps -->
		<div class="popUp" style="display: none;">
			<!-- PopUp selecciona evento -->
			<div id="propiedades" style="font-size: 80%;" title="Titulo">
			 	<div class="formPopUp">
				    Eventos
					<div class="row">
						 <div class="col-md-12">
						  		<select id='ddlEvento'>
						        	<option value="selecciona">Selecciona el evento</option>
									<option value="blur">blur()</option>
									<option value="change">change()</option>
									<option value="click">click()</option>
									<option value="fadeIn">fadeIn()</option>
									<option value="faceOut">fadeOut()</option>
									<option value="focus">focus()</option>
									<option value="hover">hover()</option>
									<option value="keuyup">keyup()</option>
									<option value="mouseout">mouseout()</option>
									<option value="mouseover">mouseover()</option>
									<option value="animate">animate()</option>
									<option value="datatables">datatables()</option>
									<option value="dialog">dialog()</option>
									<option value="validate">validate()</option>
								</select>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 textoCod">
						  	<textarea id='txtCodigoblur' class="form-control" rows="6" cols="50"></textarea>
						  	<textarea id='txtCodigochange' class="form-control" rows="6" cols="50"></textarea>
						  	<textarea id='txtCodigoclick' class="form-control" rows="6" cols="50"></textarea>
						  	<textarea id='txtCodigofocus' class="form-control" rows="6" cols="50"></textarea>
						  	<textarea id='txtCodigohover' class="form-control" rows="6" cols="50"></textarea>
						  	<textarea id='txtCodigokeuyup' class="form-control" rows="6" cols="50"></textarea>
						  	<textarea id='txtCodigomouseout' class="form-control" rows="6" cols="50"></textarea>
						  	<textarea id='txtCodigomouseover' class="form-control" rows="6" cols="50"></textarea>

						</div>
					</div>		
		        </div>
		     </div>
		     <!-- PopUp selecciona evento -->
			<div id="eventosPunto" style="font-size: 80%;" title="Titulo">
			 	<div class="formPopUp">
					<select id="selMulSubEvent" multiple>
						<option value="fadeInCode">fadeInCode</option>
						<option value="fadeOutCode">fadeOutCode</option>
						<option value="animateCode">animateCode</option>
						<option value="dialogCode">dialogCode</option>
						<option value="validateCode">validateCode</option>
						<option value="datatablesCode">datatablesCode</option>
					</select>
			 	</div>
			 </div>
		 </div>

	</body>
</html>