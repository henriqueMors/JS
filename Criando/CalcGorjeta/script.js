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
    window.alert(tn2)
}




/*{


    var tn2 = window.document.getElementById('txtn2')
    var resg = window.document.getElementById('resg')
    var rest = window.document.getElementById('rest')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var rg = Number(resg.value)
    var rt = Number(rest.value)
    rt = n1 + rg

        if (n2 == 'Otimo') {
                rg = (n1 * 100) / 15
            
            } else if (n2 == 'Bom') {
                rg = (n1 * 100) / 10
                
            } else if (n2 == 'Regular') {
                rg = (n1 * 100) / 5
                
            } else if (n2 == 'Ruim') {
                rg = (n1 * 100) / 2
                
            } else {
                rg = n1 + 0
                
            }
        rg.innerHTML =`O valor da sua gorjeta ficou em R$${rg}`
        rt.innerHTML = `O valor da conta ficou em R$${rt}`

}*/