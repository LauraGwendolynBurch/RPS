// array of random icons
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const choices = document.querySelectorAll("button")

function round () {

    choices.forEach(choice =>{
        choice.addEventListener("click",(e)=>{
            console.log(e.target)
        } )
    }) 


}

round ()