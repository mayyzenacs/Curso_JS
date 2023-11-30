import "core-js/stable" // navegador antigo
import "regenerator-runtime/runtime"
import "./css/style.css";

const somaNum = 2 + 2
const sobrenome = "pereira"
const idade = 20
export const sabao = "nivea" // exporta direto


export default function soma(x,y) { // exportando um padrao
    return x + y
}

const sabonete = (valor, valor2) => {
    return valor + valor2
}

export {somaNum, sobrenome, idade, soma, sabonete}