function compras(trab1, trab2) {
    const compSorverte = trab1 || trab2
    const compTV50 = trab1 && trab2
    //const compTV32 = !!(trab1 ^ trab2)
    const compTV32 = trab1 != trab2
    const manterSaudavel = !compSorverte

    return { compSorverte, compTV50, compTV32, manterSaudavel }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));