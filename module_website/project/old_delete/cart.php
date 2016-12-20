<?php 
$page_title = 'Cart'; 
include'overall/overall_header.php';
include'includes/start-session.php'; 
include 'includes/welcome-banner.php';

?>

<div class="container" ng-controller="ctrl">
	<div class="row">
		<h3 id="display-total"></h3>
	</div>	
	<div class="row">
	<div class="col-12-sm">
		<h4 id="emptyCart">Your cart is empty</h4>
 		<h4 id="emptyLink"><a href="shop.php">Go back to Shop?</a></h4>
 		<div class="table-responsive" id="content"></div>
	</div>
	</div>
	
	<div class="container-fluid">
	<div class="row">
		<div class="col-xs-6 first">
			<p id="shopLink"><a href="shop.php" ><span class="glyphicon glyphicon-arrow-left"></span> Back to shop</a><p>
		</div>
		<div class="col-xs-6 second checkout">
		<p ><a href="checkout.php" >Proceed to checkout <span class="glyphicon glyphicon-arrow-right"></span></a><p>
		</div>
	</div>
	</div>
</div>  	
    



<?php include 'overall/overall_footer.php'; ?>
