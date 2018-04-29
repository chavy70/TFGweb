<!-- Menu Top -->
		<?php
		session_start();
		if (!isset($_SESSION['idUsuario'])) {
		  	header('Location: login.php'); 
  			exit();
		} else {
		  	$user = $_SESSION['usuario']; // 'chavy';
			$idUser =  $_SESSION['idUsuario']; // 3;
		}
		
		?>

		<div class="row navbar navbar-inverse menu-logueo">
			<div class="col-lg-6">
			</div>
			<div class="col-lg-6">
				<div class="top-content">
					<div class="bienvenida text-right"><br>
						Hola <font color="#D25F67"><label name="lbIdUser" id="lbIdUser" style="display:none;"  value="<?php echo @$user; ?>"> <?php echo $user; ?></label><b><?php echo $_SESSION['usuario']; ?></b></font> | <a class="salirA" onclick="logout();">Salir      .</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Fin Menu Top -->