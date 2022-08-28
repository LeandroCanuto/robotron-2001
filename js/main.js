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
        manipulaDados(evento.target.textContent,evento.target.parentNode)
        console.log(evento.target.parentNode)
        //console.log(evento.target.textContent)
    })
})


function manipulaDados(operacao,controle){
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "-"){
    peca.value = parseInt(peca.value) - 1
       console.log("menos")
    }else{
    peca.value = parseInt(peca.value) + 1 
        console.log("mais")

    }

}
//----------PECAS-------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
//------------------------------------------------------------------------------
