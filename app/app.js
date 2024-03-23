let car = document.getElementById('car');
let track = document.getElementById('track');
let resultados = document.getElementById('resultados');
let distancia = 0;
let tiempoInicio;

function start() {
  tiempoInicio = new Date().getTime();
  moveCar();
}

function moveCar() {
  let now = new Date().getTime();
  let distanciaRecorrida = (now - tiempoInicio) / 1000 * 100; // Ajustar la velocidad según sea necesario
  distancia += distanciaRecorrida;
  car.style.left = distancia + 'px';

  if (distancia < track.offsetWidth - car.offsetWidth) {
    requestAnimationFrame(moveCar);
  }
}

function calcularDistancia() {
  resultados.textContent = "Distancia recorrida: " + distancia.toFixed(2) + " px";
  resultados.classList.add('resultado');
}

function calcularVelocidad() {
  let tiempoTranscurrido = (new Date().getTime() - tiempoInicio) / 1000;
  let velocidad = distancia / tiempoTranscurrido;
  resultados.textContent = "Velocidad: " + velocidad.toFixed(2) + " px/s";
  resultados.classList.add('resultado');
}

function calcularFrenado() {
  let tiempoTranscurrido = (new Date().getTime() - tiempoInicio) / 1000;
  let velocidadInicial = distancia / tiempoTranscurrido;
  let tiempoFrenado = velocidadInicial / 2; // Supongamos que frena a la mitad de la velocidad inicial
  let distanciaFrenado = velocidadInicial * tiempoFrenado;

  resultados.textContent = "Distancia de frenado: " + distanciaFrenado.toFixed(2) + " px";
  resultados.classList.add('resultado');
}

function reset() {
  distancia = 0;
  car.style.left = distancia + 'px';
  resultados.textContent = "";
  resultados.classList.remove('resultado'); // Quita la clase 'resultado' al restablecer
}
