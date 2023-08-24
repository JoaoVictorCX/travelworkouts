

const lowermovs = {
    squat: {
        nome: "air squats",
        qtde: 20
    },
    lunge: {
        nome: "lunges",
        qtde: 20
    },
    step: {
        nome: "step-ups",
        qtde: 20
    },
    hipextension: {
        nome: "hip entension",
        qtde: 20
    },
    downup: {
        nome: "jumping squats",
        qtde: 20
    }
}

const abs = [
    "Sit-up",
    "V-up alt",
    "V-up",
    "Plank",
    "Mountain climbers"
]

const cardiomovs = {
    burpee: {
        nome: "burpees",
        qtde: 20
    },
    shuttlerun: {
        nome: "shuttle run",
        qtde: 16
    },
    singleunder: {
        nome: "single-unders",
        qtde: 100
    },
    jumpingjack: {
        nome: "jumping jacks",
        qtde: 40
    },
    run: {
        nome: "meters run",
        qtde: 800
    }
}

let res = document.querySelector('div#res')
let param = (new URL(document.location)).searchParams
let type = param.get('type')
let level = param.get('level')
let reps = 0

const niveis = {
    beginner:0.25, 
    intermed:0.5, 
    advanced:0.75, 
    athlet:1
}

if (Object.hasOwn(niveis, level)){
    reps = niveis[level]
}

function wodgen () {
    res.innerHTML = ''
    res.innerHTML += '<strong>10 rounds for time:'
    randMovements = []
    
    while (randMovements.length < 3){
        var num = Math.floor(Math.random() * 5) + 1
        if (randMovements.indexOf(num) === -1)
            randMovements.push(num)
    }

    for (let i = 0; i < (randMovements.length); i++){
        var numMov = randMovements[i]
        if (i < 1){
            cardioKeys = Object.keys(cardiomovs)
            let movement = cardioKeys[numMov - 1]
            let movimento = cardiomovs[movement]
            res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
        } else {
            lowerKeys = Object.keys(lowermovs)
            let movement = lowerKeys[numMov - 1]
            let movimento = lowermovs[movement]
            res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
        }
    }
}

function setURL () {
    let param2 = document.location.search
    let btnovo = document.getElementById('btnpage3')
    btnpage3.href = "resultado.html"+param2
}

