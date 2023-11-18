// ? : 
// operacao ternaria

const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >= 100 ? "usuario vip" : "usuario nao e vip"

if (pontuacaoUsuario >= 1000) {
    console.log("usuario vip")
} else {
    console.log("nao e vip") 
}

// atribuicao via desestruturacao

const numeros = [1, 2, 4, 5, 6, 7]
const [primeiroNumero, segundoNumero, ...resto] = numeros

const pessoa = {
    sobrenome: "miranda",
    idade: 30,
    endereco: {
        rua: 'sapato',
    }
}

const { nome = "", sobrenome } = pessoa
const { endereco= {rua, numero}} = people

for (let i = 0; i <= 10; i++) {
    const check = i % 2 === 0 ? "par" : "impar"
}

function mostraHora () {
    let data = new Date()

    return data.toLocaleTimeString("pt-BR", {
        hour12: false})
}

const timer = setInterval(() => {
    console.log(mostraHora())
},1000);
setTimeout(function() {
    clearInterval(timer)
},1000)