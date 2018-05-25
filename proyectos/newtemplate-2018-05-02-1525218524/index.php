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

		<script language="JavaScript">
			
		</script>
	</head>
	<!-- Cuerpo -->
	<body>




	<!--	
<div class="draggable-box">
    <div class="editable" contenteditable="true">Div</div>
</div>
<div class="destc">
	as
</div>
-->





<?php 
	include("../../barra/barraLoginHerramienta.php");
?> 
		<!-- Barra de herramientas -->

		<div class="row">
		<!-- barraHerramientas colu1 -->
			<div class="col-md-1 barraHerramientas">
				<div class="panel-group" id="accordion">
	            <div class="panel panel-default">

	            </div>
	            <div class="panel panel-default">
	              <div class="panel-heading">
	                <h4 class="panel-title">
	                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><span class="glyphicon glyphicon-file">
	                    </span>T&iacute;tulos</a>
	                </h4>
	              </div>







	              <div id="collapseFour" class="panel-collapse collapse">
	                 <div class="list-group">
						<div class="row">
							<div id="h1" class="col-sm-6 col-md-4 arrastrar">
								H1
							</div>
							<div id="h2" class="col-sm-6 col-md-4 arrastrar">
								H2
							</div>
						</div>
						<div class="row">
							<div id="h3" class="col-sm-6 col-md-4 arrastrar">
								H3
							</div>
							<div id="h4" class="col-sm-6 col-md-4 arrastrar">
								H4
							</div>
						</div>
						<div class="row">
							<div id="h5" class="col-sm-6 col-md-4 arrastrar">
								H5
							</div>
							<div id="h6" class="col-sm-6 col-md-4 arrastrar">
								H6
							</div>
						</div>
						<div class="row">
							<div id="p" class="col-sm-6 col-md-4 arrastrar">
								p
							</div>
							<div id="blockquote" class="col-sm-6 col-md-4 arrastrar">
								blockquote
							</div>
						</div>
						<div class="row">
							<div id="nav" class="col-sm-6 col-md-4 arrastrar">
								nav
							</div>
							<div id="section" class="col-sm-6 col-md-4 arrastrar">
								section
							</div>
						</div>
						<div class="row">
							<div id="article" class="col-sm-6 col-md-4 arrastrar">
								article
							</div>
							<div id="aside" class="col-sm-6 col-md-4 arrastrar">
								aside
							</div>
						</div>
						<div class="row">
							<div id="header" class="col-sm-6 col-md-4 arrastrar">
								header
							</div>
							<div id="hgroup" class="col-sm-6 col-md-4 arrastrar">
								hgroup
							</div>							
						</div>
						<div class="row">
							<div id="footer" class="col-sm-6 col-md-4 arrastrar">
								footer
							</div>
							<div id="div" class="col-sm-6 col-md-4 arrastrar">
								div
							</div>
						</div>
						<div class="row">
							<div id="address" class="col-sm-6 col-md-4 arrastrar">
								address
							</div>
							<div id="form" class="col-sm-6 col-md-4 arrastrar">
								form
							</div>
						</div>
						<div class="row">
							<div id="hr" class="col-sm-6 col-md-4 arrastrar">
								Enter
							</div>
							<div id="i" class="col-sm-6 col-md-4 arrastrar">
								Cursiva
							</div>
						</div>
						<div class="row">
							<div id="strong" class="col-sm-6 col-md-4 arrastrar">
								Negrita
							</div>
							<div id="a" class="col-sm-6 col-md-4 arrastrar">
								Link
							</div>
						</div>
						<div class="row">
							<div id="img" class="col-sm-6 col-md-4 arrastrar">
								img
							</div>
							<div id="u" class="col-sm-6 col-md-4 arrastrar">
								u
							</div>
						</div>
						<div class="row">
							<div id="sup" class="col-sm-6 col-md-4 arrastrar">
								sup
							</div>
							<div id="sub" class="col-sm-6 col-md-4 arrastrar">
								Sub
							</div>
						</div>
						<div class="row">
							<div id="legend" class="col-sm-6 col-md-4 arrastrar">
								legend
							</div>
							<div id="fieldset" class="col-sm-6 col-md-4 arrastrar">
								fieldset
							</div>
						</div>
						<div class="row">
							<div id="select" class="col-sm-6 col-md-4 arrastrar">
								select
							</div>
							<div id="optgroup" class="col-sm-6 col-md-4 arrastrar">
								optgroup
							</div>
						</div>
						<div class="row">
							<div id="input" class="col-sm-6 col-md-4 arrastrar">
								input
							</div>
							<div id="textarea" class="col-sm-6 col-md-4 arrastrar">
								textarea
							</div>
						</div>
						<div class="row">
							<div id="boton" class="col-sm-6 col-md-4 arrastrar">
								Boton
							</div>
							<div id="select" class="col-sm-6 col-md-4 arrastrar">
								select
							</div>
						</div>
						<div class="row">
							<div id="address" class="col-sm-6 col-md-4 arrastrar">
								address
							</div>
							<div id="select" class="col-sm-6 col-md-4 arrastrar">
								select
							</div>
						</div>

						

	                </div> 
	            </div>









	            </div>
	            <div class="panel panel-default">
	              <div class="panel-heading">
	                <h4 class="panel-title">
	                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive"><span class="glyphicon glyphicon-heart">
	                    </span>Tablas</a>
	                </h4>
	              </div>


	              <div id="collapseFive" class="panel-collapse collapse">
	                <div class="list-group">
	                  <a href="#" class="list-group-item">
	                    <h4 class="list-group-item-heading">List group item heading</h4>
	                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
	                  </a>
	                </div>
	                <div class="list-group">
	                  <a href="#" class="list-group-item active">
	                    <h4 class="list-group-item-heading">List group item heading</h4>
	                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
	                  </a>
	                </div>
	                <div class="list-group">
	                  <a href="#" class="list-group-item">
	                    <h4 class="list-group-item-heading">List group item heading</h4>
	                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
	                  </a>
	                </div>
	              </div>


	            </div>
	          </div>

			</div>





		


<!-- FIN -->





















		<!-- ------------------------------------------------- PANEL PRINCIPAL-------------------------------------------------------- -->
		<!-- Panel con los codigos de la pagina -->
		<!-- panel panel-default dest colu2 -->
		<div class="dest col-md-11">



	  		<div class="panel-body">
				<nav id="menuPrincipal" class="navbar navbar-default rotator">
			  		<div class="container-fluid">
					    <div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span class="sr-only elementHTML">Toggle navigation</span>
								<span class="icon-bar elementHTML"></span>
								<span class="icon-bar elementHTML"></span>
								<span class="icon-bar elementHTML"></span>
							</button>
							<a class="navbar-brand" href="#">Brand</a>
					    </div>


					    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav elementHTML">
								<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
								<li><a href="#">Link</a></li>
								<li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
									<ul class="dropdown-menu">
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
							<form class="navbar-form navbar-left">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Search">
								</div>
								<button type="submit" class="btn btn-default">Submit</button>
							</form>
							<ul class="nav navbar-nav navbar-right">
								<li><a href="#">Link</a></li>
								<li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
									<ul class="dropdown-menu">
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
				<div id="div1" class="jumbotron rotator soltarEn ui-droppable">
					<h1 id='h1_1' class="rotator elementHTML">Hello, world!</h1>
					<p>...</p>
					<p><a id="link1" class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
				</div>
				<!-- Cuerpo -->
				<div class="row">
					<div class="col-sm-6 col-md-4">
						<div class="thumbnail">
							<img src="#" alt="...">
							<div class="caption">
								<h3 class="elementHTML">Thumbnail label</h3>
								<p>...</p>
								<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
							</div>
						</div>
					</div>

					<div class="col-sm-6 col-md-4">
						<div class="thumbnail">
							<img src="#" alt="...">
							<div class="caption">
								<h3 class="elementHTML">Thumbnail label</h3>
								<p>...</p>
								<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
							</div>
						</div>
					</div>

					<div class="col-sm-6 col-md-4">
						<div class="thumbnail">
							<img src="#" alt="...">
							<div class="caption">
								<h3 class="elementHTML">Thumbnail label</h3>
								<p>...</p>
								<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
							</div>
						</div>
					</div>	
				</div>

				<div class="row">
					<div class="col-sm-6 col-md-4">
						<div class="list-group">
							<button type="button" class="list-group-item">Cras justo odio</button>
							<button type="button" class="list-group-item">Dapibus ac facilisis in</button>
							<button type="button" class="list-group-item">Morbi leo risus</button>
							<button type="button" class="list-group-item">Porta ac consectetur ac</button>
							<button type="button" class="list-group-item">Vestibulum at eros</button>
						</div>
					</div>

					<div class="col-sm-6 col-md-8">

						<ul class="media-list">
							<li class="media">
								<div class="media-left">
									<a href="#">
									<img class="media-object" src="img/thumbl_1.jpg" alt="Lorem ipsum">
									</a>
								</div>
								<div class="media-body">
									<h4 class="media-heading elementHTML">Media heading</h4>
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
									<h4 class="media-heading elementHTML">Media heading</h4>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
	  		<div class="panel-footer">Powered by AjapoWeb - 2017</div>
		</div>
		<!-- ------------------------------------------------- FIN PANEL PRINCIPAL-------------------------------------------------------- -->
	</div>







	<section class="col-md-10 col-md-offset-1">
	        <!-- Descargado de : http://dev.vast.com/jquery-popup-overlay/ -->
	        <!-- popUp con la vista previa -->
	        <div id="standalone">
	            
	            <!-- Paneles con las vistas previas de los  dispositivos -->
				<div class="devicesPanel">
					<div class="row">
						<div class="col-lg-6">
							<h4>Vista previa en dispositvos</h4>
						</div><!-- /.col-lg-6 -->
						<div class="col-lg-6 text-righ">
							<button class="standalone_close btn btn-default glyphicon glyphicon-remove-circle float-right close"></button>
						</div><!-- /.col-lg-6 -->
					</div><!-- /.row -->
					<div class="deviceSmartphone1">
						<iframe class="device" id="device1" src="index.php" height="780px" width="450px">

						</iframe>
					</div><!-- / deviceSmartphone1 -->
					<div class="deviceTablet1">	
						<iframe class="device" id="device2" src="index.php" height="1210px" width="824px">

						</iframe>
					</div><!-- / deviceTablet1 -->
				</div>
	        </div>
     </section>





	</body>
</html>