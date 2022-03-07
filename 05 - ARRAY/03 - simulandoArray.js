const quaseArray = { 0: 'Jeff', 1: 'Dir', 2: 'Mel', 3: 'Leiri', 4: 'Sérgio', 5: 'Derico' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[4])

const meuArray = ['Jeff', 'Dir', 'Mel', 'Leiri', 'Sergio', 'Derico']
console.log(quaseArray.toString(), meuArray)