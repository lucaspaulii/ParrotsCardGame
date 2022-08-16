// checks if Card number can be used and reassign the cardNum variable
function cardNumChecked() {
    let insertNum = prompt('Com quantas cartas você quer jogar?');
    while (((insertNum%2) !== 0) || (insertNum > 14) || (insertNum < 2 || insertNum === null)) {
        insertNum = prompt('O número deve ser par e estar entre 2 e 14!');
    };
    return insertNum;
}
const cardNum = cardNumChecked();

// shows the user the number of cards he asked for
function showCards() {
    for (let i=1; i<=cardNum ; i++) {
        let card = document.querySelector(`.card${i}`);
        card.classList.remove('hidden')
    }
}
showCards()

/* test of changing card
function changeCard(element) {
    element.classList.add('parrot1');
    element.innerHTML = '';
}*/

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function sortCards() {
    let cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    while (cards.length > cardNum) {
        cards.pop()
    }
    shuffle(cards);
    return cards;
}
cardsOrder = sortCards()


