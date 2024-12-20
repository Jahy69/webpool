window.addEventListener('DOMContentLoaded', function() {
    function displayAgentInfo(obj){
        document.querySelector("p").innerText=`My name is ${obj.lastName}, ${obj.firstName} ${obj.lastName}! I'm the agent ${obj.code} and i'm ${obj.age} years old.`
    }

    displayAgentInfo({
        age:57,
        code:"007",
        firstName:"James",
        lastName:"Bond"
    })
})