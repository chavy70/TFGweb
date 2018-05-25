		<!-- Barra de Estado -->
<?php
	session_start();
	if (!isset($_SESSION['idUsuario'])) {
		$_SESSION['usuario'] = '';
		$_SESSION['idUsuario'] = 0;
	  	/*header('Location: login.php'); 
		exit();*/
	} /*else {
	  	$user = $_SESSION['usuario'];
		$idUser =  $_SESSION['idUsuario'];
	}*/
	$user = $_SESSION['usuario'];
	$idUser =  $_SESSION['idUsuario'];
?>	
<div class="row barraEstado">
	<div class="col-md-3 barra-est-izq">
		<img src="../../img/logo-white.png">
	</div>
	<div class="col-md-9 barra-est-der">
		<nav class="navbar navbar-default">
	  		<div class="container-fluid">
			    <!-- Collect the nav links, forms, and other content for toggling -->
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<div class="nav navbar-nav">
						<br>
						<br>
						<!-- Descargado de : http://dev.vast.com/jquery-popup-overlay/ -->
    					<!-- popUp con la vista previa -->
						<!-- Botonera para vista previa en dispositivos -->
						<div class="btn-group vista_previa" role="group" aria-label="...">
							<button onclick="verEnDispositivo('s');" type="button" class="initialism standalone_open" >
								<img src="../../img/Devices/smartphone-preview.png">
							</button>
							<button onclick="verEnDispositivo('t');" type="button" class="initialism standalone_open" >
								<img src="../../img/Devices/tablet-preview.png">
							</button>
						</div>
					</div>
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#">
							<img src="../../img/avatar.png">
						</a></li>
						<li class="dropdown">
							
							<label value="<?php echo @$idUser; ?>" id='lbIdUser' name='lbIdUser'></label>
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?php echo @$user; ?><span class="caret"></span></a>
							<br>
							<ul class="dropdown-menu">
								<li><a href="#">Perfil</a></li>
								<li><a onclick="guardarCambios($('.dest').html());" >Guardar</a></li>
								<li><a onclick="generaRar()">Convertir a RAR</a></li>
								<li><a href="#">Eliminar</a></li>
								<li role="separator" class="divider"></li>
								<li><a href="#" onclick="logout();">Salir</a></li>
							</ul>
						</li>
					</ul>
			    </div><!-- /.navbar-collapse -->
	  		</div><!-- /.container-fluid -->
		</nav>
	</div>
</div>
<div class="clear"></div>
<!-- INICIO -->
