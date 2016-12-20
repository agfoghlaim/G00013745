<?php 
session_start(); // start the session
	//On loading the page, check if session has a value
	if(isset($_SESSION["username"])){
		// echo '<div class="container"><div class="row status"><p>Welcome ' . $_SESSION["username"]. '<p></div></div>';
		//$theUserName = $_SESSION["username"];
		// $_SESSION['username'] = $username;
		// header("Location: shop.php?id=$username");
            //die();
	// }else{
	// 	echo '<div class="container"><div class="row status"><p><a href="login.php">Login</p></a></div></div>';
	}


// $_SESSION['username'] = $username;
//             header("Location: index.php?id=$username");
//             die();

 ?>