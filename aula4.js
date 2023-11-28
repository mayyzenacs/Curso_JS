function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

async function espera(valor) {
    await console.log("fase 1", rand(0, 3))
}