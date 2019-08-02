
// BLACK JACK PSEUDO CODE //


/* Game initializes with START GAME button giving player two cards
face up, and one face up and face down for dealer. Cards, display 
windows, and buttons will all be contained within a css grid
4 by 5 grid cells in area.

* Upon initializing game, Player is dealt 2 cards given the option 
to hit or stay.

* If player card count goes above 21, modal displays 'you lose!
click below' indicating 'continue' or 'new game'.
If dealer has lower card count, will automatically hit, who will
respectively lose for surpassing 21. In the case that dealer and 
player both have 21, win goes to the dealer.

*To generate cards, math.random will generate a random number 
from 1 to 52, representing each card. After card has been played
it will be stored in array so as to not be played again. 

* After each hand, player may click one of two buttons to choose
to continue with game, using the existing deck, or re-init the 
game with new game button.

*score of 1 will be awarded to winner of each hand. Whoever has 
highest score after all cards are dealt will be winner. Message 
will be displayed saying either "YOU WIN" or "GAMEOVER", option
to play again will be displayed below.

*/

console.log('Sanity check!');