
let param = (new URL(document.location)).searchParams
let type = param.get('type')
let level = param.get('level')

const tipos = {
    fullbody:'CORPO TODO', 
    upper:'SUPERIORES', 
    lower:'INFERIORES', 
    abs:'ABS & CARDIO'
}

if (Object.hasOwn(tipos, type)){
    let res = document.getElementById('restype')
    res.innerHTML = tipos[type]
}

const niveis = {
    beginner:'INICIANTE', 
    intermed:'INTEMEDIÁRIO', 
    advanced:'AVANÇADO', 
    athlet:'ATLETA'
}

if (Object.hasOwn(niveis, level)){
    let res = document.getElementById('reslevel')
    res.innerHTML = niveis[level]
}
