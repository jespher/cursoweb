const notas = [2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.1]

// sem callback
// let notasBaixas = []
// let notasAltas = []
// for(let i in notas) {
//     if(notas[i] < 7) {
//         notasBaixas.push(notas[i])
//     } else if (notas[i] > 7) {
//         notasAltas.push(notas[i])
//     }
// }

// console.log(notasBaixas);
// console.log(notasAltas);

// com callback
notasBaixas = notas.filter(function(nota) {
    return nota < 7
})


notasAltas = notas.filter(function(nota) {
    return nota > 7
})

console.log(notasBaixas);
console.log(notasAltas);