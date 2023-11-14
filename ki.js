function check(pessoas_1, pessoas_2) {
    for (const pessoa of pessoas_1) {
        console.log(pessoa)
        let fulano = pessoa
        if (pessoas_1.includes(fulano)) {
            console.log("socorro")
        }
    } 
    
}

const galera = ["Marcelinho", "Huguinho", "Luizinho"]
const galera_01 = ["Marcelinho", "Huguinho"]
const resultado = check(galera,galera_01)
console.log(resultado)
