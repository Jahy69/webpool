function searchCars(agents,key,value){
    let toReturn = []
    for(agent of agents){
        if (agent.isMatching(key,value))
            toReturn.push(agent.car)
    }
    return toReturn
}
var agent1 = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond",
    car:{
        brand:"Aston Martin",
        model:"DB5",
        color:"grey",
    },
    isMatching: function(key,value){
        return this.car[key] == value
    },
}
var agent2 = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond",
    car:{
        brand:"Aston Martin LVL 2",
        model:"DB5 LVL 2",
        color:"red",
    },
    isMatching: function(key,value){
        return this.car[key] == value
    },
}
var agent3 = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond",
    car:{
        brand:"Aston Martin LVL 3",
        model:"DB5 LVL 3",
        color:"grey",
    },
    isMatching: function(key,value){
        return this.car[key] == value
    },
}

console.log(searchCars([agent1,agent2,agent3],"color","grey"))