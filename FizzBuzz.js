/* 
recebe um numero inteiro(x)
retorna uma array de 1 a x

mais:
divisivel por 3 = fizz
divisivel por 5 = buzz
divisivel por 3 e 5 = fizzbuzz
*/

function fizzBuzz() {
    let n = parseInt(prompt("Digite um número inteiro:"), 10);
    const numeros = [];
    for(let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numeros.push("fizzbuzz");
        }
        else if (i % 3 === 0) {
            numeros.push("fizz");
        }
        else if (i % 5 === 0) {
            numeros.push("buzz");
        }
        else {
            numeros.push(i);
        }
    }
    console.log(numeros);
}
fizzBuzz();