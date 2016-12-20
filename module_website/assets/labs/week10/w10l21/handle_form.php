<?php

if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["comments"])){
	echo $_POST["name"] . $_POST["email"] . $_POST["comments"] ;
}

if(isset($_POST["interests"])){
	echo $_POST["interests"];
}


 ?>