// Diz-se que uma linguagem de programação
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra variável

const x = 1;
const y = function (text) {
  console.log(`Esse é o texto: ${text}`);
};

console.log(x);
console.log(y("2"));

// O JavaScript trata uma função como variável
