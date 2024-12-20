var agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond",
    car:{
        brand:"Aston Martin",
        model:"DB5",
        color:"grey",
        logInfo: function(){
            return(`Car information: ${this.color}, ${this.model}, ${this.brand}`)
        }
    },
    logInfo: function(e){
        console.log(`Agent information: ${this.firstName} ${this.lastName}, ${this.code}, ${this.age} \n ${this.firstName} ${this.lastName}'s ${this.car.logInfo()}`)
    },
}

agent.logInfo()