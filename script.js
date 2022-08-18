// checks if Card number can be used and reassign the cardNum variable
function cardNumChecked() {
    let insertNum = prompt('Com quantas cartas você quer jogar?');
    while (((insertNum%2) !== 0) || (insertNum > 14) || (insertNum < 4 || insertNum === null)) {
        insertNum = prompt('O número deve ser par e estar entre 4 e 14!');
    };
    return insertNum;
}
const cardNum = Number(cardNumChecked());

// shows the user the number of cards he asked for
function showCards() {
    for (let i=0; i<cardNum ; i++) {
        let card = document.getElementById(i);
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
let winningCount = 0;
let playsCount = 0;

function changeCard(element) {
    // allows user to click on 2 elements each time
    const clickedCounter = document.querySelectorAll('.clicked');
    if ((clickedCounter.length - winningCount) < 2) {
        // add respective parrow img
        const cardIndex = Number(element.getAttribute('id'));
        const currentParrow = cardsOrder[cardIndex];
        element.querySelector('.flip-card-back').innerHTML = parrots[(currentParrow-1)];
        // add clicked to flip the card
        element.classList.add('clicked'); 
        // add an suport class to check the clicked ones without messing with the matched cards!
        element.classList.add('suportClass')  
        // add plays count
        playsCount = playsCount + 1; 
    }
    checkClicked()
}
function checkClicked() {
    const clickedCounter = document.querySelectorAll('.suportClass');
    if (clickedCounter.length === (2)) {
        //problema está no seletor, que seleciona sempre os dois ultimos da array clickedCounter, precisando selecionar os dois diferentes
        const element1img = clickedCounter[0].querySelector('.flip-card-back img').getAttribute("src");
        const element2img = clickedCounter[1].querySelector('.flip-card-back img').getAttribute("src");
        clickedCounter[0].classList.remove('suportClass');
        clickedCounter[1].classList.remove('suportClass');
        if (element1img === element2img) {
            winningCount = winningCount + 2;
            clickedCounter[0].classList.add('matched');
            clickedCounter[1].classList.add('matched');
            setTimeout( function() {youWon()}, 600);
        } else if (element1img !== element2img) {
            setTimeout( function() {
            clickedCounter[0].classList.remove('clicked');
            clickedCounter[1].classList.remove('clicked');
            }, 1000
            );
        };
    };
};

function youWon() {
    if (winningCount === cardNum) {
        alert(`You won in ${playsCount} plays!`);
        let playAgain = confirm("Let's play again!\r\n Click OK to confirm or Cancel to close the page");
        if (playAgain) {
            document.location.reload(true);
        } else {
            close();
        }
    };
};


