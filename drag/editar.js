$(document).ready(function () {
	//Llama a la funcion que se encarga de la edicion/dragg/drop de elementos dentro de la página
	DraggEdit();	
});

//http://jsfiddle.net/jakecigar/pwppb78n/1/
/*
 * Funcion encargada de arreastral/soltar/editar elementos dentro de la pagina
 */
 function DraggEdit(){
 	var idOrigen;
 	var idElemento;
 	//Contenedor destino donde serán soltadas los elementos
 	$('.dest').sortable({
	    revert: true,
	    //http://jsfiddle.net/yeyene/7fEQs/8/
	    receive: function(event, ui) {
            var html = [];
            //Obtendo el id de item del menu seleccionado, que indica que elemento se selecciono
            var widget = $(this).attr("id");
            idOrigen = ui.sender.attr("id")
        },
        stop: function(event, ui) {
        	//Según sea el elemento seleccionado, aqui se asigna el codigo de dicho elemento y se agrega a la página
    		switch(idOrigen) {
			    case 'h1':
			        //ui.item.replaceWith("<h1 class='editable' id='id1' onclick='document.execCommand(\"selectAll\",false,null)'>Inserte texto H1</h1>");
			        ui.item.replaceWith("<h1 class='editable' id='id1'>Inserte texto H1</h1>");
			        break;
			    case 'h2':
			        ui.item.replaceWith("<h2 class='editable' id='id2' contenteditable='true'>Inserte texto H2</h2>");
			        break;
			    case 'h3':
			        //ui.item.replaceWith("<h3 class='editable' id='id3'contenteditable='true'>Inserte texto H3</h3>");
			        ui.item.replaceWith("<h3 class='editable' id='id3' contenteditable='true'>Inserte texto H3</h3>");
			        break;
			    case 'h4':
			        ui.item.replaceWith("<h4 class='editable' contenteditable='true'>Inserte texto H4</h4>");
			        break;
			    case 'h5':
			        ui.item.replaceWith("<h5 class='editable' contenteditable='true'>Inserte texto H5</h5>");
			        break;
			    case 'h6':
			        ui.item.replaceWith("<h6 class='editable' contenteditable='true'>Inserte texto H6</h6>");
			        break;
			    case 'div':
			        ui.item.replaceWith("<div class='editable' contenteditable='true'>Nuevo div</div>");
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

	/*
	 * Funcion que edita el contenido de los elementos HTML5
	 */
	$(document).on("click",".draggable-box",function(event){//Fucio na con doble click
		$("[contenteditable]",this).focus();
		$('#'+event.target.id).attr('contenteditable','true');
		$("h1, h2, h3").removeAttr("contentEditable");//agregar todos los elementos
		$('#'+event.target.id).attr('contenteditable','true');//esto no funca
		//Agrego un evento onclick que afecta solo al id seleccionado actualmente, esto permite seleccionar todo el texto con doble click
		$('#'+event.target.id).click(document.execCommand('selectAll',false,null));
		idElemento = event.target.id;
	})
 }