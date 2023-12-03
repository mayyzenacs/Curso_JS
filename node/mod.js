class Cadastro {
    constructor (nome, sobrenome, idade, sexo) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando`)

    }
}

module.exports.nome = nome // exporta
exports.Cadastro = Cadastro
exports.nome = nome // exporta 

const call = new Cadastro("alguém")

console.log(exports) // loga o que esta sendo exportado
