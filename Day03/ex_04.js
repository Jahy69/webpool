function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function calculator(a, b, action) {
    if (action == 'add') {
        return addition(a, b);
    } else if (action == 'sub') {
        return subtraction(a, b);
    } else {
        return null;
    }
}