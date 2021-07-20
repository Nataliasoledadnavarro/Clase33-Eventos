// const boton = document.getElementById("haceme-click")
// const imagen = document.querySelector("img")

// const saludar = () => {
//   console.log("hola")
//   imagen.src = "https://random-sailor-img.herokuapp.com/"
// }

// console.dir(boton)

// boton.onclick = saludar

// const like = document.getElementById("corazon")
// const gatito = document.getElementById("imagen")
// const cantidadDeLikes = document.getElementById("cantidad-de-likes")

// const convertirARojo = () => {
//   // quitar un like
//   if (like.style.color === "rgb(255, 0, 0)") {
//     like.style.color = "#000000"
//     cantidadDeLikes.textContent = "0"
//   }
//   // agregar un like
//   else {
//     like.style.color = "#FF0000"
//     cantidadDeLikes.textContent = "1.000.000"
//   }
// }

// gatito.onclick = convertirARojo

//// Ejercicio en clase Abrir y cerrar modal////

/*const modal = document.getElementById("modal");
const botonDeAbrirModal = document.getElementById("abrir-modal");
const botonCerrarModal = document.getElementById("cerrar-modal");

const mostrarModal = () => {
  modal.style.display = "block";
};

botonDeAbrirModal.onclick = mostrarModal;

const cerrarModal = () => {
  modal.style.display = "none";
};

botonCerrarModal.onclick = cerrarModal;*/

///Ejercicio de práctica "ADIVINANZA"///

const resultadoAdivinanza = document.querySelector(".resultadoAdivinanza")
const primeraRespuesta = document.querySelector(".primeraRespuesta")
const segundaRespuesta = document.querySelector(".segundaRespuesta")
const terceraRespuesta = document.querySelector(".terceraRespuesta")

const respuestaCorrecta = () => {
  primeraRespuesta.style.backgroundColor = "rgb(255, 0, 0)"
  segundaRespuesta.style.backgroundColor = "rgb(0, 255, 0) "
  terceraRespuesta.style.backgroundColor = "rgb(255, 0, 0)"
  resultadoAdivinanza.textContent = "¡Respuesta Correcta!"

}

const respuestaIncorrecta = () => {
  primeraRespuesta.style.backgroundColor = "rgb(255, 0, 0)"
  segundaRespuesta.style.backgroundColor = "rgb(0, 255, 0) "
  terceraRespuesta.style.backgroundColor = "rgb(255, 0, 0)"
  resultadoAdivinanza.textContent = "¡Respuesta equivocada!"
}

primeraRespuesta.onclick = respuestaIncorrecta
segundaRespuesta.onclick = respuestaCorrecta
terceraRespuesta.onclick = respuestaIncorrecta
