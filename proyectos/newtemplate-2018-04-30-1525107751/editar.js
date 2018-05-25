//Inicializo en 0 los valores de los id de los elementos
var idH1 = 0;
var idH2 = 0;
var idH3 = 0;
var idH4 = 0;
var idH5 = 0;
var idH6 = 0;
var idP = 0;

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
        	//Según sea el elemento seleccionado, aqui se asigna el codigo de dicho elemento y se agrega a la página con su respectivo id
    		switch(idOrigen) {
			    case 'h1':
			    	idH1++;
			        //ui.item.replaceWith("<h1 class='editable' id='id1' onclick='document.execCommand(\"selectAll\",false,null)'>Inserte texto H1</h1>");
			        ui.item.replaceWith("<h1 class='editable' id='h1-"+idH1+"'>Inserte texto H1</h1>");
			        break;
			    case 'h2':
			    	idH2++;
			        ui.item.replaceWith("<h2 class='editable' id='h2-"+idH2+"' contenteditable='true'>Inserte texto H2</h2>");
			        break;
			    case 'h3':
			    	idH3++;
			        ui.item.replaceWith("<h3 class='editable' id='h3-"+idH3+"'>Inserte texto H3</h3>");
			        break;
			    case 'h4':
			    	idH4++;
			        ui.item.replaceWith("<h4 class='editable' id='h4-"+idH4+"' contenteditable='true'>Inserte texto H4</h4>");
			        break;
			    case 'h5':
			    	idH5++;
			        ui.item.replaceWith("<h5 class='editable' id='h5-"+idH5+"' contenteditable='true'>Inserte texto H5</h5>");
			        break;
			    case 'h6':
			    	idH6++;
			        ui.item.replaceWith("<h6 class='editable' id='h6-"+idH6+"' contenteditable='true'>Inserte texto H6</h6>");
			        break;
			    /*case 'div':
			        ui.item.replaceWith("<div class='editable' id='div' contenteditable='true'>Nuevo div</div>");
			        break;*/
			    case 'p':
			    	idP++;
			        ui.item.replaceWith("<p class='editable' id='p-"+idP+"' contenteditable='true'>Nuevo p</p>");
			        break;
			    case 'hr':
			    	idP++;
			        ui.item.replaceWith("<hr />");
			        break;
			    case 'ol':
			    	idP++;
			        ui.item.replaceWith("<ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>");
			        break;
			    case 'ul':
			    	idP++;
			        ui.item.replaceWith("<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>");
			        break;
			    case 'blockquote':
			    	idP++;
			        ui.item.replaceWith("<blockquote cite=\"#\">Lorem ipsum</blockquote>");
			        break;
			    case 'sup':
			    	idP++;
			        ui.item.replaceWith("<sup>Lorem ipsum</sup>");
			        break;
			    case 'sub':
			    	idP++;
			        ui.item.replaceWith("<sub>Lorem ipsum</sub>");
			        break;
			    case 'i':
			    	idP++;
			        ui.item.replaceWith("<i>Lorem ipsum</i>");
			        break;
			    case 'u':
			    	idP++;
			        ui.item.replaceWith("<u>Lorem ipsum</u>");
			        break;
			    case 'a':
			    	idP++;
			        ui.item.replaceWith("<a>Lorem ipsum</a>");
			        break;
			    case 'strong':
			    	idP++;
			        ui.item.replaceWith("<strong>Lorem ipsum</strong>");
			        break;
			    case 'strong':
			    	idP++;
			        ui.item.replaceWith("<strong>Lorem ipsum</strong>");
			        break;
			    case 'img':
			    	idP++;
			        ui.item.replaceWith("<img src=\"#\">Lorem ipsum</img>");
			        break;
			    case 'map':
			    	idP++;
			        ui.item.replaceWith("<map name=\"name"+idP+"\">Lorem ipsum</map>");
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
	/*$(document).on("dblclick",".draggable-box",function(event){//Fuciona con doble click
		$("[contenteditable]",this).focus();
		$('#'+event.target.id).attr('contenteditable','true');
		$("h1.editable, h2.editable, h3.editable, h4.editable, h5.editable, h6.editable, div.editable").removeAttr("contentEditable");//agregar todos los elementos
		$('#'+event.target.id).attr('contenteditable','true');//esto no funca
		//Agrego un evento onclick que afecta solo al id seleccionado actualmente, esto permite seleccionar todo el texto con doble click
		$('#'+event.target.id).click(document.execCommand('selectAll',false,null));
		idElemento = event.target.id;
	})*/

	$(document).on("click",".draggable-box",function(event){//Fuciona con doble click
	//$(document).on("dblclick",".draggable-box",function(event){//Fuciona con doble click
		$("[contenteditable]",this).focus();
		$('#'+event.target.id).attr('contenteditable','true');
		$("h1, h2, h3, h4, h5, h6, div").removeClass("seleccionado");//Sacar todas las clases select antes de asignar el nuevo elemento seleccionado
		$("h1.editable, h2.editable, h3.editable, h4.editable, h5.editable, h6.editable, div.editable").removeAttr("contentEditable");//agregar todos los elementos
		$('#'+event.target.id).attr('contenteditable','true');//esto no funca
		$('#'+event.target.id).addClass("seleccionado");
		//alert('holaaa '+event.target.id)
		//Agrego un evento onclick que afecta solo al id seleccionado actualmente, esto permite seleccionar todo el texto con doble click
		//$('#'+event.target.id).click(document.execCommand('selectAll',false,null));
		idElemento = event.target.id;
	})

	$('#'+idElemento).click(document.execCommand('selectAll',false,null));
 }