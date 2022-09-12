/* metodos nativos do array
 loops(laços de repetição)
 funções callback
 */
//! DEFAFIO - MÉDIA :Calcular a média entre as seguintes notas 

//10,6.5,8,7,5

/*let nota1= 10
let nota2=6.5
let nota3=8
let nota4=7.5

let media =(nota1+nota2+nota3+nota4) /4
console.log(media)

*/
const nota = [10,6.5,8,7.5]
let media = (nota[0]+nota[1]+nota[2]+nota[3]) / nota.length //é igual a 4, pois length da o total de arrays existentes
console.log(media)

/* agrupando diversões valores */
const numero1 = 50;
const numero2 = 43;
const numero3 = 12;

// utilizando array
const numeros = [50, 43, 12];


//Quando falamos de valores, estamos nos referindo a dados de algum tipo: string (texto), number (número), booleano (true ou false) ou outros dados reconhecidos pelo JavaScript.
const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];

// cada valor é chamado de elemento
// array com 1 elemento
const numero = [5];

// array com 3 elementos
const nums = [50, 43, 12];

//Cada elemento está localizado em uma posição na lista, chamada de índice:

const nums1 = [50, 43, 12];
// o número 43 está na posição de número 2 (segunda posição) nessa lista de três números.
// índice     0   1   2   3
const nums = [50, 43, 12, 98];

/* A propriedade length:
Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array. Por exemplo:

Considerando que o array acima tem 4 elementos, podemos dizer que o valor retornado por length sempre será 1 número a mais do que o valor de índice mais alto. Neste caso, o array nums é um array de 4 elementos e seus índices vão de 0 a 3.

A propriedade length é muito útil para trabalharmos com arrays, pois não é preciso saber o número de elementos de antemão e nem tentar contá-los, o que seria impraticável em um programa de computador real.

Esta é só uma pequena introdução! Ainda há muito o que estudar e aprender sobre arrays e como utilizar esta estrutura. */
// índice     0   1   2   3
const nums = [50, 43, 12, 98];
console.log(nums.length) //4


