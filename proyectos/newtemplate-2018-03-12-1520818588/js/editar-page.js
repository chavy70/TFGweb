/**
 ** Editar la pagina
 **/
//var jQ = jQuery.noConflict();
var anchoDispositivo = 1950
/*Document ready de la pagina*/	
$( document ).ready(function() {
	//Obtengo el ancho de la pagina
	anchoDispositivo = 1950//$(window).width();
	ocultarTodo();
	// Drop and drag --------------------------------------------------------------------------------------------------
	$(document).on("mouseup",".soltarEn",function(event){
	//$(".soltarEn").mouseup(function(){
		//alert('Holaaa')
		soltarEn = $(this).attr("id")
		alert('soltarEn '+soltarEn)
		$("#"+soltarEn).droppable({
			accept: ".arrastrar",
			tolerance: 'pointer',
			greedy: true,
			hoverClass: 'highlight',
			drop: function(ev, ui) {
				alert('entra')
				$(ui.draggable).clone(true).detach().css({
					position: 'relative',
					top: 'auto',
					left: 'auto'
				//}).appendTo(this).replaceWith( "<h1 id='h1_2'>Texto H1</h1>" );
				}).appendTo(this).replaceWith(htmlSoltar);
				//Codigo para agregar  clase
				//$( this ).addClass( "holaaa" ).find( "#target1" ).html( "Dropped!" );
			}
		});
	});
	//Se van marcando sobre que panel se encuentra el mouse
	/*$(".soltarEn").mouseover(function() {
		$("#"+$(this).attr("id")).css("");
	});*/

	//Arrastra el elemento seleccionado y lo suelta
	$(".arrastrar").draggable({
		//connectToSortable: ".social-msl-group-list",
		revert: "invalid",
		helper: function(){ 
			//elementoActual
			var htmlSecundario = "";
			switch (elementoActual) {
                case 'h1':
                    htmlSecundario = "<h1 class='textoSecundario'>Elemento H1</h1>";
                    htmlSoltar = "<h1 class='elementHTML'>Lorem ipsum</h1>";
                    break;
                case 'h2':
                    htmlSecundario = "<h2 class='textoSecundario'>Elemento H2</h2>";
                    htmlSoltar = "<h2 class='elementHTML'>Lorem ipsum</h2>";
                    break;
                case 'h3':
                	htmlSecundario = "<h3 class='textoSecundario'>Elemento H3</h3>";
                	htmlSoltar = "<h3 class='elementHTML'>Lorem ipsum</h3>";
                    break;
                case 'h4':
                	htmlSecundario = "<h4 class='textoSecundario'>Elemento H4</h4>";
                	htmlSoltar = "<h4 class='elementHTML'>Lorem ipsum</h4>";
                    break;
                case 'h5':
                	htmlSecundario = "<h5 class='textoSecundario'>Elemento H5</h5>";
                	htmlSoltar = "<h5 class='elementHTML'>Lorem ipsum</h5>";
                    break;
                case 'h6':
                	htmlSecundario = "<h6 class='textoSecundario'>Elemento H6</h6>";
                	htmlSoltar = "<h6 class='elementHTML'>Lorem ipsum</h6>";
                    break;
                case 'boton':
                	htmlSecundario = "<a href='#' class='btn btn-primary textoSecundario' role='button'>Button</a>";
                	htmlSoltar = "<a href='#' class='btn btn-primary elementHTML' role='button'>Button</a>";
                    break;
                case 'nav':
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
					htmlSoltar = "<nav class='navbar navbar-default elementHTML'><div class='container-fluid elementHTML'><div class='navbar-header elementHTML'><button type='button' "+
					"class='navbar-toggle collapsed elementHTML' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>"+
					"<span class='sr-only elementHTML'>Toggle navigation</span><span class='icon-bar elementHTML'></span><span class='icon-bar elementHTML'>"+
					"</span><span class='icon-bar elementHTML'></span></button><a class='navbar-brand elementHTML' href='#'>Empresa</a></div>"+
					"<div class='collapse navbar-collapse elementHTML' id='bs-example-navbar-collapse-1'>"+
					"<ul class='nav navbar-nav navbar-right elementHTML'><li class='active elementHTML'><a href='#'>Link 1<span "+
					"class='sr-only elementHTML'>(current)</span></a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link 2</a></li>"+
					"<li class='dropdown elementHTML'><a href='#' class='dropdown-toggle elementHTML' data-toggle='dropdown' role='button' "+
					"aria-haspopup='true' aria-expanded='false'> SubMenu <span class='caret'></span></a>"+
					"<ul class='dropdown-menu elementHTML'><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 1</a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 2"+
					"</a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 3</a></li><li role='separator' class='divider elementHTML'></li>"+
					"<li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 4</a></li><li role='separator' class='divider elementHTML'></li><li class='elementHTML'>"+
					"<a class='elementHTML' href='#'>Link Sub 5</a></li></ul></li></ul></div></div></nav>";
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
					htmlSoltar = "<nav class='navbar navbar-default elementHTML'><div class='container-fluid elementHTML'><div class='navbar-header elementHTML'><button type='button' "+
					"class='navbar-toggle collapsed elementHTML' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>"+
					"<span class='sr-only elementHTML'>Toggle navigation</span><span class='icon-bar elementHTML'></span><span class='icon-bar elementHTML'>"+
					"</span><span class='icon-bar elementHTML'></span></button><a class='navbar-brand elementHTML' href='#'>Empresa</a></div>"+
					"<div class='collapse navbar-collapse elementHTML' id='bs-example-navbar-collapse-1'>"+
					"<ul class='nav navbar-nav elementHTML'><li class='active elementHTML'><a href='#'>Link 1<span "+
					"class='sr-only elementHTML'>(current)</span></a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link 2</a></li>"+
					"<li class='dropdown elementHTML'><a href='#' class='dropdown-toggle elementHTML' data-toggle='dropdown' role='button' "+
					"aria-haspopup='true' aria-expanded='false'> SubMenu <span class='caret'></span></a>"+
					"<ul class='dropdown-menu elementHTML'><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 1</a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 2"+
					"</a></li><li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 3</a></li><li role='separator' class='divider elementHTML'></li>"+
					"<li class='elementHTML'><a class='elementHTML' href='#'>Link Sub 4</a></li><li role='separator' class='divider elementHTML'></li><li class='elementHTML'>"+
					"<a class='elementHTML' href='#'>Link Sub 5</a></li></ul></li></ul></div></div></nav>";
                    break;
                case 'section':
                	htmlSecundario = "<section class='sectionSelect textoSecundario'> </section>";
                	htmlSoltar = "<section class='sectionSelect elementHTML'> </section>";
                    break;
                case 'article':
                	htmlSecundario = "<article class='textoSecundario'><h1> Titulo del Articulo </h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing" +
					"elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p></section>";
                	htmlSoltar = "<article id='art' class='soltarEn elementHTML'><h1 class='elementHTML'> Titulo del Articulo </h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing" +
					"elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p></section>";
                    break;
                case 'aside':
                	htmlSecundario = "<aside class='textoSecundario'><h4 class'elementHTML'>Titulo Aside</h4><p class='elementHTML'>Lorem ipsum dolor "+
					"sit amet, consectetur adipiscing</p></aside>";
                	htmlSoltar = "<aside class='asideDer elementHTML'><h4 class='elementHTML'>Titulo Aside</h4><p class='elementHTML'>Lorem ipsum dolor "+
					"sit amet, consectetur adipiscing</p></aside>";
                    break;
                case 'header':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<header class='headerSelect textoSecundario'> Titulo Header </header>";
                	htmlSoltar = "<header class='headerSelect elementHTML'> Titulo Header </header>";
                    break;
                case 'hgroup':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<hgroup class='headerSelect textoSecundario'> Selecciona las h1-h6 antes de arrastrar </hgroup>";
                	htmlSoltar = "<hgroup class='headerSelect elementHTML'> Selecciona las h1-h6 antes de arrastrar </hgroup>";
                    break;    
                case 'footer':
                	// Izquierda
                	htmlSecundario = "<footer class='textoSecundario'> Titulo Footer </footer>";
                	htmlSoltar = "<footer class='elementHTML'> Titulo Footer </footer>";
                	// Centrado
                	htmlSecundario = "<footer class='text-center textoSecundario'> Titulo Footer </footer>";
                	htmlSoltar = "<footer class='text-center elementHTML'> Titulo Footer </footer>";
                	// Derecha
                	htmlSecundario = "<footer class='text-right textoSecundario'> Titulo Footer </footer>";
                	htmlSoltar = "<footer class='text-right elementHTML'> Titulo Footer </footer>";                	
                    break;
                case 'div':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<div class='textoSecundario'> div </div>";
                	htmlSoltar = "<div class='elementHTML'> div </div>";
                    break; 
                case 'form':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<form class='textoSecundario' role='form elementHTML'><div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_email_1'>Email</label>"+
					"<input type='email' class='form-control elementHTML' id='ejemplo_email_1' placeholder='Introduce tu email'></div>"+
					"<div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_password_1'>Contraseña</label>"+
					"<input type='password' class='form-control elementHTML' id='ejemplo_password_1' placeholder='Contraseña'></div>"+
					"<div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_archivo_1'>Adjuntar un archivo</label>"+
					"<input class='elementHTML' type='file' id='ejemplo_archivo_1'><p class='help-block elementHTML'>Ejemplo de texto de ayuda.</p></div>"+
					"<div class='checkbox elementHTML'><label><input type='checkbox elementHTML'> Activa esta casilla"+
					"</label></div><button type='submit' class='btn btn-default elementHTML'>Enviar</button></form>";
                	htmlSoltar = "<form role='form elementHTML'><div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_email_1'>Email</label>"+
					"<input type='email' class='form-control elementHTML' id='ejemplo_email_1' placeholder='Introduce tu email'></div>"+
					"<div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_password_1'>Contraseña</label>"+
					"<input type='password' class='form-control elementHTML' id='ejemplo_password_1' placeholder='Contraseña'></div>"+
					"<div class='form-group elementHTML'><label class='elementHTML' for='ejemplo_archivo_1'>Adjuntar un archivo</label>"+
					"<input class='elementHTML' type='file' id='ejemplo_archivo_1'><p class='help-block elementHTML'>Ejemplo de texto de ayuda.</p></div>"+
					"<div class='checkbox elementHTML'><label><input type='checkbox elementHTML'> Activa esta casilla"+
					"</label></div><button type='submit' class='btn btn-default elementHTML'>Enviar</button></form>";
                    break; 
                case 'hr':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<hr class='textoSecundario' />";
                	htmlSoltar = "<hr />";
                    break; 
                case 'i':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<i class='textoSecundario' > Prueba cursiva</i>";
                	htmlSoltar = "<i> Prueba cursiva</i>";
                    break; 
                case 'strong':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<strong class='textoSecundario' > Prueba negrita</strong>";
                	htmlSoltar = "<strong> Prueba negrita</strong>";
                    break;
                case 'a':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<a href='#' class='textoSecundario' > Link de prueba</a>";
                	htmlSoltar = "<a href='#'> Link de prueba</a>";
                    break; 
                case 'img':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<img src='img/thumbl_1.jpg' alt='imagen prueba' class='textoSecundario' />";
                	htmlSoltar = "<img src='img/thumbl_1.jpg' alt='imagen prueba'/>";
                    break;
                case 'u':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<u class='textoSecundario'>Subrayado</u>";
                	htmlSoltar = "<u>Subrayado</u>";
                    break;
                case 'sub':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<sub class='textoSecundario'>Subscript</sub>";
                	htmlSoltar = "<sub>Subscript</sub>";
                    break;
                case 'sup':
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<sup class='textoSecundario'>Superscript</sup>";
                	htmlSoltar = "<sup>Superscript</sup>";
                    break;
                case 'legend': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<legend class='textoSecundario'>legend</legend>";
                	htmlSoltar = "<legend>legend</legend>";
                    break;
                case 'fieldset': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<fieldset class='textoSecundario'>fieldset</fieldset>";
                	htmlSoltar = "<fieldset>fieldset</fieldset>";
                    break;
                case 'blockquote': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<blockquote class='textoSecundario' cite='#'>blockquote</blockquote>";
                	htmlSoltar = "<blockquote cite='#'>blockquote</blockquote>";
                    break;
                case 'select': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<select class='textoSecundario'><option value='Opcion1'>Volvo</option><option value='Opcion2'>Volvo</option><option value='Opcion3'>Volvo</option></select>";
                	htmlSoltar = "<select><option value='Opcion1'>Volvo</option><option value='Opcion2'>Volvo</option><option value='Opcion3'>Volvo</option></select>";
                    break;
                case 'optgroup': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<select class='textoSecundario'><optgroup label='Titulo 1'><option value='opcion1'>Opcion 1</option><option value='opcion3'>Opcion 2</option></optgroup>"+
                	"<optgroup label='Titulo 2'><option value='opcion3'>Opcion 1</option><option value='opcion4'>Opcion 2</option></optgroup></select>";
                	htmlSoltar = "<select><optgroup label='Titulo 1'><option value='opcion1'>Opcion 1</option><option value='opcion3'>Opcion 2</option></optgroup>"+
                	"<optgroup label='Titulo 2'><option value='opcion3'>Opcion 1</option><option value='opcion4'>Opcion 2</option></optgroup></select>";
                    break;
                case 'input': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<input class='textoSecundario' type='text' name='fname' value='Texto'>";
                	htmlSoltar = "<input type='text' name='fname' value='Texto'>";
                    break;
                case 'textarea': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<textarea class='textoSecundario' rows='4' cols='50'>Textarea</textarea>";
                	htmlSoltar = "<textarea rows='4' cols='50'>Textarea</textarea>";
                    break;
                case 'address': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<address>Escrito por <a href='mailto:webmaster@example.com'>Juan Perez</a>.<br>"+ 
					"Visitanos:<br>Example.com<br>Casilla 564, Departamento<br>PARAGUAY</address>";
                	htmlSoltar = "<address>Escrito por <a href='mailto:webmaster@example.com'>Juan Perez</a>.<br>"+ 
					"Visitanos:<br>Example.com<br>Casilla 564, Departamento<br>PARAGUAY</address>";
				case 'map': // Dentro de Form
                	//Cuando únicamente tenemos un titulo dentro de un articulo o sección no debemos utilizar ni header ni <hgroup>.
                	htmlSecundario = "<img src='planets.gif' width='145' height='126' alt='Planets' usemap='#planetmap'>"+
					"<map name='planetmap'><area shape='rect' coords='0,0,82,126' alt='Sun' href='sun.htm'>"+
					"<area shape='circle' coords='90,58,3' alt='Mercury' href='mercur.htm'>"+
					"<area shape='circle' coords='124,58,8' alt='Venus' href='venus.htm'></map>";
                	htmlSoltar = "<img src='planets.gif' width='145' height='126' alt='Planets' usemap='#planetmap'>"+
					"<map name='planetmap'><area shape='rect' coords='0,0,82,126' alt='Sun' href='sun.htm'>"+
					"<area shape='circle' coords='90,58,3' alt='Mercury' href='mercur.htm'>"+
					"<area shape='circle' coords='124,58,8' alt='Venus' href='venus.htm'></map>";
                    break;
                default:
                    htmlSecundario = "";
            }
			return $(htmlSecundario); 
		}
		//helper: "clone"
	});


	// Fin Drop and drag --------------------------------------------------------------------------------------------------
	// Resize
    //$('.rotator').rotateit(); // Funciona
    //$(document).on("rotateit",".rotator",function(event){}); // Este no
	$('.dest').sortable({
	    revert: true,
	});
	// Obtener id -----------------------------------------------------------------------------------
	/*$(document).on("mouseup","h1",function(event){
		elementoActual =  $(this).attr('id');
		alert(elementoActual);
	});*/
	//Cuando se presiona el click para comenzar arrastre
	$(document).on("mousedown",".arrastrar",function(event){
		elementoActual =  $(this).attr('id');
		$('#text').text('Se selecciono elemento '+elementoActual);
	});
	/*$('h1').click(function(){
		alert( $(this).attr('id') );
		$( "li.item-ii" ).find( rotate ).css( "background-color", "red" );
	});
	$('nav').click(function(){
		alert( $(this).attr('id') );
	});*/

	// Evento onmouseover para ver las opciones que tiene cada elemento pasando el mouse sobre el elemento
	$(".elementHTML").mouseover(function() {
		//$("#log").append( "<div>Handler for .mouseover() called.</div>" );
		alert('1')
		elementoIdMouse =  $(this).attr('id');
		alert('2')
		elementoNomMouse =  $(this).prop("tagName"); //.tagName();  //$(this).attr('id');
		alert('3 id '+elementoIdMouse+' tag '+elementoNomMouse);
	});
});

// Vista previa en 2 dispositivos
function verEnDispositivo(device){
	if (anchoDispositivo > 803) {
		alert('op2');
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

// Oculta las barras de herramienta y de estado cuando se activa la vista previa de dispositivos
function ocultarTodo(){
	$('#standalone').css('display','none');
	if (anchoDispositivo > 803) {
		$('.deviceSmartphone1').css('display','none');
		$('.deviceTablet1').css('display','none');
	}
}

/*
 * Guarda los cambios del archivo editado actualmente
 */
function guardarCambios(codigoEditado){
	var cabecera = "<!DOCTYPE html>\n"+"<html lang=\"es\">\n"
	var cssDoc = "<head> <link rel=\"stylesheet\" href=\"css/bootstrap.css\" > </head>"
	var footer = "\n<body><body>"
	var codigoHTML =  cabecera+cssDoc+codigoEditado+footer
	codigoHTML = codigoHTML.toString().replace(/\t/g, '');//.split('\r\n'); // Limpio el texto borrarndo todos los tabs
	//codigoHTML = cabecera + footer
	alert(codigoHTML)
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

/*
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






// ESTO ES UNA PRUEBA BORRAR ----------------------------------------------------------------------------------------------
/*
function init() {
  $('#makeMeDraggable').draggable({});
  $('#makeMeDroppable').droppable( {drop: handleDropEvent} );
}

function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  var newq = makeNewPosition();
  ui.draggable.position({ of: $(this), top: newq[0], left: newq[1] });
  idH1 = 1;
  ui.draggable.replaceWith("<h1 class='editable' contextmenu='hnMenu' id='h1-"+idH1+"'>Inserte texto H1</h1>");
  alert('hola')
}

function makeNewPosition(){
    
    var h = $(window).height()- 50;
    var w = $(window).width()- 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
}*/

// FIN ESTO ES UNA PRUEBA BORRAR ------------------------------------------------------------------------------------------







// Este funciona a medias
// Codigo para drag and drop -----------------------------------------------------------------------------------------------
/*
 * Funcion encargada de arreastral/soltar/editar elementos dentro de la pagina
 */
/*function DraggEdit(){
 	//alert('2')
 	var idOrigen;
 	var idElemento;
 	//Contenedor destino donde serán soltadas los elementos
 	$('.dest').sortable({ // ESTE FUNCIONA
 	//$(document).on("sortable",".dest",function(event){
 	//$(document).on("click",".draggable-box",function(event){
	    revert: true,
	    //http://jsfiddle.net/yeyene/7fEQs/8/
	    receive: function(event, ui) {
            var html = [];
            //Obtendo el id de item del menu seleccionado, que indica que elemento se selecciono
            var widget = $(this).attr("id");
            idOrigen = ui.sender.attr("id")
            classOrigen = ui.sender.attr("class")
            //alert('2 idOrigen '+idOrigen+' classOrigen '+classOrigen)
        },
        stop: function(event, ui) {
        	//alert('1 idOrigen ....'+idOrigen+'... classOrigen '+classOrigen)
        	//alert('3 idOrigen '+idOrigen)
        	//Según sea el elemento seleccionado, aqui se asigna el codigo de dicho elemento y se agrega a la página con su respectivo id
    		switch(idOrigen) {
			    case 'h1':
					alert("holaa")
			    	idH1++;			    	
			        //ui.item.replaceWith("<h1 class='editable' id='id1' onclick='document.execCommand(\"selectAll\",false,null)'>Inserte texto H1</h1>");
			        ui.item.replaceWith("<h1 class='editable' contextmenu='hnMenu' id='h1-"+idH1+"'>Inserte texto H1</h1>");
			        break;
			    case 'h2':
			    	idH2++;
			        ui.item.replaceWith("<h2 class='editable' contextmenu='hnMenu' id='h2-"+idH2+"' contenteditable='true'>Inserte texto H2</h2>");
			        break;
			    case 'h3':
			    	idH3++;
			        ui.item.replaceWith("<h3 class='editable' contextmenu='hnMenu' id='h3-"+idH3+"'>Inserte texto H3</h3>");
			        break;
			    case 'h4':
			    	idH4++;
			        ui.item.replaceWith("<h4 class='editable' contextmenu='hnMenu' id='h4-"+idH4+"' contenteditable='true'>Inserte texto H4</h4>");
			        break;
			    case 'h5':
			    	idH5++;
			        ui.item.replaceWith("<h5 class='editable' contextmenu='hnMenu' id='h5-"+idH5+"' contenteditable='true'>Inserte texto H5</h5>");
			        break;
			    case 'h6':
			    	idH6++;
			        ui.item.replaceWith("<h6 class='editable' contextmenu='hnMenu' id='h6-"+idH6+"' contenteditable='true'>Inserte texto H6</h6>");
			        break;
			    //case 'div':
			        //ui.item.replaceWith("<div class='editable' id='div' contenteditable='true'>Nuevo div</div>");
			        //break;
			    case 'p':
			    	idP++;
			        ui.item.replaceWith("<p class='editable' contextmenu='pMenu' id='p-"+idP+"' contenteditable='true'>Nuevo p</p>");
			        break;
			    case 'hr':
			    	idP++;
			        ui.item.replaceWith("<hr />");
			        break;
			    case 'ol':
			    	idP++;
			        ui.item.replaceWith("<div id='divol-"+idP+"'><ol id='ol-"+idP+"' contextmenu='olMenu'><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol></div>");
			        break;
			    case 'ul':
			    	idP++;
			        ui.item.replaceWith("<div id='divul-"+idP+"'><ul id='ul-"+idP+"' contextmenu='ulMenu'><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></div>");
			        break;
			    case 'blockquote':
			    	idP++;
			        ui.item.replaceWith("<div id='block-"+idP+"'><blockquote contextmenu='blockMenu' cite=\"#\">Lorem ipsum</blockquote></div>");
			        break;
			    case 'sup':
			    	idP++;
			        ui.item.replaceWith("<sup contextmenu='supMenu' id='sup-"+idP+"' >Lorem ipsum</sup>");
			        break;
			    case 'sub':
			    	idP++;
			        ui.item.replaceWith("<sub contextmenu='subMenu' id='sub-"+idP+"' >Lorem ipsum</sub>");
			        break;
			    case 'i':
			    	idP++;
			        ui.item.replaceWith("<i id='i-"+idP+"' >Lorem ipsum</i>");
			        break;
			    case 'u':
			    	idP++;
			        ui.item.replaceWith("<u id='u-"+idP+"' >Lorem ipsum</u>");
			        break;
			    case 'a':
			    	idP++;
			        ui.item.replaceWith("<a contextmenu='aMenu' id='a-"+idP+"' >Lorem ipsum</a>");
			        break;
			    case 'strong':
			    	idP++;
			        ui.item.replaceWith("<strong id='strong-"+idP+"' >Lorem ipsum</strong>");
			        break;
			    case 'img':
			    	idP++;
			        ui.item.replaceWith("<img contextmenu='imgMenu' id='img-"+idP+"'  src=\"#\">Lorem ipsum</img>");
			        break;
			    case 'map':
			    	idP++;
			        ui.item.replaceWith("<map contextmenu='mapMenu' id='map-"+idP+"'  name=\"name"+idP+"\">Lorem ipsum</map>");
			        break;
			}
			idOrigen = '';//Seteo el valor de idOrigen
    	}
	});

	//Permite que los elementos se puedan arrastrar a la página
	$('.draggable-box').draggable({
	    connectToSortable: '.dest',
	    helper: 'clone',
	    revertDuration: 0
	});

	//FUNCIONA
	$(document).on("mousedown",".draggable-box",function(event){
	    switch (event.which) {
	        case 1: // Boton izquierdo
	            //alert('Left mouse button pressed');
	            $("[contenteditable]",this).focus();
				$('#'+event.target.id).attr('contenteditable','true'); 
				$("h1, h2, h3, h4, h5, h6, div, p, ol li, ul li, blockquote, sup, sub,i,u,a,strong, img, map").removeClass("seleccionado");//Sacar todas las clases select antes de asignar el nuevo elemento seleccionado
				$("h1.editable, h2.editable, h3.editable, h4.editable, h5.editable, h6.editable, div.editable, p.editable, ol.editable, ul.editable, blockquote.editable, sup.editable, sub.editable,i.editable,u.editable,a.editable,strong.editable, img.editable, map.editable").removeAttr("contentEditable");//agregar todos los elementos
				$('#'+event.target.id).attr('contenteditable','true');//esto no funca
				$('#'+event.target.id).addClass("seleccionado");
				//alert('holaaa '+event.target.id)
				//Agrego un evento onclick que afecta solo al id seleccionado actualmente, esto permite seleccionar todo el texto con doble click
				$('#'+event.target.id).click(document.execCommand('selectAll',false,null));
				idElemento = event.target.id;
				//document.getElementById(idElemento).click(document.execCommand('selectAll',false,null));
	            break;
	        case 2: // Boton del medio

	            break;
	        case 3: // Boton Derecho
	        	idElementoSeleccionado = event.target.id; // Elemento seleccionado
	            break;
	        default:
	            alert('You have a strange mouse');

	    }
	});

 }
 // FIN Codigo para drag and drop -----------------------------------------------------------------------------------------------
 */