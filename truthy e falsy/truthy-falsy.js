//boolean
const logado = true
const deslogado= false

//truthy e falsy
//0 => false
// 1 => true

console.log(0==false)
console.log(""==false)
console.log(1==true)


// underfined 

let minhaVar; //está indefinida
let varNull = null;
console.log(typeof minhaVar)
console.log(typeof varNull) // object , na verdade é um bug 

// palavra-chave => typeof pergunta qual tipo de dado é 
let numero= 3
let texto = "Alura"
console.log( typeof numero)
console.log(typeof texto)
//node truthy-falsy.js