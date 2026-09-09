const entrada = require ('readline-sync');


console.log("\n-------- SISTEMA DE INSPECAO --------");

const material = entrada.questionInt("Digite o peso da peca (g):  ");


console.log("\n-------- QUALIDADE (INSPECAO) --------");
if (material >= 95 && material <= 105 ) {
    console.log(`PECA APROVADA`);
}
else {
    console.log(`PECA REPROVADA`);
}