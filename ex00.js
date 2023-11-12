const numero = prompt("Digite um numero")
const inteiro = Number.isInteger(numero)
document.body.innerHTML += `<strong> Seu numero é ${numero} </strong> <br />`
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)} <br />`

if (inteiro == false) {
    document.body.innerHTML += `é um numero inteiro! <br />`
}else {
    document.body.innerHTML += `não é um numero inteiro <br />`
}

document.body.innerHTML += `é NaN: ${Number.isNaN(numero)} <br />`
document.body.innerHTML += `arredondado para baixo: ${Math.round(numero)}`
document.body.innerHTML += `arredondado para cima:`
document.body.innerHTML += `com duas casas decimais: ${numero.toFixed(2)}`