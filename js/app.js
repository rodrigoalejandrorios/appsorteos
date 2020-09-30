//INGRESAMOS AL DOM CON VARIABLES

let textArea = document.getElementById("textarea")
let locationForm = document.getElementById("sectionForm")
let btnActionSort = document.getElementById("btn-action-sort")
let formDom = document.getElementById("loader")
let formPrint = document.getElementById("tomadatos")
let hTitSection = document.getElementById("titsection")
//NUMERO ELEGIDO DEL SELECT
let numAcum = 1


let imprimirDatos = document.getElementById("datosIngresados")

//CAJA DE GANADORES DESACTIVADA>>>
 let boxWinner = document.getElementById("box-winner")
 boxWinner.style.display= "none"


//VARIABLE ACUMULA STRING
let textDates = ""
let textClean = ""

//VARIABLES ASIGNACION DE SIMBOLOS
let espacio = " "
let coma = ","
let enter = "\u21b5"


let datosSorteados = []


//FUNCION DE NUMERO ELEGIDO EN EL SELECT

elegirNumero =()=>{
    let select = document.getElementById("selectnum")
    let numSel = select.addEventListener("change",()=>{
        let selectedNum = document.getElementById("selectnum").value
        numAcum = selectedNum
        console.log(numAcum)
    })
}

elegirNumero()

//MODIFICACIONES EL EL DOM

//PRELOADER DE DATOS

let linkVid = 'src="https://glowupdesign.com.ar/wp-content/uploads/2020/09/loader.webm"  type="video/webm"'
let parameters = 'autoplay="" class="bloor-me" loop="" muted="" playsinline="" width="40%"'

modificacionDom = () =>{
    hTitSection.innerHTML = "Estamos procesando los datos"
    formPrint.style.display = 'none'
    let embedVid = `<video ${parameters}><source ${linkVid}></video>`
    formDom.innerHTML += embedVid
}

guardarTexto=(q)=>{
    textDates = q
    let text;

    if(textDates.includes(", ")|| textDates.includes(",")){
       text= dividirCadena(textDates,coma) 
    }

    if(textDates.includes("\u21b5")){
        text= dividirCadena(textDates,enter) 
    }
    
    datosSorteados.push(text)
    datosSorteados.pop()
    
     
    for(let i=0; i<datosSorteados.length; i++){
        let datos = datosSorteados[i]
        textClean = datos.trim()
    }

    if(datosSorteados[0]===undefined){
        console.log(datosSorteados[0]);
        alert("Volvé a intertarlo")
        window.location.reload()
    }
}


dividirCadena = (cadena, separador)=>{
    datosSorteados = cadena.split(separador)
    for (let i=0; i < datosSorteados.length; i++){
        datosSorteados[i] + " / "
    }
}


imprimirDom = (param) =>{
    boxWinner.style.display= "block"
    
    for (let i=0; i < numAcum; i++){
        //let h3 = document.createElement("h3");
        let infoText = "Ganador N°"+ [i+1] + ": "
        let h3 = `<h3 class="text-result"><span class="infotext">${infoText}</span>${param[i]}</h3>`
        imprimirDatos.innerHTML += h3
    }
    //SOLAMENTE IMPRIME EN EL DOM 3 RESULT
}


let getRandomData = []
let rConj = []

randomNumber = (param) =>{

    if(numAcum>1){
        hTitSection.innerHTML = "Felicitaciones a los ganadores"
        
    }else{
        hTitSection.innerHTML = "Felicitaciones al ganador"
    }
    
    let posiciones = []
    let i,r;

    for(i=0; i < datosSorteados.length; i++){
        posiciones[i] = i
    }
    
    for (i=0; i < numAcum; i++){
        r = Math.floor((Math.random()*posiciones.length))
        console.log(r)
        getRandomData.push(datosSorteados[posiciones[r]])
    }
    


    let totales = getRandomData
    
    console.log(totales)
    imprimirDom(totales)
}

btnActionSort.addEventListener("click", sorteando=(e)=>{

    e.preventDefault()
    const q = textArea.value
    //GUARDAMOS EL TEXTO DEL USER INTERPRETADO EN UN ARRAY
    guardarTexto(q)

    //ELEGIMOS AL AZAR LOS ganadores
    setTimeout(()=>{
        formDom.style.display = 'none'
        randomNumber(q)
    },3000)
    

    //aca va la impresion de datos
    modificacionDom()
})

