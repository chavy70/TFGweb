<!-- Menu Top -->
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

<div id='barraMenu' class="row navbar navbar-inverse menu-logueo">
	<div class="col-lg-6">
	</div>
	<div class="col-lg-6">
		<div class="top-content">
			<div class="bienvenida text-right"><br>
				Hola <label name="lbIdUser" id="lbIdUser" style="display:none;"  value="<?php echo @$idUser; ?>"> <?php echo $user; ?></label><b><?php $user; ?></b> | <a class="salirA" onclick="logout();">Salir      .</a>
			</div>
		</div>
	</div>
</div>

<!-- Fin Menu Top -->