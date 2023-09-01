let res = document.querySelector('div#res')
let param = (new URL(document.location)).searchParams
let type = param.get('type')
let level = param.get('level')
let reps = 0

const lower = [
    {
        nome: "air squats",
        link: "https://www.youtube.com/watch?v=rMvwVtlqjTE",
        qtde: 40
    },
    {
        nome: "lunges",
        link: "https://www.youtube.com/watch?v=rMvwVtlqjTE",
        qtde: 40
    },
    {
        nome: "step-ups",
        link: "https://www.youtube.com/watch?v=rMvwVtlqjTE",
        qtde: 40
    },
    {
        nome: "hip extension",
        link: "https://www.youtube.com/watch?v=rMvwVtlqjTE",
        qtde: 40
    },
    {
        nome: "jumping squats",
        link: "https://www.youtube.com/watch?v=rMvwVtlqjTE",
        qtde: 40
    }
]

const upper = [
    {
        nome: "push-ups",
        qtde: 20
    },
    {
        nome: "shoulder taps",
        qtde: 40
    },
    {
        nome: "handstand push-ups",
        qtde: 16
    },
    {
        nome: "pull-ups",
        qtde: 20
    },
    {
        nome: "static dips",
        qtde: 20
    }
]

const abs = [
    {
        nome: "sit-ups",
        qtde: 32
    },
    {
        nome: "mountain climbers",
        qtde: 48
    },
    {
        nome: "alt. v-ups",
        qtde: 24
    },
    {
        nome: "bicycle Crunch",
        qtde: 32
    },
    {
        nome: "secs plank",
        qtde: 60
    }
]

const cardio = [
    {
        nome: "burpees",
        qtde: 20
    },
    {
        nome: "shuttle run",
        qtde: 16
    },
    {
        nome: "single-unders",
        qtde: 100
    },
    {
        nome: "jumping jacks",
        qtde: 40
    },
    {
        nome: "meters run",
        qtde: 400
    }
]

const niveis = {
    beginner:0.25, 
    intermed:0.5, 
    advanced:0.75, 
    athlet:1
}

if (Object.hasOwn(niveis, level)){
    reps = niveis[level]
}

const dicTipos = {
    fullbody: function () {
        const result = []
        result.push(...get(1,cardio))
        result.push(...get(1,lower))
        result.push(...get(1,upper))
        result.push(...get(1,abs))
        return result
    },
    lower: function () {
        const result = []
        result.push(...get(1,cardio))
        result.push(...get(2,lower))
        return result
    },
    upper: function () {
        const result = []
        result.push(...get(1,cardio))
        result.push(...get(2,upper))
        return result
    },
    abs: function () {
        const result = []
        result.push(...get(1,cardio))
        result.push(...get(2,abs))
        return result
    }
}

function get (qtde, typeList){
    const arrayIndex = []
    const result = []
    while (arrayIndex.length < qtde){
        const num = Math.floor(Math.random() * typeList.length)
        if (arrayIndex.indexOf(num) === -1){
            arrayIndex.push(num)
            result.push(`${typeList[num].qtde*reps} ${typeList[num].nome}<br>`)
        }
    }
    return result
}

function wodgen () {
    res.innerHTML = ''
    res.innerHTML += '<strong>5 rounds for time:'
    randMovements = []

    if (Object.hasOwn(dicTipos, type)){
        const movements = dicTipos[type]()
        for (const mov of movements)
            res.innerHTML += mov
    }

}

function setURL () {
    let param2 = document.location.search
    let btnovo = document.getElementById('btnpage3')
    btnpage3.href = "resultado.html"+param2
}

async function getWod (){
    let choice = level
    const response = await fetch("./workouts.json")
    const wod = await response.json()
    let res = document.querySelector('div#res')
    const x = Math.floor(Math.random() * wod.length)
         if (wod[x].nivel == choice) {
            res.innerHTML = `<strong>"${wod[x].name}"</strong><br>`
            res.innerHTML += `${wod[x].type}<br>`
            wod[x].description.forEach(mov => {res.innerHTML += `${mov}<br>`})
            res.innerHTML += `<br>Nível:<br> <strong>${wod[x].nivel}</strong>`
         } else {
            getWod()
         }
    }

    





