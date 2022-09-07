// string modelo 
//node template-literal.js
const nome = "Daniely"
const idade = 2022-2000
const cidadeNasc = "União dos Palmares"
const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + ", sou de " + cidadeNasc
console.log(apresentacao) // dessa forma a pessoa se perde facil demais na hora de concatenar

/************************************************************************ */
const apresentacao01 = `meu nome é ${nome}, minha cidade é ${idade} e nasci da minha cidade ${cidadeNasc}`
console.log(apresentacao01)


/*********************** praticando operadores *********************** */
a = []
b = 20
c = true 
d = ''

if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}
if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}



