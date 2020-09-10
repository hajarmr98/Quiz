const respuestas = {
    belen:"cuarenta-seis",
    pantoja: "paquirrin-chabelita",
    lenguaje: "css3",
    orbitofrontal: "impulsiv",
    psicopata: "dol"

}



document.querySelector('form[name="belens"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta1").length; i++) {
      console.log('estoy en el primer for') 
     document.getElementsByClassName("respuesta1")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.belen.length; i++) {
        
    document.getElementById(respuestas.belen).style.backgroundColor = "green"
    console.log(document.getElementById(respuestas.belen))
    
    }

    if (event.target.elements.belen.value == respuestas.belen) {
        alert("¡Has acertado!");
    } else {
       
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="pantojas"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta2").length; i++) {
       
     document.getElementsByClassName("respuesta2")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.pantoja.length; i++) {
        console.log(event.target.elements.pantoja)
        console.log(document.getElementById(respuestas.pantoja))
    document.getElementById(respuestas.pantoja).style.backgroundColor = "green"
    
    }

    if (event.target.elements.pantoja.value == respuestas.pantoja) {
        alert("¡Has acertado!");
    } else {
       
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="lenguajes"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta3").length; i++) {
       
     document.getElementsByClassName("respuesta3")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.lenguaje.length; i++) {

    document.getElementById(respuestas.lenguaje).style.backgroundColor = "green"
    
    }

    if (event.target.elements.lenguaje.value == respuestas.lenguaje) {
        alert("¡Has acertado!");
    } else {
       
        alert("¡Te equivocaste!")
    }
})



document.querySelector('form[name="orbitofrontales"]').addEventListener('submit', (event) => {
    event.preventDefault();
    
    for (let i = 0; i < document.getElementsByClassName("respuesta4").length; i++) {
        document.getElementsByClassName("respuesta4")[i].style.backgroundColor = "red"
    }
    for (let i= 0; i < document.getElementsByClassName("respuesta4").length; i++) {
        document.getElementById(respuestas.orbitofrontal).style.backgroundColor = "green"
    }

    if (event.target.elements.orbitofrontal.value == respuestas.orbitofrontal) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
    
})
    
document.querySelector('form[name="psicopatas"]').addEventListener('submit', (event) => {
        event.preventDefault();
        
        for (let i = 0; i < document.getElementsByClassName("respuesta5").length; i++) {
            document.getElementsByClassName("respuesta5")[i].style.backgroundColor = "red"
        }
        for (let i= 0; i < document.getElementsByClassName("respuesta5").length; i++) {
            document.getElementById(respuestas.psicopata).style.backgroundColor = "green"
        }
    
        if (event.target.elements.psicopata.value == respuestas.psicopata) {
            alert("¡Has acertado!");
        } else {
            alert("¡Te equivocaste!")
        }

    })