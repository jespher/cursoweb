function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}


const aula01 = new Aula('JS', 55)
const aula02 = new Aula('CSS', 70)

console.log(aula01, aula02)

// Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 432)

console.log(aula3, aula4)