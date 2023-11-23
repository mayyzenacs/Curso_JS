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

    inicia = () => this.cliqueBotão()

    fazConta(); {
        let conta = this.display.value

        try {
            conta = eval(conta)
            if(!conta) {
                alert("conta invalida")
                return
            }
            this.display.value = conta
        }
        catch(e) {
            alert("conta invalida")
            return
        }
    }

    this.addNumDisplay = elemento => this.display.value += elemento.innerText

    this.clear = () => this.display.value = " "

    this.resultado = () => this.fazConta()


    }

const calculadora = new Calculadora()
calculadora.inicia()

