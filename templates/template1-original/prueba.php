<!DOCTYPE HTML>
<html>
<head>
   	<meta charset="UTF-8">
   	<title>Mover elementos de una lista con jQuery</title>
   	<script src="https://googledrive.com/host/0BygD_wcLS3rmSENDOURWVEZSZW8/jquery.js"></script>
    <script type="text/javascript" src="https://googledrive.com/host/0BygD_wcLS3rmSENDOURWVEZSZW8/jqueryui.js"></script>
   	<style type="text/css">
		ul{
		    list-style:none;
		}
		ul li{
		     border:1px solid grey;
		     width:200px;
		     height:30px;
		}
	</style>
   	<script type="text/javascript">
		var x = $(document);
		x.ready(inicio);
		function inicio(){
		    var x = $("ul");
		    x.sortable();
		}
	</script>
</head>
<body>
   <ul>
	   <li>Elemento 1</li>
	   <li>Elemento 2</li>
	   <li>Elemento 3</li>
	   <li>Elemento 4</li>
	   <li>Elemento 5</li>
	</ul>
</body>
</html>