// constantes declaración
const boton = document.querySelector("#cambiarPersonaje");
const botonEntrar = document.querySelector("#entrar");
const entrada = document.querySelector("#entrada");
const musica = document.querySelector("#musica");
const koiBlanco = document.querySelector("#koiBlanco");
const primeraFrase = document.querySelector("#primeraFrase");
const segundaFrase = document.querySelector("#segundaFrase");
const koiNegro = document.querySelector("#koiNegro");

function cambiarPersonaje() {
  document.body.classList.toggle("oscuro");

  primeraFrase.pause();
  segundaFrase.pause();

  if (document.body.classList.contains("oscuro")) {
    segundaFrase.currentTime = 0;
    koiBlanco.animate(
      [
        { opacity: 0, transform: "rotate(30deg)" },
        { opacity: 1, transform: "rotate(0deg)" },
      ],
      { duration: 700, easing: "ease-in-out" },
    );
    koiNegro.animate(
      [
        { opacity: 1, transform: "rotate(0deg)" },
        { opacity: 1, transform: "rotate(-20deg)", offset: 0.6 },
        { opacity: 0, transform: "rotate(-30deg)" },
      ],
      { duration: 700, easing: "ease-in-out" },
    );
    segundaFrase.play();
  } else {
    primeraFrase.currentTime = 0;
    koiBlanco.animate(
      [
        { opacity: 1, transform: "rotate(0deg)" },
        { opacity: 0, transform: "rotate(-30deg)" },
      ],
      { duration: 700, easing: "ease-in-out" },
    );
    koiNegro.animate(
      [
        { opacity: 0, transform: "rotate(30deg)" },
        { opacity: 1, transform: "rotate(0deg)" },
      ],
      { duration: 700, easing: "ease-in-out" },
    );
  }
}

boton.addEventListener("click", cambiarPersonaje);

function entrarPagina() {
  entrada.classList.add("oculta");

  musica.volume = 0.5;
  musica.play();

  primeraFrase.play();
}

botonEntrar.addEventListener("click", entrarPagina);
