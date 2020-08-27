//SCRIPT FUNCIONALIDAD TEMA


//--- BOTONES DE SELECCION

let dropDay = document.getElementById("dropDay")
let dropDark = document.getElementById("dropDark")
let modoElegido = document.getElementById("modoElegido")
let botonTema = document.getElementById("btn-theme")
//--- LINKS VARIABLES
let link = document.getElementById("linkcss")


//--- EVENTOS DE BOTONES

dropDay.addEventListener("click", themeday=() =>{
    //Elige modo claro
    link.setAttribute("href","cssday/styleday.css")
    modoElegido.innerHTML = "Day Mode"
    localStorage.setItem("theme", "false")
})

dropDark.addEventListener("click", themedark=() =>{
    //Elige modo oscuro
    link.setAttribute("href","cssdark/styledark.css")
    modoElegido.innerHTML = "Dark Mode"
    localStorage.setItem("theme", "true")
})

//--- VALIDAR LOCALSTORAGE

if(localStorage.getItem("theme")=== "true"){
    themedark()
}else{
    themeday()
}