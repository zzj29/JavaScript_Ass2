// Radio Buttons Functions 
// these functions will display text inside txtResult depicting which radio button was chosen
function fnDay() {
  document.getElementById("txtResult").value = "You have chosen day class";
}
function fnNight() {
  document.getElementById("txtResult").value = "You have chosen night class";
}
//......................................................................
// create variables to represent each radio buttons path;
var radio1 = document.getElementById("radioday");
var radio2 = document.getElementById("radionight");
//......................................................................
// use the onclick event handler to go to the functions
radio1.onclick = fnDay;
radio2.onclick = fnNight;


// Validate the value of required inputs
function fnCheckInput() {

  // create variables to store the path 
  var FirstName = document.getElementById("txtfirstName").value;
  var LastName = document.getElementById("txtLastName").value;
  var email = document.getElementById("txtEmail").value;
  var mobile = document.getElementById("txtMobile").value;
  //......................................................................

  if (FirstName.length < 2) {
    alert("Please enter your first name");
    return false;
  };
    if (LastName.length < 2) {
    alert("Please enter your last name");
    return false;
  };
  if (email.indexOf("@")=="-1" || email.indexOf(".")=="-1") {
    alert("Please enter a valid Email address");
    return false;
  };
    if (mobile.length != 10 || isNaN(mobile)) {
    alert("Please enter a 10 digits mobile number");
    return false;
  };
  
  alert("Thank you for submitting the enquiry form");
  form2.action = form2.action + ";" + email;
  return true;
}
//......................................................................

// Create variables to store the form and input elements
var form2 = document.getElementById("form2");

// Assign the validateForm function to the onsubmit event of the form
form2.onsubmit = fnCheckInput;

// Set focus on the first name input field when the page loads
FirstName.focus();
