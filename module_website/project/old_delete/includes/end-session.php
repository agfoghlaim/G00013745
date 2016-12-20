
<?php 
$page_title = 'Logged out';
include ('overall/overall_header.php');




	
		session_start(); // start the session
		$_SESSION = array(); //reset the session array to clear the data from any variables
		session_destroy(); // then delete the session data from the server
		 header( "Location: login.php" );
	echo '<p>logged out</p>';
	
?>
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title">Sign in to continue to Saucepan City!</h1>
            <div>
                <img class="profile-img" id="img-register" src="img/product3.jpg"
                    alt="">
                <form action="login.php" method="post">
                <input type="text" name="username"  maxlength="60" value="<?php if (isset($_POST['username'])) echo $_POST['username']; ?>" class="form-control" placeholder="Email" required autofocus>
                <input type="password" name="pass" maxlength="20" value="<?php if (isset($_POST['pass'])) echo $_POST['pass']; ?>"  class="form-control" placeholder="Password" required>
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

<?php
include ('overall/overall_footer.php');
 ?>


<!--  <form action="end-session.php" method="post">
	<input type="submit" name="clear" value="Logout">
</form> -->