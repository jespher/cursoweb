// Estratégia 1 para gerar valor padrão

// function soma1(a, b, c) {
//     a = a || 1
//     b = b || 1
//     c = c || 1
//     return a + b + c
// }

// console.log(soma1(), soma1(3), soma1(2, 3, 4))
// console.log(soma1(3, 3))
// console.log(soma1(0, 0, 0)) // retorna como falso e assume o valor padrão.
// console.log(soma1(-1, -1, -1))

/*     ********************************************************************************************    */

// Estratégia 2, 3 e 4 para gerar valor padrão

// function soma2(a, b, c) {
//     a = a !== undefined ? a : 1
//     b = b !== undefined ? b : 1
//     c = c !== undefined ? c : 1
//     return a + b + c
// }

// console.log(soma2(), soma2(3), soma2(2, 3, 7));

// function soma3(a, b, c) {
//     a = 1 in arguments ? a : 1
//     b = 1 in arguments ? b : 1
//     c = 1 in arguments ? c : 1
//     return a + b + c
// }

// console.log(soma3())
// console.log(soma3(9, 9, 2));
// console.log(soma3(2, 2));

// function soma4(a, b, c) {
//     a = isNaN(a) ? 1 : a
//     b = isNaN(b) ? 1 : b
//     c = isNaN(c) ? 1 : c
//     return a + b + c
// }

// console.log(soma4(2, 1), soma4(), soma4(0, 0, 0))
// console.log(soma4('Teste', 2, 4));


/*     ********************************************************************************************    */

// Valor padrão ES2015

function soma5(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma5(), soma5(3), soma5(5), soma5(0, 0, 0));