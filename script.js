document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const errorMessage = document.getElementById("error-message");

    
    errorMessage.textContent = "";

    
    if (name === "") {
        errorMessage.textContent = "Name is required.";
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email.";
        return;
    }

    if (!validatePhone(phone)) {
        errorMessage.textContent = "Please enter a valid phone number.";
        return;
    }

    if (password === "") {
        errorMessage.textContent = "Password is required.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }


    alert("Registration successful!");
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
}
