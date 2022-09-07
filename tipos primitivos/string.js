// tipos de dados = STRING
// sempre usado com aspas duplas "" ou simples''
//nomes, senhas,numeros e etc desde que esteja com aspas ;
//

const texto1= "Olá Mundo!"
console.log(texto1)
const citacao = 'o leo disse "oi"!'
console.log(citacao)


//template string ou template literal


//concatenação (+) > junta duas coisas
const fala = "meu noome é "
const nome = "leo"
console.log(fala+nome)


//O Unicode tem códigos específicos para “cifrar” e “decifrar” caracteres de mais de 150 idiomas antigos e modernos, e também diversos outros conjuntos de caracteres como símbolos matemáticos e inclusive emojs.
// A Wikipedia tem uma lista extensa de todas as tabelas com os códigos Unicode e os caracteres, como por exemplo os que estão abaixo
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//o toLowerCase() que converte todos os caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido)
const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. 
//A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres