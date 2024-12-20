function addCar(agentString, car) {
    const obj = JSON.parse(agentString)
    obj.car = car;
    return obj;
}
