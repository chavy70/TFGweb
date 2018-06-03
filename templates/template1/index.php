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
	</head>
	<!-- Cuerpo -->
	<body>
		<?php 
			include("../../barra/barraLoginHerramienta.php");
		?> 
		<!-- Barra de herramientas -->
		<div class="row">
			<?php 
				include("../../barra/barraHerramienta.php");
			?>
			<!-- FIN -->	
			<div>
				<div id="id" class="btn-group configPage elementHTML" role="group" aria-label="...">
					<button type="button" class="btn btn-default"><img src="img/edicion/editar.png" alt="Editar"></button>
					<button type="button" class="btn btn-default"><img src="img/edicion/eliminar.png" alt="Eliminar"></button>
					<button type="button" class="btn btn-default"><img src="img/edicion/mover.png" alt="Mover"></button>
					<button type="button" class="btn btn-default"><img src="img/edicion/configurar.png"></button>
				</div>
			</div>
			<!-- ------------------------------------------------- PANEL PRINCIPAL-------------------------------------------------------- -->
			<!-- Panel con los codigos de la pagina -->
			<!-- panel panel-default dest colu2 -->
			<div class="dest col-md-11 sortable">
				<div class="panel-body elementHTML sortable">
					<nav id="menuPrincipal" class="navbar navbar-default rotator elementHTML sortable">
						<div class="container-fluid sortable">
							<div class="navbar-header sortable">
								<button type="button" class="navbar-toggle collapsed sortable" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
									<span class="sr-only elementHTML">Toggle navigation</span>
									<span class="icon-bar elementHTML"></span>
									<span class="icon-bar elementHTML"></span>
									<span class="icon-bar elementHTML"></span>
								</button>
								<a class="navbar-brand elementHTML sortable" href="#">Brand</a>
							</div>
							<div class="collapse navbar-collapse sortable" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav elementHTML sortable">
									<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
									<li><a href="#">Link</a></li>
									<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
										<ul class="dropdown-menu sortable">
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
								<form class="navbar-form navbar-left elementHTML sortable">
									<div class="form-group elementHTML sortable">
										<input type="text" class="form-control" placeholder="Search">
									</div>
									<button type="submit" class="btn btn-default">Submit</button>
								</form>
								<ul class="nav navbar-nav navbar-right elementHTML sortable">
									<li><a href="#">Link</a></li>
									<li class="dropdown elementHTML sortable">
										<a href="#" class="dropdown-toggle elementHTML sortable" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
										<ul class="dropdown-menu elementHTML sortable">
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
					<div id="div_1" class="jumbotron rotator soltarEn ui-droppable sortable elementHTML">
						<h1 id='h1_1' class="rotator sortable elementHTML">Hello, world!</h1>
						<p class="sortable elementHTML">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat tristique egestas. Integer aliquam diam leo, in aliquet neque luctus at. Praesent sit amet urna tortor. Aliquam eros lorem, fermentum vel justo quis, iaculis dignissim enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec hendrerit dolor non nisl porttitor pretium. Nullam rhoncus accumsan metus nec egestas. Mauris vel pellentesque dolor. Ut venenatis aliquam ex, et faucibus mi efficitur ut. Cras a porta purus, sed luctus velit. Aenean viverra finibus ultricies. Cras id arcu odio.</p>
						<p><a id="link1" class="btn btn-primary btn-lg elementHTML" href="#" role="button">Learn more</a></p>
					</div>
					<div id="div_2" class="jumbotron rotator soltarEn ui-droppable sortable elementHTML">
						<h1 id='h1_2' class="rotator sortable elementHTML">Op, world!</h1>
						<p class="sortable elementHTML">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat tristique egestas. Integer aliquam diam leo, in aliquet neque luctus at. Praesent sit amet urna tortor. Aliquam eros lorem, fermentum vel justo quis, iaculis dignissim enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec hendrerit dolor non nisl porttitor pretium. Nullam rhoncus accumsan metus nec egestas. Mauris vel pellentesque dolor. Ut venenatis aliquam ex, et faucibus mi efficitur ut. Cras a porta purus, sed luctus velit. Aenean viverra finibus ultricies. Cras id arcu odio.</p>
						<p><a id="link1" class="btn btn-primary btn-lg elementHTML" href="#" role="button">Learn more</a></p>
					</div>
					<!-- Cuerpo -->
					<div class="row sortable">
						<div class="col-sm-6 col-md-4 sortable">
							<div class="thumbnail sortable">
								<img src="#" alt="...">
								<div class="caption">
									<h3 class="elementHTML">Thumbnail label</h3>
									<p>...</p>
									<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
								</div>
							</div>
						</div>

						<div class="col-sm-6 col-md-4 sortable">
							<div class="thumbnail sortable">
								<img src="#" alt="...">
								<div class="caption sortable">
									<h3 class="elementHTML">Thumbnail label</h3>
									<p class="elementHTML sortable">...</p>
									<p class="elementHTML sortable"><a href="#" class="btn btn-primary elementHTML" role="button">Button</a> <a href="#" class="btn btn-default elementHTML" role="button">Button</a></p>
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
	</body>
</html>