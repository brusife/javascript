function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
        //alert("[ERRO] Faltam dados!")
        
    } else {
        res.innerHTML = "Contando...<br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            // CONTRAGEM DESCRESCENTE
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449} `
            }
        }        
        res.innerHTML += ` \u{1F3c1} `
    }
}