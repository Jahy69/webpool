window.addEventListener('DOMContentLoaded', function() {
    const peas = document.querySelectorAll("p");
    i=0
    for(let p of peas){
        console.log(p)
        p.innerHTML=i
        i++
    }


});
