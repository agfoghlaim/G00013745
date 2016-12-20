<?php 
$page_title = 'Shop'; 
include'overall/overall_header.php'; 
include'includes/start-session.php';
include 'includes/welcome-banner.php';
//include 'includes/end-session.php';
require ('core/mysqli_connect.php');  
  
    //$usr = $_SESSION["username"];
    //echo $usr;
  //  if(isset($_SESSION["username"])){
  //               $r = $_SESSION["username"];
  //               $q = "SELECT user_id FROM users WHERE (username='$r')";
  //               $s = @mysqli_query($dbc, $q);
  //               //echo $s;
  //               printf("Select returned %d rows.\n", $s->num_rows);
               
          
  //                 }

  // } else{
  //   header( "Location: login.php" );
  //   exit();
  // } 
  
 

?>






<div class="container"  ng-controller="ctrl">

  <div class="container">
   <div class="row" id="smooth">
      <div class="col-sm-2">
         <a href="#angular-shop">
        <img src="img/product2.jpg" alt="" class="icon" data-toggle="tooltip" title="click for details">
          </a>
        <p  class="label text-center">1lt Saucepans</p>
      </div>

      <div class="col-sm-2">
       <a href="#angular-shop2">
        <img src="img/product1.jpg" alt="" class="icon" data-toggle="tooltip" title="click for details">
         </a>
        <p  class="label text-center">2lt Saucepans</p>
      </div>

      <div class="col-sm-2">
        <a href="#angular-shop3">
        <img src="img/product3.jpg" alt="" class="icon" data-toggle="tooltip" title="click for details">
        </a>
        <p  class="label text-center">Heavy Bottomed</p>
        </div>

      <div class="col-sm-2">
         <a href="#angular-shop4">
        <img src="img/product4.jpg" alt="" class="icon" data-toggle="tooltip" title="click for details">
        </a>
        <p  class="label text-center">Mixed Metals</p>
      </div>

      <div class="col-sm-2">
         <a href="#angular-shop5">
        <img src="img/product8.jpg" alt="" class="icon" data-toggle="tooltip" title="click for details">
      </a>
        <p  class="label text-center">Little Green</p>
      </div>

      <div class="col-sm-2">
         
        <h6 id="exp-sale-h6" class="exp" ><strong>Half Price Sale</strong></h6>
        <a href="#angular-shop6">
        <img src="img/product9.jpg" id="exp-sale" alt="" class="icon" data-toggle="tooltip" title="click for details">
      </a>
       <p  class="label text-center">Saucepans on Sale</p>
      </div>
    </div>
  </div>
   
  <div class="container" id="angular-shop" >    
    <div class="row">

      <div class="col-sm-4"  ng-repeat="item in [products[0],products[1], products[2]] track by $index">
        <div class="panel panel-info">
          <div class="panel-heading ">{{item.name}}</div>
          <div class="panel-body"><p class="price">{{item.cost | currency : '€': 2}}</p><img src="{{item.imgUrl}}" class="img-responsive" style="width:100%" alt="{{item.name}}"></div>
          <div class="panel-footer">{{item.desc}}
            <label>
            <p title="remove from cart" ng-click="removeItem(item)" class="item-counter-minus">Remove</p>
          </label>
            <label>
            <p title="add to cart" ng-click="addToCart(item)" class="item-counter">Add to Cart</p>
          </label>
           <!--  <button class="btn btn-primary" ng-click="addToCart(item)">Add to Cart</button> -->
          </div>
        </div>
      </div>
      
    </div>
  </div><br>

  <div class="container" id="angular-shop2" >    
    <div class="row">
      <div class="col-sm-4" ng-repeat="item in [products[3],products[4], products[5]] track by $index">
        <div class="panel panel-info">
          <div class="panel-heading">{{item.name}}</div>
          <div class="panel-body"><p class="price">{{item.cost | currency : '€': 2}}</p><img src="{{item.imgUrl}}" class="img-responsive" style="width:100%" alt="{{item.name}}"></div>
          <div class="panel-footer">{{item.desc}}
               <label>
            <p title="remove from cart" ng-click="removeItem(item)" class="item-counter-minus">Remove</p>
          </label>
            <label>
            <p title="add to cart" ng-click="addToCart(item)" class="item-counter">Add to Cart</p>
          </label>
          </div>
        </div>
      </div>
      
    </div>
  </div><br><br>

   <div class="container" id="angular-shop3" >    
    <div class="row">
      <div class="col-sm-4"  ng-repeat="item in [products[3],products[1], products[5]] track by $index">
        <div class="panel panel-info">
          <div class="panel-heading">{{item.name}}</div>
          <div class="panel-body"><p class="price">{{item.cost | currency : '€': 2}}</p><img src="{{item.imgUrl}}" class="img-responsive" style="width:100%" alt="{{item.name}}"></div>
          <div class="panel-footer">{{item.desc}}
               <label>
            <p title="remove from cart" ng-click="removeItem(item)" class="item-counter-minus">Remove</p>
          </label>
            <label>
            <p title="add to cart" ng-click="addToCart(item)" class="item-counter">Add to Cart</p>
          </label>
          </div>
        </div>
      </div>
      
    </div>
  </div><br>

   <div class="container" id="angular-shop4" >    
    <div class="row">
      <div class="col-sm-4"  ng-repeat="item in [products[4],products[5], products[6]] track by $index">
        <div class="panel panel-info">
          <div class="panel-heading">{{item.name}}</div>
          <div class="panel-body"><p class="price">{{item.cost | currency : '€': 2}}</p><img src="{{item.imgUrl}}" class="img-responsive" style="width:100%" alt="{{item.name}}"></div>
          <div class="panel-footer">{{item.desc}}
               <label>
            <p title="remove from cart" ng-click="removeItem(item)" class="item-counter-minus">Remove</p>
          </label>
            <label>
            <p title="add to cart" ng-click="addToCart(item)" class="item-counter">Add to Cart</p>
          </label>
          </div>
        </div>
      </div>
      
    </div>
  </div><br>

   <div class="container" id="angular-shop5" >    
    <div class="row">
      <div class="col-sm-4"  ng-repeat="item in [products[6],products[7], products[8]] track by $index">
        <div class="panel panel-info">
          <div class="panel-heading">{{item.name}}</div>
          <div class="panel-body"><p class="price">{{item.cost | currency : '€': 2}}</p><img src="{{item.imgUrl}}" class="img-responsive" style="width:100%" alt="{{item.name}}"></div>
          <div class="panel-footer">{{item.desc}}
               <label>
            <p title="remove from cart" ng-click="removeItem(item)" class="item-counter-minus">Remove</p>
          </label>
            <label>
            <p title="add to cart" ng-click="addToCart(item)" class="item-counter">Add to Cart</p>
          </label>
          </div>
        </div>
      </div>
      
    </div>
  </div><br>

   <div class="container" id="angular-shop6" >    
    <div class="row">
      <div class="col-sm-4"  ng-repeat="item in [products[8],products[9], products[10]] track by $index">
        <div class="panel panel-info">
          <div class="panel-heading"><h6 class="exp"><strong>Sale Now On</strong></h6><h6>{{item.name}}</h6></div>
          <div class="panel-body"><p class="price">{{item.cost | currency : '€': 2}}</p><img src="{{item.imgUrl}}" class="img-responsive" style="width:100%" alt="{{item.name}}"></div>
          <div class="panel-footer">{{item.desc}}
               <label>
            <p title="remove from cart" ng-click="removeItem(item)" class="item-counter-minus">Remove</p>
          </label>
            <label>
            <p title="add to cart" ng-click="addToCart(item)" class="item-counter">Add to Cart</p>
          </label>
          </div>
        </div>
      </div>
      
    </div>
  </div><br>




</div><!--angular container -->

<?php 

include'overall/overall_footer.php'; ?>


