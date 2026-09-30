let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

  
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";



    if (name.length < 3) {
        document.getElementById("nameError").innerHTML =
            "  Name must contain at least 3 characters";
        return;
    }


 
    if (address.length < 10) {
        document.getElementById("addressError").innerHTML =
            " Enter a valid address";
        return;
    }



    if (!email.includes("@")) {
        document.getElementById("emailError").innerHTML =
            " Enter a valid email";
        return;
    }



    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML =
            " Password must contain at least 8 characters";
        return;
    }



    if (phone.length != 10) {
        document.getElementById("phoneError").innerHTML =
            " Phone number must contain 10 digits";
        return;
    }


   
    let gender = document.getElementsByName("gender");
    let selected = false;

    for (let i = 0; i < gender.length; i++) {

        if (gender[i].checked) {
            selected = true;
        }

    }

    if (!selected) {
        document.getElementById("genderError").innerHTML =
            " Please select your gender";
        return;
    }


  
    alert("Registration Successful!");

});