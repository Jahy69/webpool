let numberOfHamS = 0
let numberOfTunaS = 0
let numberOfVegeS = 0

while (breadCount >= 2 && (hamCount >= 1 || (tunaCount >=1 && saladCount >= 2) ||  (saladCount >= 1 && tomatoCount >= 2) )){
    if (breadCount >= 2 && hamCount >= 1){
        numberOfHamS += 1
        breadCount -= 2
        hamCount -= 1
    }else if (breadCount >= 2 && tunaCount >=1 && saladCount >= 2){
        numberOfTunaS += 1
        breadCount -= 2
        tunaCount -= 1
        saladCount -= 2
    }else if (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2){
        numberOfVegeS += 1
        breadCount -= 2
        saladCount -= 1
        tomatoCount -= 2
    }
}

displayThisText("Number of ham sandwich(es) : "+numberOfHamS)
displayThisText("Number of tuna sandwich(es) : "+numberOfTunaS)
displayThisText("Number of vegetarian sandwich(es) : "+numberOfVegeS)

displayIngredients()



