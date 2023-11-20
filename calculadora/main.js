const div = document.querySelector(".divisao")
const paragrafos = div.querySelectorAll("p")

const estilosBody = getComputedStyle(document.body)
const backgroundColor = estilosBody.backgroundColor

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColor
    p.style.color = "white"
}