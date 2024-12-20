
function getFruitNameFromIndex(index) {
    if (index == -1) {
        index = fruits.length - 1
    } else if (index > fruits.length - 1)
        return null
    return fruits[index]
}