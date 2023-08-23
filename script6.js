
let param = (new URL(document.location)).searchParams
let type = param.get('type')
let level = param.get('level')

const tipos = {
    fullbody:'1', 
    upper:'2', 
    lower:'3', 
    abs:'4'
}

if (Object.hasOwn(tipos, type)){
    let res = document.getElementById('restype')
    res.innerHTML = tipos[type]
}

const niveis = {
    beginner:'inic', 
    intermed:'inter', 
    advanced:'avan', 
    athlet:'atle'
}

if (Object.hasOwn(niveis, level)){
    let res = document.getElementById('reslevel')
    res.innerHTML = niveis[level]
}