function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    throw 'Desculpe, sistema está fora.'
}

function imprimirNomeGritado (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Diebersan'}
imprimirNomeGritado(obj)