//Para o vscode ler os prompts
const prompt = require('prompt-sync')();

let aluno, nota , media = 0, conceito;
console.log("Programa para calcular conceito:");
aluno = prompt("Olá qual o seu nome? ");

// for para quantas vezes sabe que vai repetir
for(let  i = 1;i <= 3; i++) {
    while(true){
        nota = Number(prompt(`${aluno} Qual a sua ${i}a notas? `));
        if (!isNaN(nota) && nota >=0 && nota <=10) {break;}
            alert(`Por favor, insira uma nota válida!`)}
        //media1 = (media_inicial(=0) + nota1)
        //media2 = (media1 + nota2)
        //media3 = (media2 + nota3)
        media += nota }

media /= 3; //media_final = (media3/3)

//condição ? valor_se_verdadeiro : valor_se_falso;
conceito = media >= 9.5 ? "Excelente" :
            media < 9.5 && media >= 8 ? "Ótimo" :
            media < 8 && media >= 7 ? "Bom" :
            media < 7 && media >= 5 ? "ANS" : 
            "Insuficiente";

console.log(`${aluno} sua média foi ${media}, e seu conceito ficou ${conceito}!`);
