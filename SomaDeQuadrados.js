/*
array de numeros int
map para calcular o quadrado de cada numero
reduce para somar os quadrados
*/

// map cria um novo array, aplicando uma função em cada item do array original.
// reduce executa uma funcao de reducao em cada item do array acumulando os resultados

let numeros = [2, 5, 10, 11, 14, 40];

let quadradoNumero = numeros.map(numero => numero * numero); 

let suma = quadradoNumero.reduce((acc, curr) => acc + curr, 0);

console.log(suma);