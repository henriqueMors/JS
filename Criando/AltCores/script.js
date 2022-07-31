function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
 
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }

function clicou() {
    let alt = document.getElementById("colorir")
    alt.style.backgroundColor = gerar_cor()
    
}

function segurou() {
    let alt = document.getElementById("colorir")
    alt.style.background = gerar_cor()
}

function entrou() {
    let alt = document.getElementById("colorir")
    alt.style.background = gerar_cor()
}

function saiu () {
    let alt = document.getElementById("colorir")
    alt.style.background = gerar_cor()
}