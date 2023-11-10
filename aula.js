
// tipos primitivos: string, number, undefined, null, boolean, symbol
const nome = "mayra"; // string
const idade = 25; // number
const peso = 47
const altura = 1.60 // number
let imc = null;
let anoNascimento = null; 
imc = peso / (altura * altura); // undefined
anoNascimento = 2023 - idade;
console.log(`paciente ${nome} com idade de ${idade}, peso ${peso} e altura ${altura}m`);
console.log(`ano de nascimento: ${anoNascimento}`)
console.log(`IMC de ${imc}`);

let contador = 10;
console.log(++contador);
parseInt // converter em number
parseFloat // converter em flutuante
Number // apenas sinaliza que e um numero

let cont = 0;
// contador += 
// NaN - Not a Number
contador += 2;
contador += 2;
contador += 2;
console.log(contador);

alert("Mensagem")
let num1 = prompt("Digite um numero")
let num2 = prompt("Digite outro numero")
let soma = null
num1 = parseInt(num1)
num2 = parseInt(num2)
console.log(`O resultado da tua soma é ${num1 + num2}`)
