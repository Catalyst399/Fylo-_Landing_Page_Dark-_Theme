"use strict";

const email = document.getElementById("email");
const btn = document.getElementById("btn");
const form = document.getElementById("siign__up");

let errormsg = document.createElement("p");

function valid() {
  var Pattern = /^[a-z0-9]{1,20}@[a-z]{3,10}[.]com$/;
  if (Pattern.test(email.value)) {
    alert("Email Sent");
  } else {
    errormsg.innerHTML = "Please enter a valid email address";
    errormsg.style.display = "block";
    errormsg.style.color = "red";
    errormsg.style.fontFamily = "Raleway";
    errormsg.style.fontSize = "12px";
    errormsg.style.marginTop = "-4rem";
    email.style.borderColor = "red";
    form.appendChild(errormsg);
  }
}

// REST

btn.addEventListener("click", valid);
email.addEventListener("focus", function () {
  errormsg.innerHTML = "";
  email.style.borderColor = "transparent";
});
