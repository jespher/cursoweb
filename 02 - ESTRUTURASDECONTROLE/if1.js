function soBoaNoticia(nota) {
    if(nota >=7 || nota == 10) {
        console.log('Aprovado com ' + nota + ' de nota.');
    } else if (nota >= 3 && nota <= 6.9) {
        console.log('Ficou em recuperação ' + nota + ' de nota.');
    } else if (nota < 3) {
        console.log('Foi Reprovado com ' + nota + ' de nota.');
    }
}

soBoaNoticia(6)

function seForVerdade (valor) {
    if (valor) {
        console.log('É verdade...', + valor);
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(NaN)
seForVerdade(undefined)
seForVerdade('')
seForVerdade(-1)
seForVerdade(0)
seForVerdade('?')
seForVerdade([1, 3])
seForVerdade({})
