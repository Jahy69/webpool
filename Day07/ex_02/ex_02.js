window.addEventListener('DOMContentLoaded', function() {
    let circle = document.querySelector("#circle")
    const btns = document.querySelectorAll('button')
    let deg = 0

    btns.forEach(btn => {
        btn.addEventListener('click', event => {
            deg = Number(event.target.value) == 0 ? 0 : deg + Number(event.target.value)
            circle.style.transform=`rotate(${deg}deg)`
        });
    });
})