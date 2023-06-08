// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrade, sem efeitos colaterais observáveis

const PI = 3.14;
// IMPURA - PI é um valor externo
function areacCirc({ raio }) {
  return raio * raio * PI;
}

// PURA - raio e pi são valores de entrada
function areacCirc({ raio, pi }) {
  return raio * raio * pi;
}

// IMPURA - Math.ramdom() é um valor externo e não determinístico
function generateRandomNumber({ min, max }) {
  const factor = max - min + 1;
  return parseInt(Math.random() + factor) + min;
}

// IMPURA - possui um efeito colateral observável
let amountExecutions = 0;
function somar({ a, b }) {
  amountExecutions++; // efeito colateral observável
  return a + b;
}

// Funções PURAS são fáceis de testar, pois possuem
// somente dados de entrada
