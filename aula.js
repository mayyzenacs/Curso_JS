
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


let cont = 0;

contador += 2;
contador += 2;
contador += 2;
console.log(contador);


