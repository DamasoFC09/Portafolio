function modooscuro() {
    document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("modooscuro", "activado");
  } else {
    localStorage.setItem("modooscuro", "desactivado");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const modoGuardado = localStorage.getItem("modooscuro");
  if (modoGuardado === "activado") {
    document.body.classList.add("dark");
  }
});