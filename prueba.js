const boton = document.querySelector("#cambiarPersonaje");

function cambiarPersonaje() {
  document.body.classList.toggle("oscuro");

  primeraFrase.pause();
  segundaFrase.pause();

  if (document.body.classList.contains("oscuro")) {
    segundaFrase.currentTime = 0;
    segundaFrase.play();
  } else {
    primeraFrase.currentTime = 0;
    primeraFrase.play();
  }
}

boton.addEventListener("click", cambiarPersonaje);

const botonEntrar = document.querySelector("#entrar");
const entrada = document.querySelector("#entrada");
const musica = document.querySelector("#musica");

function entrarPagina() {
  entrada.classList.add("oculta");

  musica.volume = 0.5;
  musica.play();

  primeraFrase.play();
}

botonEntrar.addEventListener("click", entrarPagina);
