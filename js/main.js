const robotron = document.querySelector("#robotron")

//Armazenar elementos HTML em variáveis

robotron.addEventListener("click", () =>{

    console.log("Cliquei no robo")
})

function dizOI() {
    console.log("oi")

}
dizOI()

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
//----------------------------------------------------------

somar.addEventListener("click",(evento) =>{
    braco.value = parseInt( braco.value) + 1
})

subtrair.addEventListener("click",(evento) =>{
    braco.value = parseInt( braco.value) - 1
})