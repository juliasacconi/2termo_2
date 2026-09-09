const entrada = require('readline-sync');

let soma = 0;

for (let i = 1; i <= 5; i++) {
  let valor = entrada.questionFloat(`Digite a medicao ${i}: `);
  soma += valor; 
}

let media = soma / 5;

console.log(`Soma das medicoes: ${soma}`);
console.log(`Media final: ${media}`);
