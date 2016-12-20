<?php # password.php
// This page lets a user change their password.

$page_title = 'Login';
include ('overall/overall_header.php');

// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	if(isset($_POST['register'])){
	  
	  header( "Location: register.php" );
	  exit();
	}
	require ('core/mysqli_connect.php'); // Connect to the db. Credentials in a file outside of web root. Makes it more secure. Users won't be able to see this file.
		
	$errors = array(); // Initialize an error array.
	
	// Check for a username:
	if (empty($_POST['username'])) {
		$errors[] = 'You forgot to enter your username.';
	} else {
		$e = mysqli_real_escape_string($dbc, trim($_POST['username']));
	}

	// Check for the current password:
	if (empty($_POST['pass'])) {
		$errors[] = 'You forgot to enter your current password.';
	} else {
		$p = mysqli_real_escape_string($dbc, trim($_POST['pass']));
	}
	
	if (empty($errors)) { // If everything's OK.

		// Check that they've entered the right username/password combination:
		$q = "SELECT user_id FROM users WHERE (username='$e' AND password=SHA1('$p') )";
		$r = @mysqli_query($dbc, $q);
		$num = @mysqli_num_rows($r);
		if ($num == 1) { // Match was made.
			
			session_start();
			$_SESSION['username'] = $_POST['username']; 
			mysqli_close($dbc); // Close the database connection.
			header('Location: shop.php');
			exit();
				
		} else { // Invalid username/password combination.
			echo '<h1>Error!</h1>
			<p class="error">The username and password do not match those on file.</p>';
		}
		
	} else { // Report the errors.

		echo '<h1>Error!</h1>
		<p class="error">The following error(s) occurred:<br />';
		foreach ($errors as $msg) { // Print each error.
			echo " - $msg<br />\n";
		}
		echo '</p><p>Please try again.</p><p><br /></p>';
	
	} // End of if (empty($errors)) IF.

	mysqli_close($dbc); // Close the database connection.
		
} // End of the main Submit conditional.

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
<?php include ('overall/overall_footer.php'); ?>