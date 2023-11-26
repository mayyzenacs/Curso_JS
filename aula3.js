// aaaaaa

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque
}

    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque
        },
        set: function(valor) {
            this.estoque = main
        }
    })

const p1 = new Produto("camiseta", 20, 3)

const produto = {nome: "produto", preco: 1.8}
const caneca = Object.assign({}. produto, {material: "porcelana"}) // pode ser usar resto tbm ...produto
caneca.nome = "caneco"
caneca.preco = 3.6
Object.keys(produto) // chaves 
Object.values(produto) // valores
Object.entries(produto) // retorna tudo
Object.freeze(produto) // nao pode ser alterado
Object.getOwnPropertyDescriptor(produto, "nome")

produto.prototype.preco( )
 
function Produto(nome, preco, cor) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(valor) {
    this.preco = this. preco - (this.preco (valor / 100))
}
Produto.prototype.aumento = function(valor) {
    this.preco = this.preco + (this.preco (valor / 100))
}

function Console(nome, preco, geracao) {
    Produto.call(this, nome, preco)
    this.geracao = geracao;
}
Console.prototype = Object.create(Produto.prototype);
Console.prototype.constructor = Console;

const prod = new Console("playstation", 1500, "preto")

class objetoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    
    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} esta ligado`)
            return
        }
        this.ligado = true
    }

    desligado() {
        if(!this.ligado) {
            console.log(`${this.nome} esta desligado`)
        }
    }
}

class Smartphone extends objetoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }

    static trocaBateria() { // metodo estatico
        console.log("trocando a bateria")
    }
}

const s1 = new Smartphone("Xiaomi", "azul", "redmi 10")
