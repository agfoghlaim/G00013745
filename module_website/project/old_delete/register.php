<?php 
$page_title = 'Register'; 
include'overall/overall_header.php'; 







if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    //connect to the database - hint: require       
    require('core/mysqli_connect.php');
    //perform validation ensuring all form fields contain values
    //Note that password should match confirm password.

    $fn=$_POST['first_name'];
    $ln=$_POST['last_name'];
    $un=$_POST['username'];
    $pass1=$_POST['pass1'];
    $pass2 = $_POST['pass2'];
    

    if(!empty($fn) && !empty($ln) && !empty($un)  && !empty($pass1) && !empty($pass2) && ($pass1 == $pass2)) {
    $q = "INSERT INTO users(firstname,lastname, username, password) 
          VALUES ('$fn', '$ln', '$un', SHA1('$pass1'))";
    $r = @mysqli_query ($dbc, $q);
    
    
    //ebuild your insert query and run it to add the details captured on the form to the users table:
    //For example:
    //$fn=$_POST['first_name'];
    //$ln=$_POST['last_name'];
    //$un=$_POST['username'];
    //$pass1=$_POST['pass1'];
    //$q = "INSERT INTO users (firstname, lastname, username, password) VALUES ('$_POST['first_name']', '$_POST['last_name']', '$_POST['username']', SHA1('$pass1'))";      
    //$r = @mysqli_query ($dbc, $q); // Run the query. Note: $dbc is set in the mysqli_connect.php script.
    
    //Note the password is wrapped in a SHA1 function. This encrypts the password value which will be written to the database. 
    
    //check the query ran ok
    //For example:
    if ($r) {
        
        echo '<h1>Thank you!</h1>';
         header( "Location: login.php" );
                
      
        
    } 

    else  { // If it did not run OK.
        echo '<h1>Everything is fine</h1>
        <p class="error">You could not be registered due to a system error. We apologize for any inconvenience.</p>'; 
            
         //Debugging message:

        echo '<p>' . mysqli_error($dbc) . '<br /><br />Query: ' . $q . '</p>';
                        
    } }else{
        echo '<p>passwords do not match </p>';
    }
        
     //Close the database connection - 
    mysqli_close($dbc);
    
    // Include the footer and quit the script - exit();
        
    exit();
    

} 

?>

<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title">Register Here</h1>
            <div>
                <img class="profile-img1" id="img-register" src="img/product2.jpg"
                    alt="">
                <form action="register.php" method="post">
                    <input type="text" class="form-control" placeholder="Firstname" required autofocus id="fname"  name="first_name" size="15" maxlength="20" value="<?php if (isset($_POST['first_name'])) echo $_POST['first_name']; ?>">
                    <input type="text" class="form-control" placeholder="Surname" required  name="last_name" size="15" maxlength="40" value="<?php if (isset($_POST['last_name'])) echo $_POST['last_name']; ?>">
                    <input type="text" class="form-control" placeholder="Username" required  name="username" size="20" maxlength="60" value="<?php if (isset($_POST['username'])) echo $_POST['username']; ?>">
                    <input type="password" class="form-control" placeholder="Password" required name="pass1" size="10" maxlength="20" value="<?php if (isset($_POST['pass1'])) echo $_POST['pass1']; ?>" >
                    <input type="password" class="form-control" placeholder="Confirm password" required name="pass2" size="10" maxlength="20" value="<?php if (isset($_POST['pass2'])) echo $_POST['pass2']; ?>">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" name="submit" value="Register">
                        Sign Up</button>
                    <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                </form>
                <!-- start of paste -->


     
            </div>
            <a href="#" class="text-center new-account">Create an account </a>
        </div>
    </div>
</div>




<?php include 'overall/overall_footer.php'; ?>
