// checks if Card number can be used and reassign the cardNum variable
function cardNumChecked() {
    let insertNum = prompt('Com quantas cartas você quer jogar?');
    while (((insertNum%2) !== 0) || (insertNum > 14) || (insertNum < 2 || insertNum === null)) {
        insertNum = prompt('O número deve ser par e estar entre 2 e 14!');
    };
    return insertNum;
}
const cardNum = cardNumChecked();
console.log(cardNum)

