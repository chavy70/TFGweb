<!-- Menu Top -->
<?php
	session_start();
	$user = $_SESSION['usuario'];
	$idUser =  $_SESSION['idUsuario'];
?>

<!-- Llamadas jQuery -->
<script>
    $(document).ready(function () {
        //Menu User
        $('.dropdown-trigger').dropdown();
    });
</script>

<div class="nav-wrapper row container">
	<div class="right hide-on-med-and-down red-text text-lighten-3 barra-top-estado">
		<!-- Dropdown Trigger -->
		<a class='dropdown-trigger btn red lighten-2' href='#' data-target='dropdown1'> Hola <label name="lbIdUser" id="lbIdUser"  value="<?php echo @$idUser; ?>"> <?php echo $user; ?></label>! </a>

		<!-- Dropdown Structure -->
		<ul id='dropdown1' class='dropdown-content'>
            <li><a href="#!" class="red-text text-lighten-2">Perfil</a></li>
            <li><a href="#!" class="red-text text-lighten-2">Mis proyectos</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#!" onclick="logout();" class="red-text text-lighten-2">Salir</a></li>
		</ul>
	</div>
<!-- Fin Menu Top -->

 <!-- Menu Principal -->
 <a href="http://ajapoweb.com/" class="brand-logo">
                <img src="images/logo-completo.png"> </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down menu-top">
                <li>
                    <a href="#acedrcaDe" data-ancla="acedrcaDe">Acerca de</a>
                </li>
                <li>
                    <a href="#caract" data-ancla="caract">Caracteristicas</a>
                </li>
                <li>
                    <a href="#galeria" data-ancla="galeria">Galeria</a>
                </li>
                <li>
                    <a href="#reg-modal" class="modal-trigger" data-ancla="registro">Registro</a>
                </li>
            </ul>
        </div>
        <ul class="sidenav menu-top" id="mobile-demo">
            <li>
                <a  href="#acedrcaDe" data-ancla="acedrcaDe">Acerca de</a>
            </li>
            <li>
                <a href="#caract" data-ancla="caract">Caracteristicas</a>
            </li>
            <li>
                <a href="#galeria" data-ancla="galeria">Galeria</a>
            </li>
            <li>
                <a href="#reg-modal" class="modal-trigger">Registro</a>
            </li>
        </ul>