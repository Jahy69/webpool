window.onload = () => {
    let img = document.querySelector("img")
    let imageSize = {width:img.width, height:img.height}

    function randCoord() {
        return{ 
            x:Math.floor(Math.random() * (window.innerHeight - imageSize.width)),
            y:Math.floor(Math.random() * (window.innerWidth - imageSize.height))
        };
    }

    let div = document.querySelector("div")
    div.addEventListener("mouseover", (e)=>{
        let coord = randCoord()
        div.style.top = coord.x+"px"; 
        div.style.left = coord.y+"px"; 
    } )

}