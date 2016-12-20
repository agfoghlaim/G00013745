<?php 
$page_title = 'Confirmation'; 
include'overall/overall_header.php'; 
include'includes/start-session.php';
 
      ?>























<div class="container" id="page">
   
     
       <div id="the-data"></div>
</div>


<?php include 'overall/overall_footer-checkout-confirm.php'; ?>











<!-- 
// $page_title = 'Confirmation'; 
// include'overall/overall_header.php'; 
// require('core/mysqli_connect.php');
// echo '1 require OK';
// $prod=$_POST['product']; 
// if(!empty($prod)){
// $q = "INSERT INTO ORDERS(product) VALUEs ('$prod')";
// echo '2 q OK';
// $r = @mysqli_query ($dbc, $q);

//   if ($r) {
//     echo '3 r OK';
//     echo '<h1>Thank you!</h1>
//     <p>You are now registered. After the next lab exercise you will actually be able to log in!</p><p><br /></p>';  
    
//   } else{
//      echo '<h1>bad!</h1>
//     <p>You are now registered. After the next lab exercise you will actually be able to log in!</p><p><br /></p>'; 
//   }


// mysqli_close($dbc);

//   }
// <div class="container" id="page">
   
//       <p>Confirmed</p>
//       <p id="order-data"><p>
// </div>


//  include 'overall/overall_footer-checkout-confirm.php';  -->