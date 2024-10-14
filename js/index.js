function validateForm() {

    event.preventDefault();

    const firstName = document.querySelector('input[placeholder="First Name"]');
    const lastName = document.querySelector('input[placeholder="Last name"]');
    const email = document.querySelector('input[placeholder="Email address"]');
    const phone = document.querySelector('input[placeholder="Phone Number"]');
    const password = document.querySelector('input[placeholder="Create password"]');

    if (!/^[A-Za-z\s]+$/.test(firstName.value)) {
        alert("First Name can only contain letters and spaces.");
        firstName.focus();
        return false;
    }

    if (firstName.value.length<2) {
        alert("First name should be atleas 2 Characters");
        firstName.focus();
        return false;
    }

    if (!/^[A-Za-z\s]+$/.test(lastName.value)) {
        alert("Last Name can only contain letters and spaces.");
        lastName.focus(); 
        return false;
    }

    if (lastName.value.length<2) {
        alert("Last name should be atleas 2 Characters");
        lastName.focus();
        return false;
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus(); 
        return false;
    }

    
    if (!/^\d{10}$/.test(phone.value)) {
        alert("Please enter a valid 10-digit phone number.");
        phone.focus(); 
        return false;
    }

    
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        password.focus(); 
        return false;
    }

    console.log("First Name: " + firstName.value);
    console.log("Last Name: " + lastName.value);
    console.log("Email: " + email.value);
    console.log("Phone: " + phone.value);
    console.log("Password: " + password.value);
    
    alert("Registered");
    return false; 
}

function takeToForm() {
    const formSection = document.getElementById('focus-form');
    formSection.scrollIntoView({ behavior: 'smooth' });
}