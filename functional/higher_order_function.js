// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions.

function exec(fn, ...params) {
  return function (text) {
    return `${text} ${fn(...params)}!`;
  };
}

function some(a, b, c) {
  return a + b + c;
}

function mult(a, b) {
  return a * b;
}

console.log(exec(some, 1, 2, 3)("some result :"));
console.log(exec(mult, 2, 3)("mult result:"));
