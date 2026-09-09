const entrada = require('readline-sync');

let operadores = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite o nome do operador:");
  operadores.push(nome); 
}

for (let i = 0; i < operadores.length; i++) {
  console.log((i + 1) + " - " + operadores[i]);
}