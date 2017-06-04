<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Template 1</title>
 
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="../../css/styles.css" rel="stylesheet">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <style>
      .seleccionado { border: 2px solid #F48024; position: relative; }
      .eliminarElemento {color: red; font-size: 16px;position: absolute;right: 5px;top: 5px;cursor: pointer; }
      .moverElemento { font-size: 16px;position: absolute;right: 22px;top: 5px;cursor: pointer; }
      .segunda-seleccion {border: dotted 1px #286090;}

      .draggable-box {
          border:1px solid #808080;
          padding:5px;
      }
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
      

    </style>

<?php
    /*include_once('simple_html_dom.php');
    // Create DOM from URL or file
    $html = file_get_html('https://www.betfair.com/sport/football');

    // Find all images  
    //foreach($html->find('img') as $element) 
    foreach($html->find('li') as $element) 
    echo $element->src . '<br>';

    // Find all links 
    foreach($html->find('a') as $element) 
    echo $element->href . '<br>';*/

?>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body id="cuerpo" class="no-skin">
 <!-- Se agregan la barra de herramienta y de estado -->
    <div class="barra-estado-pagina">
    <?php
      include('../../barra/barra_estado.php');
    ?>
    </div>
    <div class="barra-herramienta-pagina">
    <?php
      include('../../barra/barra_herramienta.php');
    ?>
    </div>


<!-- FIN - Se agregan la barra de herramienta y de estado -->

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<div class="contenedor-principal">



<div class="draggable-box">
    <div class="editable" contenteditable="true">Div</div>
</div>
<div class="dest"></div>






 <section class="container">
        <div class="row">
            <header>
                <nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a contenteditable="true" class="navbar-brand" href="#">Logo</a>
    </div>
 
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a contenteditable="true" href="#">Inicio</a></li>
        <li><a contenteditable="true" href="#">Nosotros</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Servicios <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a contenteditable="true" href="#">Desarrollos</a></li>
            <li><a contenteditable="true" href="#">Diseño</a></li>
            <li><a contenteditable="true" href="#">Publicidad</a></li>
            <li class="divider"></li>
            <li><a contenteditable="true" href="#">Consultoria</a></li>
            <li class="divider"></li>
            <li><a contenteditable="true" href="#">Otros</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Buscador">
        </div>
        <button contenteditable="true" type="submit" class="btn btn-default">Buscar</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a contenteditable="true" href="#">Usuario</a></li>
        <li class="dropdown">
          <a contenteditable="true" href="#" class="dropdown-toggle" data-toggle="dropdown">Mi cuenta <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a contenteditable="true" href="#">Action</a></li>
            <li><a contenteditable="true" href="#">Another action</a></li>
            <li><a contenteditable="true" href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a contenteditable="true" href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
            </header>
        </div>
    </section>





    <div class="container">
           <div class="row">
               <div class="jumbotron">
                  <h1 contenteditable="true" class="contenteditable">
                    
                    Articulo destacado de la semana</h1>
                  <p contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolorem ad officiis nihil delectus quidem animi rerum, molestias sint natus ducimus quod, unde molestiae dolores laboriosam error facilis odio doloremque.</p>
                  <p><a contenteditable="true" class="btn btn-primary btn-lg" role="button">Leer mas</a></p>
            </div>
           </div>
       </div>




 <br><br><br><br>


 <div class="container">
           <div class="row">
               <div class="jumbotron">
                  <h1 contenteditable="true" class="contenteditable">
                    
                    Articulo destacado de la semana</h1>
                  <p contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolorem ad officiis nihil delectus quidem animi rerum, molestias sint natus ducimus quod, unde molestiae dolores laboriosam error facilis odio doloremque.</p>
                  <p><a contenteditable="true" class="btn btn-primary btn-lg" role="button">Leer mas</a></p>
            </div>
           </div>
       </div>



  <div class="container1">
    <div class="row1">
      <div class="jumbotron1">
        <h1 contenteditable="true">
        Articulo destacado de la semana</h1>
        <p contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolorem ad officiis nihil delectus quidem animi rerum, molestias sint natus ducimus quod, unde molestiae dolores laboriosam error facilis odio doloremque.</p>
        <p><a contenteditable="true" class="btn btn-primary btn-lg" role="button">Leer mas</a></p>
      </div>
    </div>
  </div>





<div class="container">
	<div class="row">
		<section>        
		    <div class="col-xs-12 col-sm-6 col-md-4">
		        <h2 contenteditable="true" >Titulo del articulo</h2>
		        <figure></figure>
		        <p contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat distinctio illo rerum atque ducimus, laboriosam debitis eum deserunt ab libero quis voluptas, illum, perferendis numquam aut aliquam itaque qui magnam!</p>
		        <a href="" class="btn btn-success">Leer mas</a>
		    </div>       
		</section>
		<section>        
		    <div class="col-xs-12 col-sm-6 col-md-4">
		        <h2 contenteditable="true" >Titulo del articulo</h2>
		        <figure></figure>
		        <p contenteditable="true" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat distinctio illo rerum atque ducimus, laboriosam debitis eum deserunt ab libero quis voluptas, illum, perferendis numquam aut aliquam itaque qui magnam!</p>
		        <a href="" class="btn btn-success">Leer mas</a>
		    </div>       
		</section>
		<section>        
		    <div class="col-xs-12 col-sm-6 col-md-4">
		        <h2 contenteditable="true" >Titulo del articulo</h2>
		        <figure></figure>
		        <p contenteditable="true" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat distinctio illo rerum atque ducimus, laboriosam debitis eum deserunt ab libero quis voluptas, illum, perferendis numquam aut aliquam itaque qui magnam!</p>
		        <a href="" class="btn btn-success">Leer mas</a>
		    </div>       
		</section>
 	</div>
</div>

<div id='DestinationContainerNode'></div>


<footer contenteditable="true" class="text-center">
                Plantilla - AjapoWeb
            
</footer>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Utilizado para sortable y draggable -->
    <script type="text/javascript" src="https://googledrive.com/host/0BygD_wcLS3rmSENDOURWVEZSZW8/jqueryui.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Javascript -->
    <script src="../../js/herramienta/core.js"></script>



</div><!-- Fin contenedor principal -->


  </body>
</html>