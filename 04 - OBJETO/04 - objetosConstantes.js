// pessoa -> 123 -> {...}


const pessoa = { nome: 'João'}
console.log(pessoa)

pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

