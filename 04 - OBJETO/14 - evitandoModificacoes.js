// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'qualquer', 
    preco: 1.99, 
    tag: 'promocao'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'penal'
produto.preco = 5.99
delete produto.tag
produto.desc = 'Teste'

// Posso alterar valores, posso deletar valores, mas não posso acrescentar novos atributos(chaves e valores).

// console.log(produto)

// Object.seal
const pessoa = { 
    nome: 'Jorge',
    idade: 37
}

Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Outro Nome'
delete pessoa.idade
pessoa.peso = 35
console.log(pessoa)

// Object.freeze = selado + valores constantes



