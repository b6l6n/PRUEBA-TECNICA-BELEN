document.addEventListener("DOMContentLoaded",function(){
    const formulario= document.querySelector(".singup-section");
    const passwordInput= document.querySelector('input[name="password"]');
    const confirmPasswordInput= document.querySelector('input[name="confirmarPassword"]');
    const birthdateInput= document.querySelector('input[name="edad"]');
    const errorDiv= document.createElement("div");


//MENSAJE DE ERROR
    errorDiv.style.color="purple";
    errorDiv.style.fontSize="3rem";
    errorDiv.id="error-message";


//CONTENEDOR DE ERROR
    const submitButton= formulario.querySelector(".btn1");
    submitButton.insertAdjacentElement("beforebegin",errorDiv)
    
    formulario.addEventListener("submit",function(e){
    let errores=[];

//CONTRASEÑAS IGUALES
    if(passwordInput.value !== confirmPasswordInput.value){
        errores.push("No has puesto la misma contraseña...:(");
    }


//SI HAY ERRORES NO SE ENVIA
    if(errores.length>0){
        e.preventDefault();
        errorDiv.innerHTML= "<ul style='list-style:none; padding-left:0;'>"+
        errores.map(error=> `<li>${error}</li>`).join("")+"</ul>";
       

//LIMPIAR ERRORES
    }else{
        errorDiv.innerHTML="";
        alert("Bienvenido a la familia de Blush Rush,disfruta de todo lo que tenemos para ofrecerte :D");
    }
    });
}); 
