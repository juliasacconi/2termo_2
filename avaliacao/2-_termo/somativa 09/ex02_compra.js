const entrada = require ('readline-sync');

const material = entrada.question("Nome do material:  ");
const precoUnid = entrada.questionFloat("Preco por unidade:  ");
const qntdMaterial = entrada.questionInt("Quantidade comprada: ")

const total = (qntdMaterial * precoUnid);

 console.log("\n -------- RELATORIO DE COMPRA -------");
console.log(`Material comprado: ${material}`);
console.log(`Preco unitario: ${precoUnid}`);
console.log(`Quantidade: ${qntdMaterial}`);
console.log(`Valor total: R$ ${total}`)
console.log("--------------------------------------")
