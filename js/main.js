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
const controle = document.querySelectorAll(".controle-ajuste")


//----------------------------------------------------------

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
        //console.log(evento.target.textContent)
    })
})
    



function manipulaDados(operacao){

    if(operacao === "-"){
       braco.value = parseInt(braco.value) - 1
       console.log("menos")
    }else{
        braco.value = parseInt(braco.value) + 1 
        console.log("mais")

    }

}
