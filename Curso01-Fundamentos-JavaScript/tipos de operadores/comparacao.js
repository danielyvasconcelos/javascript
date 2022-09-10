//node comparacao.js
// =
// == -> comparação implícita 
// ===

const num = 5 
const texto = "5"
console.log(num ==texto)
// ? resultado com == é true ou seja só compara o valor
console.log(num ===texto)
// ?  resultado === é false, ou seja so compara o valor e o tipo de dado
console.log(typeof num)
console.log(typeof texto)

/* é recomendavel usar === nos codigos e a conversão explícita */
Number()
String()

/* 
*! ||: Operador “ou”, retorna true caso uma condição seja válida;
! &&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false. */