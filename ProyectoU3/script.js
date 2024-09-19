const boton = document.querySelector(".boton");
const barraNavegacion = document.querySelector(".barra-navegacion");

boton.addEventListener("click", () => {
    barraNavegacion.classList.toggle("responsibe");

  if (barraNavegacion.classList.contains("responsibe")) {
    boton.setAttribute("aria-label", "Cerrar menú");
  } else {
    boton.setAttribute("aria-label", "Abrir menú");
  }
});