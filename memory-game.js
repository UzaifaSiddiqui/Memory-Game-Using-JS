let grid = document.querySelector(".grid");
let score = document.querySelector("#score");
let result = 0;

const cardArray = [{
    name : "cheeseburger",
    src : "images/cheeseburger.png"
},
{
    name : "fries",
    src: "images/fries.png"
},
{
    name : "hotdog",
    src : "images/hotdog.png"
},
{
    name : "ice-cream",
    src : "images/ice-cream.png"
},
{
    name : "milkshake",
    src : "images/milkshake.png"
},
{
    name : "pizza",
    src : "images/pizza.png"
},
{
    name : "cheeseburger",
    src : "images/cheeseburger.png"
},
{
    name : "fries",
    src: "images/fries.png"
},
{
    name : "hotdog",
    src : "images/hotdog.png"
},
{
    name : "ice-cream",
    src : "images/ice-cream.png"
},
{
    name : "milkshake",
    src : "images/milkshake.png"
},
{
    name : "pizza",
    src : "images/pizza.png"
}

];

console.log(cardArray);
cardArray.sort(() => 0.5 - Math.random());

let cardChosen = [];
let cardChosenId = [];

function createBoard(){
    for (let i = 0 ; i < cardArray.length ; i++){
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("id",i);
        card.addEventListener("click",flip);
        grid.appendChild(card);
    
    }
}


function cardMatch(){
    let cards = document.querySelectorAll(".grid img");
    let option1 = cardChosen[0];
    let option2 = cardChosen[1];
    console.log(cards);
    console.log("Looking for a match!");
    if (option1 == option2 && cardChosenId[0] != cardChosenId[1]){
        console.log("we found a match");
        cards[cardChosenId[0]].setAttribute("src","images/white.png");
        cards[cardChosenId[1]].setAttribute("src","images/white.png");
        cards[cardChosenId[0]].removeEventListener("click", flip);
        cards[cardChosenId[1]].removeEventListener("click", flip);
        result+=1
        score.innerText = String(result);
    }else{
        cards[cardChosenId[0]].setAttribute("src","images/blank.png");
        cards[cardChosenId[1]].setAttribute("src","images/blank.png");
    }
    cardChosen = [];
    cardChosenId = [];
    if (result == cardArray.length/2){
        alert("You won");
    }
}
 
function flip(){
    let cardId = this.getAttribute("id");
    if(cardChosenId.includes(cardId)) return;
    this.setAttribute("src",cardArray[cardId].src);
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log(cardChosen);
    console.log(cardChosenId);
    if (cardChosen.length === 2){
        setTimeout(cardMatch,500);
    }
}

createBoard();

