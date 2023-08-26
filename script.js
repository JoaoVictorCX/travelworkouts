const lower = {
    squat: {
        nome: "air squats",
        qtde: 40
    },
    lunge: {
        nome: "lunges",
        qtde: 40
    },
    step: {
        nome: "step-ups",
        qtde: 40
    },
    hipextension: {
        nome: "hip extension",
        qtde: 40
    },
    downup: {
        nome: "jumping squats",
        qtde: 40
    }
}

const upper = {
    pushup: {
        nome: "push-ups",
        qtde: 20
    },
    shouldertaps: {
        nome: "shoulder taps",
        qtde: 40
    },
    hspu: {
        nome: "handstand push-ups",
        qtde: 16
    },
    pullup: {
        nome: "pull-ups",
        qtde: 20
    },
    dips: {
        nome: "static dips",
        qtde: 20
    }
}

const abs = {
    situp: {
        nome: "sit-ups",
        qtde: 32
    },
    mountainclimber: {
        nome: "mountain climbers",
        qtde: 48
    },
    vupalt: {
        nome: "alt. v-ups",
        qtde: 24
    },
    sideplank: {
        nome: "bicycle Crunch",
        qtde: 32
    },
    plank: {
        nome: "secs plank",
        qtde: 60
    }
}

const cardio = {
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
        qtde: 400
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
    res.innerHTML += '<strong>5 rounds for time:'
    randMovements = []
    
    while (randMovements.length < 3){
        var num = Math.floor(Math.random() * 5) + 1
        if (randMovements.indexOf(num) === -1)
            randMovements.push(num)
    }

    for (let i = 0; i < (randMovements.length); i++){
        var numMov = randMovements[i]

        if (i < 1){
            cardioKeys = Object.keys(cardio)
            let movement = cardioKeys[numMov - 1]
            let movimento = cardio[movement]
            res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
        } else { 
            if (type == 'fullbody') {
                i--
                lowerKeys = Object.keys(lower)
                let movement = lowerKeys[numMov - 1]
                let movimento = lower[movement]
                res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
                i++
                upperKeys = Object.keys(upper)
                let movement2 = upperKeys[numMov - 1]
                let movimento2 = upper[movement2]
                res.innerHTML += `${movimento2.qtde*reps} ${movimento2.nome}<br>`
                i++
                absKeys = Object.keys(abs)
                let movement3 = absKeys[numMov - 1]
                let movimento3 = abs[movement3]
                res.innerHTML += `${movimento3.qtde*reps} ${movimento3.nome}<br>`
            } else if (type == 'lower') {
                lowerKeys = Object.keys(lower)
                let movement = lowerKeys[numMov - 1]
                let movimento = lower[movement]
                res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
            } else if  (type == 'upper') {
                upperKeys = Object.keys(upper)
                let movement = upperKeys[numMov - 1]
                let movimento = upper[movement]
                res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
            } else if (type == 'abs') {
                absKeys = Object.keys(abs)
                let movement = absKeys[numMov - 1]
                let movimento = abs[movement]
                res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
            }
        }

        /*
        if (i < 1){
            cardioKeys = Object.keys(cardio)
            let movement = cardioKeys[numMov - 1]
            let movimento = cardio[movement]
            res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
        } else {
            lowerKeys = Object.keys(lower)
            let movement = lowerKeys[numMov - 1]
            let movimento = lower[movement]
            res.innerHTML += `${movimento.qtde*reps} ${movimento.nome}<br>`
        } */
    }
}

function setURL () {
    let param2 = document.location.search
    let btnovo = document.getElementById('btnpage3')
    btnpage3.href = "resultado.html"+param2
}

