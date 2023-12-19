

var modal = document.getElementById("myEmail");

// When the user clicks on the button, open the modal
function openEmail() {
  modal.style.display = "flex";
}

// When the user clicks on X, close the modal and reset the results
function closeEmail() {
  modal.style.display = "none";
  document.getElementById("sendResults").innerText = "";

}


// Writest the result into the span element
function sendEmail() {
  
  document.getElementById("sendResults").innerText = "Email Sent Successfully!";


}
