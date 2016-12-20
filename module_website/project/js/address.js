
   
var street, town, county, country;

function processStep1(){
    street = document.getElementById("street").value;
    town = document.getElementById("town").value;
    if(street.length > 2 && town.length > 2){
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
        
    } else {
        
        document.getElementById('scolding-street').textContent = 'Please enter a valid street name and town.';
    }
}
function processStep2(){
    county = document.getElementById("county").value;
    if(county.length > 0){
        document.getElementById("step2").style.display = "none";
        document.getElementById("step3").style.display = "block";
       
    } 
}
function processStep3(){
    country = document.getElementById("country").value;
    if(country.length > 0){
        document.getElementById("step3").style.display = "none";
        document.getElementById("show_all_data").style.display = "block";
        document.getElementById("display_street").innerHTML = street;
        document.getElementById("display_town").innerHTML = town;
        document.getElementById("display_county").innerHTML = county;
        document.getElementById("display_country").innerHTML = country;
      
    } 
}
function submitForm(){
    document.getElementById("multistep").method = "post";
    document.getElementById("multistep").action = "handle_address.php";
    document.getElementById("multistep").submit();
}



   




