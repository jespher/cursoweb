function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma());
console.log(soma(2));
console.log(soma(2, 3));
console.log(soma(2.3, 4.5, 5.9));
console.log(soma(3.4,' => Teste de QA'));
console.log(soma(1, ') a', ' + ', 'b', ' + ', 'c', ' => ', 'd'));

