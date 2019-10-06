/**
 ** Editar la pagina
 **/
 //Inicializo en 0 los valores de los id de los elementos
var idH1 = 0;
var idH2 = 0;
var idH3 = 0;
var idH4 = 0;
var idH5 = 0;
var idH6 = 0;
var idBoton  = 0;
var idNav = 0;
var idSection = 0;
var idArticle = 0;
var idAside = 0;
var idHeader = 0;
var idHgroup = 0;
var idFooter = 0;
var idDiv = 0;
var idForm = 0;
var idHr // No
var idI = 0;
var idStrong = 0;
var idA = 0;
var idImg = 0;
var idU = 0;
var idSub = 0;
var idSup = 0;
var idLegend = 0;
var idFieldset = 0;
var idBlockquote = 0;
var idSelect = 0;
var idOptgroup = 0;
var idInput = 0;
var idTextarea = 0;
var idAddress = 0;
var idMap = 0;
var idCont = 0;
var eventoSeleccionado = '';
var eventoAnteriorSeleccionado = '';
var idActualSel = 0;
var codigoComentario = '';
var codigoBase = '';
var codigoAnterior = '';
var codigoNuevo = '';
var codigoFinal = '';
var codigoParaGuardar = '';
var eventoParaGuardar = '';
var codigoEventoFinalGuardar = '';
var nombreEventoFinalGuardar = '';
var codigoExistentePrevio  = '';
/*
* elementHTML : Muestra seleccion cuando el mouse esta sobre el objeto
* sortable : los elementos contenidos dentro de esta clase y todos sus elementos dentro de él pueden moverse libremente, intercambiando lugares con otros elementos
*/ 
//var jQ = jQuery.noConflict();
var anchoDispositivo = 1950
/*Document ready de la pagina*/	
$( document ).ready(function() {

	$("#spanIDoculto").css('display','none');
	$("#btn-confirm").on("click", function(){
		$("#mi-modal").modal('show');
	});
	$("#btn-interno-confirm").on("click", function(){
		$("#interno-modal").modal('show');
	});
	//


	//$( "#draggable" ).draggable();
	$("#eventContent").css('display','none');
	// Pick color
	//$('#tbForeColor').minicolors();
	//$('#tbBkColor').minicolors();
	//$( ".sortable" ).sortable();
	$( ".sortable" ).sortable({
		connectWith: ".sortable" // Permite mover elementos dentro de otros elementos 
	});//.disableSelection();

	// Detecta si hubo un cambio en el codigo del evento seleccionado
	/*$("#code").keypress(function(){
		
	});*/
	/*$("#txtForeColor").change(function(){
		alert('CHANGE '+$("#txtForeColor").val());
	});*/

	$("#mytext").trigger("change", function(){
		alert('***CHANGE '+$("#txtForeColor").val());
	});


	$(".colorpicker-saturation").click(function(){
		//alert($("#txtForeColor").text() + ' ------------ '+$("#txtForeColor").val())
		$("#txtForeColor").css('border-bottom','1px solid '+$("#txtForeColor").val());
		$("#txtForeColor").css('box-shadow','0 1px 0 0 '+$("#txtForeColor").val());

		$("#txtBkColor").css('border-bottom','1px solid '+$("#txtBkColor").val());
		$("#txtBkColor").css('box-shadow','0 1px 0 0 '+$("#txtBkColor").val());
	});
	
	// Controla cuando cambia valor del select en el popUp de edicion de 
	//$('#ddlEventos').change(function() {
	$('#ddlEventos .dropdown-content li').click(function() {
		var eventoSeleccionadoDdl = $(this).attr('id');
//alert('1 eventoSeleccionadoDdl '+eventoSeleccionadoDdl);		
		//Guarda el Evento anterior en caso de que exista
		eventoAnteriorSeleccionado = eventoSeleccionado;
		//Guarda el evento seleccionado en el combo
		eventoSeleccionado = ($('#'+eventoSeleccionadoDdl+' span').text()).replace("()", "") //$("#ddlEventos option:selected").val();			
		//ID del elemento al que se va a aplicar el evento
		idActualSel = $("#spanIDoculto").text(); // $("#tbID").text();	
		// Busca si el evento ya fue agregado previamente y lo guarda en la variable codigoExistentePrevio
		buscarEventoExiste(eventoSeleccionado, idActualSel);	
		// Cambio el editor a modo visible
		$("#eventContent").css('display','inline');
		// Si existe codigo anterior
		if (codigoAnterior != '') {
			// Si el codigo anterior es igual al actual
			if (codigoAnterior === editor.getValue()) {
				// Significa que no hubo cambios y el valor de codigo anterior entonces queda vacio
				// Seteo el valor a vacio para el proximo cambio en el select de eventos
				codigoAnterior = '';
			}else{
			
				// Si hubo cambios en el codigo anterior (antes que el select cambie al nuevo evento seleccionado)
				//alert('Cambios detectados! Guardar cambios!');
				// Obtengo el codigo con los cambios
				codigoParaGuardar = editor.getValue();

$("#modalNomEvento").text(eventoAnteriorSeleccionado);//(eventoSeleccionado);
$("#modalNomElem").text($('#txtElementoNombre').val());
$("#modalIdElem").text($('#txtElementoCodigo').val());

$('#modalCambiosEventos').modal('open');  		
//alert('GUARDAR CAMBIOS DE EVENTOS ');				
				// Llamo al popUp que pregunta si desea guardar los cambios 
				mostrarModalGuardarCambios(codigoParaGuardar, eventoParaGuardar, comentarioEventAnt);
				// Seteo el valor a vacio para el proximo cambio en el select de eventos
				codigoAnterior = '';
//alert('PASOOO')				
			}
		}
//alert('DATOS eventoSeleccionado '+eventoSeleccionado+' eventoAnteriorSeleccionado '+eventoAnteriorSeleccionado);		
		// Pregunta si se selecciono algun elemento
		if (eventoSeleccionado != '0')  {
//alert('SIN CAMBIOS ');				
			// Pregunto si el campo donde se guardan los codigos del elemento esta vacio
			if ($('#'+eventoSeleccionado+'Event').text() == '') {
				// Reemplazo con los datos y por último agrego la descripción del evento
				// El codigo para la busqueda del evento de un elemento determinado tiene la nomenglatura:
				// //nombreEvento+idElemento <aqui va el codigo en question> //fin+nombreEvento+idElemento
				// A continuacion busco el comentario del evento seleccionado y reemplazo las variables por los datos del elemento seleccionado y lo guardo en una variable		
				codigoComentario 	= $('#'+eventoSeleccionado+'EventCode').text().replace('nombreElemento',$('#txtElementoNombre').val())//$('#tbElemento').val())				
				// A continuacion busco el codigo base del evento seleccionado y reemplazo las variables por los datos del elemento seleccionado y lo guardo en una variable
				codigoBase 			= $('#codigoBase').text().replace('nombreEvento',eventoSeleccionado);
				codigoComentario 	= codigoComentario.replace('nombreID',$('#spanIDoculto').text())
				codigoBase 			= codigoBase.replace('nombreEvento',eventoSeleccionado);
				codigoBase 			= codigoBase.replace('idElementoAqui','#'+$('#spanIDoculto').text());
				codigoBase 			= codigoComentario + codigoBase.replace('idElementoAqui','#'+$('#spanIDoculto').text()); //$('#tbID').val());
				// Si la variable codigoAnterior se encuentra vacia, la guardo antes de reemplazar por el codigo del evento seleccionado actual
				if (codigoAnterior === '') {
					codigoAnterior = codigoBase
				}				
				// Seteo el campo de codigo por la variable del codigo base del evento seleccionado
				editor.setValue(codigoBase);
			}else{ // Si el campo donde se encuentran los eventos ya tiene el evento seleccionado para el elemento					
				// Seteo la variable codigoBase por el codigo que se encuntra
				codigoBase = codigoExistentePrevio; //$('#'+eventoSeleccionado+'Event').text()
				if (codigoExistentePrevio === '') {
					codigoBase = '//'+comentEventoFinalGuardar+'\n'+$('#'+eventoSeleccionado+'Event').text()+'\n//fin'+comentEventoFinalGuardar
				}			
			}
			//Agregar el texto en el campo Editor -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			editor.setValue(codigoBase);	
			codigoAnterior = codigoBase;
			codigoBase = '';
			setTimeout(function() {
				editor.refresh();
			},500);
			setTimeout(function() {
				codigoFinal = editor.getValue();
				$("#code").css('display','none');
			},600);
		}else{
			alert('NO SE SELECCIONO NINGUN EVENTO');
			$("#eventContent").css('display','none');
		}
		eventoParaGuardar = eventoSeleccionado
		//Comentario de evento anterior
		comentarioEventAnt = eventoSeleccionado + idActualSel;
	}); // Fin evento cambio del valor del select
	
	//Obtengo el ancho de la pagina
	anchoDispositivo = 1950//$(window).width();
	ocultarTodo();
	// Drop and drag --------------------------------------------------------------------------------------------------
	$(document).on("mouseup",".soltarEn",function(event){
		soltarEn = $(this).attr("id")
		$("#"+soltarEn).droppable({
			accept: ".arrastrar",
			tolerance: 'pointer',
			greedy: true,
			hoverClass: 'highlight',
			drop: function(ev, ui) {
				$(ui.draggable).clone(true).detach().css({
					position: 'relative',
					top: 'auto',
					left: 'auto'
				}).appendTo(this).replaceWith(htmlSoltar);
				//AddAChild();
				$('.dropdown-trigger').dropdown();
				//onclick="$('.dropdown-trigger').dropdown();alert(1); element = document.getElementById('dropdown_nav_2');alert(2); element.innerHTML = '<h1>ESTO ES UNA PRUEBA</h1>';" 
			}
		});
		
	});
	
	
	//var elm = document.getElementById('div_1');
//elm.appendChild(htmlSoltar);//(document.createElement('p'),document.createElement('span'),document.createElement('div'));
//console.log(elm.innerHTML);
	

	//Arrastra el elemento seleccionado y lo suelta
	$(".arrastrar").draggable({
		//connectToSortable: ".social-msl-group-list",
		revert: "invalid",
		helper: function(){ 
			idCont = 0;
			idCont++; // Contador utilizado para generar id
        	existeIdElemento = document.getElementById(elementoActual+'_'+idCont); // Busco si el id generado ya existe dentro del documento
        	while (existeIdElemento != null) { // Si el id exite, va generando mas id hasta obtener una que no existe
        		idCont++;
			    existeIdElemento = document.getElementById(elementoActual+'_'+idCont);			    
			}
			nuevoIdElemento = elementoActual+'_'+idCont;
			//alert('nuevoIdElemento '+nuevoIdElemento);
			var botonEdit = "<div class='btn-group configPage noSelect' role='group'>"+
			//"<button contentEditable='false' type='button' onclick='editarTexto(\""+nuevoIdElemento+"\");' class='blue-grey lighten-5 btn btn-default noSelect'><img class='noSelect' src='http://ajapoweb.com/images/edicion/editar.png' alt='Editar'></button>"+
			"<a class='waves-effect waves-light btn btn-configuracion modal-trigger blue-grey lighten-5' onclick='editarTexto(\""+nuevoIdElemento+"\");' href='#'><i class='Small material-icons grey-text text-darken-3'>edit</i></a>"+
			//"<button type='button' contentEditable='false' onclick='$(\"#"+nuevoIdElemento+"\").remove();' class='blue-grey lighten-5  btn btn-default noSelect'><img class='noSelect' src='http://ajapoweb.com/images/edicion/eliminar.png' alt='Eliminar'></button>"+
			"<a class='waves-effect waves-light btn btn-configuracion modal-trigger blue-grey lighten-5' onclick='$(\"#"+nuevoIdElemento+"\").remove();' href='#'><i class='Small material-icons grey-text text-darken-3'>delete</i></a>"+
			//"<button type='button' contentEditable='false' class=' blue-grey lighten-5 btn btn-default noSelect'><img class='noSelect' src='http://ajapoweb.com/images/edicion/mover.png' alt='Mover'></button>"+
			"<a class='waves-effect waves-light btn btn-configuracion modal-trigger blue-grey lighten-5' href='#'><i class='Small material-icons grey-text text-darken-3'>open_with</i></a>"+
			//"<button type='button' contentEditable='false' onclick='configuracion($(\"#"+nuevoIdElemento+"\").attr(\"id\"));' class='blue-grey lighten-5 btn btn-default noSelect'><img class='noSelect' src='http://ajapoweb.com/images/edicion/configurar.png'></button></div>"
			"<a id='abrirModal' class='waves-effect waves-light btn btn-configuracion modal-trigger blue-grey lighten-5' onclick='editarDatosModal(\""+nuevoIdElemento+"\");' href='#modalConfigElement'><i class='Small material-icons grey-text text-darken-3'>settings</i></a></div>";

			//elementoActual
			var htmlSecundario = "";
			switch (elementoActual) {
                case 'h1':
                    htmlSecundario = "<h1 class='textoSecundario'>Elemento H1</h1>"; // Texto que se muestra mientras se arrastra
					htmlSoltar = "<h1 id='"+nuevoIdElemento+"' contenteditable='true' class='elementHTML sortable elementoEditable'>Lorem ipsum "+botonEdit+"</h1>"; // HTML generado con su id correspondiente				
                    break;
                case 'h2':
                    htmlSecundario = "<h2 class='textoSecundario'>Elemento H2</h2>";
                    htmlSoltar = "<h2 id='"+nuevoIdElemento+"' contenteditable='true' class='elementHTML sortable elementoEditable'>ddLorem ipsum"+botonEdit+"</h2>";
                    break;
                case 'h3':
                	idH3++;
                	htmlSecundario = "<h3 class='textoSecundario'>Elemento H3</h3>";
                	htmlSoltar = "<h3 id='"+nuevoIdElemento+"' contenteditable='true' class='elementHTML sortable elementoEditable'>Lorem ipsum"+botonEdit+"</h3>";
                    break;
                case 'h4':
                	idH4++;
                	htmlSecundario = "<h4 class='textoSecundario'>Elemento H4</h4>";
                	htmlSoltar = "<h4 id='"+nuevoIdElemento+"' contenteditable='true' class='elementHTML sortable elementoEditable'>Lorem ipsum"+botonEdit+"</h4>";
                    break;
                case 'h5':
                	idH5++;
                	htmlSecundario = "<h5 class='textoSecundario'>Elemento H5</h5>";
                	htmlSoltar = "<h5 id='"+nuevoIdElemento+"' contenteditable='true' class='elementHTML sortable elementoEditable'>Lorem ipsum"+botonEdit+"</h5>";
                    break;
                case 'h6':
                	idH6++;
                	htmlSecundario = "<h6 class='textoSecundario'>Elemento H6</h6>";
                	htmlSoltar = "<h6 id='"+nuevoIdElemento+"' contenteditable='true' class='elementHTML sortable elementoEditable'>Lorem ipsum"+botonEdit+"</h6>";
                    break;
                case 'boton':
                	idBoton++;
                	htmlSecundario = "<a href='#' class='btn btn-primary textoSecundario' role='button'>Button</a>";
                	htmlSoltar = "<a id='"+nuevoIdElemento+"' href='#' class='btn btn-primary elementHTML sortable elementoEditable' role='button' onfocus=\"document.execCommand('selectAll', false, null);\">Button"+botonEdit+"</a>";
                    break;
                case 'nav':
					idNav++;
					if (frameCSS = 'M'){ // - Materialize
						/*
						htmlSecundario = "<ul id='dropdown_"+nuevoIdElemento+"' class='dropdown-content textoSecundario'><li><a href='#!'>one</a></li><li><a href='#!'>two</a></li><li class='divider'></li><li>"+
						"<a href='#!'>three</a></li></ul><nav><div class='nav-wrapper'><a href='#!' class='brand-logo'>Logo</a><ul class='right hide-on-med-and-down'><li><a "+
						"href='sass.html'>Sass</a></li><li><a href='badges.html'>Components</a></li><li><a class='dropdown-trigger' href='#!' data-target='dropdown_"+nuevoIdElemento+"'>Dropdown"+
						"<i class='material-icons right'>arrow_drop_down</i></a></li></ul></div></nav>";
						htmlSoltar = "<ul id='dropdown_"+nuevoIdElemento+"' class='dropdown-content elementHTML sortable'><li><a href='#!'>one</a></li><li><a href='#!'>two</a></li><li class='divider'></li><li>"+
						"<a href='#!'>three</a></li></ul><nav><div class='nav-wrapper'><a href='#!' class='brand-logo'>Logo</a><ul class='right hide-on-med-and-down'><li><a "+
						"href='sass.html'>Sass</a></li><li><a href='badges.html'>Components</a></li><li><a class='dropdown-trigger' href='#!' data-target='dropdown_"+nuevoIdElemento+"'>Dropdown"+
						"<i class='material-icons right'>arrow_drop_down</i></a></li></ul></div></nav>";
						*/

						htmlSecundario = "<nav><div class='nav-wrapper'><a href='#!' class='brand-logo'>Logo</a><ul class='right hide-on-med-and-down'><li><a href='sass.html'>Sass</a></li><li>"+
						"<a href='badges.html'>Components</a></li><li><a class='dropdown-trigger' href='#!' data-target='dropdown_"+nuevoIdElemento+"'>Dropdown<i class='material-icons right'>arrow_drop_down</i></a><ul "+
						"id='dropdown_"+nuevoIdElemento+"' class='dropdown-content elementHTML sortable ui-sortable' style='' tabindex='0'><li tabindex='0'><a href='#!'>one</a></li><li tabindex='0'>"+
						"<a href='#!'>two</a></li><li class='divider' tabindex='0'></li><li tabindex='0'><a href='#!'>three</a></li></ul></li></ul></div></nav>";
						htmlSoltar = "<nav><div class='nav-wrapper'><a href='#!' class='brand-logo'>Logo</a><ul class='right hide-on-med-and-down'><li><a href='sass.html'>Sass</a></li><li>"+
						"<a href='badges.html'>Components</a></li><li><a onclick=\"$('#dropdown_nav_1').dropdown();\" class='dropdown-trigger' href='#!' data-target='dropdown_"+nuevoIdElemento+"'>Dropdown<i class='material-icons right'>arrow_drop_down</i></a><ul "+
						"id='dropdown_"+nuevoIdElemento+"' class='dropdown-content elementHTML sortable ui-sortable' style='' tabindex='0'><li tabindex='0'><a href='#!'>one</a></li><li tabindex='0'>"+
						"<a href='#!'>two</a></li><li class='divider' tabindex='0'></li><li tabindex='0'><a href='#!'>three</a></li></ul></li></ul></div></nav>";
					} else { // B - Bootstrap
						// Derecha
						htmlSecundario = "<nav class='navbar navbar-default textoSecundario'><div class='container-fluid'><div class='navbar-header'><button type='button' "+
						"class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>"+
						"<span class='sr-only'>Toggle navigation</span><span class='icon-bar'></span><span class='icon-bar'>"+
						"</span><span class='icon-bar'></span></button><a class='navbar-brand' href='#'>Empresa</a></div>"+
						"<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>"+
						"<ul class='nav navbar-nav navbar-right'><li class='active'><a href='#'>Link 1<span "+
						"class='sr-only'>(current)</span></a></li><li><a href='#'>Link 2</a></li>"+
						"<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' "+
						"aria-haspopup='true' aria-expanded='false'> SubMenu <span class='caret'></span></a>"+
						"<ul class='dropdown-menu'><li><a href='#'>Link Sub 1</a></li><li><a href='#'>Link Sub 2"+
						"</a></li><li><a href='#'>Link Sub 3</a></li><li role='separator' class='divider'></li>"+
						"<li><a href='#'>Link Sub 4</a></li><li role='separator' class='divider'></li><li>"+
						"<a href='#'>Link Sub 5</a></li></ul></li></ul></div></div></nav>";
						htmlSoltar = "<nav class='navbar navbar-default elementHTML sortable'><div class='container-fluid elementHTML sortable'><div class='navbar-header elementHTML sortable'><button type='button' "+
						"class='navbar-toggle collapsed elementHTML sortable' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>"+
						"<span class='sr-only elementHTML sortable elementoEditable'>Toggle navigation</span><span class='icon-bar elementHTML sortable'></span><span class='icon-bar elementHTML sortable'>"+
						"</span><span class='icon-bar elementHTML sortable'></span></button><a class='navbar-brand elementHTML sortable  elementoEditable' href='#'>Empresa</a></div>"+
						"<div class='collapse navbar-collapse elementHTML sortable' id='bs-example-navbar-collapse-1'>"+
						"<ul class='nav navbar-nav navbar-right elementHTML sortable elementoEditable'><li class='active elementHTML'><a href='#'>Link 1<span "+
						"class='sr-only elementHTML'>(current)</span></a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link 2</a></li>"+
						"<li class='dropdown elementHTML'><a href='#' class='dropdown-toggle elementHTML' data-toggle='dropdown' role='button' "+
						"aria-haspopup='true' aria-expanded='false'> SubMenu <span class='caret'></span></a>"+
						"<ul class='dropdown-menu elementHTML'><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 1</a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 2"+
						"</a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 3</a></li><li role='separator' class='divider elementHTML'></li>"+
						"<li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 4</a></li><li role='separator' class='divider elementHTML'></li><li class='elementHTML'>"+
						"<a class='elementHTML' href='#'>Link Sub 5</a></li></ul></li></ul></div></div>"+botonEdit+"</nav>";
						// izquierda
						htmlSecundario = "<nav class='navbar navbar-default textoSecundario'><div class='container-fluid'><div class='navbar-header'><button type='button' "+
						"class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>"+
						"<span class='sr-only'>Toggle navigation</span><span class='icon-bar'></span><span class='icon-bar'>"+
						"</span><span class='icon-bar'></span></button><a class='navbar-brand' href='#'>Empresa</a></div>"+
						"<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>"+
						"<ul class='nav navbar-nav'><li class='active'><a href='#'>Link 1<span "+
						"class='sr-only'>(current)</span></a></li><li><a href='#'>Link 2</a></li>"+
						"<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' "+
						"aria-haspopup='true' aria-expanded='false'> SubMenu <span class='caret'></span></a>"+
						"<ul class='dropdown-menu'><li><a href='#'>Link Sub 1</a></li><li><a href='#'>Link Sub 2"+
						"</a></li><li><a href='#'>Link Sub 3</a></li><li role='separator' class='divider'></li>"+
						"<li><a href='#'>Link Sub 4</a></li><li role='separator' class='divider'></li><li>"+
						"<a href='#'>Link Sub 5</a></li></ul></li></ul></div></div></nav>";
						htmlSoltar = "<nav class='navbar navbar-default elementHTML sortable'><div class='container-fluid elementHTML sortable'><div class='navbar-header elementHTML sortable'><button type='button' "+
						"class='navbar-toggle collapsed elementHTML sortable' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>"+
						"<span class='sr-only elementHTML sortable elementoEditable'>Toggle navigation</span><span class='icon-bar elementHTML sortable'></span><span class='icon-bar elementHTML sortable'>"+
						"</span><span class='icon-bar elementHTML sortable'></span></button><a class='navbar-brand elementHTML sortable' href='#'>Empresa</a></div>"+
						"<div class='collapse navbar-collapse elementHTML sortable' id='bs-example-navbar-collapse-1'>"+
						"<ul class='nav navbar-nav elementHTML sortable elementoEditable'><li class='active elementHTML'><a href='#'>Link 1<span "+
						"class='sr-only elementHTML'>(current)</span></a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link 2</a></li>"+
						"<li class='dropdown elementHTML'><a href='#' class='dropdown-toggle elementHTML' data-toggle='dropdown' role='button' "+
						"aria-haspopup='true' aria-expanded='false'> SubMenu <span class='caret'></span></a>"+
						"<ul class='dropdown-menu elementHTML'><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 1</a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 2"+
						"</a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 3</a></li><li role='separator' class='divider elementHTML'></li>"+
						"<li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 4</a></li><li role='separator' class='divider elementHTML'></li><li class='elementHTML'>"+
						"<a class='elementHTML' href='#'>Link Sub 5</a></li></ul></li></ul></div></div>"+botonEdit+"</nav>";
					}	
                    break;
                case 'section':
                	idSection++;
                	htmlSecundario = "<section class='sectionSelect textoSecundario'> </section>";
                	htmlSoltar = "<section id='"+nuevoIdElemento+"' class='sectionSelect elementHTML sortable elementoEditable'> Seccion "+botonEdit+"</section>";
                    break;
                case 'article':
                	idArticle++;
                	htmlSecundario = "<article class='textoSecundario'><h1> Titulo del Articulo </h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing" +
					"elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p></section>";
                	htmlSoltar = "<article id='"+nuevoIdElemento+"' class='soltarEn elementHTML sortable elementoEditable' onfocus=\"document.execCommand('selectAll', false, null);\"><h1 class='elementHTML sortable'> Titulo del Articulo </h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing" +
					"elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>"+botonEdit+"</section>";
                    break;
                case 'aside':
                	idAside++;
                	htmlSecundario = "<aside class='textoSecundario'><h4 class'elementHTML'>Titulo Aside</h4><p class='elementHTML'>Lorem ipsum dolor "+
					"sit amet, consectetur adipiscing</p></aside>";
                	htmlSoltar = "<aside id='"+nuevoIdElemento+"' class='asideDer elementHTML sortable elementoEditable' onfocus=\"document.execCommand('selectAll', false, null);\"><h4 class='elementHTML sortable'>Titulo Aside</h4><p class='elementHTML sortable'>Lorem ipsum dolor "+
					"sit amet, consectetur adipiscing</p>"+botonEdit+"</aside>";
                    break;
                case 'header':
                	idHeader++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<header class='headerSelect textoSecundario'> Titulo Header </header>";
                	htmlSoltar = "<header id='"+nuevoIdElemento+"' class='headerSelect elementHTML sortable elementoEditable' onfocus=\"document.execCommand('selectAll', false, null);\"> Titulo Header "+botonEdit+"</header>";
                    break;
                case 'hgroup':
                	idHgroup++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<hgroup class='headerSelect textoSecundario'> Selecciona las h1-h6 antes de arrastrar </hgroup>";
                	htmlSoltar = "<hgroup id='"+nuevoIdElemento+"' class='headerSelect elementHTML sortable elementoEditable' onfocus=\"document.execCommand('selectAll', false, null);\"> Selecciona las h1-h6 antes de arrastrar "+botonEdit+"</hgroup>";
                    break;    
                case 'footer':
                	idFooter++;
                	// Izquierda
                	htmlSecundario = "<footer class='textoSecundario'> Titulo Footer </footer>";
                	htmlSoltar = "<footer id='"+nuevoIdElemento+"' class='elementHTML sortable elementoEditable'> Titulo Footer "+botonEdit+"</footer>";
                	// Centrado
                	htmlSecundario = "<footer class='text-center textoSecundario'> Titulo Footer </footer>";
                	htmlSoltar = "<footer id='"+nuevoIdElemento+"' class='text-center elementHTML sortable elementoEditable'> Titulo Footer "+botonEdit+"</footer>";
                	// Derecha
                	htmlSecundario = "<footer class='text-right textoSecundario'> Titulo Footer </footer>";
                	htmlSoltar = "<footer id='"+nuevoIdElemento+"' class='text-right elementHTML sortable elementoEditable'> Titulo Footer "+botonEdit+"</footer>";                	
                    break;
                case 'div':
                	idDiv++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<div class='textoSecundario'> div </div>";
                	htmlSoltar = "<div class='elementHTML sortable elementoEditable'> div "+botonEdit+"</div>";
                    break; 
                case 'form':
                	idForm++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<form class='textoSecundario' role='form elementHTML'><div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_email_1'>Email</label>"+
					"<input type='email' class='form-control elementHTML' id='ejemplo_email_1' placeholder='Introduce tu email'></div>"+
					"<div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_password_1'>Contraseña</label>"+
					"<input type='password' class='form-control elementHTML' id='ejemplo_password_1' placeholder='Contraseña'></div>"+
					"<div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_archivo_1'>Adjuntar un archivo</label>"+
					"<input class='elementHTML' type='file' id='ejemplo_archivo_1'><p class='help-block elementHTML'>Ejemplo de texto de ayuda.</p></div>"+
					"<div class='checkbox elementHTML'><label><input type='checkbox elementHTML'> Activa esta casilla"+
					"</label></div><button type='submit' class='btn btn-default elementHTML'>Enviar</button></form>";
                	htmlSoltar = "<form id='"+nuevoIdElemento+"' role='form' class='elementHTML sortable'><div class='form-group elementHTML sortable'><label class='elementHTML sortable' for='ejemplo_email_1'>Email</label>"+
					"<input type='email' class='form-control elementHTML sortable' id='ejemplo_email_1' placeholder='Introduce tu email'></div>"+
					"<div class='form-group elementHTML sortable'><label class='elementHTML sortable' for='ejemplo_password_1 elementoEditable'>Contraseña</label>"+
					"<input type='password' class='form-control elementHTML sortable' id='ejemplo_password_1' placeholder='Contraseña'></div>"+
					"<div class='form-group elementHTML sortable'><label class='elementHTML sortable' for='ejemplo_archivo_1 elementoEditable'>Adjuntar un archivo</label>"+
					"<input class='elementHTML sortable' type='file' id='ejemplo_archivo_1'><p class='help-block elementHTML sortable elementoEditable'>Ejemplo de texto de ayuda.</p></div>"+
					"<div class='checkbox elementHTML sortable'><label><input type='checkbox elementHTML sortable elementoEditable'> Activa esta casilla"+
					"</label></div><button type='submit' class='btn btn-default elementHTML sortable elementoEditable'>Enviar</button>"+botonEdit+"</form>";
                    break; 
                case 'hr':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<hr class='textoSecundario' />";
                	htmlSoltar = "<hr />";
                    break; 
                case 'i':
                	idI++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<i class='textoSecundario' > Prueba cursiva</i>";
                	htmlSoltar = "<i> Prueba cursiva"+botonEdit+"</i>";
                    break; 
                case 'strong':
                	idStrong++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<strong class='textoSecundario' > Prueba negrita</strong>";
                	htmlSoltar = "<strong> Prueba negrita"+botonEdit+"</strong>";
                    break;
                case 'a':
                	idA++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<a href='#' class='textoSecundario' > Link de prueba</a>";
                	htmlSoltar = "<a id='"+nuevoIdElemento+"' href='#' class=' elementoEditable'> Link de prueba"+botonEdit+"</a>";
                    break; 
                case 'img':
                	idImg++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<img src='img/thumbl_1.jpg' alt='imagen prueba' class='textoSecundario' />";
                	htmlSoltar = "<img id='"+nuevoIdElemento+"' src='img/thumbl_1.jpg' alt='imagen prueba' />";
                    break;
                case 'u':
                	idU++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<u class='textoSecundario'>Subrayado</u>";
                	htmlSoltar = "<u>Subrayado"+botonEdit+"</u>";
                    break;
                case 'sub':
                	idSub++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<sub class='textoSecundario'>Subscript</sub>";
                	htmlSoltar = "<sub>Subscript"+botonEdit+"</sub>";
                    break;
                case 'sup':
                	idSup++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<sup class='textoSecundario'>Superscript</sup>";
                	htmlSoltar = "<sup>Superscript"+botonEdit+"</sup>";
                    break;
                case 'legend': // Dentro de Form
                	idLegend++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<legend class='textoSecundario'>legend</legend>";
                	htmlSoltar = "<legend>legend"+botonEdit+"</legend>";
                    break;
                case 'fieldset': // Dentro de Form
                	idFieldset++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<fieldset class='textoSecundario'>fieldset</fieldset>";
                	htmlSoltar = "<fieldset>fieldset"+botonEdit+"</fieldset>";
                    break;
                case 'blockquote': // Dentro de Form
                	idBlockquote++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<blockquote class='textoSecundario' cite='#'>blockquote</blockquote>";
                	htmlSoltar = "<blockquote cite='#'>blockquote"+botonEdit+"</blockquote>";
                    break;
                case 'select': // Dentro de Form
                	idSelect++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<select class='textoSecundario'><option value='Opcion1'>Volvo</option><option value='Opcion2'>Volvo</option><option value='Opcion3'>Volvo</option></select>";
                	htmlSoltar = "<div id='"+nuevoIdElemento+"' class='select elementHTML sortable elementoEditable'><select><option value='Opcion1'>Volvo</option><option value='Opcion2'>Volvo</option><option value='Opcion3'>Volvo</option></select>"+botonEdit+"</div>";
                    break;
                case 'optgroup': // Dentro de Form
                	idOptgroup++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<select class='textoSecundario'><optgroup label='Titulo 1'><option value='opcion1'>Opcion 1</option><option value='opcion3'>Opcion 2</option></optgroup>"+
                	"<optgroup label='Titulo 2'><option value='opcion3'>Opcion 1</option><option value='opcion4'>Opcion 2</option></optgroup></select>";
                	htmlSoltar = "<div class='elementHTML sortable'><select id='"+nuevoIdElemento+"'><optgroup label='Titulo 1'><option value='opcion1'>Opcion 1</option><option value='opcion3'>Opcion 2</option></optgroup>"+
                	"<optgroup label='Titulo 2'><option value='opcion3'>Opcion 1</option><option value='opcion4'>Opcion 2</option></optgroup></select>"+botonEdit+"</div>";
                    break;
                case 'input': // Dentro de Form
                	idInput++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<input class='textoSecundario' type='text' name='fname' value='Texto'>";
                	htmlSoltar = "<input class='elementHTML sortable elementoEditable' id='"+nuevoIdElemento+"' type='text' name='fname' value='Texto'>";
                    break;
                case 'textarea': // Dentro de Form
                	idTextarea++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<textarea class='textoSecundario' rows='4' cols='50'>Textarea</textarea>";
                	htmlSoltar = "<textarea class='sortable elementoEditable' rows='4' cols='50'>Textarea</textarea>";
                    break;
                case 'address': // Dentro de Form
                	idAddress++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<address>Escrito por <a href='mailto:webmaster@example.com'>Juan Perez</a>.<br>"+ 
					"Visitanos:<br>Example.com<br>Casilla 564, Departamento<br>PARAGUAY</address>";
                	htmlSoltar = "<address class='elementHTML sortable elementoEditable' id='"+nuevoIdElemento+"'>Escrito por <a href='mailto:webmaster@example.com'>Juan Perez</a>.<br>"+ 
					"Visitanos:<br>Example.com<br>Casilla 564, Departamento<br>PARAGUAY "+botonEdit+"</address>";
				case 'map': // Dentro de Form
					idMap++;
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<img src='planets.gif' width='145' height='126' alt='Planets' usemap='#planetmap'>"+
					"<map name='planetmap'><area shape='rect' coords='0,0,82,126' alt='Sun' href='sun.htm'>"+
					"<area shape='circle' coords='90,58,3' alt='Mercury' href='mercur.htm'>"+
					"<area shape='circle' coords='124,58,8' alt='Venus' href='venus.htm'></map>";
                	htmlSoltar = "<img class='sortable' src='planets.gif' width='145' height='126' alt='Planets' usemap='#planetmap'>"+
					"<map id='"+nuevoIdElemento+"' name='planetmap'><area shape='rect' coords='0,0,82,126' alt='Sun' href='sun.htm'>"+
					"<area shape='circle' coords='90,58,3' alt='Mercury' href='mercur.htm'>"+
					"<area shape='circle' coords='124,58,8' alt='Venus' href='venus.htm'>"+botonEdit+"</map>";
                    break;
                default:
                    htmlSecundario = "";
            }
			return $(htmlSecundario); 
		}
		//helper: "clone"
	});

	//Cuando se presiona el click para comenzar arrastre
	$(document).on("mousedown",".arrastrar",function(event){
		elementoActual =  $(this).attr('id');
		$('#text').text('Se selecciono elemento '+elementoActual);
	});


	//$('#changeEvent').text('//'+'comentEventoFinalGuardar'+'\n'+'(textoActual + codigoEventoFinalGuardar).trim()'+'\n//fin'+'comentEventoFinalGuardar)');
});




/////////////////////// BORRARRRRRRRRRRRRRRRRRRRRRRRRRR
function AddAChild () {
	var newElem = document.createElement ("nav");
	newElem.innerHTML = "<div class='nav-wrapper'><a href='#!' class='brand-logo'>Logo</a><ul class='right hide-on-med-and-down'><li><a href='sass.html'>Sass1"+
	"</a></li><li><a href='badges.html'>Components</a></li><li><a class='dropdown-trigger'"+
	" href='#!' data-target='dropdown_nav_2'>Dropdown<i class='material-icons right'>arrow_drop_down</i></a><ul id='dropdown_nav_2' class='dropdown-content elementHTML"+
	" sortable ui-sortable' style='' tabindex='0'><li tabindex='0'><a href='#!'>one</a></li><li tabindex='0'><a href='#!'>two</a></li><li class='divider' tabindex='0'>"+
	"</li><li tabindex='0'><a href='#!'>three</a></li></ul></li></ul></div>";
	//newElem.style.color = "red";
	
	var container = document.getElementById ("div_1");
	container.appendChild (newElem);
}
/////////////////////// BORRARRRRRRRRRRRRRRRRRRRRRRRRRR

//**************************************************************************************************************************************
//**************************************************************************************************************************************
//************************************************************* FUNCIONES **************************************************************
//**************************************************************************************************************************************
//**************************************************************************************************************************************
/**
 * Vista previa en 2 dispositivos
 * @param {string} device 
 */
function verEnDispositivo(device){
	if (anchoDispositivo > 803) {
		ocultarTodo();
		$('#standalone').css('display','inline-block');
		$('#standalone').popup({
	      color: 'white',
	      opacity: 1,
	      transition: '0.3s',
	      scrolllock: true
	    });
		switch (device) {
	        case 's': {
	            $('.deviceSmartphone1').css('display','block');
	            break;
	        }
	        case 't': {
	            $('.deviceTablet1').css('display','block');
	            break;
	        }
	    }
	}
}

/**
 * Oculta las barras de herramienta y de estado cuando se activa la vista previa de dispositivos
 */
function ocultarTodo(){
	$('#standalone').css('display','none');
	if (anchoDispositivo > 803) {
		$('.deviceSmartphone1').css('display','none');
		$('.deviceTablet1').css('display','none');
	}
}

/**
 * Guarda los cambios del archivo editado actualmente
 * @param {string} codigoEditado 
 */
function guardarCambios(codigoEditado){
	var cabecera = "<!DOCTYPE html>\n"+"<html lang=\"es\">\n"
	var cssDoc = "<head> <link rel=\"stylesheet\" href=\"css/bootstrap.css\" > </head>"
	var footer = "\n<body><body>"
	var codigoHTML =  cabecera+cssDoc+codigoEditado+footer
	codigoHTML = codigoHTML.toString().replace(/\t/g, '');//.split('\r\n'); // Limpio el texto borrarndo todos los tabs
	//codigoHTML = cabecera + footer
	nombreArchivo = "op.html"
	var datos = {
            "codigoHTML" : codigoHTML,
            "nombreArchivo" : nombreArchivo
    }

    //Utilizo ajax para llamar a la funcion PHP copiar template
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'http://localhost/TFGweb/funciones/GuardarCambios.php',
        data: datos,
        success: function (data) {
        //success: function () {
            //window.location = '/PRUEBA/proyectos/'+data[1].toString()+'/';
            //window.location = '/TFGWeb/proyectos/'+data[1].toString()+'/';
        }
    });
}

/**
 * Guarda los cambios del archivo editado actualmente
 */
function generaRar(){
	archivozip = "css"
	var datos = {
        "archivozip" : archivozip
    }
	//Utilizo ajax para llamar a la funcion PHP que genera archivo .RAR
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'http://localhost/TFGweb/funciones/RAR/generarZip.php',
        data: datos,
        success: function (data) {
        //success: function () {
            //window.location = '/PRUEBA/proyectos/'+data[1].toString()+'/';
            //window.location = '/TFGWeb/proyectos/'+data[1].toString()+'/';
        }
    });
}

/**
 * Editar texto de elemento
 * @param {string} idSeleccionardo 
 */
function editarTexto(idSeleccionardo){
//$("#"+idSeleccionardo).removeClass( "elementHTML sortable elementoEditable ui-sortable" )
//var h1Text = document.querySelector("h1_1").textContent;
alert($("#"+idSeleccionardo).text());
	// Elimine los textos del boton para que se seleccione solo el texto correspondiente
	$("#"+idSeleccionardo).seleccionaTexto(idSeleccionardo, $("#"+idSeleccionardo).text().replace("editdeleteopen_withsettings", "")); // editdeleteopen_withsettings
	//$("#"+idSeleccionardo).attr("contentEditable",true); 

	//alert(idSeleccionardo+'  5555 '+$("#"+idSeleccionardo).text()+'  ****  '+$("#"+idSeleccionardo).val())
	//$("#zone").attr("contentEditable",true); 
	//document.getElementById(idSeleccionardo).focus();
	idContenedor = $('#'+idSeleccionardo).parent().attr('id'); // Obtener contenedor del elemento actual
		
	
	/*$("#"+idContenedor).removeClass( "sortable" );
	$("#"+idContenedor).addClass( "sortable" );
	$('#'+idSeleccionardo).parent().css({"color": "red", "border": "2px solid red"});*/
}

/**
 * Levanta el popUp de configuracion con los datos del elemento seleccionado
 * @param {int} idElemento 
 */
/*function configuracion(idElemento){
	alert('Hola');
	$('#abrirModal').click();
	//$('.modal-configuracion').modal();
	var nameElemento = $('#'+idElemento).get(0).nodeName; // $('#'+idElemento).attr('name');
	$("#tbElemento").val(nameElemento);
	$("#tbID").val(idElemento);
	$("#lbIdActual").text(idElemento);
	$("#code").css('display','inline');
}*/
/**
 * Rellena el modal con los datos del elemento seleccionado
 * @param {string} idElemento 
 */
function editarDatosModal(idElemento){
	var idPrimerItem = '#'+$('#ddlEventos ul li:first').attr('id');
	$('#ddlEventos .select-dropdown .dropdown-content li').removeClass("selected");
	$('#'+$('#ddlEventos ul li:first').attr('id')).addClass("selected");
	//idid = '#h1_1';
	//alert('1 '+$('#h1_1').get(0).nodeName+'   ****  '+$(idid).get(0).nodeName + ' ****** '+idElemento);
	var nameElemento = $('#'+idElemento).get(0).nodeName; // $('#'+idElemento).attr('name');
	//alert('nameElemento '+nameElemento)

	//validate 
	$('#txtElementoNombre,#txtElementoCodigo').removeClass("valid");
	$('#txtElementoNombre,#txtElementoCodigo').addClass("valid");

	$("#txtElementoNombre").val(nameElemento);
	$("#txtElementoCodigo").val(idElemento);
	$("#tbID").val(idElemento);
	$("#spanIDoculto").text(idElemento);
	$("#lbIdActual").text(idElemento);
	$("#code").css('display','inline');	
}

/**
 * Muestra el popUp cuando hay cambios detectados en algún evento
 * @param {string} codigoCambio 
 * @param {string} eventoCambio 
 * @param {string} eventoComent 
 */
function mostrarModalGuardarCambios(codigoCambio, eventoCambio, eventoComent){
	// Se guarda el codigo que tuvo cambios
	codigoEventoFinalGuardar = codigoCambio;
	//alert("CODIGO A GUARDARRRRRRRRRRRRRRR "+codigoEventoFinalGuardar);
	// Se guarda el nombre del evento cuyo codigo tuvo cambios
	nombreEventoFinalGuardar = eventoCambio;
	// Se guarda comentario del evento
	comentEventoFinalGuardar = eventoComent;
	//alert('nombreEventoFinalGuardar EVENTO '+nombreEventoFinalGuardar+' CODIGO codigoEventoFinalGuardar '+codigoEventoFinalGuardar);
	// Aparece el popUp
	$("#guardaCambios").modal('show');

	//alert('1 nombreEventoFinalGuardar '+nombreEventoFinalGuardar+' eventoCambio '+eventoCambio);
}
/**
 * Asigna el nuevo id al elemento actual
 */
function guardarDatosModal(){
	//var editor = $('.CodeMirror')[0].CodeMirror;
	// create an instance
	//var editor = CodeMirror.fromTextArea('code');
	//var editor = CodeMirror.fromTextArea(document.getElementById("code"));
	
	// Guarda el codigo
	$('#code').data('CodeMirrorInstance', editor);
	// obtener
	//var myInstance = $('code').data('CodeMirrorInstance');
	/*
	//Descomentar
	var nuevoId = $("#tbID").val(); // ID ingresado por el user
	var actualId = $("#lbIdActual").text(); // ID actual del elemento
	$("#"+actualId).attr("id",nuevoId); // Cambio el ID actual del elemento por el nuevo ID
	*/
}

/**
 * Guarda los ambios realizados al editar el codigo de eventos
 */
function guardarCambiosCode(){	
	nombreEventoFinalGuardar = eventoSeleccionado;
	// Obtengo el texto actual en el campo donde van todos los eventos de los elementos
	var textoActual = $('#'+nombreEventoFinalGuardar+'Event').text();
	textoActual = '';
	//alert('GUARDAAA!!! '+'  --#'+nombreEventoFinalGuardar+'Event--  '+nombreEventoFinalGuardar+'   //'+comentEventoFinalGuardar+'\n'+(textoActual + codigoEventoFinalGuardar).trim()+'\n//fin'+comentEventoFinalGuardar)	
	///alert('codigoEventoFinalGuardar \n'+codigoEventoFinalGuardar)
	//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	alert('CAMBIO DETECTADO #'+eventoAnteriorSeleccionado+'Event '+textoActual+"  "+codigoEventoFinalGuardar);
	alert('#'+eventoAnteriorSeleccionado+' FINALLLLLLLL     '+'//'+comentEventoFinalGuardar+'\n'+(textoActual + codigoEventoFinalGuardar).trim()+'\n//fin'+comentEventoFinalGuardar);
	//$('#'+nombreEventoFinalGuardar+'Event').text('//'+comentEventoFinalGuardar+'\n'+(textoActual + codigoEventoFinalGuardar).trim()+'\n//fin'+comentEventoFinalGuardar)
	$('#'+eventoAnteriorSeleccionado+"Event").text('//'+comentEventoFinalGuardar+'\n'+(textoActual + codigoEventoFinalGuardar).trim()+'\n//fin'+comentEventoFinalGuardar);
	/*$('#'+eventoAnteriorSeleccionado).text("kkkkkkkkkkkkkkkkkkkkkkkkk");
	$('#changeEvent').text('.#'+eventoAnteriorSeleccionado+'. 22222  //'+'comentEventoFinalGuardar'+'\n'+'(textoActual + codigoEventoFinalGuardar).trim()'+'\n//fin'+'comentEventoFinalGuardar)');
	return false;
	alert('AGREGADO YA!!!')*/
	//alert('1 //'+comentEventoFinalGuardar+'\n'+(textoActual + codigoEventoFinalGuardar).trim()+'\n//fin'+comentEventoFinalGuardar)
	// Dentro del campo donde se guardan los eventos, agrego el evento que fue modificado
    //$('#'+nombreEventoFinalGuardar+'Event').text('//'+comentEventoFinalGuardar+'\n'+(textoActual + codigoEventoFinalGuardar).trim()+'\n//fin'+comentEventoFinalGuardar);
	// Seteo todos las variables a vacio 
	codigoParaGuardar = '';
	eventoParaGuardar = '';
	//nombreEventoFinalGuardar = '';
	codigoEventoFinalGuardar = '';
	codigoExistentePrevio = ''; // Setear, codigo anterior
	//$("#guardaCambios").modal('hide');
	// El nuevo evento seleccionado
	eventoSeleccionado = $("#ddlEventos option:selected").val();
	eventoParaGuardar = eventoSeleccionado 
}

/**
 * Devuelve el evento si ya fue creado previamente
 * @param {string} nomEvento 
 * @param {string} idElemSel 
 */
function buscarEventoExiste(nomEvento, idElemSel){
//alert('1 DENTRO DE LA FUNCION '+nomEvento+'### \n'+$('#'+nomEvento+'Event').text())	
	var textoEventoMostrar = '';
	var lineas = $('#'+nomEvento+'Event').text().split('\n');
	var comentBuscar = '//'+nomEvento+idElemSel;
	var comentFinBuscar = '//fin'+nomEvento+idElemSel;
	var numLn = 0;
	var empezarAguardar = 0
	// Recorro linea por linea del evento guardado
	for(var i = 0;i < lineas.length;i++){		
		// Bandera que controla el final del evento mediante el codigo cierre comentFinBuscar
		if(	$.trim(lineas[i]) == $.trim(comentFinBuscar)){
			empezarAguardar = 0 // el 0 indica que ya finalizo el recorrido del evento
		}
		//DESCOMENTAR=============================================================================================================================================================================================
		// Pregunto si ya encontro el evento para guardar en la variable
		if (empezarAguardar == 1 ){ //&& trim($.trim(lineas[i])) != '' 
			//alert(textoEventoMostrar + $.trim(lineas[i]))
			textoEventoMostrar = textoEventoMostrar + $.trim(lineas[i]) //+ '\n'
			if(textoEventoMostrar === '' ){
				//
			}else{
				textoEventoMostrar = textoEventoMostrar + '\n'
			}
			//$('#'+nomEvento+'Event').text($('#'+nomEvento+'Event').text().replace($.trim(lineas[i]), ''));
		}
		//Busco si existe el evento del elemento seleccionado
		if(	$.trim(lineas[i]) == $.trim(comentBuscar)){
			empezarAguardar = 1
		}
	}
	codigoExistentePrevio = textoEventoMostrar;
	
	/*$('#'+nomEvento+'Event').text($('#'+nomEvento+'Event').text().replace(comentBuscar, ''));
	$('#'+nomEvento+'Event').text($('#'+nomEvento+'Event').text().replace(comentFinBuscar, ''));
	*/
	$('#'+nomEvento+'Event').text($('#'+nomEvento+'Event').text());
	$('#'+nomEvento+'Event').text($('#'+nomEvento+'Event').text());
//alert('ACA ME QUEDE GUARDA DOBLE 1 '+$('#'+nomEvento+'Event').text())
}

//http://jsfiddle.net/zAZyy/

$.fn.seleccionaTexto = function(idElem, textElem){
    /*var doc = document;
    var element = this[0];
	console.log(this, element);
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
		range.select();	
    } else if (window.getSelection) {
        var selection = window.getSelection();        
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
		selection.addRange(range); // selecciona
	}*/
	selectText( document.getElementById(idElem), textElem );
	//selectText( document.getElementById('zone'), 'lo wor' );


};

// http://jsfiddle.net/H2H2p/3/
//Seleccionar rango de texo ------------------------------------------------------------------------------------------------------------------------------------------------------------
function selectText(element, textToSelect) {
    var elementText;
    if (typeof element.textContent == "string" && document.createRange && window.getSelection) {
        elementText = element.textContent;
    } else if (document.selection && document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        textRange.moveToElement(element);
        elementText = textRange.text;
    } 
    var startIndex = elementText.indexOf(textToSelect);
    setSelectionRange(element, startIndex, startIndex + textToSelect.length);
}

function getTextNodesIn(node) {
    var textNodes = [];
    if (node.nodeType == 3) {
        textNodes.push(node);
    } else {
        var children = node.childNodes;
        for (var i = 0, len = children.length; i < len; ++i) {
            textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
        }
    }
    return textNodes;
}

function setSelectionRange(el, start, end) {
    if (document.createRange && window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var textNodes = getTextNodesIn(el);
        var foundStart = false;
        var charCount = 0, endCharCount;

        for (var i = 0, textNode; textNode = textNodes[i++]; ) {
            endCharCount = charCount + textNode.length;
            if (!foundStart && start >= charCount
                    && (start < endCharCount ||
                    (start == endCharCount && i < textNodes.length))) {
                range.setStart(textNode, start - charCount);
                foundStart = true;
            }
            if (foundStart && end <= endCharCount) {
                range.setEnd(textNode, end - charCount);
                break;
            }
            charCount = endCharCount;
        }

        var sel = window.getSelection();
        sel.removeAllRanges();
		sel.addRange(range);		
    } else if (document.selection && document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(true);
        textRange.moveEnd("character", end);
        textRange.moveStart("character", start);
		textRange.select();	
    }
}

function agregarPagina(){
	$( ".nueva-pagina" ).remove();
	var cantTabs = $(".tabsPages li").length; 
	$(".tabPorPagina").removeClass("active");	
	$('.tabsPages').append("<li id='_pagina_"+cantTabs+"_' class='tab col s3 l2'><a class='active tabPorPagina' href='#pagina"+cantTabs+"'>Pagina "+cantTabs+"</a></li>");
	$('.tabsPages').append("<li class='tab col s3 nueva-pagina grey lighten-3'><a href='#' onclick='agregarPagina();' class='agregar-pagina'><i class='Small material-icons'>add</i></a></li>");
	$('.contenedorTabs').append("<div id='pagina"+cantTabs+"' class='col s12 contenidoTab' style='display: none;'>Pagina "+cantTabs+"</div>");
}

//selectText( document.getElementById('zone'), 'lo wor' );
//FIN Seleccionar rango de texo ------------------------------------------------------------------------------------------------------------------------------------------------------------



// PARA REEMPLAZAR TEXTO
//https://stackoverflow.com/questions/3997659/replace-selected-text-in-contenteditable-div
/*function replaceSelectedText(replacementText) {
	var sel, range;
	var element = this[0];//*
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
			range = sel.getRangeAt(0);
			range = range.selectNodeContents(element); //*
            range.deleteContents();
            range.insertNode(document.createTextNode(replacementText));
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}*/



/*$("button").click(function() {
    $("#editable").seleccionaTexto();
});*/

/**
 * Devuelve valor 1 si el id tiene asignado el nombre evento pasado por parametro
 * @param {numeric} idEvento 
 * @param {string} nombreEvento 
 * @param {string} tieneEvent 
 */
/*
function existeEvento(idEvento, nombreEvento, tieneEvent){
	var ev = $._data($("#"+idEvento)[0], 'events');
	var tieneEvent = 0;
	if (nombreEvento == 'blur') { // Evento disparado cuando un elemento ha perdido su foco
		if(ev && ev.blur) tieneEvent = 1;
	}
	if (nombreEvento == 'change') { // Evento disparado cuando el valor de un elemento ha cambiado
		if(ev && ev.change) tieneEvent = 1;
	}
	if (nombreEvento == 'click') { // Evento disparado cuando se produce un click sobre un elemento
		if(ev && ev.click) tieneEvent = 1;
	}
	if (nombreEvento == 'fadeIn') { // Evento que pasa de oculto a visible cambiando gradualmente la opacidad
		if(ev && ev.fadeIn) tieneEvent = 1;
	}
	if (nombreEvento == 'fadeOut') { // Evento que pasa de visible a oculto cambiando gradualmente la opacidad
		if(ev && ev.fadeOut) tieneEvent = 1;
	}
	if (nombreEvento == 'focus') { // Evento disparado cuando un elemento ha obtenido el foco
		if(ev && ev.focus) tieneEvent = 1;
	}
	if (nombreEvento == 'hover') { // Evento disparado cuando el mouse se encuentra sobre un elemento
		if(ev && ev.hover) tieneEvent = 1;
	}
	if (nombreEvento == 'keyup') { // Evento disparado cuando un boton del teclado es presionado
		if(ev && ev.keyup) tieneEvent = 1;
	}
	if (nombreEvento == 'mouseout') { // Evento disparado cuando el puntero del mouse es movido fuera del área de un elemento
		if(ev && ev.mouseout) tieneEvent = 1;
	}
	if (nombreEvento == 'mouseover') { // Evento disparado cuando el puntero del mouse es movido dentro del área de un elemento FUNCIONA
		if(ev && ev.mouseover) tieneEvent = 1;
	}
	if (nombreEvento == 'animate') { // Evento utilizado para mover por cierta cantidad de segundos un elemento dentro de la pagina
		if(ev && ev.animate) tieneEvent = 1;
	}
	if (nombreEvento == 'datatables') { // Evento para tablas dinámicas
		if(ev && ev.datatables) tieneEvent = 1;
	}
	if (nombreEvento == 'dialog') { // Evento para levantar popUps
		if(ev && ev.dialog) tieneEvent = 1;
	}
	if (nombreEvento == 'validate') { // Evento para validar campos
		if(ev && ev.validate) tieneEvent = 1;
	}
}*/