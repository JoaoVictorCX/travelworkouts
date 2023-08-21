let lower = [
"Squat",
"Alt. Lunge",
"Step-up",
"Hip Extension",
"Bird Dog"
]

let cardio = [
"Burpee",
"Sprawls",
"Double-under",
"Shuttlen run",
"Jumping Jack"
]


let res = document.querySelector('div#res')

function wodgen () {
    res.innerHTML = ''
    res.innerHTML += '<p><strong>10 rounds for time:<br>'
    randMovements = []
    
    //FUNÇÃO SORTEAR E INSERIR NUMEROS SORTEADOS
    while (randMovements.length < 3){
        var num = Math.floor(Math.random() * 5) + 1
        if (randMovements.indexOf(num) === -1){
            randMovements.push(num)
        }
    }
    //FUNÇÃO VERIFICAR NIVEL ATIVIDADE (5/10/15 REPS)

    //FUNÇÃO IMPRIMIR OU SORTEAR DE ACORDO COM TIPO (UPPER/LOWER...)    

    //FUNÇÃO IMPRIMIR MOVIMENTOS CORRESPONDENTES AO NUMERO SORTEADO
    for (let i = 0; i < (randMovements.length); i++){
        var numMov = randMovements[i]
        if (i < 2){
            var movement = lower[numMov - 1]
            res.innerHTML += `${movement} x 10 reps<br>`
        } else {
            var movement = cardio[numMov - 1]
            res.innerHTML += `${movement} x 10 reps<br>`
        }
    }

}