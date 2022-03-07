const carrinho = [
    '{ "nome": "bolacha", "preco": 4.99 }',
    '{ "nome": "cafe", "preco": 17.99 }',
    '{ "nome": "manteiga", "preco": 12.99 }',
    '{ "nome": "pao", "preco": 9.00 }',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
