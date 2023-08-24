const lower = [
    "Squat",
    "Lunge",
    "Step-up",
    "Hip Extension",
    "Reserve Lunge"
]

const upper = [

]

const abs = [
    "Sit-up",
    "V-up alt",
    "V-up",
    "Plank",
    "Mountain climbers",
    

]

const cardio = [
"Burpee",
"Sprawls",
"Double-under",
"Shuttlen run",
"Jumping Jack",
"Single-unders",
"Double-unders"
]

let res = document.querySelector('div#res')
let param = (new URL(document.location)).searchParams
let type = param.get('type')
let level = param.get('level')
let reps = 0

const niveis = {
    beginner:6, 
    intermed:10, 
    advanced:16, 
    athlet:20
}

if (Object.hasOwn(niveis, level)){
    reps = niveis[level]
}

function wodgen () {
    res.innerHTML = ''
    res.innerHTML += '<p><strong>10 rounds for time:<br>'
    randMovements = []

    while (randMovements.length < 3){
        var num = Math.floor(Math.random() * 5) + 1
        if (randMovements.indexOf(num) === -1)
            randMovements.push(num)
    }

    for (let i = 0; i < (randMovements.length); i++){
        var numMov = randMovements[i]       
        if (i < 2){
            var movement = lower[numMov - 1]
            res.innerHTML += `${movement} x ${reps} reps<br>`
        } else {
            var movement = cardio[numMov - 1]
            res.innerHTML += `${movement} x ${reps} reps<br>`
        }
    }

}

function setURL () {
    let param2 = document.location.search
    let btnovo = document.getElementById('btnpage3')
    btnpage3.href = "resultado.html"+param2
}

