<?php 
$page_title = 'Checkout'; 
include'overall/overall_header.php'; 
include'includes/start-session.php';
include 'includes/welcome-banner.php';


?>


<div class="container" id="page">

  <div class="row">
    <h3 class="text-center" id="display-total"></h3>
  </div>

<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h5 class="text-center login-title">Enter card details below to confirm order.</h5>
            <div>
              <form action="checkout.php" method="post" id="checkout-form">
               
                <input type="text" name="checkout" id="validation" value="5105105105105100"  value="<?php if (isset($_POST['checkout'])) echo $_POST['checkout']; ?>" class="form-control" required autofocus/>
                <p id="message"></p>  
                <button class="btn btn-lg btn-primary btn-block confirm" type="button">Confirm</button>
             </form>


            </div>
        </div>
    </div>
</div>

 <div class="container">
        <div class="row">
<div class="text-center" id="the-data"></div>

    
   </div>
   </div>







	


   
 
</div>

<?php include 'overall/overall_footer-checkout-confirm.php'; ?>
