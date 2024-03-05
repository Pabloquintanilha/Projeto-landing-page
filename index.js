var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")


function rolarparadireita() {
    leonardo.style ="display:none" 
    bruna.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex; margin-top:68px"
}

function rolarparaesquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setadireita.style ="display:flex; margin-top:50px"
    setaesquerda.style ="display:none"
}