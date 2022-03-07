/* Primeiro jeito */
let dobro = function(a) {
    return 2 * a
}
console.log(dobro(20))

/* Segundo jeito */
dobro = (a) => {
    return 2 * a
}
console.log(dobro(2));

/* Terceio jeito */
dobro = a => 2 * a // return está implícito
console.log(dobro(Math.PI));

/* Outros exemplos */
let ola1 = function() {
    return 'Olá 1'
}
console.log(ola1())


ola2 = () => 'Olá 2'
console.log(ola2())

ola3 = _ => 'Olá 3'
console.log(ola3());
