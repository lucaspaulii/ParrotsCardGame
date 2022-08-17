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


//support function to sort array in a random way
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// Sort the cards in a random way  
function sortCards() {
    let cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    while (cards.length > cardNum) {
        cards.pop()
    }
    shuffle(cards);
    return cards;
};
cardsOrder = sortCards();

const parrots = ['<img src="./source/bobrossparrot.gif" alt="bobross parrot" />', '<img src="./source/explodyparrot.gif" alt="exploydy parrot" />', '<img src="./source/fiestaparrot.gif" alt="filesta parrot" />', '<img src="./source/metalparrot.gif" alt="metal parrot" />', '<img src="./source/revertitparrot.gif" alt="revertit parrot" />', '<img src="./source/tripletsparrot.gif" alt="triplets parrot" />', '<img src="./source/unicornparrot.gif" alt="unicorn parrot" />']

function changeCard(element) {
    let cardIndex = element.className
    cardIndex = Number(cardIndex.replaceAll('card', ''));
    let currentCard = cardsOrder[cardIndex-1];
    element.innerHTML = parrots[currentCard-1];
    element.classList.add('selected')
}
