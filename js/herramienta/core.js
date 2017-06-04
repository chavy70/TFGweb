/**
  * Inicia el código jQuery después de que el DOM esté ya cargado
  * Aquie esta toda la funcionalidad de la herramienta
  *
 **/
 //Variables globales
 var elmentoSeleccionado = '';
$(document).ready(function () {
	//moverElementos(); //Llama a la funcion que mueve los elementos en la pagina
	$('.dropdown-toggle, .menu-icon').sortable("cancel");

	//Arrastrar, soltar y editar
	/*$('.dest').sortable({
	    revert: true,
	});
	$('.draggable-box').draggable({
	    connectToSortable: '.dest',
	    helper: 'clone',
	    revertDuration: 0
	});
	$(document).on("click",".draggable-box",function(){
	    $("[contenteditable]",this).focus()
	})*/
	//funciona hasta aca

	$('.container').sortable({//aqui dentro se sueltan los elementos
	    revert: true,
	});
	$('.draggable-box').draggable({
	    connectToSortable: '.container',
	    helper: 'clone',
	    revertDuration: 0
	});

	$(document).on("click",".draggable-box",function(){
	    $("[contenteditable]",this).focus()
	})



	
	//FUNCIONA!!!---------------------------------------------------------------------------
	$(this).bind('click', function(event) {
		if (event.button == 2) {
			/*elmentoSeleccionado = event.target.tagName.toLowerCase();
			event.target.classList.add("moverDestino");
			$('.seleccionado').detach().appendTo('.moverDestino');*/
		} else {
			$('.seleccionado').removeClass('seleccionado');
			//Elimino el boton de eliminado de elemento anteriormente seleccionado
			$('.eliminarElemento').remove();
			$('.moverElemento').remove();
			elmentoSeleccionado = event.target.tagName.toLowerCase();
			//Agregao la clase seleccionado que indica mediante un borde que ha sido seleccionado
			event.target.classList.add("seleccionado");
			$('.seleccionado').append("<span class='glyphicon glyphicon-remove eliminarElemento' aria-hidden='true'></span>");
			$('.seleccionado').append("<span class='glyphicon glyphicon-move moverElemento' aria-hidden='true'></span>");
		}
	});

	$(this).bind('dblclick', function(event) {
		elmentoSeleccionado = event.target.tagName.toLowerCase();
		alert('doble click '+elmentoSeleccionado)
		estaticoElemento(elmentoSeleccionado);
		$(elmentoSeleccionado).attr('contenteditable','true');
	});

	//Marca sobre que elemento esta actualmente el mouse
	$(document).on('mouseover', this, function(e) {
		$('.segunda-seleccion').removeClass('segunda-seleccion');		
		elmentoSeleccionado = e.target.tagName.toLowerCase();
		e.target.classList.add("segunda-seleccion");
	});//fin mover elemento

	//Eliminar un elemento HTML de la pagina
	//Se usa esta nomenglatura de llamado a evento porque el boton eliminado fue agregado a la pagina mediante append
	$(document).on('click', '.eliminarElemento', function(e) {
		$('.seleccionado').remove();
	});

	//Mover un elemento HTML de la pagina
	//Se usa esta nomenglatura de llamado a evento porque el boton mover fue agregado a la pagina mediante append
	/*$(document).on('click', '.moverElemento', function(e) {
		//$('.seleccionado').removeClass('movimiento');
		$('.seleccionado').addClass('movimiento');
		//$('.seleccionado').sortable();
		$(".seleccionado").sortable({
			group: 'container'
		});

	});*/

	//FIN FUNCIONA!!!------------------------------------------------------------------------
});

/**
 ** Permite mover los elementos dentro de la pagina
 **/
function moverElementos(){
	$("body, section, div,button,ul, li, ol, form, article").sortable({
	          connectWith: "body, section, div,button,ul, li, ol, form, article",
	          start: function (event, ui) {
	                  ui.item.toggleClass("highlight");
	          },
	          stop: function (event, ui) {
	                  ui.item.toggleClass("highlight");
	          }
	  });
	  $("body, section, div,button,ul, li, ol, form, article").disableSelection();
}

/**
 ** Deshabilita la opcion de mover un elemento que se pase por parametro
 **/
function estaticoElemento(elemento){
	$("body, section, div,button,ul, li, ol, form, article").sortable({
	          connectWith: "body, section, div,button,ul, li, ol, form, article",
	          start: function (event, ui) {
	                  ui.item.toggleClass("highlight");
	          },
	          stop: function (event, ui) {
	                  ui.item.toggleClass("highlight");
	          },
	          cancel: "body, section, div,button,ul, li, ol, form, article"
	  });
	  $("body, section, div,button,ul, li, ol, form, article").disableSelection();
}



/* //ordenar
function inicio(){
    var x = $("ul");
    x.sortable();
}
*/

/*
$("div").mouseup(function(){
    $(this).after("Mouse button released.");
});
*/

/*$('.seleccionado').draggable();
		$('.seleccionado').sortable();*/

		

		/*$('.seleccionado').draggable({
		    helper: 'clone',
		    appendTo: '#contentpane',
		    cursor: 'move'
		});
		$('.seleccionado').droppable();*/
//appendTo


/*$( " body, .seleccionado div, h1, p, a" ).sortable({
		  //appendTo: document.body
		  containment: "parent",
		  cursor: "move",
		  helper: "clone"//,
		  //items: "> div"
});*/

/*
//$(document).on('mouseup', '.moverElemento', function(e) {//$('.moverElemento').mouseup(function(){
	$(document).on('dblclick', this, function(e) {
		
		alert('hola');
		elmentoSeleccionado = e.target.tagName.toLowerCase();
		e.target.classList.add("moverDestino");
		alert(elmentoSeleccionado)
		$('.seleccionado').detach().appendTo('.moverDestino');
		//$('#mueveme').detach().appendTo('.moverDestino');
	});//fin mover elemento
*/