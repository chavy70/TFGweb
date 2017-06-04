<!DOCTYPE html>
<html lang="es">
	<head>

		<!-- Bootstrap modificado para la barra -->
		<link href="../css/bootstrap-barra.css" rel="stylesheet">
       



		<!-- Libreria de jQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<!-- Libreria de jQuery utilizado, entre otras cosas, para el dragg/drop/edit -->
		<script src="jquery-ui.min.js"></script>

		<link href="../css/eestilo-barras.css" rel="stylesheet">
		<!-- Llama al codigo que permite editar y arrastrar elementos dentro de la página -->
		<script src="editar.js"></script>
		<style type="text/css">
			/*.draggable-box {
			    border:1px solid #808080;
			    padding:5px;
			}*/
			.editable {
			    max-width:100%;
			    padding:5px;
			    display: inline-block;
			    word-wrap:break-word;
			}
			div.dest {
			    border:1px solid #808080;
			    min-height:300px;
			    padding: 30px 0px;
			}


			.barra-estado-pagina {
			    position: fixed !important;
			    width: 100%;
			    z-index: 10;
			}

			.barra-herramienta-pagina {
			    position: fixed;
			    top: 45px;
			    z-index: 10;
			    color:#C6002E!important;
			}

			.barra-herramienta-pagina a, .barra-herramienta-pagina span{
			    color:#910524!important;
			    background: #fff;
			}
			.scroll-bar {
				background:#F94D72!important; 
			}
			.dest {
			    margin-left: 43px;
			    margin-top: 6px;
			}

		</style>
	</head>
	<body>
		<div class="barra-estado-pagina">
    <?php
      include('../barra/barra_estado.php');
    ?>
    </div>
    <div class="barra-herramienta-pagina">
    <?php
      include('../barra/barra_herramienta.php');
    ?>
    </div>

		<div id="div" class="draggable-box">
			<div>Div</div>
		</div>
		<div id="h1" class="draggable-box">
			<div>H1</div>
		</div>
		<div class="dest draggable-box">


		</div>



	</body>
</html>