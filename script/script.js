const cards = document.getElementsByClassName("cards")
const start = document.getElementById("start-btn")

start.addEventListener("click",() => {
    for(let i=0;i < cards.length ; i++){
        cards[i].src= "./assets/card back.png"
    }
})

// for(let i=0;i < cards.length ; i++){
//     cards[i].addEventListener("toggle",()=>{
//         cards[i].src =  
//     }
//     )
// }

