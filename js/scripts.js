$(document).ready(function () {
  const height = parseInt(prompt("Height in inches:"));
  


  if (height > 48) {
    $("#tallRides").addClass("green-background");
    $("#shortRides").addClass("red-background");
  } else if (height === 48) {
    alert("Congrats you can ride every ride!");
    $('ul').addClass("green-background");
  } else {
    $('#shortRides').addClass("green-background");


    
  }
});