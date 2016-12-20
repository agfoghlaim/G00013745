<?php 
$page_title = 'Home - Login'; 
include'overall/overall_header.php'; ?>





<?php
// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if(isset($_POST['register'])){
      
      header( "Location: register.php" );
      exit();
    }

    //connect to the database - hint: require
    require('core/mysqli_connect.php');      
    //perform validation ensuring all form fields contain values    
    if(!empty($_POST['username']) && !empty($_POST['pass'])){

    $user=$_POST['username'];
    $passw=$_POST['pass'];
    $q = "SELECT user_id FROM users WHERE (username='$user' AND password=SHA1('$passw') )";
    $r = $r = @mysqli_query ($dbc, $q);

    }

    if($r){
        $num = @mysqli_num_rows($r);
            if($num == 1){
                 session_start();
                 $_SESSION['username'];
                 header( "Location: shop.php" );
                 mysqli_close($dbc);
                    exit();
                //close db connection
        }else{
            echo '<h1>Error!</h1>
            <p class="error">The username and password do not match those on file.</p>';
        }
    }

mysqli_close($dbc);
exit();
        
} 
?>


<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title">Sign in to continue to Saucepan City!</h1>
            <div>
                <img class="profile-img" id="img-register" src="img/product3.jpg"
                    alt="">
                <form action="login.php" method="post">
                <input type="text" name="username"  maxlength="60" value="<?php if (isset($_POST['username'])) echo $_POST['username']; ?>" class="form-control" placeholder="Username" required autofocus>
                <input type="password" name="pass" maxlength="20" value="<?php if (isset($_POST['pass'])) echo $_POST['pass']; ?>"  class="form-control" placeholder="Pass" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit" name="login" id="login" value="Login">
                    Sign in</button>
                <label class="checkbox pull-left">
                    <input type="checkbox" value="remember-me">
                    Remember me
                </label>
                <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                </form>
            </div>
            <a href="register.php" class="text-center new-account">Create an account </a>
        </div>
    </div>
</div>



<?php include 'overall/overall_footer.php'; ?>


