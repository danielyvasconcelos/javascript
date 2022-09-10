// terceira forma de escrever uma função
//ES6 
// função normal 
function apresentar(nome){
return `Meu Nome é ${nome}`
}
// Arrow Function - nao pode ser nomeada , sempre vem com uma const e nome da variavel 
const arrowFunction = nome => `Meu Nome é ${nome}`;
const soma = (x,y) => x + y;


// Arrow function com mais de uma linha de instrução NÃO DA PRA FAZER SEM RETORNO E SEM CHAVES 
// hoistin : a arrow function se comporta com uma expressão
const SomaPositivo = (num1, num2) => {
if (num1>10 || num2 > 10){
    return "somente numeros de 1 a 9"
}else{
    return num1 + num2
}
}
console.log( SomaPositivo(8,2));
