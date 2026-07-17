// Wait for loading animation
setTimeout(() => {

    document.getElementById("loading").style.display = "none";

    document.getElementById("passwordScreen").style.display = "flex";

}, 4000);


// Password
function checkPassword() {

    let pass = document.getElementById("password").value;

    if (pass === "1234") {

        alert("Welcome Birthday Boy ❤️");

    }

    else {

        document.getElementById("wrong").innerHTML =

            "Wrong Password 🥺";

    }

}
