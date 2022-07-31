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