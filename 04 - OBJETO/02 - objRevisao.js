// COLEÇÃO DINÂMICA DE PARES CHAVE/VALOR.

/*
const produto = new Object
produto.nome = 'Mesa'
produto['marca do produto'] = 'Generico'
produto.preco = 350

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)
*/

const carro = {
    categoria: 'Sedan',
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata',
    proprietario: {
        nome: 'Diebersan',
        idade: 35,
        endereco: {
            logradouro: 'Rua: Mato Grosso',
            num: 2210,
            bairro: 'Guaira'
        }
    },
    condutores: [{
        nome: 'José',
        idade: 77,
    }, {
        nome: 'Josiane',
        idade: 89
    }],

    calcularValorDoSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.num = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Pres. Kennedy'


// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro

console.log(carro.condutores)
console.log(carro.condutores.length)

