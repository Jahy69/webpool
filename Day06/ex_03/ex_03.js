window.addEventListener('DOMContentLoaded', function() {
    const agent = {
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
    }

    addCarToAgent(agent,"BRANDE","MODEL","120 chevaux")
    shareThatBeauty(agent)
})
