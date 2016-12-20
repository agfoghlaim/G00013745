//var num = 2.9999;

//document.writeln(num.toFixed(25));

//add a comment here giving details of the error this produces
//Uncaught RangeError.
//add code to handle this error - see Javascript Exception Handling Lab for example on how to do this.
 try{
  var num = 2.9999;

document.writeln(num.toFixed(25));
}
catch(e){
  
}
finally{
  document.writeln(num.toFixed(20));
}