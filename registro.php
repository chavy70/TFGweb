<!DOCTYPE html>
<html lang="">
	<head>
	 	<!-- Required meta tags always come first -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Registrate!</title>
		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

		<!-- Capcha -->
		<script src="js/capcha/jquery.plugin.js" type="text/javascript"></script>
		<script src="js/capcha/jquery.realperson.js" type="text/javascript"></script>
		<link rel="stylesheet/less" href="js/capcha/jquery.realperson.css" type="text/css">
		
		<!-- Bootstrap CSS -->
		<link rel="stylesheet/less" href="js/bootstrap.min.css" type="text/css">
		<link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
		<style>
			label { display: inline-block; width: 20%; }
			.realperson-challenge { display: inline-block }
		</style>
		<script type="text/javascript">
			$(document).ready(function () {
				alert('Hola '+$('.text-xs-center').text());
			});
		</script>
	</head>
	<body>
		<form action="http://yourserver/realPerson.php" method="post">
	<p><label>Other fields:</label><input type="text" id="field"></p>
	<p><label>Please enter the letters displayed:</label>
		<input type="text" id="defaultReal" name="defaultReal"></p>
	<p style="clear: both;"><label>&nbsp;</label><input type="submit" value="Submit"></p>
</form>
		

	</body>
</html>
100.000 gs
el de papa nomas