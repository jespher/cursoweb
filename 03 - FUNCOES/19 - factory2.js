function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Sabonete', 1.99))
console.log(criarProduto('Celular', 1799.00));