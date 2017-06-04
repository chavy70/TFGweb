/**
  * Inicia el código jQuery después de que el DOM esté ya cargado
  * Aquie esta toda la funcionalidad de la herramienta
  *
 **/
 //Variables globales
 var elmentoSeleccionado = '';
$(document).ready(function () {
	
	//Obtiene el nombre del elemento seleccionado
	$(this).click(function(event){
		//Elimino la clase que indica que esta seleccionado algun elemento del documento
		$('.seleccionado').removeClass('seleccionado');
		//Elimino el boton de eliminado de elemento anteriormente seleccionado
		$('.eliminarElemento').remove();
		elmentoSeleccionado = event.target.tagName.toLowerCase();
		//Agregao la clase seleccionado que indica mediante un borde que ha sido seleccionado
		event.target.classList.add("seleccionado");
		$('.seleccionado').append("<span class='glyphicon glyphicon-remove eliminarElemento' aria-hidden='true'></span>");
	});

	//Eliminar un elemento HTML de la pagina
	//Se usa esta nomenglatura de llamado a evento porque el boton eliminado fue agregado a la pagina mediante append
	$(document).on('click', '.eliminarElemento', function(e) {
		$('.seleccionado').remove();
	});
});
