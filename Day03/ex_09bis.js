function splitOperation(operation){
    let arr = []
    operation.split(' ').forEach(e => {
        arr.push(e)
    });
    
    return arr
}

function doOperation(operation){
    let arrOpp = splitOperation(operation)

    switch (arrOpp[1]){
        case "+":
            return Number(arrOpp[0]) + Number(arrOpp[2])
        case "-":
            return arrOpp[0] - arrOpp[2]
        case "*":
            return arrOpp[0] * arrOpp[2]
        case "/":
            if (arrOpp[2] == 0){
                console.log("Can't divide by 0")
                return null
            }
            return arrOpp[0] / arrOpp[2]
    }
}
