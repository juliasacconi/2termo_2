const entrada = require ('readline-sync');

const temp = entrada.questionInt("Digite a temperatura da maquina (Celsius):  ");

console.log("\n-------- SITUACAO (TEMPERATURA) --------");
console.log(`Temperatura atual: ${temp}°C `);


if (temp <= 60) {
    console.log(`Situacao: Normal.`);
}
else if (temp > 61 && temp <= 80) {
    console.log(`Situacao: Atencao!`);
}
else {
    console.log(`Situacao: Critica...`)
}
