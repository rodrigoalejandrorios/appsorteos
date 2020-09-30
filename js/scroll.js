window.addEventListener("scroll", ()=>{
    let posicionY = window.scrollY

    if(posicionY>600){
        console.log("superaste los 600")
    }else{
        localStorage.removeItem("scroll")
    }
})

