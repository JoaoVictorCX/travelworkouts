let botoes = document.getElementsByClassName('btnpage4')
let param = document.location.search

Array.from(botoes).forEach(botao => {
    let newparam = param+"&level="+botao.id
    botao.href = "page5.html"+newparam
});