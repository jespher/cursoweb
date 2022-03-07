const notas = [6.7, 7.5, 8.9, 10, 6.9, 7.5, 8.7, 7.0, 2.3]

for(let i in notas) {
    console.log(`Índice ${i} =`, notas[i])
}

const pessoa = {
    nome: 'José',
    sobrenome: 'Perez',
    idade: 39,
    peso: 75
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
