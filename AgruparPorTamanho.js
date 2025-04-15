/*
array com palavras de tamanhos diferentes
analizar tamanho das strings
separar em grupos
retornar objeto com os numeros e palavras corespondentes
*/

function agruparPorTamanho(palavras) {
    const resultado = {};  //objeto que vai armazenar o resultado final

    palavras.forEach((palavra) => {  //pega cada item da array e chama de palavra
        const tamanho = palavra.length; //pega os tamanhos das palavras

    if (resultado[tamanho]) {
        resultado[tamanho].push(palavra);
    } else {
        resultado[tamanho] = [palavra];
    }
    });

    return resultado;
}

let palavras = [
    "banana",
    "ola",
    "paralelepipedo",
    "polvo",
    "computador",
    "jogos",
    "praias"
]

console.log(agruparPorTamanho(palavras));

/*
for in = pega as chaves do objeto
for of = pega os valores do objeto
forEach = faz uma função para cada item da array
*/
