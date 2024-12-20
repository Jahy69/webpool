function map(elements, modifier){
    let newArray = []

    for (e of elements){
        newArray.push(modifier(e))
    }
    return newArray
}
