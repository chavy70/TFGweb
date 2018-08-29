<!DOCTYPE html>
<html lang="es">
	<!-- Cabecera -->
	<head>








		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- http://getbootstrap.com/2.3.2/components.html -->
		<script src="js/jquery-3.3.1.min.js" ></script>
		<script src="js/jquery-ui.min.js" ></script>
		<script src="js/jquery.validate.js" ></script>
		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="css/bootstrap.min.css" >
		<!-- CSS Personal -->
		<link rel="stylesheet" href="css/styles.css" >
		<!-- Jquery JS -->
		<!-- <script src="js/jquery-3.2.1.js" ></script> -->
		<!-- Bootstrap JS -->
		<script src="js/bootstrap.js" ></script>	
		<!-- jQuery Popup Overlay -->
    	<script src="js/jquery.popupoverlay.js"></script>
    	<script src="js/editar-page.js"></script>
    	<!-- Resize -->
    	<script src="js/smartit.js" type="text/javascript"></script>
    	<script src="../../js/util.js" type="text/javascript"></script>
		<script src="../../js/abm/login.js" type="text/javascript"></script>
		
		
		


<link rel="stylesheet" href="../../css/codemirror/codemirror.css">
<script type="text/javascript" src="../../js/codemirror/codemirror.js"></script>
<script type="text/javascript" src="../../js/codemirror/javascript.js"></script>


<script src="../../jQueryMinicolors/js/jquery.minicolors.js"></script>
		<link href="../../jQueryMinicolors/css/jquery.minicolors.css" rel="stylesheet" type="text/css" />

	</head>
	<!-- Cuerpo -->
	<body>
		<?php 
			include("../../barra/barraLoginHerramienta.php");
		?> 
		<!-- Barra de herramientas -->
		<div class="row">
			<?php 
				include("../../barra/barraHerramienta.php");
			?>
			<!-- FIN -->	
			<div>
				<div id="id" class="btn-group configPage elementHTML" role="group" aria-label="...">
					<button type="button" class="btn btn-default"><img src="img/edicion/editar.png" alt="Editar"></button>
					<button type="button" class="btn btn-default"><img src="img/edicion/eliminar.png" alt="Eliminar"></button>
					<button type="button" class="btn btn-default"><img src="img/edicion/mover.png" alt="Mover"></button>
					<button type="button" class="btn btn-default"><img src="img/edicion/configurar.png"></button>
				</div>
			</div>






<center><display:grid>dsdsdsdsd</center> 




	
	









			<!-- ------------------------------------------------- PANEL PRINCIPAL-------------------------------------------------------- -->
			<!-- Panel con los codigos de la pagina -->
			<!-- panel panel-default dest colu2 -->
			<div class="dest col-md-11 sortable">
				<div class="panel-body sortable">
					<nav id="menuPrincipal" class="navbar navbar-default rotator elementHTML sortable">
						<div class="container-fluid sortable">
							<div class="navbar-header sortable">
								<button type="button" class="navbar-toggle collapsed sortable" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
									<span class="sr-only elementHTML">Toggle navigation</span>
									<span class="icon-bar elementHTML"></span>
									<span class="icon-bar elementHTML"></span>
									<span class="icon-bar elementHTML"></span>
								</button>
								<a class="navbar-brand elementHTML sortable" href="#">Brand</a>
							</div>
							<div class="collapse navbar-collapse sortable" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav elementHTML sortable">
									<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
									<li><a href="#">Link</a></li>
									<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
										<ul class="dropdown-menu sortable">
											<li><a href="#">Action</a></li>
											<li><a href="#">Another action</a></li>
											<li><a href="#">Something else here</a></li>
											<li role="separator" class="divider"></li>
											<li><a href="#">Separated link</a></li>
											<li role="separator" class="divider"></li>
											<li><a href="#">One more separated link</a></li>
										</ul>
									</li>
								</ul>
								<form class="navbar-form navbar-left elementHTML sortable">







								





									<div class="form-group elementHTML sortable">
										<input type="text" class="form-control" placeholder="Search">
									</div>
									<button type="submit" class="btn btn-default">Submit</button>
								</form>
								<ul class="nav navbar-nav navbar-right elementHTML sortable">
									<li><a href="#">Link</a></li>
									<li class="dropdown elementHTML sortable">
										<a href="#" class="dropdown-toggle elementHTML sortable" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
										<ul class="dropdown-menu elementHTML sortable">
											<li><a href="#">Action</a></li>
											<li><a href="#">Another action</a></li>
											<li><a href="#">Something else here</a></li>
											<li role="separator" class="divider"></li>
											<li><a href="#">Separated link</a></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<!-- Cabecera -->
					<div id="div_1" class="jumbotron rotator soltarEn ui-droppable sortable elementHTML">
						<h1 id='h1_1' class="elementHTML elementoEditable" onfocus="document.execCommand('selectAll', false, null);">Hello, world!
							<div class='btn-group configPage noSelect' role='group'>
								<button contentEditable='false' type='button' onclick="editarTexto('h1_1');" class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/editar.png' alt='Editar'></button>
								<button type='button' contentEditable='false' onclick="$('#h1_1').remove();" class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/eliminar.png' alt='Eliminar'></button>
								<button type='button' contentEditable='false' class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/mover.png' alt='Mover'></button>
								<button type='button' contentEditable='false' onclick="editarDatosModal('h1_1')" class='btn btn-default noSelect' data-toggle="modal" data-target="#configElement"><img class='noSelect' src='img/edicion/configurar.png'></button>
							</div>
						</h1>


						<div id="p_1" class="elementHTML elementoEditable" onfocus="document.execCommand('selectAll', false, null);">
							<div class='btn-group configPage noSelect' role='group'>
								<button contentEditable='false' type='button' onclick="editarTexto('p_1');" class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/editar.png' alt='Editar'></button>
								<button type='button' contentEditable='false' onclick="$('#p_1').remove();" class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/eliminar.png' alt='Eliminar'></button>
								<button type='button' contentEditable='false' class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/mover.png' alt='Mover'></button>
								<button type='button' contentEditable='false' class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/configurar.png'></button>
							</div>
							<p>
								
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat tristique egestas. Integer aliquam diam leo, in aliquet neque luctus at. Praesent sit amet urna tortor. 
								Aliquam eros lorem, fermentum vel justo quis, iaculis dignissim enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec hendrerit 
								dolor non nisl porttitor pretium. Nullam rhoncus accumsan metus nec egestas. Mauris vel pellentesque dolor. Ut venenatis aliquam ex, et faucibus mi efficitur ut. 
								Cras a porta purus, sed luctus velit. Aenean viverra finibus ultricies. Cras id arcu odio.
							</p>
							</div>
							<a id="btn_1" class="btn btn-primary btn-lg elementHTML elementoEditable" href="#" role="button" onfocus="document.execCommand('selectAll', false, null);">
								<div class='btn-group configPage noSelect' role='group'>
									<button contentEditable='false' type='button' onclick="editarTexto('btn_1');" class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/editar.png' alt='Editar'></button>
									<button type='button' contentEditable='false' onclick="$('#btn_1').remove();" class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/eliminar.png' alt='Eliminar'></button>
									<button type='button' contentEditable='false' class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/mover.png' alt='Mover'></button>
									<button type='button' contentEditable='false' class='btn btn-default noSelect'><img class='noSelect' src='img/edicion/configurar.png'></button>
								</div>
								Learn more
							</a>
						

					</div>
					<!-- Cuerpo -->
					<div class="row sortable">
						<div class="col-sm-6 col-md-4 sortable">
							<div class="thumbnail sortable">
								<img src="#" alt="...">
								<div class="caption">
									<h3 class="elementHTML elementoEditable">Thumbnail label</h3>
									<p>...</p>
									<p class="elementoEditable"><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
								</div>
							</div>
						</div>

						<div class="col-sm-6 col-md-4 sortable">
							<div class="thumbnail sortable">
								<img src="#" alt="...">
								<div class="caption sortable">
									<h3 class="elementHTML elementoEditable">Thumbnail label</h3>
									<p class="elementHTML elementoEditable sortable">...</p>
									<p class="elementHTML elementoEditable sortable"><a href="#" class="btn btn-primary elementHTML elementoEditable" role="button">Button</a> <a href="#" class="btn btn-default elementHTML" role="button">Button</a></p>
								</div>
							</div>
						</div>	
					</div>

					<div class="row">
						<div class="col-sm-6 col-md-4">
							<div class="list-group">
								<button type="button" class="list-group-item elementoEditable">Cras justo odio</button>
								<button type="button" class="list-group-item elementoEditable">Dapibus ac facilisis in</button>
								<button type="button" class="list-group-item elementoEditable">Morbi leo risus</button>
								<button type="button" class="list-group-item elementoEditable">Porta ac consectetur ac</button>
								<button type="button" class="list-group-item elementoEditable">Vestibulum at eros</button>
							</div>
						</div>

						<div class="col-sm-6 col-md-8">
							<ul class="media-list">
								<li class="media">
									<div class="media-left">
										<a href="#">
										<img class="media-object elementoEditable" src="img/thumbl_1.jpg" alt="Lorem ipsum">
										</a>
									</div>
									<div class="media-body">
										<h4 class="media-heading elementHTML elementoEditable">Media heading</h4>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
									</div>
								</li>

								<li class="media">
									<div class="media-left ">
										<a href="#">
											<img class="media-object" src="img/thumbl_1.jpg" alt="Lorem ipsum">
										</a>
									</div>
									<div class="media-body">
										<h4 class="media-heading elementHTML elementoEditable">Media heading</h4>
										<p class="elementoEditable">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>



				



				<div class="panel-footer elementHTML elementoEditable">Powered by AjapoWeb - 2017</div>
			</div> 
			<!-- ------------------------------------------------- FIN PANEL PRINCIPAL-------------------------------------------------------- -->
			
			<!-- ------------------------------------------------ POPUP CONFIGURACION ------------------------------------------------ -->
			<div class="container">
				<!-- Modal -->
				<div class="modal fade" id="configElement" role="dialog">
					<div class="modal-dialog">

						<!-- Modal content-->
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								
								<h4 class="titulo-modal"><p class="text-center">Configuracion de elemento</p></h4>
							</div>
							<div class="modal-body">
							<form>
								<div class="form-group row">
									<div class="col-sm-12">
										<div class="sub-title-modal" role="alert">
											Informaci&oacute;n
										</div>
									</div>
								</div>
								<div class="form-group row">
									
									<div class="col-sm-2 text-right">
										<label for="tbElemento" >Elemento</label>
									</div>
									<div class="col-sm-10">
										<input type="text" readonly class="form-control" id="tbElemento">
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-2 text-right">
										<label for="tbID" class="col-form-label">C&oacute;digo</label>
									</div>
									<div class="col-sm-10">
										<input class="form-control" readonly id="tbID" placeholder="ID del Elemento">
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-12">
										<div class="sub-title-modal" role="alert">
											Colores
										</div>
									</div>
								</div>

								<!-- FUNCIONA INICIO 1 -->
								<div class="form-group row">
								<!-- http://develoteca.com/jquery-minicolors-convertir-tus-elementos-input-html-en-pickers-color/ -->	
								<div class="col-sm-2 text-right">
										<label for="lbForeColor" class="col-form-label">Fuente</label>
									</div>									
									<div class="col-sm-4">
										<input type="hidden" value="#0088cc" name="color1" id="tbForeColor"/>
									</div>

									<div class="col-sm-2 text-right">
										<label for="lbBkColor" class="col-form-label">Fondo</label>
									</div>									
									<div class="col-sm-4">
										<input type="hidden" value="#0088cc" name="color1" id="tbBkColor"/>
									</div>

								</div>
								<!-- FUNCIONA FIN 1 -->

								<div class="form-group row">
									<div class="col-sm-12">
										<div class="sub-title-modal" role="alert">
											Eventos
										</div>
									</div>
								</div>
								<div class="form-group row">
									
									<div class="col-sm-2 text-right">
										<label for="lbEvento" class="col-form-label">Evento</label>
									</div>									
									<div class="col-sm-10">
										<!-- Asignar eventos a un elemento -->
										<!-- https://openclassrooms.com/en/courses/3693206-introduccion-a-jquery/3693281-eventos-vinculados-a-elementos -->
										<select id="ddlEventos" class="form-control">
											<option value="0">Selecciona un evento</option>
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
										<!-- VERY IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE -->
										<!-- Eventos asociados a elemento -->
										<!-- http://panicoenlaxbox.blogspot.com/2011/11/hace-poco-he-tenido-la-necesidad-de.html -->
										<!-- Saber si un elemento tiene un evento asignado -->
										<!-- http://rahosudce.blogspot.com/2013/11/re-saber-si-un-elemento-tiene-un-evento.html -->
									</div>


















								</div>

								
								<div class="form-group row">
									<div class="col-sm-2 text-right">
										
									
									</div>
									<div class="col-sm-12" id="eventContent">
									<!-- aca debe ir el codigo -->
									<form>
										<textarea id="code" name="code">
(function() {
"use strict";
kkk
var WORD = /[\w$]+/g, RANGE = 500;

CodeMirror.registerHelper("hint", "anyword", function(editor, options) {
	var word = options && options.word || WORD;
	var range = options && options.range || RANGE;

	var list = [], seen = {};
	function scan(dir) {
	var line = cur.line, end = Math.min(Math.max(line + dir * range, editor.firstLine()), editor.lastLine()) + dir;
	for (; line != end; line += dir) {
		var text = editor.getLine(line), m;
		word.lastIndex = 0;
	}
	}
	scan(-1);
	scan(1);
	return {list: list, from: CodeMirror.Pos(cur.line, start), to: CodeMirror.Pos(cur.line, end)};
});
})();
										</textarea>
									</form>
</div>
								</div>


									

							</form>
							</div>
							<div class="modal-footer">
								<button type="button" onclick="guardarDatosModal();" class="btn btn-default" data-dismiss="modal">Guardar</button>
								<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
							</div>
						</div>
						<!-- FIN Modal content-->




					</div>
				</div>
				<!-- FIN Modal -->
				<!-- Contenedor Eventos -->
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

					</textarea>
					<textarea id='fadeInFunctionEventCode'>

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
					<textarea id='blurEvent'></textarea>
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
				<!-- FIN Contenedor Eventos -->
			</div>




		</div>
	</body>

	<script>
	CodeMirror.commands.autocomplete = function(cm) {
		cm.showHint({hint: CodeMirror.hint.anyword});
	}
	var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		lineNumbers: true,
		extraKeys: {"Ctrl-Space": "autocomplete"}
	});
	  /*var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		//lineNumbers: true,
		readOnly: true,
		autofocus: true,
		matchBrackets: true,
		styleActiveLine: true
		});
		setTimeout(function() {
			editor.refresh();
		}, 100);*/
	/*$('.CodeMirror').each(function(i, el){
		el.CodeMirror.refresh();
	});*/







	
					


	</script>
	
</html>