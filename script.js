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

//apply the cards to its position
function changeCard(element) {
    let cardIndex = element.className
    cardIndex = Number(cardIndex.replaceAll('card', ''));
    element.classList.add(`parrot${cardsOrder[(cardIndex-1)]}`);
    element.innerHTML = '';
    setTimeout(function() {
        element.classList.remove(`parrot${cardsOrder[(cardIndex-1)]}`);
        element.innerHTML = '<img src="./source/front.png" alt="green parrot">';
    }, 3000);
};
