window.addEventListener('DOMContentLoaded', function() {
    document.querySelector("img").addEventListener("mouseenter", (event) => {
      alert("Pretty, isn't it?")
    });
    window.addEventListener("resize", (e)=>{
      alert("Size matters")
    });
});
