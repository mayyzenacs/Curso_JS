const reader = document.querySelector(".container")
const date = new Date()
let semana = alteraDia(date.getDay())
let mes = alterarMes(date.getMonth())


// quarta-feira, 15 de novembro de 2023, 00h00 

function alteraDia (diaSemana) {
    switch (diaSemana) {
    case 0:
        diaSemanatexto = "Domingo"
        return diaSemanatexto
    case 1:
        diaSemanatexto =  "Segunda-Feira"
        return diaSemanatexto
    case 2:
        diaSemanatexto = "Terca-Feira"
        return diaSemanatexto
    case 3:
        diaSemanatexto = "Quarta-Feira"
        return diaSemanatexto
    } 
}

function alterarMes (numeroMes) {
    switch (numeroMes) {
    case 10:
        nomesMes = "novembro"
        return nomesMes
    }
}
   
reader.innerHTML = `${semana}, ${date.getDate()} de ${mes} de ${date.getFullYear()}, ${date.getHours()}h${date.getMinutes()}`