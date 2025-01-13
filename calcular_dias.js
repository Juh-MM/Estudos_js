//Para o vscode ler os prompts
const prompt = require('prompt-sync')();

console.log(`Programa para calcular dias:`); 
let nome, idade, qtdDias;
nome = prompt(`Olá qual seu nome? `);

//garantir que a entrada seja um numero
while(true){
    idade = Number(prompt(`Olá ${nome}, qual a sua idade? `)); 

    // !(not) isNaN(is not a number)
    if (!isNaN(idade) && idade>0){
        break;
    }
    alert(`Por favor, insira uma idade válida`);
}

qtdDias = idade * 365 + Math.floor(idade/4);

console.log(`Caramba! ${nome} você já viveu ${qtdDias} dias.`);

//cd .. para voltar uma pasta
//cd / voltar para a raiz 
//cd nome do arquivo/pasta para entrar dentro da pasta já aberta

