// FIRST NAME
function username() {
    let name = document.getElementById("name").value.trim();
    let output = document.getElementById("user_out");
    let pattern = /^[A-Za-z]+$/;

    if (name === "") {
        output.innerHTML = "First name is required.";
        return false;
    }

    if (!pattern.test(name)) {
        output.innerHTML = "Only letters are allowed.";
        return false;
    }

    output.innerHTML = "";
    return true;
}

// LAST NAME
function last() {
    let lastname = document.getElementById("lastname").value.trim();
    let output = document.getElementById("output");
    let pattern = /^[A-Za-z]+$/;

    if (lastname === "") {
        output.innerHTML = "Last name is required.";
        return false;
    }

    if (!pattern.test(lastname)) {
        output.innerHTML = "Only letters are allowed.";
        return false;
    }

    output.innerHTML = "";
    return true;
}

// PHONE NUMBER
function contact() {
    let phone = document.getElementById("number").value.trim();
    let output = document.getElementById("rock");
    let pattern = /^[0-9]{10}$/;

    if (phone === "") {
        output.innerHTML = "Phone number is required.";
        return false;
    }

    if (!pattern.test(phone)) {
        output.innerHTML = "Phone number must contain exactly 10 digits.";
        return false;
    }

    output.innerHTML = "";
    return true;
}

// EMAIL
function emaili() {
    let email = document.getElementById("email").value.trim();
    let output = document.getElementById("close");

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        output.innerHTML = "Email is required.";
        return false;
    }

    if (!pattern.test(email)) {
        output.innerHTML = "Enter a valid email address.";
        return false;
    }

    output.innerHTML = "";
    return true;
}

// PASSWORD
function pass() {
    let password = document.getElementById("password").value;
    let output = document.getElementById("table");

    // At least 8 characters, one uppercase, one lowercase, one number
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password === "") {
        output.innerHTML = "Password is required.";
        return false;
    }

    if (!pattern.test(password)) {
        output.innerHTML =
            "Password must be at least 8 characters with uppercase, lowercase and a number.";
        return false;
    }

    output.innerHTML = "";
    return true;
}

// GENDER
function validateGender() {
    let gender = document.getElementsByName("gender");

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return true;
        }
    }

    alert("Please select your gender.");
    return false;
}

// SPORTS
function validateSports() {
    let sports = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < sports.length; i++) {
        if (sports[i].checked) {
            return true;
        }
    }

    alert("Please select at least one sport.");
    return false;
}

// FORM VALIDATION
function validateForm() {

    if (!username()) return false;

    if (!last()) return false;

    if (!contact()) return false;

    if (!emaili()) return false;

    if (!pass()) return false;

    if (!validateGender()) return false;

    if (!validateSports()) return false;

    alert("Form submitted successfully!");

    return true;
}

// RESET MODAL
function showResetModal() {
    document.getElementById("modal").style.display = "block";
}

// YES
function subs() {
    document.querySelector("form").reset();
    document.getElementById("modal").style.display = "none";

    // Clear error messages
    document.getElementById("user_out").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("rock").innerHTML = "";
    document.getElementById("close").innerHTML = "";
    document.getElementById("table").innerHTML = "";
}

// NO
function cancel() {
    document.getElementById("modal").style.display = "none";
}