/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "mainheader") {
    x.className += " responsive";
  } else {
    x.className = "mainheader";
  }
}
