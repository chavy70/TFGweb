<!-- PopUp Modal -->
<!-- https://inspirationalpixels.com/tutorials/custom-popup-modal -->
<a class="btn abrePopUp" data-popup-open="popup-1" href="#">Abrir Login/Reg</a>
<!-- Login y Registro -->
<!-- https://bootsnipp.com/snippets/80gpb -->

<div class="popup" data-popup="popup-1">
	
	<div class="popup-inner">
		<div class="container">
		    	<div class="row">
					<div class="col-md-6">
						<div class="panel panel-login">
							
							<div id='mensajeError' class="bg-danger mensaje"> Ocurrio un error en el proceso! </div>
							<div id='mensaje' class="bg-success mensaje">Su usuario ha sido registrado!</div>




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
										<form id="formLogin" method="post" role="form" style="display: block;">
											<div class="form-group">
												<input type="text" name="userLog" id="userLog" tabindex="1" class="form-control camposForm" placeholder="Usuario" value="">
											</div>
											<div class="form-group">
												<input type="password" name="passLog" id="passLog" tabindex="2" class="form-control camposForm" placeholder="Contraseña">
											</div>
											<div style="display:none;" class="form-group text-center">
												<input type="checkbox" tabindex="3" class="" name="remember" id="remember">
												<label for="remember"> Recordarme</label>
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-sm-6 col-sm-offset-3">
														
<input type="submit" value="Iniciar sesión" name="login" id="btnLogin" class="form-control btn btn-login" onclick="accion='login';">

													</div>
												</div>
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-lg-12">
														<div class="text-center">
															<label id="lbErrorLog" class="errorLog">Usuario y/o contrase&ntilde;a incorrectos</label>
														</div>
													</div>
												</div>
											</div>
										</form>
										<form id="register-form" method="post" role="form" style="display: none;">
											

											<div class="form-group">
												<input type="text" name="tbUserReg" id="tbUserReg" tabindex="1" class="form-control camposForm" placeholder="Usuario" value="">
											</div>
											<div class="form-group">
												<input type="email" name="tbEmail" id="tbEmail" tabindex="1" class="form-control camposForm" placeholder="Correo electronico" value="">
											</div>
											<div class="form-group">
												<input type="text" name="tbNombre" id="tbNombre" tabindex="1" class="form-control camposForm" placeholder="Nombre" value="">
											</div>
											<div class="form-group">
												<input type="text" name="tbFechaNac" id="tbFechaNac" tabindex="1" class="form-control camposForm" placeholder="Fecha de Nacimiento" value="">
											</div>
											<div class="form-group">
												<input type="password" name="tbPassReg" id="tbPassReg" tabindex="2" class="form-control camposForm" placeholder="Contraseña">
											</div>
											<div class="form-group">
												<input type="password" name="tbConfirmPass" id="tbConfirmPass" tabindex="2" class="form-control camposForm" placeholder="Confirmar contraseña">
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-sm-6 col-sm-offset-3">
						
														<div class="botonera">
												            <input type="submit" value="Crear cuenta" name="guardar" id="btnGuardar" onclick="accion='guardar';" tabindex="4" class="form-control btn btn-register">
												        </div>

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
