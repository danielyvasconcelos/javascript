// var : funciona em qualquer parte do codigo 
var altura = 5
var comprimento= 7
area =  altura * comprimento
console.log(area)
// a let é melhor para ser interpretada em blocos 
let forma1 = 'retangulo'
let altura1 = 5
let comprimento1 = 7
let area1;

if (forma1 == 'retangulo'){
    area1 =  altura1 * comprimento1;

}else{
    area1 = (altura1 * comprimento1) / 2
}
console.log(area1)

// const é um valor constante e portante é imutavel, ou seja não muda ; caso queira mudar o codigo futuramente é aconselhavel usar var ou let
const forma2 = "quadrado"
const altura2 = 5
const comprimento2= 7
let area2; // se fossemos alterar ela nao pode ser uma constate 


if (forma2 === 'quadrado'){
area2 = altura2 * comprimento2; // aqui funciona pq a area declarada desse jeito a maquina interpreta como uma variavel 
}else{
    area2 = (altura2*comprimento2)/2
}
console.log(area2)

// no lugar da variavel é indicado usar o let pq var está mais vuneravel a bugs
