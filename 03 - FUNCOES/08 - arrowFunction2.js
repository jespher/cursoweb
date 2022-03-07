function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000)
}

new Pessoa

// function Alfabeto() {
//     this.letras = 'a'

//     setInterval(() => {
//         this.letras++
//         console.log(this.letras);
//     }, 1000)
// }

// new Alfabeto