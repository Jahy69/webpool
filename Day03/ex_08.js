function getFruitNameFromIndex(index) {
    if (index == -1) {
        index = fruits.length - 1
    } else if (index > fruits.length - 1)
        return null
    return fruits[index]
}

function getIndexFromName(name) {
    let ind = fruits.indexOf(name)
    return ind == -1 ? null : ind
}

function getFruit(fruit) {
    if (typeof fruit == "string")
        return getIndexFromName(fruit)
    else
        return getFruitNameFromIndex(fruit)
}	