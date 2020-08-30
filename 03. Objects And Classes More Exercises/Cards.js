(function () {
  class Card {
    constructor(face, suit) {
      this.face = face;
      this.suit = suit;
    }
    get face() {
      return this._face;
    }
    get suit() {
      return this._suit;
    }
    set face(newFace) {
      if (validFaces.includes(newFace)) {
        this._face = newFace;
      } else {
        throw TypeError("Error");
      }
    }
    set suit(newSuit) {
      if (
        newSuit === "\u2660" ||
        newSuit === "\u2764" ||
        newSuit === "\u2666" ||
        newSuit === "\u2663"
      ) {
        this._suit = newSuit;
      } else {
        throw TypeError("Error");
      }
    }
  }
  let Suits = {
    SPADES: "\u2660",
    HEARTS: "\u2764",
    DIAMONDS: "\u2666",
    CLUBS: "\u2663",
  };
  let validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  return {
    Suits: Suits,
    Card: Card,
  };
})();
let Card = result.Card;
let Suits = result.Suits;
let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
let card2 = new Card("1", Suits.DIAMONDS);
