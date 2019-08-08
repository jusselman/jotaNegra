// constants //
var playerHandCtn = document.getElementById('playerHandCtn');
var dealerHandCtn = document.getElementById('dealerHandCtn');
var playerScoreDisp = document.getElementById('playScore');
var dealerScoreDisp = document.getElementById('dealScore');


// Constructor Class to generate deck //
class Deck {
    constructor() {
        this.deck = [];
        this.dealtCards = [];
        this.playerHand = [];
        this.dealerHand = [];
        this.playerScore = 0;
        this.dealerScore = 0;
        this.turn = 1;
        this.player = 1;
        this.dealer = -1;
        this.playerTotal;
        this.dealerTotal;
    }

    makeDeck() { 
        let card = (suit, cardId, cardVal) => {
            let name = `${cardId} of ${suit}`
            let cardImg = `images/CardImages/${cardId}${suit}.jpg`

            return {
                name, 
                suit, 
                cardId,
                cardVal,
                cardImg
            }
        }

        let cardVal = [2,3,4,5,6,7,8,9,10,10,10,10,11];
        let cardIds = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let suits = ['C', 'D', 'S', 'H'];
        
        for ( let s = 0; s < suits.length; s++) {
            for ( let i = 0; i < cardIds.length; i++) {
                // for ( let v = 0; v < cardVal.length; v++) {
                this.deck.push(card(suits[s], cardIds[i], cardVal[i]));
            }
        }
    }

    // This displays the generated deck in console //
    consoleDeck() {
        for (let i = 0; i < this.deck.length; i++ ) {
            console.log(this.deck[i]); 
        }
    }
    
    // Randomize deck //
    shuffleDeck() {
    let currentIdx = this.deck.length, tempVal, randIdx;
    
        while (0 !== currentIdx) {
            randIdx = Math.floor(Math.random() * currentIdx);
            currentIdx -= 1;
            tempVal = this.deck[currentIdx];
            this.deck[currentIdx] = this.deck[randIdx];
            this.deck[randIdx] = tempVal;
        }
    }

// Push another card into player hand //
    hit() {
            let newPlayerCard = this.deck.splice(0,1)[0];
            this.playerHand.push(newPlayerCard);
            let newPlayerCardDisplay = new Image;
            newPlayerCardDisplay.src = newPlayerCard.cardImg;
            console.log(playerHandCtn);
            playerHandCtn.appendChild(newPlayerCardDisplay);
            this.calcScore();
    }

    // Render function //
    
renderCard() {
    
        // remove card from deck and set it to variable
        let newDealerCard = this.deck.splice(0,1)[0];
        // push new card to dealer's hand array
        this.dealerHand.push(newDealerCard);
        // create new image
        let newDealerCardDisplay = new Image;
        // set new image's source to the image of the card we put in the dealer's hand
        newDealerCardDisplay.src = newDealerCard.cardImg;
        // append the card to the dealer hand container
        dealerHandCtn.appendChild(newDealerCardDisplay);
        console.log(this.dealerHand);

            let newPlayerCard = this.deck.splice(0,1)[0];
            this.playerHand.push(newPlayerCard);
            let newPlayerCardDisplay = new Image;
            newPlayerCardDisplay.src = newPlayerCard.cardImg;
            console.log(playerHandCtn);
            playerHandCtn.appendChild(newPlayerCardDisplay);
}


// Stay button switches turn to Dealer //
stay() {

    console.log(this);
    
    if (this.playerTotal > this.dealerTotal) {
        console.log('Stay works');
        
            let newDealerCard = this.deck.splice(0,1)[0];
            this.dealerHand.push(newDealerCard);
            let newDealerCardDisplay = new Image;
            newDealerCardDisplay.src = newDealerCard.cardImg;
            dealerHandCtn.appendChild(newDealerCardDisplay);
            console.log(this.dealerHand);
    }
}

// Calculate Dealer Score and Player Score //
calcScore() {

    // console.log(this.playerHand);
    this.dealerTotal = 0;
    this.playerTotal = 0;

    for(let i = 0; i < this.dealerHand.length; i++) {
        this.dealerTotal += this.dealerHand[i].cardVal
    }
    console.log("------------------")
    console.log(this.dealerTotal);
    for(let i = 0; i < this.playerHand.length; i++) {
        this.playerTotal += this.playerHand[i].cardVal
    }
    console.log("------------------")
    console.log(this.playerTotal);
    

    if (this.dealerTotal > 21) {
        this.playerScore++;  
        console.log(this.playerScore);      
        alert('Dealer busts!');
    } else if (this.playerTotal > 21){
        this.dealerScore++;
        console.log(this.dealerScore);
        setTimeout(() => alert('Player busts!'), 100);
    } else if (this.playerTotal === 21 && this.dealerTotal === 21) {
        alert('Tie goes to the house')
     } else if (this.playerTotal === 21) {
          alert('Black Jack! You win!')
      } else if (this.dealerTotal === 21) {
          alert('Black Jack! You lose!')
      }
    // } else {
    //     this.cleanBoard();
    // }
}



// clears cards in play for next hand //
cleanBoard() {
    this.dealtCards.push(this.playerHand.splice(0,-1));
    this.dealtCafds.push(this.dealerHand.splice(0,-1));

    if (this.deck < 10 && playerScore > dealerScore) {
        alert('Congrats, you win!!!');
    } else if (this.deck < 10 && playerScore < dealerScore) {
        alert('GAME OVER!!');
    } else {

    this.renderCard();
    }
}

// init function to begin game //
init() {
        while (this.dealerHand.length < 2 && this.playerHand.length < 2) {
            this.renderCard();
            this.renderCard();
            this.calcScore();
        }

    }

}
    





deck = new Deck();
deck.makeDeck();
deck.shuffleDeck();
deck.consoleDeck();
// deck.deal();
// deck.addScore();
// deck.calcScore();
// deck.renderCard();

// inits first hand of game //
 


// cached elements //
var dealer;
//  = document.getElementById('d-row');
var message = document.getElementById('m-row');
var player = document.getElementById('d-row');
// var dealer = document.getElementById('b-row');

var btnHit = document.getElementById('btn-hit');
var btnStay = document.getElementById('btn-stay');
var btnDeal = document.getElementById('btn-deal');
var btnNew = document.getElementById('btn-new');





// event listeners //
// document.getElementById('')

// functions //
// function init() {
//     scores = {
//         d: 0,
//         t: 0,
//         p: 0
//     };
//     results = {
//         p: 'r',
//         c: 'r',
//     };
//     winner = null; // 'p', 't', 'c' // 
//     render();
// }

// function render() {
//     for (let score in scores ) {
//         scoreEls[score].textContent = scores[score]
//     }

//     //render results //

// };


// let array1 = [1,2,3,4,5,6,7,8,9];
// function shuffle(arr) {
//     let newPos;
//     for (let i = arr.length; i--;) {
//         newPos = Math.floor(Math.random() * i + 1);
//     }
// }

// var rando = Math.floor(Math.random() * 10) + 1;

// // var shuffed = shuffle(array1);

// // shuffle(array1);


// function getSum(total, sum) {
//     return total + sum;
// }

// var numbers = [15, 1000, 999999999];

// var numNums = numbers.reduce(getSum, 0);

// console.log(numNums);