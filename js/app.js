//INGRESAMOS AL DOM CON VARIABLES

let textArea = document.getElementById("textarea")
let btnActionSort = document.getElementById("btn-action-sort")
let selectedNum = document.getElementById("selectnum")

let imprimirDatos = document.getElementById("datosIngresados")


//VARIABLE ACUMULA STRING
let textDates = ""
let textClean = ""

//VARIABLES ASIGNACION DE SIMBOLOS
let espacio = " "
let coma = ","
let enter = "\u21b5"


let datosSorteados = []

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
        alert(textClean)
    }
}




dividirCadena = (cadena, separador)=>{
    datosSorteados = cadena.split(separador)
    for (let i=0; i < datosSorteados.length; i++){
        datosSorteados[i] + " / "
    }
}


imprimirDom = (param) =>{
    
    for (let i=0; i < datosSorteados.length; i++){
        let h1 = document.createElement("h1");
        h1.innerHTML = param[i]
        h1.classList.add("text-result")
        imprimirDatos.appendChild(h1)
    }
    
    
}

btnActionSort.addEventListener("click", sorteando=(e)=>{
    
    e.preventDefault()
    const q = textArea.value
    guardarTexto(q)
    //aca va la impresion de datos
    imprimirDom(datosSorteados)
})

