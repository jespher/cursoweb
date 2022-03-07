Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{ "nome": "bolacha", "preco": 4.99 }',
    '{ "nome": "cafe", "preco": 17.99 }',
    '{ "nome": "manteiga", "preco": 12.99 }',
    '{ "nome": "pao", "preco": 9.00 }',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
