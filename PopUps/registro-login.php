<!-- PopUp Modal -->
<!-- https://inspirationalpixels.com/tutorials/custom-popup-modal -->
<a class="btn" data-popup-open="popup-1" href="#">Open Popup #1</a>
<!-- Login y Registro -->
<!-- https://bootsnipp.com/snippets/80gpb -->

<div class="popup" data-popup="popup-1">
	
	<div class="popup-inner">
		<div class="container">
		    	<div class="row">
					<div class="col-md-6">
						<div class="panel panel-login">
									<div class="panel-heading">
										<div class="row">
											<div class="col-xs-6">
												<a href="#" class="active" id="formLoginLink">Iniciar sesión</a>
											</div>
											<div class="col-xs-6">
												<a href="#" id="formRegLink">Regístrate ahora</a>
											</div>
										</div>
										<hr>
									</div>
							<div class="panel-body">
								<div class="row">
									<div class="col-lg-12">
										<form id="formLogin" action="http://phpoll.com/login/process" method="post" role="form" style="display: block;">
											<div class="form-group">
												<input type="text" name="userLog" id="userLog" tabindex="1" class="form-control" placeholder="Usuario" value="">
											</div>
											<div class="form-group">
												<input type="password" name="passLog" id="passLog" tabindex="2" class="form-control" placeholder="Contraseña">
											</div>
											<div class="form-group text-center">
												<input type="checkbox" tabindex="3" class="" name="remember" id="remember">
												<label for="remember"> Recordarme</label>
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-sm-6 col-sm-offset-3">
														<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Iniciar sesión">
            <input type="submit" value="Iniciar sesión" name="login" id="btnLogin" onclick="accion='login';">


													</div>
												</div>
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-lg-12">
														<div class="text-center">
															<a href="http://phpoll.com/recover" tabindex="5" class="forgot-password">¿Has olvidado tu contraseña?</a>
														</div>
													</div>
												</div>
											</div>
										</form>
										<form id="register-form" action="http://phpoll.com/register/process" method="post" role="form" style="display: none;">
											<div class="form-group">
												<input type="text" name="tbUserReg" id="tbUserReg" tabindex="1" class="form-control" placeholder="Usuario" value="">
											</div>
											<div class="form-group">
												<input type="email" name="tbEmail" id="tbEmail" tabindex="1" class="form-control" placeholder="Correo electronico" value="">
											</div>
											<div class="form-group">
												<input type="text" name="tbNombre" id="tbNombre" tabindex="1" class="form-control" placeholder="Nombre" value="">
											</div>
											<div class="form-group">
												<input type="text" name="tbFechaNac" id="tbFechaNac" tabindex="1" class="form-control" placeholder="Fecha de Nacimiento" value="">
											</div>
											<div class="form-group">
												<input type="password" name="tbPassReg" id="tbPassReg" tabindex="2" class="form-control" placeholder="Contraseña">
											</div>
											<div class="form-group">
												<input type="password" name="tbConfirmPass" id="tbConfirmPass" tabindex="2" class="form-control" placeholder="Confirmar contraseña">
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-sm-6 col-sm-offset-3">
														<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Crear cuenta">
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		<p><a data-popup-close="popup-1" href="#">Close</a></p>
		<a class="popup-close" data-popup-close="popup-1" href="#">x</a>
	</div>
</div>
