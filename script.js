// The DOMContentLoaded event fires when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); //prevents the form from submitting to the server.

    //  selecting the inputs, getting the value and trimming to resolve withspaces
    username = document.getElementById("username").value.trim();
    email = document.getElementById("email").value.trim();
    password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    //    checks if username.lenght is > 3
    if (username.length < 3) {
      isValid = false;
      messages.push("username should be greater than 3");
    }

    // checks if email has "@"and "."
    if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      messages.push("please, provide a valid email address");
    }

    // checks if the passsword length is less than  8
    if (password.length < 8) {
      isValid = false;
      messages.push("password length should be at least 8 in characters");
    }

    // displaying the feedback section
    feedbackDiv.style.display = "block";
    if (isValid == true) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});

