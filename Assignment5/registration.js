// js file for form validation
/***************************************************************/
function formCheck() {
  clearErrors();

  var result = userCheck() && passwordCheck();

  return result;
} // end of form check function

/***************************************************************/
// clear error messages
function clearErrors() {
  document.querySelector("#errors").innerHTML = "";
  document.querySelector('#fname').focus();
}

/***************************************************************/
// append error message
function showError(error) {
  document.querySelector("#errors").innerHTML += error;
}

/***************************************************************/
// check username validation
function userCheck() {
  var user = document.getElementById("user");
  var userString = user.value.trim();
  var charNumber = userString.length;

  var lengthError = "Username must have at least 6 characters.";
  var charError = "Username must start with a letter.";

  // username must start with a character
  if (isNaN(user.value.trim().charAt(0) != true)) {
    showError("<p>" +charError+ "</p>");
    return false;
  }

  // username must be at least 6 characters
  if (charNumber < 6) {
    showError("<p>" +lengthError+ "</p>");
    return false;
  }

  return true;

} // end of userCheck function

/***************************************************************/
// check password validation
function passwordCheck() {
  var pass = document.getElementById("pass");
  var string = pass.value.trim();
  var pass2 = document.getElementById("repass");
  var string2 = pass2.value.trim();
  var charNum = string.length;
  var numbers = /[0-9]/g;

  var error;
  var lengthError = "Password must be 8 characters long.";
  var charError = "Password must start with a character.";
  var digitError = "Password must have at least 1 digit.";
  var upperError = "Password must have at least 1 uppercase letter.";
  var matchError = "Passwords don't match.";

  // check password length
  if (charNum < 8) {
      showError("<p>" +lengthError+ "</p>");
      return false;
  }

  // check that password starts with character
  if (isNaN (pass.value.trim().charAt(0) != true)) {
    showError("<p>" +charError+ "</p>");
    return false;
  }

  // password must have at least one digit
  if (!pass.value.match(numbers)) {
    showError("<p>" +digitError+ "</p>");
    return false;
  }

  // check that password has at least one uppercase letter
  if (string.toLowerCase() == string) {
    showError("<p>" +upperError+ "</p>");
    return false;
  }

  // check that passwords match
  if (string != string2) {
    showError("<p>" +matchError+ "</p>");
    return false;
  }

  return true;

} // end of passwordCheck function

/***************************************************************/
