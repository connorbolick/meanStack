
// Card Deck object Constructor
function Card(rank, suit) {

  this.rank = rank;
  this.suit = suit;
  this.cards = new Array();
  this.cardToString = function() {

  var rank, suit;

  switch (this.rank) {
    case "A" :
      rank = "Ace";
      break;
    case "2" :
      rank = "Two";
      break;
    case "3" :
      rank = "Three";
      break;
    case "4" :
      rank = "Four";
      break;
    case "5" :
      rank = "Five";
      break;
    case "6" :
      rank = "Six";
      break;
    case "7" :
      rank = "Seven";
      break;
    case "8" :
      rank = "Eight";
      break;
    case "9" :
      rank = "Nine";
      break;
    case "10" :
      rank = "Ten";
      break;
    case "J" :
      rank = "Jack"
      break;
    case "Q" :
      rank = "Queen"
      break;
    case "K" :
      rank = "King"
      break;
    default :
      rank = null;
      break;
  }

  switch (this.suit) {
    case "C" :
      suit = "Clubs";
      break;
    case "D" :
      suit = "Diamonds"
      break;
    case "H" :
      suit = "Hearts"
      break;
    case "S" :
      suit = "Spades"
      break;
    default :
      suit = null;
      break;
  }

  if (rank == null || suit == null)
    return "";

  return rank + " of " + suit;


  }

  this.MakeDeck = function(n) {

    var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9",
                          "10", "J", "Q", "K");
    var suits = new Array("C", "D", "H", "S");
    var i, j, k;
    var m;

    m = ranks.length * suits.length;

    //Creates array of cards from length values

    this.cards = new Array(m);

    // deck of cards creation loops
      for (j = 0; j < suits.length; j++)
        for (k = 0; k < ranks.length; k++)
          this.cards[i * m + j * ranks.length + k] =
            new Card(ranks[k], suits[j]);
  }

  this.Shuffle = function(n) {

    var i, j, k;
    var temp;

    // Shuffle the stack 'n' times.

    for (i = 0; i < n; i++)
      for (j = 0; j < this.cards.length; j++) {
        k = Math.floor(Math.random() * this.cards.length);
        temp = this.cards[j];
        this.cards[j] = this.cards[k];
        this.cards[k] = temp;
      }
  }

  this.Deal = function() {

    if (this.cards.length > 0)
      return this.cards.shift();
    else
      return null;
  }

  this.Draw = function(n) {

    var card;

    if (n >= 0 && n < this.cards.length) {
      card = this.cards[n];
      this.cards.splice(n, 1);
    }
    else
      card = null;

    return card;
  }
}

/* NOTES:
  I have a big picture problem more than specific things.
  I cannot call methods like cardToString and have it output the return. 

*/
var myCard = new Card("3", "C");
  console.log(myCard);
// cardToString();


//Player Object Constructor
function PlayerConstructor(name, hand) {
  this.name = name;
  this.hand = hand;

  this.take_card = function() {
    var playerCard = Card.deal();
  }
  this.discard_card = function() {
    var playerCard = null;
  }
}
