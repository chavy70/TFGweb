//OBSERVACIONES
// barra_estado.php
//Error: Invalid dimensions for plot, width = null, height = null

//Inicializo en 0 los valores de los id de los elementos
var idH1 = 0;
var idH2 = 0;
var idH3 = 0;
var idH4 = 0;
var idH5 = 0;
var idH6 = 0;
var idP = 0;
var jQueryPopup = jQuery.noConflict();
jQueryPopup(document).ready(function () {
	//Llama a la funcion que se encarga de la edicion/dragg/drop de elementos dentro de la página
	DraggEdit();
	//jQueryPopup("#confirmEliminar").dialog();
	editarElemento(1, 'Hola');
});


//----------------------------INICIOOOOOOOOOOOOOOOOOOOOOOOOOOO
//keyup prevented the user from deleting the bullet (by adding one back right after delete), but didn't add in li's on empty ul's, thus keydown added to check
/*jQueryPopup('ul').on('keyup keydown', function() {
  var jQueryPopupthis = jQueryPopup(this);
    if (! jQueryPopupthis.html()) {
        var jQueryPopupli = jQueryPopup('&lt;li&gt;&lt;/li&gt;');
        var sel = window.getSelection();
       var range = sel.getRangeAt(0);
        range.collapse(false);
        range.insertNode(jQueryPopupli.get(0));
        range = range.cloneRange();
        range.selectNodeContents(jQueryPopupli.get(0));
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);

    } else {
        //are there any tags that AREN'T LIs?
        //this should only occur on a paste
        var jQueryPopupnonLI = jQueryPopupthis.find(':not(li, br)');

        if (jQueryPopupnonLI.length) {
            jQueryPopupthis.contents().replaceWith(function() {
    //we create a fake div, add the text, then get the html in order to strip out html code. we then clean up a bit by replacing nbsp's with real spaces
return '&lt;li&gt;' + jQueryPopup('&lt;div /&gt;').text(jQueryPopup(this).text()).html().replace(/&nbsp;/g, ' ') + '</li>';
            });
            //we could make this better by putting the caret at the end of the last LI, or something similar
        }                   
    }
});*/
//----------------------------FINNNNNNNNNNNNNNNNNNNNN


//http://jsfiddle.net/jakecigar/pwppb78n/1/
/*
 * Funcion encargada de arreastral/soltar/editar elementos dentro de la pagina
 */
 function DraggEdit(){
 	//alert('2')
 	var idOrigen;
 	var idElemento;
 	//Contenedor destino donde serán soltadas los elementos
 	jQueryPopup('.dest').sortable({
	    revert: true,
	    //http://jsfiddle.net/yeyene/7fEQs/8/
	    receive: function(event, ui) {
            var html = [];
            //Obtendo el id de item del menu seleccionado, que indica que elemento se selecciono
            var widget = jQueryPopup(this).attr("id");
            idOrigen = ui.sender.attr("id")
        },
        stop: function(event, ui) {
        	//alert('3')
        	//Según sea el elemento seleccionado, aqui se asigna el codigo de dicho elemento y se agrega a la página con su respectivo id
    		switch(idOrigen) {
			    case 'h1':
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
			    /*case 'div':
			        ui.item.replaceWith("<div class='editable' id='div' contenteditable='true'>Nuevo div</div>");
			        break;*/
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
	jQueryPopup('.draggable-box').draggable({
	    connectToSortable: '.dest',
	    helper: 'clone',
	    revertDuration: 0
	});

	/*
	 * Funcion que edita el contenido de los elementos HTML5
	 */
	/*jQueryPopup(document).on("dblclick",".draggable-box",function(event){//Fuciona con doble click
		jQueryPopup("[contenteditable]",this).focus();
		jQueryPopup('#'+event.target.id).attr('contenteditable','true');
		jQueryPopup("h1.editable, h2.editable, h3.editable, h4.editable, h5.editable, h6.editable, div.editable").removeAttr("contentEditable");//agregar todos los elementos
		jQueryPopup('#'+event.target.id).attr('contenteditable','true');//esto no funca
		//Agrego un evento onclick que afecta solo al id seleccionado actualmente, esto permite seleccionar todo el texto con doble click
		jQueryPopup('#'+event.target.id).click(document.execCommand('selectAll',false,null));
		idElemento = event.target.id;
	})*/


//jQueryPopup('div').mousedown(function(event) {
jQueryPopup(document).on("mousedown",".draggable-box",function(event){
    switch (event.which) {
        case 1:
            //alert('Left mouse button pressed');
            jQueryPopup("[contenteditable]",this).focus();
			jQueryPopup('#'+event.target.id).attr('contenteditable','true'); 
			jQueryPopup("h1, h2, h3, h4, h5, h6, div, p, ol li, ul li, blockquote, sup, sub,i,u,a,strong, img, map").removeClass("seleccionado");//Sacar todas las clases select antes de asignar el nuevo elemento seleccionado
			jQueryPopup("h1.editable, h2.editable, h3.editable, h4.editable, h5.editable, h6.editable, div.editable, p.editable, ol.editable, ul.editable, blockquote.editable, sup.editable, sub.editable,i.editable,u.editable,a.editable,strong.editable, img.editable, map.editable").removeAttr("contentEditable");//agregar todos los elementos
			jQueryPopup('#'+event.target.id).attr('contenteditable','true');//esto no funca
			/*
			jQueryPopup('#'+event.target.id+' li').attr('contenteditable','true');//esto no funca
			jQueryPopup('#'+event.target.id+' li').attr('contenteditable','true');//esto no funca*/

			jQueryPopup('#'+event.target.id).addClass("seleccionado");
			//alert('holaaa '+event.target.id)
			//Agrego un evento onclick que afecta solo al id seleccionado actualmente, esto permite seleccionar todo el texto con doble click
			jQueryPopup('#'+event.target.id).click(document.execCommand('selectAll',false,null));

			idElemento = event.target.id;

			//document.getElementById(idElemento).click(document.execCommand('selectAll',false,null));
            break;
        case 2:
            alert('Middle mouse button pressed');
            break;
        case 3:
            //alert('Right mouse button pressed');
            break;
        default:
            alert('You have a strange mouse');
    }
});

	/*jQueryPopup(document).on("click",".draggable-box",function(event){//Fuciona con doble click
	//jQueryPopup(document).on("dblclick",".draggable-box",function(event){//Fuciona con doble click
		

		jQueryPopup("[contenteditable]",this).focus();
		jQueryPopup('#'+event.target.id).attr('contenteditable','true'); 
		jQueryPopup("h1, h2, h3, h4, h5, h6, div, p, ol li, ul li, blockquote, sup, sub,i,u,a,strong, img, map").removeClass("seleccionado");//Sacar todas las clases select antes de asignar el nuevo elemento seleccionado
		jQueryPopup("h1.editable, h2.editable, h3.editable, h4.editable, h5.editable, h6.editable, div.editable, p.editable, ol.editable, ul.editable, blockquote.editable, sup.editable, sub.editable,i.editable,u.editable,a.editable,strong.editable, img.editable, map.editable").removeAttr("contentEditable");//agregar todos los elementos
		jQueryPopup('#'+event.target.id).attr('contenteditable','true');//esto no funca
		
		jQueryPopup('#'+event.target.id+' li').attr('contenteditable','true');//esto no funca
		jQueryPopup('#'+event.target.id+' li').attr('contenteditable','true');//esto no funca

		jQueryPopup('#'+event.target.id).addClass("seleccionado");
		//alert('holaaa '+event.target.id)
		//Agrego un evento onclick que afecta solo al id seleccionado actualmente, esto permite seleccionar todo el texto con doble click
		jQueryPopup('#'+event.target.id).click(document.execCommand('selectAll',false,null));
		idElemento = event.target.id;
	})*/

	//jQueryPopup('#'+idElemento).click(document.execCommand('selectAll',false,null));
 }

 /*
  * Función que edita contenido del elemento
  */
  function editarElemento(idElemento, titulo){
  	//jQueryPopup("#confirmEliminar").dialog();

  	jQueryPopup("div[id*=propiedades]").dialog({
        bgiframe: true,
        resizable: false,
        modal: true,
        hide: true,
        title: titulo,
        width: "80%",
        //height:"500px",
        overlay: {
            backgroundColor: '#000',
            opacity: 0.5
        },
        buttons: {
            /*Aceptar: function () {
                $(this).dialog('close');
            }*/
        },
        close: function () {
            jQueryPopup(this).dialog('destroy');
        }
    });
    return false;

  }
/*
$( "#dialog" ).dialog({
  dialogClass: "no-close",
  buttons: [
    {
      text: "OK",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
  ]
});
*/
