let botoes = document.getElementsByClassName('btnpage4')
let param = document.location.search

Array.from(botoes).forEach(botao => {
    let newparam = param+"&type="+botao.id
    botao.href = "resumo.html"+newparam
});