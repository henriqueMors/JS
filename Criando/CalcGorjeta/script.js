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

document.getElementById('vporpes').style.display = 'none';
document.getElementById('gorj').style.display = 'none';
document.getElementById('vfin').style.display = 'none';


function calcular() {
    var vconta = window.document.getElementById('valorconta').value;
    var atend = window.document.getElementById('atendimento').value;
    var npessoas = window.document.getElementById('npessoas').value;
    var vpp = window.document.getElementById('vporpes').value;
    var vf = window.document.getElementById('vfin').value;
    var gorj = window.document.getElementById('gorj').value;

    if ( vconta === "" || isNaN(vconta) || isNaN(npessoas)) {
        alert("[ ERROR ] : Digite valor válido!");
        return;

    }
    

    if (npessoas ==="" || npessoas <= 1) {
        npessoas = 1;
        document.getElementById('')
        return;

    }

    var finalgorj = ( vconta * atend ) / npessoas;

    var finalvf = gorj + vconta
    window.alert(finalgorj)


}