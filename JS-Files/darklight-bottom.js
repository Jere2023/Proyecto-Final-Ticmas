const btnSwitch = document.getElementById("toggle-mode"); /* se define una constante, en este caso a algo constante en el documento, como el botón de dark/linght*/

btnSwitch.addEventListener("click", () => { /* se le agrega un listener de click sobre el boton, y se le agrega la función*/
    document.body.classList.toggle("dark"); /* seleccionamos el documento, la etiqueta, su clase, y le agregamos la funcion toggle que permite añadir o quitar la clase */
    btnSwitch.classList.toggle("dark");
});