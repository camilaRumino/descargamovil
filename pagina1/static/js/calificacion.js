var estrellas = document.querySelectorAll(".estrella");
var calificaciones = document.getElementById("calificaciones");
var comentario = document.getElementById("comentario");
var calificacionSeleccionada = 0;

estrellas.forEach(function(estrella) {
    estrella.addEventListener("click", function() {
    calificacionSeleccionada = this.getAttribute("data-valor");
 });
});

function guardarCalificacion() {
    var div = document.createElement("div");
    div.textContent = "Calificación: " + calificacionSeleccionada + ", Comentario: " + comentario.value;
    calificaciones.appendChild(div);
    comentario.value = "";
    calificacionSeleccionada = 0;
    estrellas.forEach(function(estrella) {
    estrella.style.color = "gray";
});
}