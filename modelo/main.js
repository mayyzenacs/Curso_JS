

const form = document.querySelector("#form")
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const inputPeso = event.target.querySelector("#peso-entrada")
    const inputAltura = event.target.querySelector("#altura-entrada")
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if (!peso) {
        setResultado("peso invalido", false)
        return
    }
    if (!altura) {
        setResultado("altura invalida", false)
        return
    }

    const imc = getImc(peso, altura)
  
});

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)

}

function criaParagrafo () {
    const paragrafo = document.createElement("paragrafo")
    return paragrafo
}

function setResultado(msg, isvalid) {
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""
    const p = criaParagrafo()
    resultado.appendChild(p)

}

