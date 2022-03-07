// pilotos.pop() // 'pop' remove o último elemento do array.
// console.log(pilotos)

// pilotos.push('Diebersan') // 'push' adiciona um elemento no final do array.
// console.log(pilotos)

// pilotos.shift() // 'shift' remove o primeiro elemento do array.
// console.log(pilotos)

// Adicionar
// pilotos.splice(2, 0, 'Bottas', 'Massa')
// console.log(pilotos)

// Remover
// pilotos.splice(3, 1)
// console.log(pilotos)
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa', 'Diebersan']

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3)
console.log(algunsPilotos2)