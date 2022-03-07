// const pessoa = {
//     saudacao: 'Bom dia',
//     xingar: 'Que droga',
//     perguntar: 'Que horas são?',

//     falar() {
//         console.log(this.saudacao);
        
//     },

//     reclamar() {
//         console.log(this.xingar);
//     }
// }

// pessoa.falar()
// pessoa.reclamar() 

// const carro = {
//     ligado: 'Você ligou seu carro',
//     acelerar: 'Seu carro arrancou com velocidade inicial de 0km',
//     desligado: 'Você desligou seu carro',

//     ligarCarro() {
//         console.log(this.ligado);
//     },

//     acelerarCarro(){
//         console.log(this.acelerar);
//     },

//     desligarCarro() {
//         console.log(this.desligado);
//     }
// }

// carro.ligarCarro()
// carro.acelerarCarro()
// carro.desligarCarro()

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()