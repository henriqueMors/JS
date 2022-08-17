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
    var tn1 = window.document.getElementById('txtn1')
    var n1 = Number(tn1.value)
    
    var tn2 = window.document.getElementById('txtn2')
    var n2 = Number(tn2.value)

    var resg = window.document.getElementById('resg')
    var rg = Number(resg.value)

    var rest = window.document.getElementById('rest')
    var rt = Number(rest.value)

    resg = (n1 * 100) /n2
    console.log(resg)

}