<?php 
include'includes/start-session.php'; 
if (isset($_POST['productName'])){
	$productName = $_POST['productName'];
	

	require('core/mysqli_connect.php');

		

	$rr = $_SESSION["username"];
		
	$confirmationNo = rand();
			
	$query = "INSERT into orders(product, user_id, cust_confirm) 
			  VALUES ('$productName', 
			  (SELECT user_id 
			  FROM users 
			  WHERE username = '$rr'),
			'$confirmationNo')";

	$confirm = @mysqli_query($dbc, $query);

	if($confirm){
		echo '<p>Congratulations ' , $rr , ', your order for ' , $productName ,  ' has been processed.<br>Your Confirmation Number for this item is ' , $confirmationNo , '.</p><br>';
	}else{
		echo '<p>Sorry ' ,$rr , ', there was an error processing your order</p>';
	}
	
}

?>