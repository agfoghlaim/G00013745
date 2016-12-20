

<?php
include'includes/start-session.php'; 
$page_title = 'Address Confirmation'; 
include'overall/overall_header.php';

include 'includes/welcome-banner.php';
require('core/mysqli_connect.php');
if(isset($_POST['street']) &&($_POST['county']) && ($_POST['town']) && ($_POST['country'])){
	// echo $_POST['street']."<br>";
 //    echo $_POST['town']."<br>";
 //    echo $_POST['county']."<br>";
 //    echo $_POST['country']."<br>";
  
  $street =$_POST['street'];
  $town =$_POST['town'];
  $county =$_POST['county'];
  $country =$_POST['country'];



  	if(isset($_SESSION["username"])){
  		$theUser = $_SESSION["username"];

  		

  		$address = "UPDATE users
					SET street='$street', town='$town', county='$county', country='$country'
					WHERE username='$theUser'";

  	

		$confirmAddress = @mysqli_query($dbc, $address);

		if($confirmAddress){
		//echo '<p class="text-center">Congratulations ' , $theUser , ', we have your address .</p><br>';
	echo '<div class="container"><div class="col-md-6 col-md-offset-3">
	   
	<div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
                  
                </div>
              </div>';
    // echo '<p><small>you can change this later</small></p>';
		echo '<p class="text-center">Thank You ' , $theUser , '.</p><p class="text-center">Your order will be shipped to: </p>';
		echo '<p class="text-center">'.$_POST['street']."</p>";
    echo '<p class="text-center">'.$_POST['town']."</p>";
    echo '<p class="text-center">'.$_POST['county']."</p>";
    echo '<p class="text-center">'.$_POST['country']."</p>";
    echo '<p class="text-center"><a href="address.php"> <button class="btn btn-lg btn-primary" >Edit Address</button></a></p>';
    echo '<p class="text-center"><a href="checkout.php"> <button class="btn btn-lg btn-primary" >Pay Now</button></a></p></div></div>';
		}else{
		echo '<p class="text-center">Sorry ' ,$theUser , ', there was an error processing your order</p>';
		}





	}else{
		echo 'please login to complete transaction';
	}

  // echo $street;
  // echo $theUser;

  //require('core/mysqli_connect.php');

		

	
    
}


include 'overall/overall_footer.php'; 
?>
 