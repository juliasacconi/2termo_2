const entrada = require('readline-sync');

const peca = entrada.questionInt("Digite o numero de pecas produzidas por turno: ");

console.log("Produção por ciclo:");

for (let p = peca, i = 1; i < 11; i++, p += 15) {
    console.log(`Ciclo: ${i} - Peças: ${p}`);
}
