// Add event listener to the button with id="btnExecute"
document.getElementById("btnExecute").addEventListener('click', function () {

    // Capture the values from the input fields
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    // Convert the age string to a number
    age = parseInt(age);

    let mensaje = "";

    // Check if the age is a valid number
    if (isNaN(age)) {
        mensaje = `Error, please enter a valid age in numbers`;
    } 
    // Check if user is 18 or older
    else if (age >= 18){
        mensaje = `Hello ${name}, you're of legal age. Get ready for great opportunities in the world of programming!`;
    } 
    // If under 18
    else {
        mensaje = `Hi ${name}, you're a minor. Keep learning and enjoying coding!`;
    }

    // Display the message in the element with id="mesagge"
    document.getElementById("mesagge").textContent = mensaje;

});