function Calculadora() {
    this.display = document.querySelector(".display")

    this.cliqueBotão = () => {
        document.addEventListener("click", event => {
            const elemento = event.target;
            if(elemento.classList.contains("btn-num")) this.addNumDisplay(elemento)
            if(elemento.classList.contains("clear")) this.clear(elemento)
            if(elemento.classList.contains("igual")) this.resultado(elemento)
            if(elemento.classList.contains("soma")) this.realizarConta(elemento)
        })
    },

    this.addNumDisplay = elemento => this.display.value += elemento.innerText

    this.clear = () => this.display.value = " "

    this.inicia = () => {
        this.cliqueBotão()
    }

    }

const calculadora = new Calculadora()
calculadora.inicia()

