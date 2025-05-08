document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector(".login-form"); 
const passwordInput= form.querySelector('input[name="password"]');

//CREACION OJO
const eye = document.createElement("img");
eye.src = "img/abiertocerrado.jpg";
eye.alt = "ver/ocultar password";
eye.style.cursor = "pointer";
eye.style.marginLeft = "2rem";

//OJO AL LADO DE LA CONTRASEÑA
passwordInput.parentNode.insertBefore(eye, passwordInput.nextSibling);

//VER / OCULTAR CONTRASEÑA
eye.addEventListener("click", function() {
    const isPasswordVisible = passwordInput.type === "text";
    passwordInput.type = isPasswordVisible ? "password" : "text";
});

//VALIDACION ENVIO
form.addEventListener("submit", function(e){

//EVITAR ENVIO PREDETERMINADO
        e.preventDefault();
        const email= form.querySelector('input[type="email"]').value.trim();
        const password= form.querySelector('input[type="password"]').value;

    if(!email||!password){
        alert("Completa para poder saber que miembro de nuestra familia eres :)");
        return;
    } 

    // INICIO DE SESION (SIMULADO)
    alert("holi de nuevo, disfruta :D");
    });
});

  
