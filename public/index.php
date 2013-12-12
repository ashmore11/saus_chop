<?php 
	$BASE_PATH = str_replace( '/index.php', '', $_SERVER[ 'PHP_SELF'] );
?><!doctype html>
<html>
	<head>
		<title>Saus &amp; Chop</title>
		<script type="text/javascript" src="<?php echo $BASE_PATH; ?>/js/app.js"></script>
	</head>
	<body>
		<script>
			window.env = {
				BASE_PATH : "<?php echo $BASE_PATH; ?>"
			};
		</script>
	</body>

</html>