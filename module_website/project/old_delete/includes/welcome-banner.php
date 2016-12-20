<?php
if(isset($_SESSION["username"])){
	echo '<div class="container"><div class="row status"><p>Welcome ';
echo $_SESSION["username"];
echo '<p></div></div>';
}else{
		echo '<div class="container"><div class="row status"><p><a href="login.php">Login</p></a></div></div>';
	}
?>