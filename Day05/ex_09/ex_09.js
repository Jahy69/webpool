window.addEventListener('DOMContentLoaded', function() {
  const allDiv = document.querySelectorAll("footer div");
  const massP = allDiv[1]
  const div = allDiv[2]

  let m = 1
  // ALORS ! Le poids se calcul g * m avec g la puissance du champs gravitationnel terrestre = 9.81 N/kg et m la masse du cube = 1 kg
  let poidsCube = m * 9.81
  // la poussée d'archiméde se calcule rho * g * vm avec 
  // rho - la masse volumique du liquide (eau) = 1,
  // g - la puissance du champs gravitationnel terrestre = 9.81 N/kg
  // vm - le volume immergé.
  // volume du cube déduit du volume de la cuve vm = 0.02 dm3 (en partant du principe que la cuve fait 1 dm3 de largeur)
  let poussée = 1 * 9.81 * 0.02

  function updateSituation(){
    if (poidsCube > poussée){
      let bot = document.querySelector("footer");
      var pos = bot.getBoundingClientRect();
      console.log(pos)
      div.style.transitionDuration = "1s"
      div.style.position = "absolute";
      div.style.top = pos.bottom+ window.scrollY-101+'px';
    }
  }


  div.addEventListener("click", (event) => {
    m ++
    poidsCube = m * 9.81
    console.log("Poids cube : ",poidsCube)
    massP.innerText = `${m} kg`

    updateSituation()
  });
  //On se rend compte que le cube coule dé le début.
  updateSituation()
});

// NOTE DE CALCUL

// x * y * z = volume de la cuve
// 800 * 698 * 1 = 10
// 800 / 698 / 1 = 1,146 
// 
// (x * 1,146) * x /1 = 10 L = 10dm3
// 
// 2x * 1,146 = 10dm3
// 
// 2x = 10 / 1,146
// x = 10 / (2*1,146)
// x = 10 / 2.292
// 
// x = 4.36 dm de large LA CUVE
// 
// y = large du CUBE = 50/800 = 0,0625 <=> 4.36*0.0625 = 0.2725 dm DE LARGE LE CUBE
// 
// 2.725 cm
// 
// 2.725^3 = 20.23 cm^3 = 0,02dm3


