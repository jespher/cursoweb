// console.log(typeof String)
// console.log(typeof Array)
// console.log(typeof Object)

// "Toda função tem um atributo chamado .prototype"

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

// console.log('Teste'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4].first())
console.log(['A', 'B', 'C'].first())

String.prototype.toString = function() {
    return 'Você ferrou com o string pow...'
}


console.log('Teste com bug'.reverse())