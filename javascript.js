document.getElementById("btnExecute").addEventListener('click', function () {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    age = parseInt(age);
    let mensaje = "";
    if (isNaN(age)) {
        mensaje = `Error, please enter a valid age in numbers`
    } else if (age >= 18){
        mensaje = `Hello ${name}, you're of legal age. Get ready for great opportunities in the world of programming!`
    }else{
        mensaje = `Hi ${name}, you're a minor. Keep learning and enjoying coding!`
    }
    document.getElementById("mesagge").textContent = mensaje;
    });