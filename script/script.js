const cards = document.getElementsByClassName("cards")
const start = document.getElementById("start-btn")
const array=[]

// saving the default sources
for(let i=0;i < cards.length ; i++){
    array.push(cards[i].src)
}
// after clicking start the back image will appear
start.addEventListener("click",() => {
    for(let i=0;i < cards.length ; i++){
        cards[i].src= "./assets/card back.png"
    }
    start.innerText="Restart Game"
})
// when clicking on the image the default image appears 
let counter = 0
for(let i=0;i < cards.length ; i++){
    cards[i].addEventListener("click",()=>{
        cards[i].src = array[i]
        if(counter==0){
            A= cards[i].src
        }else if(counter ==1){
            B= cards[i].src
        }
            counter +=1
            if(counter==2){
                counter=0
                if(A==B){
                    cards[i].src= "./assets/faded.png"
                }else{
                    cards[i].src="./assets/card back.png"
                }       
        }
})
}