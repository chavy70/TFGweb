<!DOCTYPE html>
<?php include('./funciones/Funciones.php');?>
<html lang="">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Generador de C&oacute;digo</title>
		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
		<link rel="stylesheet" href="css/jquery.popup.css" type="text/css">

		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
		<script type="text/javascript" src="js/jquery.popup.js"></script>
		<script type="text/javascript" src="js/herramienta/funciones.js"></script>
		<script type="text/javascript">
			$(document).ready(function () {
				//Muestra el PopUp para seleccionar el template
				$(".js__p_start, .js__p_another_start").simplePopup();
				//Abre el popUp
				$('.js__p_start').click();
			});
			window.onbeforeunload = confirmaSalida;
			function confirmaSalida()  
			{   //onbeforeunload="event.returnValue = 'Si cierras la ventana no se guardaran los cambios.'"
			    return "Vas a abandonar esta pagina. Si has hecho algun cambio sin grabar vas a perder todos los datos.";  
			}
		</script>
	</head>
	<body>
		<form id="formGenerador" accept-charset="utf-8"> 
			<!-- http://www.jqueryscript.net/lightbox/Simple-jQuery-Plugin-for-Popup-Window.html -->
			<div class="p_anch"> 
				<!-- Boton abrir popUp -->
				<a href="#" class="js__p_start"></a> Herramienta online 
			</div>
			<div class="p_body js__p_body js__fadeout"></div>
			<div class="popup js__popup js__slide_top"> <a href="#" class="p_close js__p_close" title="Close"></a>
				<div class="p_content">
					
					
					<h1 class="animated fadeInDown">Seleccione una Plantilla</h1>
					<h3>Elija el dise&ntilde;o de la plantilla que prefiera presionando en el boton ubicado debajo de cada imagen </h3>

					<div class="card-group">
					<!-- https://foundation.zurb.com/templates.html -->
						<div class="card templateList tmp1">
							<img class="card-img-top" src="img/templates/template1.jpg" alt="Card image cap">
							<div class="card-block">								
								<button id="btnTempl1" onclick="copiarTemplate('template1');" type="button" class="btn btnTranspRojo">Plantilla 1</button>									
							</div>
						</div>
						<div class="card templateList tmp2">
							<img class="card-img-top" src="img/templates/template2.jpg" alt="Card image cap">
							<div class="card-block">								
								<button id="btnTempl1" onclick="copiarTemplate('template2');" type="button" class="btn btnTranspRojo">Plantilla 2</button>									
							</div>
						</div>
						<div class="card templateList tmp3">
							<img class="card-img-top" src="img/templates/template3.jpg" alt="Card image cap">
							<div class="card-block">								
								<button id="btnTempl1" onclick="copiarTemplate('template3');" type="button" class="btn btnTranspRojo">Plantilla 3</button>									
							</div>
						</div>
					</div>
					<br>
				</div>
			</div>
		</form>
	</body>

	<!-- Google analytics -->
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-36251023-1']);
		_gaq.push(['_trackPageview']);
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</html>