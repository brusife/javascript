function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente...')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <=12) {
                img.setAttribute('src', 'criancah.png')
            }else if (idade < 25) {
                img.setAttribute('src', 'jovemh.png')
            }else if (idade < 60) {
                img.setAttribute('src', 'adultoh.png')
            }else {
                img.setAttribute('src', 'idosoh.png')

            }
        
        
        }else {
            gênero = 'Mulher'
            if (idade >= 0 && idade <=12) {
                img.setAttribute('src', 'criancam.png')
            }else if (idade < 25) {
                img.setAttribute('src', 'jovemm.png')
            }else if (idade < 60) {
                img.setAttribute('src', 'adultom.png')
            }else {
                img.setAttribute('src', 'idosom.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}