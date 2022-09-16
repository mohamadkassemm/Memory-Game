const cards = document.getElementsByClassName("cards")
const start = document.getElementById("start-btn")
const array=[]

for(let i=0;i < cards.length ; i++){
    array.push(cards[i].src)
}
console.log(array)
start.addEventListener("click",() => {
    for(let i=0;i < cards.length ; i++){
        cards[i].src= "./assets/card back.png"
    }
})

for(let i=0;i < cards.length ; i++){
    cards[i].addEventListener("click",()=>{
        cards[i].src = array[i]
    })
}

