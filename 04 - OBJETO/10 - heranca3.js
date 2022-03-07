const pai = {
    nome: 'Pedro',
    corCabelo: 'preto',
    corOlhos: 'verde'
}

const mae = {
    nome: 'Marina',
    corCabelo: 'loiro',
    corOlhos: 'azuis'
}

const filho1 = Object.create(pai)
filho1.nome = 'José'
console.log('Nome: ' + filho1.nome)
console.log('Cor dos olhos: ' + filho1.corOlhos)
console.log('Cor do cabelo: ' + filho1.corCabelo)

const filho2 = Object.create(mae)
filho2.nome = 'Tiago'
frase = 'Nome: ' + filho2.nome + '. Filho de... ' + mae.nome + ' & ' + pai.nome
console.log(frase)


const filha = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumarable: true
    }
})

console.log(filha.nome)
filha.nome = 'Carla'
console.log(`${filha.nome} tem cabelo ${filha.corCabelo}`)
console.log(Object.keys(filho2))

for(let key in filho2) {
   filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}



