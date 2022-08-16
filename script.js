// checks if Card number can be used and reassign the cardNum variable
function cardNumChecked() {
    let cardNum = prompt('Com quantas cartas você quer jogar?');
    while (((cardNum%2) !== 0) || (cardNum > 14) || (cardNum < 2 || cardNum === null)) {
        cardNum = prompt('O número deve ser par e estar entre 2 e 14!');
    };
    return cardNum;
}

