function agradecimento() {
    var agora = new Date()
    var h = agora.getHours()
    var msg = window.document.getElementById('msg')


if (h >= 6 && h < 12 ) {
        //bom dia
        msg.innerHTML = `Obrigado e tenha um bom dia!`

    } else if (h >= 12 && h < 18 ) {
        //boa tarde
        msg.innerHTML = `Obrigado e tenha uma boa tarde!`
        
    } else {
        //boa noite
        msg.innerHTML = `Obrigado e tenha uma boa noite`
    }
}

function calcular() {

    var vc = window.document.getElementById('vconta')
    var porc = window.document.getElementById('nivel')
    var resg = window.document.getElementById('resg')
    var rest = window.document.getElementById('rest')

    var vc = Number(vc.value)
    var porc = Number(porc.value)
    var resg = Number(resg.value)
    var rest = Number(rest.value)

        if (porc == 'Ótimo') {
            resg = vc * 15
            resg.innerHTML =`O valor da sua gorjeta ficou em R$${resg}`
            }

}