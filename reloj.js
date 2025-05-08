document.addEventListener("DOMContentLoaded", function(){
    const relojContainer = document.querySelector("#reloj-container"); // Selecciona el contenedor existente
    relojContainer.id="reloj";
    relojContainer.style.fontSize="5rem";
    relojContainer.style.fontFamily="Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    relojContainer.style.textAlign="center";
    relojContainer.style.color=" #d73877";
    

    function actualizarReloj(){
        const ahora= new Date();
        const segundos= String(ahora.getSeconds()).padStart(2,"0");
        const minutos= String(ahora.getMinutes()).padStart(2,"0");
        const horas= String(ahora.getHours()).padStart (2,0);
        relojContainer.textContent= `${horas}:${minutos}:${segundos}`;
    }
    setInterval(actualizarReloj,1000);
    actualizarReloj;
});
