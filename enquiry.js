// Radio Buttons Functions 
// these functions will display text inside txtResult depicting which radio button was chosen
function fnDay() {
  document.getElementById("txtResult").value = "You have chosen day class";
}
function fnnight() {
  document.getElementById("txtResult").value = "You have chosen night class";
}
//......................................................................
// create variables to represent each radio buttons path;
var radio1 = document.getElementById("radioday");
var radio2 = document.getElementById("radionight");
//......................................................................
// use the onclick event handler to go to the functions
radio1.onclick = fnDay;
radio2.onclick = fnnight;


// Validate the value of required inputs
function fnCheckInput() {
inputValid = true;
if (FirstName.value.length < 2) {
  alert("Please enter your first name");
  inputValid = false;
};
  if (LastName.value.length < 2) {
  alert("Please enter your last name");
  inputValid = false;
};
if (userEmail.value.indexOf("@")=="-1" || userEmail.value.indexOf(".")=="-1") {
  alert("Please enter a valid Email address");
  inputValid = false;
};
  if (userMobile.value.length != 10) {
  alert("Please enter a 10 digits mobile number");
  inputValid = false;
};
if (inputValid) {
  alert("Thank you for submitting the enquiry form");
  form2.action = form2.action + ";" + userEmail.value;
}
}
//......................................................................
// create variables to store the path 
var form2 = document.getElementById("form2");
var FirstName = document.getElementById("txtfirstName");
var LastName = document.getElementById("txtLastName");
var userEmail = document.getElementById("txtEmail");
var userMobile = document.getElementById("txtMobile");
//......................................................................
/* use onchange event handler to catch the focus of browser when textbox value changes, and call a function named 'fnUpperMe' */
form2.onsubmit = fnCheckInput;
FirstName.focus();