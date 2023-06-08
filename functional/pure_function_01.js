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
