window.addEventListener('DOMContentLoaded', function() {
    var agent = {
        age: 42,
        code: "008",
        firstName: "James",
        lastName: "Bond"
    }

    function addCarToAgent(agent,brand,model,power){
        agent.car = {}
        agent.car.brand = brand
        agent.car.model = model
        agent.car.power = power
        agent.car.licensePlates = []
        return agent
    }

    agent = addCarToAgent(agent,"BRANDE","MODEL","120 chevaux")
    console.log(agent)

    function updateLicensePlates(agent, plate){
        agent.car.licensePlates.push(plate)
    }

    updateLicensePlates(agent,"LU 6789")
    updateLicensePlates(agent,"4711-EA-62")
    updateLicensePlates(agent,"BMT 216A")

    function showLicensePlates(agent){
        let ul = document.querySelector("ul")
        for(plate of agent.car.licensePlates){
            let li = document.createElement("li")
            li.innerText = plate
            ul.appendChild(li)
        }
    }
    showLicensePlates(agent)
})