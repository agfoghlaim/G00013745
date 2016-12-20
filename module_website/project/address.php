<?php 
$page_title = 'Cart'; 
include'overall/overall_header.php';
include'includes/start-session.php'; 
include 'includes/welcome-banner.php';


?>


<!-- <div class="progress"> -->
 <!-- <div class="progress-bar" id="progressBar" value="0" max="100" style="width:250px;"></div> -->
<!-- </div> -->

<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <img class="profile-img1 " id="img-register" src="img/product2.jpg"
                    alt="">
         
  
          <form id="multistep" onsubmit="return false">
            <div id="step1">
              <h2 class="text-center">Please Enter Address Details</h2>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width:5%">
                 
                </div>
              </div> 
              Street: <input class="form-control" required id="street" name="street" placeholder="Street Address"><br>
              
              Town: <input class="form-control" required id="town" name="town" placeholder="Town"><br>
              <p id="scolding-street"></p>
              <button class="btn btn-lg btn-primary btn-block" onclick="processStep1()">Continue</button>
            </div>
           
            <div id="step2">
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
                  
                </div>
              </div> 
              <h2 class="text-center">Please Select County</h2>
               County: <select class="form-control" id="county" name="county">
                <option value=""></option>
                <option value="galway">Galway</option>
                <option value="mayo">Mayo</option>
                <option value="sligo">Sligo</option>
                <option value="roscommon">Roscommon</option>
                <option value="leitrim">Leitrim</option>

              </select><br>
              <button class="btn btn-lg btn-primary btn-block" onclick="processStep2()">Continue</button>
            </div>
            <div id="step3">
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
                  
                </div>
              </div>
               <h2 class="text-center">Now Select Your Country.</h2>
              Country: <select class="form-control" id="country" name="country">
                <option value="Ireland">Ireland</option>
               
              </select><br><br><br>
              <button class="btn btn-lg btn-primary btn-block" onclick="processStep3()">Continue</button>
            </div>
            <div id="show_all_data">

              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">
                  
                </div>
              </div>
              <h2 class="text-center">Confirm Details</h2>
              Street: <span id="display_street"></span> <br>
              Town: <span id="display_town"></span> <br>
              County: <span id="display_county"></span> <br>
              Country: <span id="display_country"></span> <br><br><br>
              <button class="btn btn-lg btn-primary btn-block" onclick="submitForm()">Continue</button><br>
              <p>You can go back and edit this later</p>

            </div>
      </div>
    </div>
</div>


<?php include 'overall/overall_footer.php'; ?>