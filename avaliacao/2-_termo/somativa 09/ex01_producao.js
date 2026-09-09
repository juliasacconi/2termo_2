const entrada = require ('readline-sync');

console.log("-------- SISTEMA DE PRODUCAO --------");

const turno = entrada.questionFloat("Digite a duracao do turno (HORAS):  ");
const qntdProdHoras = entrada.questionInt("Quantidade produzida por hora:  ");

const total = (qntdProdHoras * turno);

console.log("\n -------- RELATORIO DE SERVICO -------");
console.log(`Pecas produzidas por hora: ${qntdProdHoras} pecas`);
console.log(`Quantidade de horas: ${turno} horas`);
console.log(`Total produzido: ${total} pecas`);
console.log("--------------------------------------")