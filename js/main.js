// Black Jack Version 3.1.5 //


// constants //
var playerHandCtn = document.getElementById('playerHandCtn');
var dealerHandCtn = document.getElementById('dealerHandCtn');
var playerScoreDisp = document.getElementById('playScore');
var dealerScoreDisp = document.getElementById('dealScore');
var mess = document.getElementById('m-row');





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
        this.temp = [];
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
    
        let newDealerCard = this.deck.splice(0,1)[0];
        this.dealerHand.push(newDealerCard);
        let newDealerCardDisplay = new Image;
        newDealerCardDisplay.src = newDealerCard.cardImg;
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
        
        if (21 > this.dealerTotal) {
            console.log('Stay works');

            let newDealerCard = this.deck.splice(0,1)[0];

                this.dealerHand.push(newDealerCard);
                let newDealerCardDisplay = new Image;
                newDealerCardDisplay.src = newDealerCard.cardImg;
                dealerHandCtn.appendChild(newDealerCardDisplay);
                console.log(this.dealerHand);
                this.calcScore();
                
        } else{
            return;
        }
    }

// Calculate Dealer Score and Player Score //
    calcScore() {

        this.dealerTotal = 0;
        this.playerTotal = 0;

        for(let i = 0; i < this.dealerHand.length; i++) {
            this.dealerTotal = this.dealerHand[i].cardVal + this.dealerTotal;
            console.log(`dealertotal: ${this.dealerTotal}`);
            
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
            console.log(`playerscroe updated`+this.playerScore);      
            mess.innerHTML = 'Dealer busts!';
        } else if (this.playerTotal > 21){
            this.dealerScore++;
            console.log(this.dealerScore);
            mess.innerHTML = 'Player busts!';
        } else if (this.playerTotal === 21 && this.dealerTotal === 21) {
            mess.innerHTML = 'Tie goes to the house';
            this.dealerScore++;  
        } else if (this.playerTotal === 21) {
            mess.innerHTML = 'Black Jack! You win!';
            this.playerScore++;  
        } else if (this.dealerTotal === 21) {
            mess.innerHTML = 'Black Jack! You lose!';
            this.dealerScore++;  
        } 
    }

// clears cards in play for next hand //
    cleanBoard() {

        while(playerHandCtn.firstChild) {
            playerHandCtn.removeChild(playerHandCtn.firstChild);
        }
        while(dealerHandCtn.firstChild) {
            dealerHandCtn.removeChild(dealerHandCtn.firstChild);
        }

        this.dealerHand = [];
        this.playerHand = [];


        document.getElementById('playScore').textContent = this.playerScore;
        document.getElementById('dealScore').textContent = this.dealerScore;
        
        if (this.deck.length < 10 && playerScore > dealerScore) {
            mess.innerHTML = 'Congrats, you win!!!';
        } else if (this.deck.length < 10 && playerScore < dealerScore) {
            mess.innerHTML = 'GAME OVER!!';
        } else { 
            this.init();
            
        }
    }

// init function to begin game //
init() {

        while(playerHandCtn.firstChild) {
            playerHandCtn.removeChild(playerHandCtn.firstChild);
        }
        while(dealerHandCtn.firstChild) {
            dealerHandCtn.removeChild(dealerHandCtn.firstChild);
        }
    
        this.dealerHand = [];
        this.playerHand = [];
        mess.innerHTML = "";
      
        while (this.dealerHand.length < 2 && this.playerHand.length < 2) {
            this.renderCard();
            this.renderCard();
            this.calcScore();
        }
    }
}
    
// Generate new Deck //
deck = new Deck();
deck.makeDeck();
deck.shuffleDeck();
deck.consoleDeck();

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

