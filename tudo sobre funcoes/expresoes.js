// função normal
function minhaFuncao(){
    //bloco de codigo
}
minhaFuncao("param")

// ! expressão de função

const soma = function(num1,num2){return num1 + num2} //anonimas, nao tem nome e é bom deixar em uma só linha

console.log(soma(1,1))

// ! a principal diferença entre elas : HOISTING
// ! FUNÇÕES E VARIVEIS SÃO "LISTADAS" NO TOPO
 console(apresentar()) // a função apresentar pode ser chama antes de ser rodada
//? a diferença entre as duas 
 function apresentar(){
return "olá"
 }

 console.log(somar(1,1)) //nao conseguimos chamar uma função no formato de expressão antes de ser inicializada; ela é considerada uma varivael 
 const somar = function(x,y){return x+y}


