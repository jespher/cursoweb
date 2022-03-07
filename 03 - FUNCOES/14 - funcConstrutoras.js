function Carro(velocMaxima = 200, delta = 5) {
    // atributo privado
    let velocAtual = 0

    // método público
    this.acelerar = function () {
        if(velocAtual + delta <= velocMaxima) {
            velocAtual += delta
        } else {
            velocAtual = velocMaxima
        }
    }
    // método público
    this.getVelocAtual = function () {
        return velocAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocAtual());

const ferrari = new Carro(250, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocAtual());

const doblo = new Carro(300, 35)
doblo.acelerar()
console.log(doblo.getVelocAtual());